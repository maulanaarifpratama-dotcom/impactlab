import { useEffect, useRef } from 'react'
import { trackEvent } from '../../lib/analytics'
import { useInView } from '../../hooks/useInView'
import { Badge } from './Badge'

type Program = {
  id: string; title: string; subtitle: string; bgClass: string; painPoint: string; modules: string[]; facilitator: string; badge: string | null
}

function ProgramIcon({ programId }: { programId: string }) {
  switch (programId) {
    case 'meal':
      return (
        <span aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
            <circle cx="18" cy="18" r="16" stroke="white" strokeWidth="2" />
            <circle cx="18" cy="18" r="10" stroke="white" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="4" fill="white" />
            <polyline points="14,18 17,21 23,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </span>
      )
    case 'pm':
      return (
        <span aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
            <line x1="6" y1="8" x2="30" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="6" y1="15" x2="24" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="6" y1="22" x2="28" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="6" y1="29" x2="20" y2="29" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="30" cy="8" r="2.5" fill="white" />
            <circle cx="24" cy="15" r="2.5" fill="white" />
            <circle cx="28" cy="22" r="2.5" fill="white" />
            <circle cx="20" cy="29" r="2.5" fill="white" />
          </svg>
        </span>
      )
    case 'ai':
      return (
        <span aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
            <path d="M18 2L20.5 13.5L30 10L22.5 18L30 26L20.5 22.5L18 34L15.5 22.5L6 26L13.5 18L6 10L15.5 13.5L18 2Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round" />
            <circle cx="18" cy="18" r="3" fill="white" />
          </svg>
        </span>
      )
    default:
      return null
  }
}

export function ProgramCard({ program, onRegister }: { program: Program; onRegister: (programId: string) => void }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.45 })

  useEffect(() => {
    if (isInView) trackEvent('program_view', { program: program.id })
  }, [isInView, program.id])

  return (
    <article ref={ref} className="flex overflow-hidden rounded-3xl border border-stone bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex w-full flex-col">
        <div className={`${program.bgClass} relative p-6 text-white`}>
          {program.badge && <div className="absolute right-4 top-4"><Badge>{program.badge}</Badge></div>}
          <div className="absolute bottom-4 left-4">
            <ProgramIcon programId={program.id} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" aria-hidden="true" style={{ background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent)' }} />
          <h3 className="font-display text-3xl">{program.title}</h3>
          <p className="mt-2 max-w-sm text-sm text-stone">{program.subtitle}</p>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="rounded-2xl bg-ivory p-4 text-sm leading-6 text-slate">{program.painPoint}</div>
          <ul className="mt-5 space-y-3 text-sm text-charcoal" role="list">
            {program.modules.map((module) => <li key={module} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-gold" aria-hidden="true" />{module}</li>)}
          </ul>
          <p className="mt-5 text-sm font-semibold text-navy">Fasilitator: {program.facilitator}</p>
          <button onClick={() => onRegister(program.id)} className="mt-6 min-h-11 rounded-full border-2 border-gold px-5 font-semibold text-navy transition hover:bg-gold">Daftar Program Ini</button>
        </div>
      </div>
    </article>
  )
}
