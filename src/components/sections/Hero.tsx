import { heroStats } from '../../data/content'
import { trackEvent } from '../../lib/analytics'

export function Hero({ onRegister }: { onRegister: () => void }) {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-24 text-white">
      <div className="noise-overlay absolute inset-0 opacity-70" aria-hidden="true" />

      {/* Gold diagonal ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-20 h-px w-[200px] rotate-45 bg-gradient-to-r from-gold/20 to-transparent"
      />

      <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_auto]">
        {/* Left column — existing content */}
        <div>
          <div className="flex flex-wrap gap-3">
            {['Kuota Batch Perdana Terbatas', 'Early Bird Aktif', '3 Program Mulai Juni 2025'].map((badge) => <span key={badge} className="rounded-full border border-gold/50 px-4 py-2 text-sm font-semibold text-stone">{badge}</span>)}
          </div>
          <h1 id="hero-heading" className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-tight md:text-6xl">Tingkatkan Kapasitasmu di Sektor <span className="text-gold">Social Development</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone">Public training praktis untuk fresh graduate dan praktisi NGO/lembaga filantropi yang ingin membangun sistem MEAL, project management, dan pemanfaatan AI yang lebih applicable.</p>
          <div className="mt-8">
            <button onClick={() => { trackEvent('hero_cta_click'); onRegister() }} className="min-h-12 rounded-full border-2 border-gold px-7 font-semibold text-white transition hover:bg-gold hover:text-navy">Daftar Sekarang</button>
            <p className="mt-3 text-xs text-stone/80">Harga Early Bird berlaku untuk batch perdana.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map((stat, index) => <div key={stat.label} className={`pr-4 ${index < 3 ? 'md:border-r md:border-stone/30' : ''}`}><p className="font-mono text-3xl text-gold">{stat.value}</p><p className="mt-2 text-xs font-semibold uppercase tracking-widest text-stone">{stat.label}</p></div>)}
          </div>
        </div>

        {/* Right column — decorative dashboard mockup */}
        <div
          aria-hidden="true"
          className="animate-float max-h-72 w-full max-w-[380px] justify-self-center overflow-hidden lg:max-h-none"
        >
          <div className="hero-dashboard">
            {/* Dashboard header */}
            <div className="hero-dashboard-header">
              <svg className="mr-2 inline-block h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              Impact Lab System
            </div>

            {/* Dashboard cards */}
            <div className="dashboard-card">
              <span className="dashboard-card-icon">
                <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </span>
              MEAL Framework
            </div>
            <div className="dashboard-card">
              <span className="dashboard-card-icon">
                <svg className="h-4 w-4 text-sand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              Program Timeline
            </div>
            <div className="dashboard-card">
              <span className="dashboard-card-icon">
                <svg className="h-4 w-4 text-stone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <line x1="12" y1="6.81" x2="12" y2="12" />
                </svg>
              </span>
              AI Grant Draft
            </div>

            {/* Progress bars */}
            <div className="dashboard-progress">
              <div className="dashboard-progress-bar" style={{ '--bar-width': '85%' } as React.CSSProperties} />
            </div>
            <div className="dashboard-progress">
              <div className="dashboard-progress-bar" style={{ '--bar-width': '60%' } as React.CSSProperties} />
            </div>
            <div className="dashboard-progress">
              <div className="dashboard-progress-bar" style={{ '--bar-width': '45%' } as React.CSSProperties} />
            </div>

            {/* Metric pills */}
            <div className="dashboard-pills">
              <span className="dashboard-pill">2 Hari Offline</span>
              <span className="dashboard-pill">Mentoring 2x</span>
              <span className="dashboard-pill">CoP Access</span>
            </div>

            {/* Gold accent line */}
            <div className="dashboard-gold-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
