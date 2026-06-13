// ⚠️ TONE: Tidak overclaim. Angka diberi konteks via `note` field.
export const stats = [
  { value: '17+', label: 'Engagement Advisory', note: 'Proyek advisory sejak 2018' },
  { value: '33.000+', label: 'Beneficiaries Terjangkau', note: 'Akumulasi lintas program mitra' },
  { value: '250+', label: 'Capacity Building Programs', note: 'Sesi pelatihan & pendampingan' },
  { value: '12', label: 'Provinsi di Indonesia', note: 'Jangkauan kerja lapangan' },
]

export const heroStats = [
  { value: '17+', label: 'Engagement Advisory' },
  { value: '33.000+', label: 'Beneficiaries' },
  { value: '250+', label: 'Capacity Building Programs' },
  { value: '2 Hari', label: 'Offline, Langsung Applicable' },
]

export const partnerLogos = Array.from({ length: 29 }, (_, index) => {
  const number = index + 1
  const padded = String(number).padStart(2, '0')
  return {
    name: `Mitra Immersia ${padded}`,
    src: `/partners/immersia-partner-${padded}.png`,
  }
})

export const painPoints = [
  { icon: '🔄', text: 'Sudah ikut training, tapi sistemnya tidak jalan setelah program selesai?' },
  { icon: '📋', text: 'Dapat template MEAL atau PM, tapi tidak relevan dengan kondisi unik lembagamu?' },
  { icon: '⚙️', text: 'Tools diajarkan secara teoritis tanpa panduan bagaimana mengintegrasikannya ke kerja nyata?' },
  { icon: '🤝', text: 'Training berakhir tanpa komunitas yang bisa diajak diskusi setelahnya?' },
]

export const differentiators = [
  { title: 'Proof of Practice', desc: 'Program lahir dari ratusan hari kerja advisory nyata di lapangan' },
  { title: 'Embedded Capacity', desc: 'Bukan sekadar training, tapi penguatan sistem yang bisa langsung dijalankan' },
  { title: 'Ekosistem Berkelanjutan', desc: 'Peserta masuk ke komunitas praktisi yang terus aktif pasca program' },
]

export const programs = [
  {
    id: 'meal', title: 'MEAL for Impact', subtitle: 'Bangun Sistem Monev yang Kontekstual dan Actionable', color: 'navy' as const, bgClass: 'bg-navy',
    painPoint: 'Banyak sistem MEAL di lembaga tidak bertahan setelah satu siklus program karena dibangun dari template generik',
    modules: ['Monitoring, Evaluasi, Akuntabilitas dan Pembelajaran (MEAL)', 'Single System Design, pendekatan adaptif per lembaga', 'Merancang indikator yang kontekstual dan terukur', 'Tools pengumpulan data dan analisis dampak', 'Integrasi kerangka SDGs dalam sistem MEAL', 'Learning loop, dari data ke keputusan program'],
    facilitator: 'Dasril Guntara', badge: null,
  },
  {
    id: 'pm', title: 'Project Management for Impact', subtitle: 'Kelola Program Sosial dengan Sistem yang Terintegrasi dan Akuntabel', color: 'muted' as const, bgClass: 'bg-muted',
    painPoint: 'Tools ada — LFA, Gantt, RACI — tapi tidak terintegrasi menjadi satu sistem kerja yang berjalan',
    modules: ['Logical Framework Analysis (LFA), dari tujuan ke indikator', 'Work Breakdown Structure (WBS), struktur kerja yang jelas', 'RACI Matrix, siapa bertanggung jawab apa', 'Gantt Chart, perencanaan timeline yang realistis', 'Manajemen Risiko Program', 'Pelaporan program yang akuntabel untuk donor'],
    facilitator: 'Dasril Guntara', badge: null,
  },
  {
    id: 'ai', title: 'AI for Impact', subtitle: 'Manfaatkan AI untuk Fundraising dan Program NGO yang Lebih Efisien dan Berdampak', color: 'charcoal' as const, bgClass: 'bg-charcoal',
    painPoint: 'Banyak NGO belum tahu potensi AI untuk mengakselerasi kerja mereka, dari fundraising hingga perencanaan program',
    modules: ['Pengenalan AI untuk organisasi sosial dan NGO', 'Akses benefit NGO: TechSoup dan aktivasi aset digital', 'Grant Writing System dengan Impactory', 'Campaign Builder: strategi kampanye berbasis AI', 'AI untuk perencanaan dan monitoring program', 'Efisiensi kerja harian dengan AI tools'],
    facilitator: 'Maulana Arif Pratama', badge: 'Eksklusif: Akses Platform Impactory',
  },
]

