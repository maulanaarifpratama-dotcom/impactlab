import { programs } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ProgramCard } from '../ui/ProgramCard'

export function Programs({ onRegister }: { onRegister: (programId: string) => void }) {
  return (
    <section id="program" className="bg-white py-20" aria-labelledby="program-title">
      <div className="container-page">
        <h2 id="program-title" className="text-center font-display text-4xl text-navy">Pilih Program yang Tepat untukmu</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => <ProgramCard key={program.id} program={program} onRegister={(id) => { trackEvent('program_register_click', { program: id }); onRegister(id) }} />)}
        </div>
      </div>
    </section>
  )
}
