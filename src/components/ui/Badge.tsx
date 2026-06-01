import type { PropsWithChildren } from 'react'

export function Badge({ children }: PropsWithChildren) {
  return <span className="inline-flex rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-navy">{children}</span>
}
