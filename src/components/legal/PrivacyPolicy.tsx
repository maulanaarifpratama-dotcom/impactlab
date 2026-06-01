import { Modal } from '../ui/Modal'

export function PrivacyPolicy({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="privacy-title" className="p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <h2 id="privacy-title" className="font-display text-3xl text-navy">Kebijakan Privasi — Immersia Impact Lab</h2>
        <button onClick={onClose} className="min-h-11 min-w-11 rounded-full text-2xl" aria-label="Tutup kebijakan privasi">×</button>
      </div>
      <div className="mt-6 space-y-4 text-sm leading-7 text-slate">
        <p><strong>1. Data yang Kami Kumpulkan.</strong> Nama, email, nomor WhatsApp, nama lembaga, peran/jabatan, dan preferensi program.</p>
        <p><strong>2. Tujuan Penggunaan.</strong> Memproses pendaftaran, mengirim informasi program & jadwal, komunikasi terkait training, dan peningkatan layanan. Data tidak dijual ke pihak ketiga.</p>
        <p><strong>3. Dasar Pemrosesan.</strong> Pemrosesan dilakukan atas dasar persetujuan yang kamu berikan, sesuai UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.</p>
        <p><strong>4. Penyimpanan & Keamanan.</strong> Data disimpan secara aman dan hanya diakses oleh tim yang berwenang selama diperlukan untuk tujuan program atau ketentuan hukum.</p>
        <p><strong>5. Hak Kamu.</strong> Kamu berhak mengakses, memperbaiki, menghapus, menarik persetujuan, dan mengajukan keberatan. Hubungi info@immersia.id.</p>
        <p><strong>6. Cookie.</strong> Kami menggunakan cookie untuk analitik dan peningkatan pengalaman. Lihat banner cookie untuk mengatur preferensimu.</p>
        <p><strong>7. Kontak.</strong> info@immersia.id | +62 816 4603 5257</p>
        <p className="rounded-xl bg-ivory p-4 text-xs">DEV NOTE: Draft kerangka. Wajib direview oleh Immersia / penasihat hukum sebelum live.</p>
      </div>
    </Modal>
  )
}
