import { contact } from '../../data/content'
import { trackEvent } from '../../lib/analytics'

export function Footer({ onOpenPrivacy, onOpenTerms }: { onOpenPrivacy: () => void; onOpenTerms: () => void }) {
  return (
    <footer className="bg-charcoal py-12 pb-28 text-white md:pb-12">
      <div className="container-page">
        <p className="font-display text-3xl">Designing Impact. Strengthening Decisions.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone">
          <a href={`https://${contact.website}`}>{contact.website}</a><span>·</span><a href={`mailto:${contact.email}`}>{contact.email}</a><span>·</span><a href={contact.waLink} onClick={() => trackEvent('whatsapp_click')}>{contact.whatsapp}</a>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><button onClick={onOpenPrivacy} className="underline">Privacy Policy</button><button onClick={onOpenTerms} className="underline">Syarat & Ketentuan</button></div>
        <p className="mt-6 text-xs text-stone/70">Copyright © 2025 Immersia</p>
      </div>
    </footer>
  )
}
