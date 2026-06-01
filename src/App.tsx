import { useState } from 'react'
import { CookieConsent } from './components/layout/CookieConsent'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { PrivacyPolicy } from './components/legal/PrivacyPolicy'
import { TermsModal } from './components/legal/TermsModal'
import { RegistrationModal } from './components/forms/RegistrationModal'
import { AboutImpactLab } from './components/sections/AboutImpactLab'
import { Approach } from './components/sections/Approach'
import { Benefits } from './components/sections/Benefits'
import { FAQ } from './components/sections/FAQ'
import { Facilitators } from './components/sections/Facilitators'
import { FinalCTA } from './components/sections/FinalCTA'
import { Hero } from './components/sections/Hero'
import { PainPoints } from './components/sections/PainPoints'
import { Portfolio } from './components/sections/Portfolio'
import { Pricing } from './components/sections/Pricing'
import { Programs } from './components/sections/Programs'
import { Testimonials } from './components/sections/Testimonials'
import { TrustSignals } from './components/sections/TrustSignals'
import { ToastProvider } from './components/ui/Toast'

function App() {
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>()
  const [preselectedTier, setPreselectedTier] = useState<string | undefined>()
  const [registrationKey, setRegistrationKey] = useState(0)

  const openRegistration = (program?: string, tier?: string) => {
    setPreselectedProgram(program)
    setPreselectedTier(tier)
    setRegistrationKey((current) => current + 1)
    setRegistrationOpen(true)
  }

  return (
    <ToastProvider>
      <Navbar onRegister={() => openRegistration()} />
      <main>
        <Hero onRegister={() => openRegistration()} />
        <PainPoints />
        <AboutImpactLab />
        <TrustSignals />
        <Programs onRegister={(programId) => openRegistration(programId)} />
        <Approach />
        <Benefits />
        <Testimonials />
        <Portfolio />
        <Pricing onSelectTier={(tier) => openRegistration(undefined, tier)} onOpenTerms={() => setTermsOpen(true)} />
        <Facilitators />
        <FAQ />
        <FinalCTA onRegister={() => openRegistration()} onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} onOpenTerms={() => setTermsOpen(true)} />
      <button onClick={() => openRegistration()} className="fixed bottom-4 left-4 right-4 z-30 min-h-12 rounded-full bg-gold font-bold text-navy shadow-soft md:hidden">Daftar Sekarang</button>
      <RegistrationModal key={registrationKey} isOpen={registrationOpen} onClose={() => setRegistrationOpen(false)} preselectedProgram={preselectedProgram} preselectedTier={preselectedTier} onOpenPrivacy={() => setPrivacyOpen(true)} onOpenTerms={() => setTermsOpen(true)} />
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <CookieConsent onOpenPrivacy={() => setPrivacyOpen(true)} />
    </ToastProvider>
  )
}

export default App
