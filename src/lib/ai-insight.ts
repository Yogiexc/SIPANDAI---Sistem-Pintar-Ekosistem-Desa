import { SimulationConfig, TimeProjection } from "./simulation";

export function generateInsight(config: SimulationConfig, projections: TimeProjection[]): string {
  if (projections.length === 0) return "Data tidak tersedia.";

  const finalState = projections[projections.length - 1];
  const initialState = projections[0];

  const wasteDiff = initialState.waste - finalState.waste;
  const ecoDiff = finalState.economy - initialState.economy;
  const envDiff = finalState.environment - initialState.environment;

  // No active simulation
  if (!config.wasteBank && !config.education && !config.infrastructure) {
    return "Menunggu input simulasi. Pilih skenario di atas untuk menghasilkan rekomendasi AI berdasarkan proyeksi hasil.";
  }

  // All active
  if (config.wasteBank && config.education && config.infrastructure) {
    return "Strategi pembangunan komprehensif terdeteksi: Strategi ini memaksimalkan pertumbuhan ekonomi (+" + ecoDiff + " poin) sambil menyeimbangkan dampak lingkungan. Pertimbangkan untuk membangun infrastruktur secara bertahap.";
  }

  // Waste + Education (Sustainability focus)
  if (config.wasteBank && config.education) {
    return "Fokus keberlanjutan yang kuat: Penerapan bank sampah yang dibarengi edukasi masyarakat memproyeksikan penurunan sampah sebesar " + Math.round(wasteDiff) + " ton dalam 6 bulan.";
  }

  // Danger: Infrastructure without eco policies
  if (config.infrastructure && !config.wasteBank && !config.education) {
    return "Peringatan: Pembangunan infrastruktur tanpa kebijakan ekologi dapat menurunkan skor lingkungan sebesar " + Math.abs(Math.round(envDiff)) + " poin. Sebaiknya pasangkan dengan program Bank Sampah.";
  }

  // Waste Bank only
  if (config.wasteBank) {
    return "Bank sampah memberikan dasar yang baik untuk ekonomi sirkular, memproyeksikan pengurangan sampah sebesar " + Math.round(wasteDiff) + " ton dan dorongan ekonomi sebesar " + ecoDiff + " poin.";
  }

  // Education only
  if (config.education) {
    return "Program edukasi menawarkan perubahan perilaku jangka panjang. Harapkan penurunan sampah yang stabil sebesar " + Math.round(wasteDiff) + " ton selama 6 bulan ke depan.";
  }

  return "Menganalisis simulasi kebijakan saat ini... Data menunjukkan pertumbuhan yang seimbang, meskipun optimalisasi pengelolaan sampah masih memungkinkan.";
}
