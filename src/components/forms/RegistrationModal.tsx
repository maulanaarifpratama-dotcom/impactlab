import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { contact, programs, schedule } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { validateField, validators } from '../../lib/validation'
import type { RegistrationData } from '../../types'
import { Modal } from '../ui/Modal'
import { useToast } from '../ui/toast-context'
import { FormField } from './FormField'

type Props = {
  isOpen: boolean
  onClose: () => void
  preselectedProgram?: string
  preselectedTier?: string
  onOpenPrivacy: () => void
  onOpenTerms: () => void
}

type Errors = Partial<Record<keyof RegistrationData, string>>

const initialData: RegistrationData = {
  fullName: '', email: '', phone: '', organization: '', role: '', selectedProgram: '', selectedBatch: '', segment: 'practitioner', consent: false,
}

export function RegistrationModal({ isOpen, onClose, preselectedProgram, preselectedTier, onOpenPrivacy, onOpenTerms }: Props) {
  const { showToast } = useToast()
  const [data, setData] = useState<RegistrationData>(() => ({
    ...initialData,
    selectedProgram: preselectedProgram || preselectedTier || '',
  }))
  const [errors, setErrors] = useState<Errors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // FIX (Patch 3): Detect if the user has entered any data worth protecting.
  // `consent` and preselected program/tier don't count as user-typed data.
  const isDirty = (): boolean => Boolean(
    data.fullName.trim() ||
    data.email.trim() ||
    data.phone.trim() ||
    data.organization.trim() ||
    data.role.trim() ||
    data.selectedBatch.trim(),
  )

  const handleRequestClose = () => {
    if (isSuccess) {
      onClose()
      return
    }

    if (isDirty()) {
      const confirmed = window.confirm('Data yang sudah kamu isi belum terkirim. Yakin ingin menutup formulir?')
      if (!confirmed) return
    }

    onClose()
  }

  useEffect(() => {
    if (!isOpen) return
    trackEvent('registration_open', { program: preselectedProgram, tier: preselectedTier })
  }, [isOpen, preselectedProgram, preselectedTier])

  const batchOptions = useMemo(() => {
    const selected = schedule.find((item) => item.id === data.selectedProgram || item.program === data.selectedProgram)
    return selected?.batches ?? schedule.flatMap((item) => item.batches.map((batch) => `${item.program}: ${batch}`))
  }, [data.selectedProgram])

  const setField = <K extends keyof RegistrationData>(key: K, value: RegistrationData[K]) => {
    setData((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const validate = () => {
    const next: Errors = {}
    next.fullName = validateField(data.fullName, [validators.required, validators.minLength(2)]) ?? undefined
    next.email = validateField(data.email, [validators.required, validators.email]) ?? undefined
    next.phone = validateField(data.phone, [validators.required, validators.phoneID]) ?? undefined
    next.organization = validateField(data.organization, [validators.required]) ?? undefined
    next.role = validateField(data.role, [validators.required]) ?? undefined
    next.selectedProgram = validateField(data.selectedProgram, [validators.required]) ?? undefined
    next.selectedBatch = validateField(data.selectedBatch, [validators.required]) ?? undefined
    if (!data.consent) next.consent = 'Persetujuan wajib diberikan untuk pendaftaran.'
    setErrors(next)
    return Object.values(next).every((error) => !error)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    trackEvent('registration_submit', { program: data.selectedProgram, tier: preselectedTier })
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 800))
      const message = encodeURIComponent(`Halo Immersia, saya ingin mendaftar Impact Lab.\nNama: ${data.fullName}\nEmail: ${data.email}\nWA: ${data.phone}\nOrganisasi: ${data.organization}\nPeran: ${data.role}\nSegmen: ${data.segment}\nProgram/Paket: ${data.selectedProgram}\nBatch: ${data.selectedBatch}`)
      window.open(`${contact.waLink}?text=${message}`, '_blank', 'noopener,noreferrer')
      setIsSuccess(true)
      showToast('success', 'Pendaftaran diterima. Tim kami akan menghubungi via WhatsApp.')
      trackEvent('registration_success', { program: data.selectedProgram })
    } catch (error) {
      showToast('error', 'Pendaftaran gagal terkirim. Silakan coba lagi atau hubungi WhatsApp kami.')
      trackEvent('registration_error', { message: String(error) })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleRequestClose} titleId="registration-title">
      <div className="border-b border-stone p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Form Pendaftaran</p>
            <h2 id="registration-title" className="mt-2 font-display text-3xl text-navy">Daftar Immersia Impact Lab</h2>
            <p className="mt-2 text-sm text-slate">Data diproses sesuai UU PDP dan hanya untuk kebutuhan program.</p>
          </div>
          <button onClick={handleRequestClose} className="min-h-11 min-w-11 rounded-full text-2xl" aria-label="Tutup form pendaftaran">×</button>
        </div>
      </div>

      {isSuccess ? (
        <div className="p-6 text-center md:p-10">
          <h3 className="font-display text-3xl text-navy">Pendaftaran diterima!</h3>
          <p className="mx-auto mt-3 max-w-md text-slate">Tim kami akan menghubungi via WhatsApp untuk konfirmasi jadwal dan pembayaran.</p>
          <button onClick={handleRequestClose} className="mt-6 min-h-11 rounded-full bg-navy px-6 font-semibold text-white">Selesai</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
          <FormField label="Nama Lengkap" name="fullName" value={data.fullName} onChange={(e) => setField('fullName', e.target.value)} error={errors.fullName} required />
          <FormField label="Email" name="email" type="email" value={data.email} onChange={(e) => setField('email', e.target.value)} error={errors.email} required />
          <FormField label="No WhatsApp" name="phone" value={data.phone} onChange={(e) => setField('phone', e.target.value)} error={errors.phone} required />
          <FormField label="Nama Lembaga/Organisasi" name="organization" value={data.organization} onChange={(e) => setField('organization', e.target.value)} error={errors.organization} required />
          <FormField label="Peran/Jabatan" name="role" value={data.role} onChange={(e) => setField('role', e.target.value)} error={errors.role} required />
          <div className="space-y-2">
            <label htmlFor="selectedProgram" className="text-sm font-semibold text-charcoal">Pilih Program/Paket <span className="text-red-600">*</span></label>
            <select id="selectedProgram" value={data.selectedProgram} onChange={(e) => setField('selectedProgram', e.target.value)} aria-invalid={Boolean(errors.selectedProgram)} aria-describedby={errors.selectedProgram ? 'err-selectedProgram' : undefined} className="min-h-11 w-full rounded-xl border border-stone px-4 py-3 text-sm">
              <option value="">Pilih salah satu</option>
              {programs.map((program) => <option key={program.id} value={program.id}>{program.title}</option>)}
              <option value="1prog">Paket 1 Program</option><option value="2prog">Bundling 2 Program</option><option value="3prog">Bundling 3 Program</option>
            </select>
            {errors.selectedProgram && <p id="err-selectedProgram" className="text-xs text-red-600" role="alert" aria-live="polite">{errors.selectedProgram}</p>}
          </div>
          <fieldset className="md:col-span-2">
            <legend className="text-sm font-semibold text-charcoal">Segmen</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {[
                ['fresh-graduate', 'Fresh Graduate'], ['practitioner', 'Praktisi'], ['institution', 'Lembaga'],
              ].map(([value, label]) => <label key={value} className="flex min-h-11 items-center gap-2 rounded-xl border border-stone px-4"><input type="radio" name="segment" value={value} checked={data.segment === value} onChange={() => setField('segment', value as RegistrationData['segment'])} /> {label}</label>) }
            </div>
          </fieldset>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="selectedBatch" className="text-sm font-semibold text-charcoal">Pilih Batch <span className="text-red-600">*</span></label>
            <select id="selectedBatch" value={data.selectedBatch} onChange={(e) => setField('selectedBatch', e.target.value)} aria-invalid={Boolean(errors.selectedBatch)} aria-describedby={errors.selectedBatch ? 'err-selectedBatch' : undefined} className="min-h-11 w-full rounded-xl border border-stone px-4 py-3 text-sm">
              <option value="">Pilih jadwal</option>
              {batchOptions.map((batch) => <option key={batch} value={batch}>{batch}</option>)}
            </select>
            {errors.selectedBatch && <p id="err-selectedBatch" className="text-xs text-red-600" role="alert" aria-live="polite">{errors.selectedBatch}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="flex items-start gap-3 text-sm text-slate"><input type="checkbox" className="mt-1" checked={data.consent} onChange={(e) => setField('consent', e.target.checked)} /> <span>Saya setuju data saya diproses sesuai <button type="button" onClick={onOpenPrivacy} className="font-semibold text-navy underline">Kebijakan Privasi</button> dan <button type="button" onClick={onOpenTerms} className="font-semibold text-navy underline">Syarat & Ketentuan</button>.</span></label>
            {errors.consent && <p className="mt-2 text-xs text-red-600" role="alert">{errors.consent}</p>}
          </div>
          <button disabled={isLoading || !data.consent} className="min-h-12 rounded-full bg-navy px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2">{isLoading ? 'Mengirim...' : 'Kirim Pendaftaran'}</button>
        </form>
      )}
    </Modal>
  )
}
