import { useEffect, useState } from 'react'
import { CookieConsent } from './components/layout/CookieConsent'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
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

// New imports for additional components and pages
import { SuasanaTraining } from './components/sections/SuasanaTraining'
import { VideoTestimonials } from './components/sections/VideoTestimonials'
import { PrivacyPolicyPage } from './components/legal/PrivacyPolicyPage'
import { TermsPage } from './components/legal/TermsPage'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>()
  const [preselectedTier, setPreselectedTier] = useState<string | undefined>()
  const [registrationKey, setRegistrationKey] = useState(0)

  const handleNavigate = (path: string) => {
    window.history.pushState(null, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openRegistration = (program?: string, tier?: string) => {
    setPreselectedProgram(program)
    setPreselectedTier(tier)
    setRegistrationKey((current) => current + 1)
    setRegistrationOpen(true)
  }

  // Subpage Route 1: Privacy Policy
  if (currentPath === '/privacy-policy') {
    return (
      <ToastProvider>
        <PrivacyPolicyPage
          onRegister={() => {
            handleNavigate('/')
            window.setTimeout(() => openRegistration(), 150)
          }}
          onNavigate={handleNavigate}
        />
        <RegistrationModal
          key={registrationKey}
          isOpen={registrationOpen}
          onClose={() => setRegistrationOpen(false)}
          preselectedProgram={preselectedProgram}
          preselectedTier={preselectedTier}
          onOpenPrivacy={() => handleNavigate('/privacy-policy')}
          onOpenTerms={() => handleNavigate('/syarat-ketentuan')}
        />
      </ToastProvider>
    )
  }

  // Subpage Route 2: Syarat & Ketentuan
  if (currentPath === '/syarat-ketentuan') {
    return (
      <ToastProvider>
        <TermsPage
          onRegister={() => {
            handleNavigate('/')
            window.setTimeout(() => openRegistration(), 150)
          }}
          onNavigate={handleNavigate}
        />
        <RegistrationModal
          key={registrationKey}
          isOpen={registrationOpen}
          onClose={() => setRegistrationOpen(false)}
          preselectedProgram={preselectedProgram}
          preselectedTier={preselectedTier}
          onOpenPrivacy={() => handleNavigate('/privacy-policy')}
          onOpenTerms={() => handleNavigate('/syarat-ketentuan')}
        />
      </ToastProvider>
    )
  }

  // Default Route: Homepage/Landing Page
  return (
    <ToastProvider>
      <Navbar onRegister={() => openRegistration()} />
      <main>
        <Hero onRegister={() => openRegistration()} />
        <SuasanaTraining />
        <PainPoints />
        <AboutImpactLab />
        <TrustSignals />
        <Programs onRegister={(programId) => openRegistration(programId)} />
        <Approach />
        <Benefits />
        <VideoTestimonials />
        <Testimonials />
        <Portfolio />
        <Pricing
          onSelectTier={(tier) => openRegistration(undefined, tier)}
          onOpenTerms={() => handleNavigate('/syarat-ketentuan')}
        />
        <Facilitators />
        <FAQ />
        <FinalCTA
          onRegister={() => openRegistration()}
          onOpenPrivacy={() => handleNavigate('/privacy-policy')}
        />
      </main>
      <Footer
        onOpenPrivacy={() => handleNavigate('/privacy-policy')}
        onOpenTerms={() => handleNavigate('/syarat-ketentuan')}
        onNavigate={handleNavigate}
      />
      <button
        onClick={() => openRegistration()}
        className="fixed bottom-4 left-4 right-4 z-30 min-h-12 rounded-full bg-gold font-bold text-navy shadow-soft md:hidden"
      >
        Daftar Sekarang
      </button>
      <RegistrationModal
        key={registrationKey}
        isOpen={registrationOpen}
        onClose={() => setRegistrationOpen(false)}
        preselectedProgram={preselectedProgram}
        preselectedTier={preselectedTier}
        onOpenPrivacy={() => handleNavigate('/privacy-policy')}
        onOpenTerms={() => handleNavigate('/syarat-ketentuan')}
      />
      <CookieConsent onOpenPrivacy={() => handleNavigate('/privacy-policy')} />
    </ToastProvider>
  )
}

export default App
