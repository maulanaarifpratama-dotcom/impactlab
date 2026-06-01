import { differentiators } from '../../data/content'

export function AboutImpactLab() {
  return (
    <section className="bg-ivory py-20" aria-labelledby="about-title">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <h2 id="about-title" className="font-display text-4xl italic text-navy">Beyond the Classroom</h2>
            <div className="mt-6 max-w-3xl space-y-4 leading-8 text-slate">
              <p>Immersia Impact Lab adalah ruang belajar untuk memperkuat kapasitas praktisi social development dengan pendekatan yang grounded: lahir dari kerja lapangan, bukan sekadar slide.</p>
              <p>Kami membantu peserta menerjemahkan konsep menjadi sistem kerja, tools, dan keputusan program yang bisa langsung dicoba di konteks masing-masing.</p>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-soft">
            <img src="/images/analisis-baseline-konteks.jpg" alt="Sesi training dan advisory Immersia di lapangan" width="420" height="300" loading="lazy" className="h-72 w-full rounded-2xl object-cover" />
            <div className="pointer-events-none absolute inset-2 rounded-2xl bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />
          </figure>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {differentiators.map((item) => <article key={item.title} className="rounded-2xl border-l-4 border-navy bg-white p-6"><h3 className="font-display text-2xl text-navy">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate">{item.desc}</p></article>)}
        </div>
      </div>
    </section>
  )
}
