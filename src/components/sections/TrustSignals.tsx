import { stats } from '../../data/content'

export function TrustSignals() {
  return (
    <section className="relative overflow-hidden bg-stone py-20" aria-labelledby="trust-title">
      <div className="bg-radial-glow absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="container-page">
        <h2 id="trust-title" className="sr-only">Trust Signals</h2>
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((stat) => <div key={stat.label} className="rounded-2xl bg-white/70 p-6 text-center"><p className="font-mono text-5xl text-navy">{stat.value}</p><p className="mt-2 font-semibold text-slate">{stat.label}</p><p className="mt-2 text-[10px] text-slate/70">{stat.note}</p></div>)}
        </div>
        <p className="mt-12 text-center text-sm font-semibold uppercase tracking-widest text-slate">Dipercaya oleh lembaga-lembaga terkemuka</p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          {/* TODO: ganti dengan logo klien — hanya yang sudah memberi izin tertulis */}
          {Array.from({ length: 5 }).map((_, index) => <div key={index} className="logo-placeholder flex h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-slate/20 bg-white opacity-60 grayscale transition hover:opacity-100"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate/30"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /><path d="M9 9h.01" /><path d="M15 9h.01" /><path d="M9 13h.01" /><path d="M15 13h.01" /></svg><span className="text-xs font-semibold text-slate">Logo Mitra</span></div>)}
        </div>
        <p className="mt-3 text-center text-[10px] italic text-slate/60">Logo resmi ditampilkan setelah izin publikasi</p>
      </div>
    </section>
  )
}
