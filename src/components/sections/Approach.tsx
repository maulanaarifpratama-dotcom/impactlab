export function Approach() {
  const steps = [
    ['01', 'Konteks dulu', 'Mulai dari masalah nyata dan kebutuhan lembaga, bukan template generik.', 'Needs Assessment'],
    ['02', 'Bangun sistem', 'Tools dirangkai menjadi workflow yang bisa dijalankan oleh tim.', 'Workflow Builder'],
    ['03', 'Dampingi praktik', 'Mentoring dan community of practice menjaga pembelajaran berlanjut.', 'CoP Network'],
  ]
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white" aria-labelledby="approach-title">
      {/* Dot pattern background overlay */}
      <div className="bg-dot-pattern pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="container-page relative">
        <h2 id="approach-title" className="mx-auto max-w-3xl text-center font-display text-4xl">Bukan Hanya Belajar. Tapi Benar-Benar Bisa Dijalankan.</h2>
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* Gradient connector line */}
          <div className="absolute left-0 right-0 top-14 hidden h-[2px] bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 md:block" aria-hidden="true" />

          {/* Connected nodes on the line — one per column */}
          <div className="absolute left-0 right-0 top-14 hidden -translate-y-1/2 md:flex" aria-hidden="true">
            <div className="approach-node" style={{ left: '16.666%' }} />
            <div className="approach-node" style={{ left: '50%' }} />
            <div className="approach-node" style={{ left: '83.333%' }} />
          </div>

          {steps.map(([number, title, desc, pill]) => (
            <article key={number} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="font-mono text-2xl text-gold">{number}</span>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone">{desc}</p>
              {/* Mini visual pill */}
              <span className="mt-4 inline-block rounded-full border border-gold/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold/70" aria-hidden="true">
                {pill}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
