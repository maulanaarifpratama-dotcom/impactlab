import { useState } from 'react'
import type { FormEvent } from 'react'
import { trackEvent } from '../../lib/analytics'
import { validateField, validators } from '../../lib/validation'
import { useToast } from '../ui/toast-context'

export function LeadCaptureForm({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const { showToast } = useToast()
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const emailError = validateField(email, [validators.required, validators.email])
    if (emailError) return setError(emailError)
    if (!consent) return setError('Persetujuan wajib diberikan.')
    trackEvent('lead_capture_submit')
    showToast('success', 'Terima kasih. Kami akan kabari jadwal batch berikutnya.')
    setEmail('')
    setConsent(false)
    setError(null)
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white/10 p-4 text-left">
      <p className="font-semibold text-white">Belum siap daftar? Tinggalkan email, kami kabari batch berikutnya.</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@contoh.com" className="min-h-11 flex-1 rounded-full border border-white/20 bg-white px-4 text-charcoal" aria-label="Email untuk info batch" />
        <button className="min-h-11 rounded-full bg-gold px-5 font-semibold text-navy">Kabari Saya</button>
      </div>
      <label className="mt-3 flex items-start gap-2 text-xs text-stone"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> Saya setuju dihubungi sesuai <button type="button" onClick={onOpenPrivacy} className="underline">Kebijakan Privasi</button>.</label>
      {error && <p className="mt-2 text-xs text-red-200" role="alert">{error}</p>}
    </form>
  )
}
