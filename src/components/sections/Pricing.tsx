import { contact, pricing, schedule } from '../../data/content'
import { trackEvent } from '../../lib/analytics'

export function Pricing({ onSelectTier, onOpenTerms }: { onSelectTier: (tier: string) => void; onOpenTerms: () => void }) {
  return (
    <section id="jadwal" className="bg-ivory py-20" aria-labelledby="pricing-title">
      <div className="container-page">
        <h2 id="pricing-title" className="text-center font-display text-4xl text-navy">Jadwal dan Investasi</h2>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-stone bg-white">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-navy text-white"><tr><th className="p-4">Program</th><th>Batch 1</th><th>Batch 2</th><th>Batch 3</th><th>Batch 4</th></tr></thead>
            <tbody>{schedule.map((row) => <tr key={row.program} className="border-t border-stone"><th className="p-4 text-navy">{row.program}</th>{row.batches.map((batch) => <td key={batch} className="font-mono text-muted">{batch}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => <article key={tier.id} className={`relative rounded-3xl bg-white p-6 shadow-sm ${tier.recommended ? 'md:scale-105 border-2 border-gold' : 'border border-stone'}`}>{tier.recommended && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy">Paling Hemat</span>}<h3 className="font-display text-2xl text-navy">{tier.label}</h3><p className="mt-5 text-slate line-through">{tier.normal}</p><p className="mt-2 font-mono text-2xl text-navy">{tier.earlyBird}</p><p className="mt-3 inline-flex rounded-full bg-gold/20 px-3 py-1 text-sm font-semibold text-navy">{tier.saving}</p><button onClick={() => { trackEvent('pricing_select', { tier: tier.id }); onSelectTier(tier.id) }} className="mt-6 min-h-11 w-full rounded-full bg-navy px-5 font-semibold text-white">Pilih Paket Ini</button></article>)}
        </div>
        <p className="mt-8 text-xs leading-6 text-slate">Harga per peserta. Bundling memungkinkan mengambil program berbeda di jadwal berbeda. Harga Early Bird berlaku terbatas untuk batch perdana dan dapat berubah sewaktu-waktu. Kuota setiap batch terbatas. Pendaftaran dianggap final setelah konfirmasi pembayaran. Lihat <button onClick={onOpenTerms} className="font-semibold underline">Syarat & Ketentuan</button> untuk kebijakan pembayaran dan pembatalan.</p>
        <div className="mt-10 rounded-3xl bg-navy p-6 text-white md:flex md:items-center md:justify-between">
          <div><h3 className="font-display text-2xl">Butuh in-house training untuk tim?</h3><p className="mt-2 text-stone">Kami bisa menyesuaikan kurikulum dengan kebutuhan lembaga.</p></div>
          <a href={contact.waLink} onClick={() => trackEvent('b2b_inquiry_click')} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gold px-6 font-semibold text-navy md:mt-0">Diskusi via WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
