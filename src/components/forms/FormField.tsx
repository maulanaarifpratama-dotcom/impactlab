import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  error?: string | null
}

export function FormField({ label, name, error, required, className = '', ...props }: Props) {
  const errorId = `${name}-error`
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-charcoal">
        {label} {required && <span className="text-red-600" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`min-h-11 w-full rounded-xl border border-stone px-4 py-3 text-sm outline-none transition focus:border-navy ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p id={errorId} className="text-xs text-red-600" role="alert" aria-live="polite">{error}</p>}
    </div>
  )
}
