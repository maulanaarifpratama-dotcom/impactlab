import { portfolio } from '../../data/content'

export function Portfolio() {
  return (
    <section className="bg-white py-20" aria-labelledby="portfolio-title">
      <div className="container-page">
        <h2 id="portfolio-title" className="text-center font-display text-4xl text-navy">Program yang Lahir dari Lapangan</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate">Pengalaman advisory dan capacity building menjadi dasar penyusunan kurikulum Impact Lab.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {portfolio.map((item) => <article key={item.theme} className="relative rounded-3xl border border-stone p-5"><div className="mb-4 h-3 w-3 rounded-full bg-gold" /><h3 className="font-display text-xl text-navy">{item.theme}</h3><ul className="mt-4 space-y-2 text-sm text-slate">{item.clients.map((client) => <li key={client}>{client.includes('Flagship') ? <span><span className="rounded-full bg-gold/20 px-2 py-1 text-navy">★ Flagship</span> {client.replace(' ★ Flagship', '')}</span> : client}</li>)}</ul><p className="mt-5 rounded-full bg-ivory px-3 py-2 text-xs font-semibold text-muted">{item.methods}</p></article>)}
        </div>
        <p className="mt-4 text-center text-xs text-slate/70">Catatan: nama klien perlu dipastikan izin penyebutan publik sebelum live.</p>
      </div>
    </section>
  )
}
