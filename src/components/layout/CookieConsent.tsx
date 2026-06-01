import { useEffect, useState } from 'react'
import { enableAnalytics, trackEvent } from '../../lib/analytics'

export function CookieConsent({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const [decision, setDecision] = useState<string | null>(() => {
    try { return window.localStorage.getItem('cookie-consent') } catch { return null }
  })

  // FIX (Patch 1): Re-enable analytics on every page load if consent was
  // previously accepted. Module-level `analyticsEnabled` resets to false on
  // each load, so stored consent must be re-applied here.
  useEffect(() => {
    if (decision === 'accepted') enableAnalytics()
  }, [decision])

  if (decision) return null
  const decide = (value: 'accepted' | 'rejected') => {
    setDecision(value)
    try { window.localStorage.setItem('cookie-consent', value) } catch { /* preview fallback */ }
    if (value === 'accepted') { enableAnalytics(); trackEvent('page_view', { path: window.location.pathname }) }
  }
  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] rounded-3xl border border-stone bg-white p-4 shadow-soft md:left-auto md:w-[460px]">
      <p className="text-sm text-slate">Kami menggunakan cookie untuk analitik & pengalaman lebih baik. <button onClick={onOpenPrivacy} className="font-semibold text-navy underline">Kebijakan Privasi</button></p>
      <div className="mt-4 flex gap-3"><button onClick={() => decide('rejected')} className="min-h-11 flex-1 rounded-full border border-stone px-4 font-semibold text-slate">Tolak</button><button onClick={() => decide('accepted')} className="min-h-11 flex-1 rounded-full bg-navy px-4 font-semibold text-white">Terima</button></div>
    </div>
  )
}
