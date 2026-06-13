import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'

export function PrivacyPolicyPage({
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
            <h1 className="font-display text-4xl text-navy">Kebijakan Privasi</h1>
            <p className="mt-2 text-sm text-slate">Terakhir diperbarui: Juni 2026</p>
          </header>
          
          <div className="mt-8 space-y-6 text-sm leading-8 text-slate">
            <p>
              Immersia Impact Lab menghormati privasi peserta dan calon peserta program kami.
            </p>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Data yang Kami Kumpulkan</h2>
              <p>
                Kami mengumpulkan data yang kamu berikan secara langsung melalui formulir pendaftaran, yaitu: nama lengkap, alamat email, dan nomor telepon.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Penggunaan Data</h2>
              <p>Data digunakan untuk:</p>
              <ul className="list-inside list-disc pl-4 space-y-1">
                <li>Konfirmasi pendaftaran program</li>
                <li>Pengiriman informasi jadwal dan materi</li>
                <li>Komunikasi terkait program yang kamu ikuti</li>
              </ul>
              <p className="mt-2">
                Kami tidak menjual atau membagikan data pribadi kamu kepada pihak ketiga untuk tujuan komersial.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Penyimpanan Data</h2>
              <p>
                Data disimpan secara aman dan hanya dapat diakses oleh tim Immersia.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Hak Kamu</h2>
              <p>
                Kamu berhak meminta penghapusan data pribadi kamu dengan menghubungi kami di{' '}
                <a href="mailto:info@immersia.id" className="font-semibold text-navy hover:underline">
                  info@immersia.id
                </a>
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-navy">Kontak</h2>
              <p>Untuk pertanyaan terkait kebijakan privasi:</p>
              <p className="font-mono mt-1">
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
