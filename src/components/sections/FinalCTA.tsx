import { contact } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { LeadCaptureForm } from '../forms/LeadCaptureForm'

export function FinalCTA({ onRegister, onOpenPrivacy }: { onRegister: () => void; onOpenPrivacy: () => void }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white" aria-labelledby="final-cta-title">
      {/* Decorative stacked cards SVG */}
      <svg className="pointer-events-none absolute top-6 right-6 h-[150px] w-[200px] opacity-80" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="40" y="10" width="140" height="100" rx="16" fill="rgba(212,175,55,0.05)" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
        <rect x="20" y="25" width="140" height="100" rx="16" fill="rgba(212,175,55,0.07)" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
        <rect x="0" y="40" width="140" height="100" rx="16" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
      </svg>
      {/* Radial gradient glow overlay */}
      <div className="bg-radial-glow-right pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page">
        <div className="grid gap-8 border-l-8 border-gold pl-6 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <h2 id="final-cta-title" className="font-display text-4xl">Daftarkan Dirimu Sekarang</h2>
            <p className="mt-4 max-w-2xl text-stone">Pilih program yang paling relevan dengan kebutuhanmu, atau diskusikan kebutuhan in-house training untuk tim lembagamu.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onRegister} className="min-h-12 rounded-full border-2 border-gold px-7 font-semibold hover:bg-gold hover:text-navy">Daftar Sekarang</button>
              <a href={contact.waLink} onClick={() => trackEvent('b2b_inquiry_click')} className="inline-flex min-h-12 items-center rounded-full bg-muted px-7 font-semibold text-white">B2B/In-house Training</a>
            </div>
          </div>
          <LeadCaptureForm onOpenPrivacy={onOpenPrivacy} />
        </div>
      </div>
    </section>
  )
}
