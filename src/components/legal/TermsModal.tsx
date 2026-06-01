import { Modal } from '../ui/Modal'

export function TermsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="terms-title" className="p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <h2 id="terms-title" className="font-display text-3xl text-navy">Syarat & Ketentuan — Immersia Impact Lab</h2>
        <button onClick={onClose} className="min-h-11 min-w-11 rounded-full text-2xl" aria-label="Tutup syarat ketentuan">×</button>
      </div>
      <div className="mt-6 space-y-4 text-sm leading-7 text-slate">
        <p><strong>1. Pendaftaran & Pembayaran.</strong> [Isi: metode pembayaran, batas waktu, konfirmasi]</p>
        <p><strong>2. Kebijakan Pembatalan & Refund.</strong> [Isi: ketentuan refund, pembatalan oleh peserta/penyelenggara]</p>
        <p><strong>3. Perubahan Jadwal.</strong> Penyelenggara berhak mengubah jadwal/batch dengan pemberitahuan sebelumnya.</p>
        <p><strong>4. Kuota & Konfirmasi.</strong> Tempat dikonfirmasi setelah pembayaran. Kuota terbatas per batch.</p>
        <p><strong>5. Hak Cipta Materi.</strong> Materi training untuk penggunaan peserta; tidak untuk redistribusi komersial.</p>
        <p className="rounded-xl bg-ivory p-4 text-xs">DEV NOTE: Wajib diisi dan direview Immersia sebelum live.</p>
      </div>
    </Modal>
  )
}