export const schedule = [
  { program: 'MEAL for Impact', id: 'meal', batches: ['20-21 Juni', '24-25 Juni', '27-28 Juni'] },
  { program: 'Project Management for Impact', id: 'pm', batches: ['4-5 Juli', '7-8 Juli', '11-12 Juli'] },
  { program: 'AI for Impact', id: 'ai', batches: ['18-19 Juli', '21-22 Juli', '25-26 Juli'] },
]

export const pricing = [
  { id: '1prog', label: '1 Program', normal: 'Rp 1.500.000', earlyBird: 'Rp 1.000.000', saving: 'Hemat Rp 500.000' },
  { id: '2prog', label: 'Bundling 2 Program', normal: 'Rp 3.000.000', earlyBird: 'Rp 1.850.000', saving: 'Hemat Rp 1.150.000', recommended: true },
  { id: '3prog', label: 'Bundling 3 Program', normal: 'Rp 4.500.000', earlyBird: 'Rp 2.700.000', saving: 'Hemat Rp 1.800.000' },
]

export const universalBenefits = ['Materi dan template siap pakai', 'E-certificate kelulusan', 'Personalized Mentoring 2x online pasca training', 'Coaching Clinic — Real Case Consultation', 'Akses Community of Practice (CoP)']

export const programBenefits = {
  meal: ['Sistem MEAL yang sudah dikontekstualisasikan untuk lembagamu', 'Akses MEAL Community Learning'],
  pm: ['Set dokumen PM lengkap: LFA, WBS, RACI, Gantt Chart, Risk Register', 'Akses CoP PM for Impact'],
  ai: ['Akses eksklusif platform Impactory', 'Grant Writing System, Campaign Builder, E-book', 'Akses CoP AI for Impact'],
}

export const portfolio = [
  { theme: 'Impact Assessment', clients: ['YBM BRILiaN (2022, 2023, 2025)', 'Schneider Electric (2023)', 'BRI (2023)', 'LAZ Zakat Sukses (2026)'], methods: 'SROI, MSC, SLIA, CSI' },
  { theme: 'MEAL dan Monitoring', clients: ['Save the Children (2024, 2025)', 'Edu Farmers International (2025)', 'Human Initiative (2025)', 'BAZNAS RI (2026)'], methods: 'MEAL Framework, INSOS, IKM' },
  { theme: 'Capacity Building', clients: ['SEAHUM (2026) ★ Flagship', 'Dispora Kab. Bogor (2025)'], methods: 'In-House Training, Risk Management' },
  { theme: 'Program Design dan Reporting', clients: ['BAZNAS RI (2026)', 'Masjid Al-Kautsar (2025)'], methods: 'OECD-DAC, Program Design' },
]
// ⚠️ Nama klien di portfolio: pastikan ada izin untuk disebut publik. Jika ragu, gunakan deskripsi generik atau minta izin.

