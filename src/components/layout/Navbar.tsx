import { useEffect, useState } from 'react'
import { trackEvent } from '../../lib/analytics'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const links = [
  ['#program', 'Program'], ['#jadwal', 'Jadwal'], ['#fasilitator', 'Fasilitator'], ['#faq', 'FAQ'],
]

export function Navbar({ onRegister }: { onRegister: () => void }) {
  const scrollY = useScrollPosition()
  const [isOpen, setIsOpen] = useState(false)
  const solid = scrollY > 80 || isOpen
  const register = () => { trackEvent('hero_cta_click'); onRegister(); setIsOpen(false) }

  useEffect(() => {
    if (!isOpen) return

    const drawer = document.getElementById('mobile-menu')
    const focusable = drawer?.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])')
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    first?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key === 'Tab' && focusable && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <nav aria-label="Main navigation" className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${solid ? 'bg-navy shadow-lg' : 'bg-transparent'}`}>
      <div className="container-page flex h-20 items-center justify-between text-white">
        <a href="#hero" className="flex items-baseline gap-2"><span className="font-display text-3xl font-bold">Immersia</span><span className="font-semibold text-gold">Impact Lab</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([href, label]) => <a key={href} href={href} className="text-sm font-semibold text-stone hover:text-white">{label}</a>)}
          <button onClick={register} className="min-h-11 rounded-full border border-gold px-5 font-semibold hover:bg-gold hover:text-navy">Daftar Sekarang</button>
        </div>
        <button className="min-h-11 min-w-11 rounded-full md:hidden" aria-label="Buka menu" aria-expanded={isOpen} aria-controls="mobile-menu" onClick={() => setIsOpen((value) => !value)}>☰</button>
      </div>
      {isOpen && <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu navigasi" className="fixed bottom-0 right-0 top-20 w-72 bg-navy p-6 text-white shadow-2xl md:hidden"><div className="flex flex-col gap-5">{links.map(([href, label]) => <a key={href} href={href} onClick={() => setIsOpen(false)} className="min-h-11 font-semibold">{label}</a>)}<button onClick={register} className="min-h-11 rounded-full bg-gold px-5 font-semibold text-navy">Daftar Sekarang</button></div></div>}
    </nav>
  )
}
