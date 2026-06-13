import { useEffect, useState } from 'react'
import { trackEvent } from '../../lib/analytics'
import { useScrollPosition } from '../../hooks/useScrollPosition'

export function Navbar({
  onRegister,
  isSubpage = false,
  onNavigate,
}: {
  onRegister: () => void
  isSubpage?: boolean
  onNavigate?: (path: string) => void
}) {
  const scrollY = useScrollPosition()
  const [isOpen, setIsOpen] = useState(false)
  const solid = scrollY > 80 || isOpen
  const register = () => { trackEvent('hero_cta_click'); onRegister(); setIsOpen(false) }

  const links = [
    [isSubpage ? '/#program' : '#program', 'Program'],
    [isSubpage ? '/#jadwal' : '#jadwal', 'Jadwal'],
    [isSubpage ? '/#fasilitator' : '#fasilitator', 'Fasilitator'],
    [isSubpage ? '/#faq' : '#faq', 'FAQ'],
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isSubpage && onNavigate) {
      e.preventDefault()
      const [pathname, hash] = href.split('#')
      onNavigate(pathname || '/')
      if (hash) {
        window.setTimeout(() => {
          const element = document.getElementById(hash)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }

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
    <nav aria-label="Main navigation" className={`fixed inset-x-0 top-0 z-50 border-b border-stone/70 bg-ivory/90 backdrop-blur-md transition duration-300 ${solid ? 'shadow-sm' : 'shadow-none'}`}>
      <div className="container-page flex h-20 items-center justify-between text-navy">
        <a href={isSubpage ? '/' : '#hero'} onClick={(e) => { if (isSubpage && onNavigate) { e.preventDefault(); onNavigate('/') } }} className="inline-flex items-center" aria-label="Immersia - kembali ke beranda"><img src="/brand/immersia-logo-light.png" alt="Immersia" className="h-8 w-auto object-contain md:h-10" /></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([href, label]) => <a key={href} href={href} onClick={(e) => handleLinkClick(e, href)} className="text-sm font-semibold text-slate transition hover:text-navy">{label}</a>)}
          <button onClick={register} className="min-h-11 rounded-full border border-gold bg-gold/10 px-5 font-semibold text-navy transition hover:bg-gold">Daftar Sekarang</button>
        </div>
        <button className="min-h-11 min-w-11 rounded-full text-navy md:hidden" aria-label="Buka menu" aria-expanded={isOpen} aria-controls="mobile-menu" onClick={() => setIsOpen((value) => !value)}>☰</button>
      </div>
      {isOpen && <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu navigasi" className="fixed bottom-0 right-0 top-20 w-72 border-l border-stone/70 bg-ivory p-6 text-navy shadow-2xl md:hidden"><div className="flex flex-col gap-5">{links.map(([href, label]) => <a key={href} href={href} onClick={(e) => { setIsOpen(false); handleLinkClick(e, href) }} className="min-h-11 font-semibold text-slate transition hover:text-navy">{label}</a>)}<button onClick={register} className="min-h-11 rounded-full bg-gold px-5 font-semibold text-navy">Daftar Sekarang</button></div></div>}
    </nav>
  )
}
