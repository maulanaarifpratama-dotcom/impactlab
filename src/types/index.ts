export type ProgramColor = 'navy' | 'muted' | 'charcoal'

export interface RegistrationData {
  fullName: string
  email: string
  phone: string
  organization: string
  role: string
  selectedProgram: string
  selectedBatch: string
  segment: 'fresh-graduate' | 'practitioner' | 'institution'
  consent: boolean
}

export interface LeadData {
  email: string
  consent: boolean
}

export type ToastType = 'success' | 'error' | 'info'
