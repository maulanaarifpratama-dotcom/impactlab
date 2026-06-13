import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'

export function TermsPage({
  onRegister,
  onNavigate,
}: {
  onRegister: () => void;
  onNavigate: (path: string) => void;
}) {
  return (
    <div className="min-h-screen bg-ivory text-navy">
      <Navbar onRegister={onRegister} isSubpage={true} onNavigate={onNavigate} />
      
      <main className="container-page py-32">
        <article className="mx-auto max-w-3xl rounded-3xl border border-stone bg-white p-8 shadow-sm md:p-12">
          <header className="border-b border-stone pb-6">
            <h1 className="font-display text-4xl text-navy">Syarat & Ketentuan</h1>
            <p className="mt-2 text-sm text-slate">Terakhir diperbarui: Juni 2026</p>
          </header>
          
          <div className="mt-8 space-y-6 text-sm leading-8 text-slate">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Pendaftaran</h2>
              <p>
                Pendaftaran dianggap final setelah konfirmasi pembayaran diterima oleh tim Immersia. Kuota setiap batch terbatas.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-navy">Pembayaran</h2>
              <p>Transfer ke rekening berikut:</p>
              <div className="rounded-2xl border border-stone bg-ivory p-5 font-mono text-sm space-y-1 text-navy">
                <p><span className="text-slate uppercase text-xs tracking-wider font-semibold block">Bank</span> Bank BNI</p>
                <p><span className="text-slate uppercase text-xs tracking-wider font-semibold block">Nomor Rekening</span> 2704220025</p>
                <p><span className="text-slate uppercase text-xs tracking-wider font-semibold block">Atas Nama</span> PT. Meta Kreasi Indonusa</p>
              </div>
              <p className="mt-2">
                Konfirmasi pembayaran dikirim via WhatsApp ke{' '}
                <a href="https://wa.me/6281646035257" className="font-semibold text-navy hover:underline">
                  +62 816 4603 5257
                </a>{' '}
                dengan menyertakan bukti transfer dan nama pendaftar.
              </p>
              <p>
                Harga Early Bird berlaku terbatas untuk batch perdana dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Kebijakan Reschedule & Refund</h2>
              <ul className="list-inside list-disc pl-4 space-y-1">
                <li>Reschedule dapat dilakukan maksimal H-3 sebelum hari training, subject to ketersediaan kuota batch berikutnya.</li>
                <li>Refund tidak tersedia setelah pembayaran dikonfirmasi.</li>
                <li>Dalam kondisi force majeure dari pihak Immersia, peserta akan ditawarkan reschedule ke batch berikutnya.</li>
              </ul>
            </section>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Materi & Hak Cipta</h2>
              <p>
                Seluruh materi training adalah hak cipta Immersia Impact Lab dan tidak boleh didistribusikan tanpa izin tertulis.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Kontak</h2>
              <p className="font-mono">
                <a href="mailto:info@immersia.id" className="hover:underline">info@immersia.id</a>
                <br />
                <a href="tel:+6281646035257" className="hover:underline">+62 816 4603 5257</a>
              </p>
            </section>
          </div>
        </article>
      </main>
      
      <Footer onOpenPrivacy={() => onNavigate('/privacy-policy')} onOpenTerms={() => onNavigate('/syarat-ketentuan')} onNavigate={onNavigate} />
    </div>
  )
}
