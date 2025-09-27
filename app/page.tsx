"use client"

import { useState, useEffect, useRef } from "react"
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
      content: "Imagine pressing play on your favorite track and watching your wallet grow at the same time. Every single minute you stream on Bullemsync, you earn $BST tokens — real digital rewards tied to your listening time. Whether you're vibing solo, curating playlists, or discovering new artists, your streams now have tangible value. Music isn't just entertainment anymore — it's a lifestyle where chilling to your favorite soundtracks puts you on the path to financial gain.",
      image: "/images/paragraph_relaxin_1.jpg"
    },
    {
      emoji: "💽",
      title: "For Traders", 
      content: "Think of songs as digital collectibles with real market value. On Bullemsync, every track can be bought, sold, and resold like limited-edition assets. As songs gain popularity, their trade value rises, letting you flip tracks like stocks or crypto. It's not just about listening anymore; it's about timing, strategy, and spotting the next big hit. Trading on Bullemsync transforms music into a marketplace, where your ear for sound becomes your edge in wealth-building.",
      image: "/images/paragraph_records_2.jpg"
    },
    {
      emoji: "🎤",
      title: "For Artists",
      content: "This is where the game changes for creators. Traditional streaming pays artists only from plays, but on Bullemsync, every trade of their song also funnels revenue back to them. That means each fan trade — buying, holding, or flipping — boosts the artist's income in real time. Artists are no longer limited to royalties; they share directly in the growth and demand of their own music. It's a new era where talent and community trading amplify each other, multiplying artist earnings beyond streams.",
      image: "/images/paragraph_stage_3.jpg"
    },
    {
      emoji: "🪙",
      title: "For Everyone",
      content: "At the core of this ecosystem is $BST — the heartbeat of Bullemsync. It powers every stream, every trade, and every transaction seamlessly across the globe. $BST ensures instant, borderless, and transparent interactions, making it simple for anyone, anywhere, to engage with music as both culture and economy.",
      image: "/images/artist-male-1.jpg"
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

  const artistSpotlight = [
    {
      image: "/images/artist-female-studio-new.jpg",
      name: "Studio Artist",
      role: "Producer & Composer",
      description: "Creating the next generation of tradable music assets"
    },
    {
      image: "/images/artist-male-1.jpg",
      name: "Independent Artist", 
      role: "Singer & Songwriter",
      description: "Turning streams into sustainable income"
    },
    {
      image: "/images/artist-male-rock.jpg",
      name: "Rock Performer",
      role: "Band Leader",
      description: "Engaging fans through music trading ecosystem"
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
        <meta name="description" content="Bullemsync transforms music into assets. Stream, trade, and earn $BST tokens. Join the future of music economy where listeners, artists, and traders thrive together." />
        <meta name="keywords" content="music streaming, crypto music, NFT songs, music trading, $BST token, blockchain music, earn from streaming" />
        <meta property="og:title" content="Bullemsync - Where Sound Becomes Assets" />
        <meta property="og:description" content="Revolutionary platform turning music streams into tradable assets. Join the waitlist today!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bullemsync.com" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Audio Element */}
        <audio ref={audioRef} loop>
          <source src="/audio/ambient.mp3" type="audio/mpeg" />
        </audio>

        {/* Simplified Background */}
        <div className="fixed inset-0 bg-black pointer-events-none" />
        
        {/* Subtle Star Background */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* Navigation - Simplified */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src="/images/bullemsync-logo.png" alt="Bullemsync Logo" width={40} height={40} />
              <span className="text-xl font-bold text-white">
                BULLEMSYNC
              </span>
            </div>
            
            <Button 
              onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              className="bg-white text-black hover:bg-gray-200 font-bold"
            >
              Join Waitlist
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-[url('/images/singer_stage_3.jpg')] bg-cover bg-center opacity-40" />
          
          {/* Audio Control */}
          <button 
            onClick={toggleAudio}
            className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            {/* Main Title */}
            <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-4 text-white">
                BULLEMSYNC
              </h1>
              
              {/* Bold Caption with Stage Image */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white bg-black/50 px-6 py-3 rounded-lg inline-block">
                WHERE MUSIC MEETS THE BLOCKCHAIN REVOLUTION
              </div>
            </div>

            {/* Taglines */}
            <div className="space-y-4 mb-12">
              <p className={`text-xl sm:text-2xl md:text-3xl font-light transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Stream <span className="font-semibold">smarter</span>, trade <span className="font-semibold">smarter</span>, earn <span className="font-semibold">smarter</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <Button
                size="lg"
                className="text-lg px-12 py-7 bg-white text-black hover:bg-gray-200 font-bold rounded-2xl transition-all duration-300"
                onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              >
                Join the Revolution
              </Button>
              
              {/* Waitlist Counter */}
              <div className="mt-6 text-sm text-gray-300">
                <span className="font-semibold">{waitlistCount.toLocaleString()}+</span> already on the waitlist
              </div>
            </div>

            {/* Single Learn More Section */}
            <div className="mt-16">
              <button
                onClick={() => setShowLearnMore(!showLearnMore)}
                className="flex items-center gap-2 mx-auto text-white hover:text-gray-300 transition-colors"
              >
                <span className="font-semibold">Learn More</span>
                <ArrowDown className={`w-4 h-4 transition-transform duration-300 ${showLearnMore ? 'rotate-180' : ''}`} />
              </button>
              
              {showLearnMore && (
                <div className="mt-6 max-w-4xl mx-auto bg-black/70 backdrop-blur-lg border border-white/20 rounded-2xl p-8 animate-fade-in">
                  <div className="space-y-6 text-left">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-white">About Bullemsync</h2>
                      <p className="text-gray-300 leading-relaxed">
                        Bullemsync is a next-generation music and trading platform designed to revolutionize how music is
                        experienced, valued, and monetized. At our core, we empower artists, traders, and listeners to
                        participate in a dynamic digital ecosystem where every song is an asset, every play has impact, and
                        every user can earn.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We're not just a streaming service — we're building an economy around music. Songs on Bullemsync are
                        tradable, each with a unique energy signature, trade color identity, and earning potential. Artists
                        maintain control and transparency over their content. Traders can speculate and earn through song
                        performance. Listeners can mine value by simply enjoying music or curating powerful Radio Channels.
                      </p>
                      <p className="text-gray-300 leading-relaxed font-semibold">
                        Join us as we reshape the future of music — one beat, one trade, one play at a time.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* User Roles Section */}
        <section className="py-20 relative">
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                The Ecosystem
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A revolutionary platform where every participant wins
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {userRoles.map((role, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{role.emoji}</div>
                      <h3 className="text-2xl font-bold text-white">
                        {role.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {role.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artist Spotlight Section */}
        <section className="py-20 relative">
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Artist Spotlight
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the creators shaping the future of music
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {artistSpotlight.map((artist, index) => (
                <div key={index} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
                      <p className="text-gray-300 font-semibold mb-2">{artist.role}</p>
                      <p className="text-gray-300 text-sm">{artist.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-black/80 relative">
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white">
              Frequently Asked Questions
            </h3>

            <div className="relative">
              <div
                ref={faqSliderRef}
                className="faq-slider flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-8 pb-4"
                style={{ scrollbarWidth: "none" }}
              >
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] snap-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg p-6 transition-all duration-300 cursor-pointer ${
                      openFAQ === i ? "bg-white/10 scale-[1.03]" : "hover:bg-white/10"
                    }`}
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg sm:text-xl font-semibold text-white text-left">
                        {faq.q}
                      </h4>
                      <ChevronDown
                        className={`w-6 h-6 text-white transition-transform ${
                          openFAQ === i ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openFAQ === i && (
                      <p className="mt-4 text-gray-300 animate-fade-in text-left">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Ready to Revolutionize Music?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of early adopters who are already shaping the future of music streaming and trading.
              </p>

              <Button
                size="lg"
                className="px-12 py-6 bg-white text-black hover:bg-gray-200 font-bold rounded-2xl text-lg transition-all duration-300"
                onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              >
                Join Waitlist Now
              </Button>

              {/* Live Counter */}
              <div className="mt-8 p-4 bg-black/40 rounded-2xl border border-white/10">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Live Waitlist Count:</span>
                  </div>
                  <span className="text-white font-bold text-xl">{waitlistCount.toLocaleString()}+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/images/bullemsync-logo.png" alt="Bullemsync Logo" width={40} height={40} />
                  <h2 className="text-2xl font-bold text-white">
                    BULLEMSYNC
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  Revolutionizing the music industry through advanced technology and community-driven innovation.
                </p>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-white mb-4">Connect</h3>
                <div className="flex gap-4">
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
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <SocialIcon.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
              <p>© 2024 Bullemsync. All rights reserved. The future of music is here.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
