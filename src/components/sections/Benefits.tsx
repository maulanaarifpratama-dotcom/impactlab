import { programBenefits, programs, universalBenefits } from '../../data/content'

export function Benefits() {
  return (
    <section className="bg-ivory py-20" aria-labelledby="benefits-title">
      <div className="container-page">
        <h2 id="benefits-title" className="text-center font-display text-4xl text-navy">Apa yang Kamu Bawa Pulang</h2>
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <ul className="grid gap-4 md:grid-cols-5" role="list">
            {universalBenefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm"><span className="font-bold text-gold" aria-hidden="true">✓</span>{benefit}</li>)}
          </ul>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {programs.map((program) => <article key={program.id} className="overflow-hidden rounded-3xl bg-white"><h3 className={`${program.bgClass} p-5 font-display text-2xl text-white`}>{program.title}</h3><ul className="space-y-3 p-5 text-sm text-slate" role="list">{programBenefits[program.id as keyof typeof programBenefits].map((benefit) => <li key={benefit} className="flex gap-3"><span className="text-gold" aria-hidden="true">✓</span>{benefit}</li>)}</ul></article>)}
        </div>
      </div>
    </section>
  )
}
