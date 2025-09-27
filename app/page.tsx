"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Instagram, Music, Facebook, ChevronDown, Play, Pause, Volume2, ArrowDown } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

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
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(4200)
  const [activePads, setActivePads] = useState<number[]>([])
  const [puzzleUnlocked, setPuzzleUnlocked] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showLearnMore, setShowLearnMore] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const faqSliderRef = useRef<HTMLDivElement>(null)

  const userRoles = [
    {
      emoji: "🎧",
      title: "For Listeners",
      content: "Imagine pressing play on your favorite track and watching your wallet grow at the same time. Every single minute you stream on Bullemsync, you earn $BST tokens — real digital rewards tied to your listening time.",
      image: "/images/paragraph_relaxin_1.jpg"
    },
    {
      emoji: "💽",
      title: "For Traders", 
      content: "Think of songs as digital collectibles with real market value. On Bullemsync, every track can be bought, sold, and resold like limited-edition assets.",
      image: "/images/paragraph_records_2.jpg"
    },
    {
      emoji: "🎤",
      title: "For Artists",
      content: "Traditional streaming pays artists only from plays, but on Bullemsync, every trade of their song also funnels revenue back to them.",
      image: "/images/paragraph_stage_3.jpg"
    }
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
      q: "What's special for artists?",
      a: "Artists earn not just from streams but also trading commissions whenever their tracks are bought or sold.",
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setWaitlistCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePadClick = (padIndex: number) => {
    const newActivePads = [...activePads, padIndex]
    setActivePads(newActivePads)

    if (newActivePads.length === 3 && newActivePads.join("") === "012") {
      setPuzzleUnlocked(true)
    } else if (newActivePads.length >= 3) {
      setActivePads([])
      setPuzzleUnlocked(false)
    }
  }

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleFAQScroll = (direction: "left" | "right") => {
    if (faqSliderRef.current) {
      const scrollAmount = faqSliderRef.current.clientWidth
      faqSliderRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      })
    }
  }

  return (
    <>
      <Head>
        <title>Bullemsync - Revolutionizing Music Streaming & Trading Platform</title>
        <meta name="description" content="Bullemsync transforms music into assets. Stream, trade, and earn $BST tokens. Join the future of music economy." />
        <meta name="keywords" content="music streaming, crypto music, NFT songs, music trading, $BST token" />
        <meta property="og:title" content="Bullemsync - Where Sound Becomes Assets" />
        <meta property="og:description" content="Revolutionary platform turning music streams into tradable assets." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bullemsync.com" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Audio Element */}
        <audio ref={audioRef} loop>
          <source src="/audio/ambient.mp3" type="audio/mpeg" />
        </audio>

        {/* Simple Star Background */}
        <div className="fixed inset-0 bg-black pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Navigation - Clean and Simple */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src="/images/bullemsync-logo.png" alt="Bullemsync Logo" width={35} height={35} />
              <span className="text-lg font-bold text-white">BULLEMSYNC</span>
            </div>
            
            <Button 
              onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              className="bg-white text-black hover:bg-gray-200 font-semibold"
            >
              Join Waitlist
            </Button>
          </div>
        </nav>

        {/* Hero Section with Prominent Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src="/images/singer_stage_3.jpg"
              alt="Artist performing on stage"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Audio Control */}
          <button 
            onClick={toggleAudio}
            className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white" />
            )}
          </button>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Main Content */}
            <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <div className="flex items-center justify-center mb-8">
                <Image
                  src="/images/bullemsync-logo.png"
                  alt="Bullemsync Logo"
                  width={120}
                  height={120}
                  className="filter brightness-125"
                />
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 text-white">
                BULLEMSYNC
              </h1>
              
              {/* Bold Caption with Prominent Image Reference */}
              <div className="mb-8">
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mb-4">
                  Where Music Meets Blockchain
                </p>
                <div className="w-32 h-1 bg-white mx-auto mt-4 rounded-full" />
              </div>
            </div>

            {/* Taglines */}
            <div className="space-y-4 mb-12">
              <p className={`text-lg sm:text-2xl font-light transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Stream <span className="text-white font-semibold">smarter</span>
              </p>
              <p className={`text-lg sm:text-2xl font-light transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Trade <span className="text-white font-semibold">smarter</span>
              </p>
              <p className={`text-lg sm:text-2xl font-light transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Earn <span className="text-white font-semibold">smarter</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <Button
                size="lg"
                className="text-lg px-12 py-6 bg-white text-black hover:bg-gray-200 font-semibold rounded-xl border-0 shadow-2xl transition-all duration-300"
                onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              >
                Join the Revolution
              </Button>
              
              {/* Waitlist Counter */}
              <div className="mt-6 text-sm text-gray-400">
                <span className="text-white font-semibold">{waitlistCount.toLocaleString()}+</span> already on the waitlist
              </div>
            </div>

            {/* Single Learn More Section */}
            <div className="mt-16">
              <button
                onClick={() => setShowLearnMore(!showLearnMore)}
                className="flex items-center gap-2 mx-auto text-white hover:text-gray-300 transition-colors group"
              >
                <span className="font-medium">Learn More</span>
                <ArrowDown className={`w-4 h-4 transition-transform duration-300 ${showLearnMore ? 'rotate-180' : ''}`} />
              </button>
              
              {showLearnMore && (
                <div className="mt-6 max-w-3xl mx-auto bg-black/50 backdrop-blur-lg border border-white/20 rounded-xl p-6 animate-fade-in">
                  <div className="space-y-4 text-left">
                    <h2 className="text-xl font-bold text-white">About Bullemsync</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Bullemsync is a next-generation music and trading platform designed to revolutionize how music is
                      experienced, valued, and monetized. We empower artists, traders, and listeners to participate in a 
                      dynamic digital ecosystem where every song is an asset.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We're building an economy around music. Songs on Bullemsync are tradable assets with real value.
                      Artists maintain control and transparency while earning from both streams and trades.
                    </p>
                    <p className="text-gray-300 leading-relaxed font-medium">
                      Join us as we reshape the future of music — one beat, one trade, one play at a time.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* User Roles Section */}
        <section className="py-20 relative bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                The Ecosystem
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A platform where every participant wins - artists, listeners, and traders alike
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {userRoles.map((role, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/5 rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{role.emoji}</div>
                      <h3 className="text-xl font-bold text-white">
                        {role.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {role.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prominent Image Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/singer_stage_3.jpg"
                alt="Artist commanding the stage"
                width={1200}
                height={600}
                className="w-full h-64 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  The Stage is Yours
                </h3>
                <p className="text-gray-200 text-lg">
                  Every performance, every stream, every trade - building the future of music together
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-white">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-lg border border-white/10 p-6 text-left cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-white">
                      {faq.q}
                    </h4>
                    <ChevronDown
                      className={`w-5 h-5 text-white transition-transform ${
                        openFAQ === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFAQ === i && (
                    <p className="mt-3 text-gray-300 animate-fade-in">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Begin?
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of early adopters shaping the future of music streaming and trading.
              </p>

              <Button
                size="lg"
                className="px-12 py-6 bg-white text-black hover:bg-gray-200 font-semibold rounded-xl text-lg transition-all duration-300"
                onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              >
                Join Waitlist Now
              </Button>

              {/* Live Counter */}
              <div className="mt-6 p-4 bg-black/30 rounded-xl border border-white/10">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span>Live Waitlist Count:</span>
                  </div>
                  <span className="text-white font-bold text-lg">{waitlistCount.toLocaleString()}+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/images/bullemsync-logo.png" alt="Bullemsync Logo" width={40} height={40} />
                  <h2 className="text-xl font-bold text-white">BULLEMSYNC</h2>
                </div>
                <p className="text-gray-400 text-sm">
                  Revolutionizing music through technology and community.
                </p>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-white mb-4">Connect</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/bullemsync" },
                    { icon: TikTokIcon, href: "https://www.tiktok.com/@bullemsync" },
                    { icon: Facebook, href: "https://www.facebook.com/bullemsync" },
                    { icon: XIcon, href: "https://x.com/bullemsync" }
                  ].map((SocialIcon, index) => (
                    <a
                      key={index}
                      href={SocialIcon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                      <SocialIcon.icon className="w-4 h-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
              <p>© 2024 Bullemsync. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
