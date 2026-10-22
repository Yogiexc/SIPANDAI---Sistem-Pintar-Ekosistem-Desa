# 🌿 SIPANDAI — Sistem Pintar Ekosistem Desa (AI Digital Twin)

<div align="center">

![SIPANDAI Cover](https://images.unsplash.com/photo-1518173946687-a4c8a9ba332f?q=80&w=1200&auto=format&fit=crop)

### *AI-Powered Digital Twin Platform & Policy Simulator for Indonesian Smart Villages*

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-Spasial_Map-199900?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

**[🚀 Live Demo](https://sipandai-desa-twin.vercel.app)** • **[💻 Repository GitHub](https://github.com/Yogiexc/SIPANDAI---Sistem-Pintar-Ekosistem-Desa)**

</div>

---

## 📌 Latar Belakang & Masalah

Di Indonesia, lebih dari **75.000 desa** menerima alokasi Dana Desa (APBDes) setiap tahunnya. Namun, tantangan terbesar perangkat desa adalah:

1. **Trial & Error Kebijakan:** Kebijakan pengelolaan sampah dan pembangunan fisik kerap dieksekusi tanpa proyeksi dampak jangka panjang, berakibat pada fasilitas mangkrak (TPS-3R tidak termanfaatkan).
2. **Ketiadaan Replika Data Real-Time:** Ketiadaan representasi spasial digital (*Digital Twin*) menyulitkan visualisasi korelasi timbulan sampah terhadap kualitas sanitasi lingkungan dan perputaran ekonomi lokal.
3. **Keterbatasan Analisis Preskriptif:** Data laporan musrenbang masih manual dan statis, belum didukung kecerdasan buatan (*AI*) untuk memberikan saran perbaikan terukur.

---

## 💡 Solusi: SIPANDAI

**SIPANDAI (Sistem Pintar Ekosistem Desa)** adalah platform **Kembar Digital (*Digital Twin*) & Mesin Simulasi Kebijakan Desa Berbasis AI**. Platform ini memungkinkan kepala desa, Badan Permusyawaratan Desa (BPD), dan perencana wilayah untuk:

- 🗺️ **Memvisualisasikan Kondisi Wilayah:** Peta interaktif spasial (Leaflet & Carto Dark) memetakan titik TPS, bank sampah, pemukiman, dan zona risiko sampah secara dinamis.
- 🎛️ **Simulasi Kebijakan Time-Series (1 - 6 Bulan):** Menguji skenario kombinasi *Bank Sampah*, *Program Edukasi Warga*, dan *Infrastruktur TPS-3R* sebelum APBDes disahkan.
- 🤖 **AI Prescriptive Policy Advisor:** Mesin inferensi AI (OpenAI GPT-4o-mini terintegrasi dengan fallback local mathematical engine) menghasilkan evaluasi tajam dan rekomendasi solutif dalam Bahasa Indonesia formal.
- ⚖️ **Komparasi Skenario (Status Quo vs AI Optimized):** Membandingkan proyeksi kondisi desa jika tanpa intervensi vs jika intervensi dilakukan.

---

## 🏗️ Arsitektur Sistem

```
┌────────────────────────────────────────────────────────┐
│               SIPANDAI Web Interface                   │
│   (Next.js 16 App Router + React 19 + Framer Motion)   │
└───────────────────────┬────────────────────────────────┘
                        │
       ┌────────────────┴────────────────┐
       ▼                                 ▼
┌────────────────────────┐      ┌────────────────────────┐
│  Spatial Twin Engine   │      │ Dynamic Policy Engine  │
│  (Leaflet + Carto GIS) │      │ (Recharts Area & Bar)  │
└────────────────────────┘      └───────────┬────────────┘
                                            │
                        ┌───────────────────┴───────────────────┐
                        ▼                                       ▼
             ┌─────────────────────┐                 ┌─────────────────────┐
             │ OpenAI Engine Core  │                 │ Local Math Engine   │
             │ (GPT-4o-mini Cloud) │ (Fallback Mode) │ (Zero-latency Rule) │
             └─────────────────────┘                 └─────────────────────┘
```

---

## ✨ Fitur Unggulan

| Fitur | Deskripsi |
|---|---|
| **Multi-Scenario Village Sandbox** | Pilihan skenario desa: *Desa Sukamaju* (High-waste), *Desa Hijau* (Eco-village), dan *Desa Karangharja* (Growing economy). |
| **Interactive Map Twin Visualizer** | Radius lingkaran polusi sampah dan zona ekonomi membesar/mengecil otomatis sesuai hasil simulasi real-time. |
| **Instant Impact Metrics** | Indikator live CountUp: *Volume Timbulan Sampah (Ton)*, *Indeks Sirkular Ekonomi (/100)*, dan *Skor Mutu Lingkungan (/100)*. |
| **Bilingual Fallback Intelligence** | Berjalan sempurna baik saat ada API Key OpenAI maupun mode offline (Local Rule-based Engine) tanpa pernah crash. |
| **Responsive Dark Neon Aesthetics** | Desain futuristik glassmorphism dengan Tailwind CSS v4, kontras tajam, dan mikro-animasi Framer Motion. |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.2.4 (App Router, Turbopack)
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS v4, Lucide Icons, Glassmorphism
- **Animations:** Framer Motion 12
- **Data Visualizations:** Recharts 3.8, React CountUp
- **Map & GIS:** Leaflet 1.9, React-Leaflet 5, Carto Dark Basemap
- **Database & ORM:** MySQL & Prisma ORM 6.19
- **AI Integration:** OpenAI API (`gpt-4o-mini`) + In-house Rule Engine Fallback
- **Deployment Platform:** Vercel

---

## 🚀 Panduan Instalasi Lokal

### 1. Clone Repositori
```bash
git clone https://github.com/Yogiexc/SIPANDAI---Sistem-Pintar-Ekosistem-Desa.git
cd SIPANDAI---Sistem-Pintar-Ekosistem-Desa
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Konfigurasi Lingkungan (`.env`)
Buat file `.env` di root project:
```env
# Database Prisma (Opsional, sudah ada graceful fallback internal)
DATABASE_URL="mysql://root:@localhost:3306/ai_twin_desa"

# OpenAI API Key (Opsional, jika kosong sistem otomatis beralih ke Fallback Rule Engine)
OPENAI_API_KEY=""
```

### 4. Jalankan Server Dev
```bash
npm run dev
```
Buka browser pada [http://localhost:3000](http://localhost:3000).

### 5. Build Produksi
```bash
npm run build
npm run start
```

---

## 👨‍💻 Pengembang

**Bryan Yogie Saputra**
- **GitHub:** [@Yogiexc](https://github.com/Yogiexc)
- **Email:** [yogiexsaputra@gmail.com](mailto:yogiexsaputra@gmail.com)

---

<div align="center">
  <p>Didedikasikan untuk akselerasi ekosistem desa cerdas berkelanjutan di Indonesia.</p>
</div>
