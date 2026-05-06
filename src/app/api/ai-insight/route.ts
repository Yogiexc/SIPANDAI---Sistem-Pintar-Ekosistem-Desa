import { NextResponse } from 'next/server';
import { generateInsight as generateLocalInsight } from '@/lib/ai-insight';
import OpenAI from 'openai';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { config, projections, duration } = body;

    if (!config || !projections) {
      return NextResponse.json({ error: "Missing config or projections" }, { status: 400 });
    }

    const hasApiKey = !!process.env.OPENAI_API_KEY;

    if (hasApiKey) {
      try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        
        const initialState = projections[0];
        const finalState = projections[projections.length - 1];
        
        const activeToggles = [];
        if (config.wasteBank) activeToggles.push("Bank Sampah");
        if (config.education) activeToggles.push("Program Edukasi");
        if (config.infrastructure) activeToggles.push("Infrastruktur");
        
        const prompt = "Anda adalah ahli kebijakan desa dan lingkungan di Indonesia. " +
          "Analisis data simulasi desa berikut dan berikan rekomendasi yang jelas dan berdampak dalam Bahasa Indonesia.\n\n" +
          "Data:\n" +
          "- Durasi: " + (duration || 6) + " bulan\n" +
          "- Program Aktif: " + (activeToggles.length > 0 ? activeToggles.join(", ") : "Tidak ada") + "\n" +
          "- Volume Sampah: " + Math.round(initialState.waste) + " -> " + Math.round(finalState.waste) + " ton\n" +
          "- Indeks Ekonomi: " + Math.round(initialState.economy) + " -> " + Math.round(finalState.economy) + "\n" +
          "- Skor Lingkungan: " + Math.round(initialState.environment) + " -> " + Math.round(finalState.environment) + "\n\n" +
          "Instruksi:\n" +
          "1. Gunakan Bahasa Indonesia yang profesional.\n" +
          "2. Maksimal 2 kalimat singkat.\n" +
          "3. Fokus pada dampak kebijakan paling kritis.";

        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "Anda adalah asisten AI ahli pembangunan desa cerdas di Indonesia. Berikan rekomendasi singkat dan solutif." },
            { role: "user", content: prompt }
          ],
          temperature: 0.5,
          max_tokens: 150,
        });

        const aiText = response.choices[0]?.message?.content || "Analysis complete, but no specific recommendations generated.";
        return NextResponse.json({ text: aiText, source: 'openai' });
      } catch (aiError) {
        console.error("OpenAI generation failed, falling back to local rules", aiError);
      }
    }

    // Fallback: Generate insight based on rule-based engine
    const text = generateLocalInsight(config, projections);

    // Simulate AI thinking delay for realistic UX if falling back locally
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ text, source: 'local-rules' });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
