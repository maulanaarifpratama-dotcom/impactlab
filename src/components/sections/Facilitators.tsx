import { facilitators } from '../../data/content'

export function Facilitators() {
  return (
    <section id="fasilitator" className="bg-white py-20" aria-labelledby="facilitators-title">
      <div className="container-page">
        <h2 id="facilitators-title" className="text-center font-display text-4xl text-navy">Diampu oleh Praktisi Lapangan</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {facilitators.map((facilitator) => <article key={facilitator.name} className="relative rounded-3xl border border-stone p-6 md:flex md:gap-6"><div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" /><div className="facilitator-photo-area"><img src={facilitator.image} alt={facilitator.name} width="80" height="80" loading="lazy" className="h-20 w-20 rounded-full object-cover" /><div className={`sr-only ${facilitator.bgClass}`}>{facilitator.initials}</div></div><div><h3 className="mt-4 font-display text-2xl text-navy md:mt-0">{facilitator.name}</h3><div className="mt-2 flex flex-wrap gap-2">{facilitator.programs.map((program) => <span key={program} className="rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-muted">{program}</span>)}</div><ul className="mt-4 space-y-2 text-sm text-slate">{facilitator.credentials.map((credential) => <li key={credential}>• {credential}</li>)}</ul></div></article>)}
        </div>

      </div>
    </section>
  )
}
