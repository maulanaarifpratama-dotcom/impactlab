import { useState } from 'react'
import { faqs } from '../../data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-ivory py-20" aria-labelledby="faq-title">
      <div className="container-page max-w-4xl">
        <h2 id="faq-title" className="text-center font-display text-4xl text-navy">Pertanyaan Umum</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return <article key={faq.q} className="rounded-2xl bg-white"><button id={buttonId} aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex min-h-14 w-full items-center justify-between gap-4 px-5 text-left font-semibold text-navy"><span>{faq.q}</span><span aria-hidden="true">{isOpen ? '−' : '+'}</span></button>{isOpen && <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-5 text-sm leading-7 text-slate">{faq.a}</div>}</article>
          })}
        </div>
      </div>
    </section>
  )
}
