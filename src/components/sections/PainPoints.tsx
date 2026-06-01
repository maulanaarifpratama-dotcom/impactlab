import { painPoints } from '../../data/content'

export function PainPoints() {
  return (
    <section className="bg-ivory py-20" aria-labelledby="pain-title">
      <div className="container-page">
        <h2 id="pain-title" className="text-center font-display text-4xl text-navy">Familiar dengan situasi ini?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {painPoints.map((item) => <article key={item.text} className="rounded-2xl border-l-4 border-gold bg-white p-6 text-left shadow-sm transition hover:shadow-md"><span className="text-3xl" aria-hidden="true">{item.icon}</span><p className="mt-4 font-medium leading-7 text-charcoal">{item.text}</p></article>)}
        </div>
      </div>
      <div className="mt-16 bg-navy py-6 text-center font-display text-2xl italic text-gold">Training seharusnya tidak berhenti di kelas.</div>
    </section>
  )
}