export const facilitators = [
  { initials: 'DG', name: 'Dasril Guntara', image: '/facilitators/dasril-guntara.png', programs: ['MEAL for Impact', 'Project Management for Impact'], bgClass: 'bg-navy', credentials: ['Sustainable Innovation Strategist, CEO Immers Asia Corp', '15+ tahun sebagai NGO practitioner', 'M&E Specialist, World Bank (NR4D Program)', 'CEO, NICE Indonesia (2018–2025)', 'Pengembang metode LEAP untuk evaluasi program', 'Klien: BAZNAS, UNICEF, Mercy Corps, World Vision, USAID'] },
  { initials: 'MA', name: 'Maulana Arif Pratama', image: '/facilitators/maulana-arif-pratama.png', programs: ['AI for Impact'], bgClass: 'bg-muted', credentials: ['Digital Business Leader, AI Agent dan Martech Builder', '8+ tahun di digital marketing dan social impact technology', 'Founder Impactory.id, AI SaaS untuk NGO', 'Managed IDR 20M+ digital advertising spend', 'Founder Bisa Baik / Yayasan RPB', 'Expert: AI workflows, grant writing, campaign builder'] },
]

export const testimonials = [
  { quote: '[Isi testimoni alumni — pengalaman konkret, hasil yang dirasakan]', name: '[Nama]', role: '[Jabatan, Lembaga]', initials: '—' },
  { quote: '[Isi testimoni alumni]', name: '[Nama]', role: '[Jabatan, Lembaga]', initials: '—' },
  { quote: '[Isi testimoni alumni]', name: '[Nama]', role: '[Jabatan, Lembaga]', initials: '—' },
]

export const faqs = [
  { q: 'Apakah program ini cocok untuk saya yang baru di sektor sosial?', a: 'Ya, program dirancang untuk dua segmen: fresh graduate dan entry level yang ingin membangun karir di social development, serta praktisi yang ingin upgrade metodologi dan sistem kerjanya.' },
  { q: 'Apa bedanya public training ini dengan training MEAL atau PM yang sudah banyak ada?', a: 'Program ini dibangun dari pengalaman lapangan nyata Immersia, bukan kurikulum generik. Setiap peserta pulang dengan sistem yang sudah dikontekstualisasikan untuk lembaga mereka, bukan template yang sama untuk semua orang.' },
  { q: 'Apakah saya bisa ambil lebih dari satu program?', a: 'Bisa. Tersedia paket bundling 2 atau 3 program dengan harga Early Bird yang lebih hemat. Programnya bisa diambil di jadwal yang berbeda.' },
  { q: 'Apa yang saya dapatkan setelah training selesai?', a: 'Selain materi dan e-certificate, peserta mendapat personalized mentoring 2x online, akses Coaching Clinic untuk real case consultation, dan akses Community of Practice yang terus aktif.' },
  { q: 'Apakah tersedia program untuk lembaga yang ingin melatih tim secara khusus?', a: 'Ya, tersedia Tailored In-House Program yang dirancang sesuai kebutuhan spesifik lembaga. Hubungi kami di +62 816 4603 5257 untuk diskusi lebih lanjut.' },
  { q: 'Berapa kuota per batch?', a: 'Kuota setiap batch terbatas untuk menjaga kualitas learning experience. Daftarkan dirimu lebih awal untuk memastikan tempat.' },
  { q: 'Bagaimana metode pembayaran dan kebijakan refund?', a: '[Isi: metode pembayaran (transfer bank/payment gateway), kebijakan refund, dan ketentuan pembatalan. WAJIB diisi sebelum live untuk transparansi.]' },
  { q: 'Bagaimana data pribadi saya digunakan?', a: 'Data yang kamu berikan saat pendaftaran hanya digunakan untuk keperluan program dan komunikasi terkait Immersia Impact Lab, sesuai Kebijakan Privasi kami dan UU Perlindungan Data Pribadi.' },
]

export const contact = {
  whatsapp: '+62 816 4603 5257',
  email: 'info@immersia.id',
  website: 'immersia.id',
  waLink: 'https://wa.me/628164603257',
}
