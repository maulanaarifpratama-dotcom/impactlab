import { useEffect, useState } from 'react'
import img1 from '../../assets/image/foto_training/DSC02268.jpg'
import img2 from '../../assets/image/foto_training/DSC02339.jpg'
import img3 from '../../assets/image/foto_training/DSC03870.jpg'
import img4 from '../../assets/image/foto_training/DSC03886.jpg'
import img5 from '../../assets/image/foto_training/DSC03899.jpg'
import img6 from '../../assets/image/foto_training/IMG_8621.jpg'
import img7 from '../../assets/image/foto_training/IMG_8687.jpg'
import img8 from '../../assets/image/foto_training/IMG_8696.jpg'
import img9 from '../../assets/image/foto_training/JPG.jpg'
import img10 from '../../assets/image/foto_training/WhatsApp Image 2026-05-08 at 12.47.14 (2).jpeg'

export function SuasanaTraining() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Touch swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = isMobile ? images.length - 1 : images.length - 3

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Set current index based on dot clicks (making sure it stays within bounds)
  const handleDotClick = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const totalDots = maxIndex + 1

  return (
    <section className="bg-white py-16" aria-labelledby="suasana-training-title">
      <div className="mx-auto max-w-6xl px-12">
        <h2 id="suasana-training-title" className="text-center font-display text-4xl text-navy">
          Suasana Training
        </h2>

        <div className="relative mt-10">
          {/* Slider Viewport */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out mx-[-8px]"
              style={{
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333333)}%)`,
              }}
            >
              {images.map((img, index) => (
                <div key={index} className="w-full shrink-0 px-2 md:w-1/3">
                  <div className="overflow-hidden rounded-2xl border border-stone/50 shadow-sm">
                    <img
                      src={img}
                      alt={`Suasana Training ${index + 1}`}
                      loading="lazy"
                      className="h-[280px] w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows (Outside slider edges) */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-12 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-all duration-300 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous photo"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute -right-12 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-all duration-300 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next photo"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dynamic Dots Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalDots }).map((_, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? 'w-6 bg-navy' : 'w-2.5 bg-stone hover:bg-slate'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
