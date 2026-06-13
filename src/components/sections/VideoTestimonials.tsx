import { useEffect, useState } from 'react'

export function VideoTestimonials() {
  const videoIds = [
    { id: 'FXwCmm_74Ro', title: 'Testimonial 1' },
    { id: '-ksbsWMj9Nw', title: 'Testimonial 2' },
    { id: 'tr8ikLutBTU', title: 'Testimonial 3' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

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

  const maxIndex = isMobile ? videoIds.length - 1 : videoIds.length - 3

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

  const handleDotClick = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const totalDots = maxIndex + 1

  // A custom thumbnail sub-component to handle fallback elegantly
  const VideoCard = ({ video, index }: { video: { id: string; title: string }; index: number }) => {
    const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`)

    return (
      <div className="w-full shrink-0 px-2 md:w-1/3">
        <div
          onClick={() => setActiveVideoId(video.id)}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-md transition-all duration-300 hover:shadow-xl"
        >
          {/* Card Frame of exactly 200px height */}
          <div className="relative h-[200px] w-full overflow-hidden">
            <img
              src={imgSrc}
              alt={`Testimonial ${index + 1}`}
              onError={() => setImgSrc(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`)}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 group-hover:bg-black/40">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
                <svg
                  className="ml-1 h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-white py-16" aria-labelledby="video-testimonials-title">
      <div className="mx-auto max-w-6xl px-12">
        <h2 id="video-testimonials-title" className="text-center font-display text-4xl text-navy">
          Kata Mereka
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
              {videoIds.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          </div>

          {/* Navigation Arrows (Outside slider edges - only show if maxIndex > 0) */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute -left-12 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-all duration-300 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Previous video testimonial"
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
                aria-label="Next video testimonial"
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
            </>
          )}
        </div>

        {/* Dynamic Dots Indicator (only show if maxIndex > 0) */}
        {maxIndex > 0 && (
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
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm transition-all duration-300"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80 focus-visible:outline-none"
              aria-label="Close video player"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube Player Iframe */}
            <iframe
              className="h-full w-full border-0"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Video testimonial player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
