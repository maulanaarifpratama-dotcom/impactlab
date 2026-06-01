import { testimonials } from '../../data/content'

export function Testimonials() {
  if (testimonials.every((testimonial) => testimonial.quote.startsWith('['))) return null
  return (
    <section className="bg-white py-20" aria-labelledby="testimonials-title">
      <div className="container-page">
        <h2 id="testimonials-title" className="text-center font-display text-4xl text-navy">Kata Alumni</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => <article key={item.quote} className="rounded-3xl border border-stone p-6"><p className="font-display text-xl italic text-charcoal">“{item.quote}”</p><div className="mt-6 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white">{item.initials}</div><div><p className="font-semibold text-navy">{item.name}</p><p className="text-sm text-slate">{item.role}</p></div></div></article>)}
        </div>
      </div>
    </section>
  )
}
