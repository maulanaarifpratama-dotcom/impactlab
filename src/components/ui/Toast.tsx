import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { ToastType } from '../../types'
import { ToastContext } from './toast-context'

type Toast = { id: number; type: ToastType; message: string }

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const value = useMemo(() => ({
    showToast: (type: ToastType, message: string) => {
      const id = Date.now()
      setToasts((current) => [...current, { id, type, message }])
      window.setTimeout(() => setToasts((current) => current.filter((toast) => toast.id !== id)), 4000)
    },
  }), [])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-[80] flex w-[calc(100%-2rem)] flex-col gap-3 sm:w-96" aria-live="polite">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role={toast.type === 'error' ? 'alert' : 'status'}
            aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
            className={`rounded-2xl border p-4 text-sm shadow-soft ${toast.type === 'error' ? 'border-red-300 bg-red-50 text-red-800' : toast.type === 'success' ? 'border-gold bg-navy text-white' : 'border-muted bg-white text-muted'}`}
          >
            <div className="flex items-start justify-between gap-3">
              <p>{toast.message}</p>
              <button className="min-h-8 min-w-8 rounded-full" onClick={() => setToasts((current) => current.filter((item) => item.id !== toast.id))} aria-label="Tutup notifikasi">×</button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
