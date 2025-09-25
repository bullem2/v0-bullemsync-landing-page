"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, Music, Facebook, ChevronDown } from "lucide-react"
import Image from "next/image"

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function BullemsyncLanding() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(4200)
  const [activePads, setActivePads] = useState([])
  const [puzzleUnlocked, setPuzzleUnlocked] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const aboutSlides = [
    {
      emoji: "🎵",
      title: "1. Artist",
      content:
        "Earn more than streams. With every track, you gain trading commissions, unlocking new revenue streams beyond the ordinary.",
    },
    {
      emoji: "💹",
      title: "2. Trader",
      content:
        "Songs become digital assets. Buy tracks, hold them as they grow in value, and resell for profit — powered by our seamless in-app currency, BST (Bullemsync Token).",
    },
    {
      emoji: "🎧",
      title: "3. Listener",
      content:
        "Your playlists now pay you back. Curate, share, and monetize your taste while enjoying ad-free streaming, offline playback, and the world's first OPC Energy-Powered System for smooth performance anywhere.",
    },
  ]

  const faqs = [
  {
    q: "What is Bullemsync?",
    a: "Bullemsync is a next-gen music streaming and trading platform where songs are assets you can stream, trade, and earn from.",
  },
  {
    q: "How do I earn as a listener?",
    a: "Listeners earn BST tokens for the time they spend streaming music. Every minute pays you back with 0.05 $BST.",
  },
  {
    q: "What’s special for artists?",
    a: "Artists earn not just from streams but also trading commissions whenever their tracks are bought or sold.",
  },
  {
    q: "Can I trade songs like crypto?",
    a: "Yes! Songs on Bullemsync can be traded like digital assets, allowing you to buy, hold, and resell tracks for profit.",
  },
  {
    q: "What is BST?",
    a: "BST (Bullemsync Token) is our in-app currency powering streams, trades, and rewards.",
  },
]


  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setWaitlistCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePadClick = (padIndex) => {
    const newActivePads = [...activePads, padIndex]
    setActivePads(newActivePads)

    if (newActivePads.length === 3 && newActivePads.join("") === "012") {
      setPuzzleUnlocked(true)
    } else if (newActivePads.length >= 3) {
      setActivePads([])
      setPuzzleUnlocked(false)
    }
  }

  const handleSlideClick = (index) => {
    setCurrentSlide(index)
    const container = document.querySelector(".slider-container")
    if (container) {
      container.scrollLeft = index * container.clientWidth
    }
  }

  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center reflective-floor hero-bg">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-1 bg-primary/30 animate-waveform"
              style={{
                left: `${5 + i * 4.5}%`,
                animationDelay: `${i * 0.1}s`,
                height: `${20 + Math.random() * 40}px`,
              }}
            />
          ))}

          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`mb-8 transition-all duration-2000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/images/bullemsync-logo.png"
                alt="Bullemsync Logo"
                width={120}
                height={120}
                className="animate-heartbeat"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-primary animate-neon-pulse text-balance">
              BULLEMSYNC
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto mt-4 neon-border" />
          </div>

          <div className="space-y-6 mb-12">
            <p
              className={`text-lg sm:text-2xl md:text-4xl font-light transition-all duration-1000 delay-500 text-balance ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
               We're about to turn sound into assets<span className="text-primary">...</span>
            </p>
            <p
              className={`text-lg sm:text-2xl md:text-4xl font-light transition-all duration-1000 delay-1000 text-balance ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <span className="text-secondary">...and vibes into value... Brace up!</span>
            </p>
          </div>

          <Button
            size="lg"
            className={`text-xl px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 neon-border animate-neon-pulse transition-all duration-1000 delay-1500 cursor-pointer ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
          >
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* Cinematic Trailer Sections */}
      <section className="py-20">
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden section-bg-1">
          <div className="relative z-10 text-center px-4">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 text-primary text-balance">
              Music isn't just heard<span className="text-secondary">...</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 text-foreground text-pretty">
              Bullemsync isn't just another music app — it's a revolution in how music is streamed, traded, and
              experienced.
            </p>

            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <div className="trading-indicator">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                LIVE TRADING
              </div>
              <div className="price-ticker">
                <span>$BST</span>
                <span className="text-accent">+12.5%</span>
              </div>
              <div className="token-badge">Beta Access</div>
            </div>
            <div className="flex justify-center space-x-2 mb-8 transform rotate-180">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-primary animate-waveform"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    height: `${30 + Math.random() * 50}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center relative section-bg-2">
          <div className="text-center px-4">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 text-accent text-balance">
              ...it's experienced.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-secondary text-balance">
              Stream harder. Earn smarter. Own the future of music.
            </p>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Music className="w-32 h-32 text-primary animate-float" />
                <div className="absolute inset-0 w-32 h-32 border-2 border-primary rounded-full animate-neon-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center relative section-bg-3">
          <div className="text-center px-4">
            <div className="animate-glitch">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-secondary text-balance">
                Welcome to
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-primary text-balance">BULLEMSYNC</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background/90 section-bg-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-primary text-balance">
            What We Serve
          </h3>

          <div className="about-frame overflow-hidden">
            <div className="slider-container relative w-full flex snap-x snap-mandatory scroll-smooth overflow-x-auto touch-pan-x">
              {aboutSlides.map((slide, index) => (
                <div key={index} className="slider-slide w-full flex-shrink-0 px-4 sm:px-6 snap-center">
                  <div className="glass-card p-4 sm:p-6 md:p-8 h-full">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 relative z-10">{slide.emoji}</div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary relative z-10 text-balance">
                      {slide.title}
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground relative z-10 text-pretty">
                      {slide.content}
                    </p>

                    {slide.title.includes("Trader") && (
                      <div className="mt-4 sm:mt-6 flex justify-center">
                        <div className="token-badge">BST</div>
                      </div>
                    )}

                    {slide.title.includes("Listener") && (
                      <div className="mt-4 sm:mt-6 flex justify-center">
                        <div className="price-ticker text-xs sm:text-sm">
                          <span>Earn Rate:</span>
                          <span className="text-primary">0.05 $BST/min</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-dots flex justify-center mt-4">
              {aboutSlides.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => handleSlideClick(index)}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 text-foreground text-pretty">
              🌐 Every stream, trade, and purchase flows effortlessly through BST, making Bullemsync the ultimate
              ecosystem for music lovers, creators, and investors alike.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4">
              The future of music tech isn't coming — it's already here.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">✨  Stream. Trade. Earn.</p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 section-bg-5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary text-balance">
              Already {waitlistCount.toLocaleString()}+ joined the wave
            </h3>

            <div className="bg-card/50 border border-primary/20 rounded-lg p-4 mb-8 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-muted-foreground">
                  @Setswana joined • @fredrick joined Enzokuhle signed up • @joey_fan joined • @futurebeats registered •
                  @nneka joined • @enzokuhle joined • @yemi joined •
                </span>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground neon-border bg-transparent cursor-pointer"
              onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
            >
              Claim Your Spot
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Music Puzzle */}
      <section className="py-20 px-4 section-bg-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-accent text-balance">Unlock the Future</h3>

          <div className="flex justify-center space-x-4 mb-8">
            {[0, 1, 2].map((padIndex) => (
              <button
                key={padIndex}
                onClick={() => handlePadClick(padIndex)}
                className={`w-20 h-20 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  activePads.includes(padIndex)
                    ? "bg-primary border-primary neon-border animate-neon-pulse"
                    : "border-primary/30 hover:border-primary/60"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full ${activePads.includes(padIndex) ? "bg-primary-foreground" : "bg-primary/30"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {puzzleUnlocked && (
            <div className="mb-8 animate-fade-in">
              <p className="text-xl text-primary mb-6">You've unlocked the future of music.</p>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
                onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              >
                Join the Revolution
              </Button>
            </div>
          )}

          {!puzzleUnlocked && (
            <p className="text-muted-foreground">Click the pads in the right order to unlock something special...</p>
          )}
        </div>
      </section>

        {/* FAQ Section */}
      <section className="py-20 px-4 bg-background/95 section-bg-7">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-primary animate-neon-pulse">
            ❓ Cosmic FAQ: Decode the Bullemsync Universe
          </h3>

          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => {
                const container = document.querySelector(".faq-slider") as HTMLElement
                if (container) container.scrollBy({ left: -container.clientWidth, behavior: "smooth" })
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition"
            >
              ◀
            </button>

            {/* FAQ cards slider */}
            <div
              className="faq-slider flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-8"
              style={{ scrollbarWidth: "none" }}
            >
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] snap-center rounded-2xl border-2 border-accent/40 bg-card/80 backdrop-blur-lg shadow-lg p-6 transition-all duration-300 cursor-pointer ${
                    openFAQ === i ? "bg-primary/10 shadow-xl scale-[1.03]" : "hover:bg-primary/5"
                  }`}
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-semibold text-accent text-left">
                      {faq.q}
                    </h4>
                    <ChevronDown
                      className={`w-6 h-6 text-primary transition-transform ${
                        openFAQ === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFAQ === i && (
                    <p className="mt-4 text-foreground animate-fade-in text-left">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => {
                const container = document.querySelector(".faq-slider") as HTMLElement
                if (container) container.scrollBy({ left: container.clientWidth, behavior: "smooth" })
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition"
            >
              ▶
            </button>
          </div>

          <div className="mt-12">
            <p className="text-lg sm:text-xl text-secondary">
              Still curious? The Bullemsync universe keeps expanding 🚀
            </p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-2">
              <Image src="/images/bullemsync-logo.png" alt="Bullemsync Logo" width={60} height={60} />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">BULLEMSYNC</h2>
            <p className="text-sm text-muted-foreground">© All rights reserved. Bullemsync Global Horizon.</p>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/bullemsync?igsh=bGJpdm1vOXQ5aDF5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@bullemsync?_t=ZS-8zzdfqB5JWp&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.facebook.com/share/1DRhzrtHxz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/bullemsync?t=qEw7hFSn_pm4ff3a15vBgQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
