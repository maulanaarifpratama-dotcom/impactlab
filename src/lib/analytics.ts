type EventName =
  | 'page_view'
  | 'hero_cta_click'
  | 'program_view'
  | 'program_register_click'
  | 'pricing_select'
  | 'registration_open'
  | 'registration_submit'
  | 'registration_success'
  | 'registration_error'
  | 'lead_capture_submit'
  | 'whatsapp_click'
  | 'b2b_inquiry_click'

let analyticsEnabled = false

export function enableAnalytics() {
  analyticsEnabled = true
}

export function trackEvent(name: EventName, params?: Record<string, unknown>) {
  if (!analyticsEnabled) return
  if (import.meta.env.DEV) console.log('[analytics]', name, params)
}
