"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, Music, Facebook, ChevronDown, Play, Pause, Volume2 } from "lucide-react"
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
  const [activePads, setActivePads] = useState<number[]>([])
  const [puzzleUnlocked, setPuzzleUnlocked] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

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
      content: "This is where the game changes for creators. Traditional streaming pays artists only from plays, but on Bullemsync, every trade of their song also funnels revenue back to them.",
      image: "/images/paragraph_stage_3.jpg"
    },
    {
      emoji: "🪙",
      title: "For Everyone",
      content: "At the core of this ecosystem is $BST — the heartbeat of Bullemsync. It powers every stream, every trade, and every transaction seamlessly across the globe.",
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/audio/ambient.mp3" type="audio/mpeg" />
      </audio>

      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black pointer-events-none" />
      <div className="fixed inset-0 animate-pulse-slow">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/0 via-blue-900/10 to-black" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        
        {/* Audio Control */}
        <button 
          onClick={toggleAudio}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center hover:bg-purple-600/30 transition-all duration-300 group"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-purple-300" />
          ) : (
            <Play className="w-5 h-5 text-purple-300" />
          )}
          <Volume2 className="absolute w-3 h-3 text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity -top-1 -right-1" />
        </button>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Animated Logo */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Image
                  src="/images/bullemsync-logo.png"
                  alt="Bullemsync Logo"
                  width={140}
                  height={140}
                  className="animate-float-slow"
                />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
            
            {/* Main Title with Gradient */}
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              BULLEMSYNC
            </h1>
            
            {/* Animated Underline */}
            <div className="w-48 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full animate-pulse" />
          </div>

          {/* Taglines with Staggered Animation */}
          <div className="space-y-4 mb-12">
            <p className={`text-xl sm:text-3xl md:text-4xl font-light transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Where <span className="text-purple-400 font-semibold">sound becomes assets</span>
            </p>
            <p className={`text-xl sm:text-3xl md:text-4xl font-light transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              And <span className="text-cyan-400 font-semibold">vibes transform into value</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <Button
              size="lg"
              className="relative text-lg px-12 py-7 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-2xl border-0 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group overflow-hidden"
              onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
            >
              <span className="relative z-10">Join the Revolution</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            
            {/* Waitlist Counter */}
            <div className="mt-6 text-sm text-gray-400">
              <span className="text-purple-400 font-semibold">{waitlistCount.toLocaleString()}+</span> already on the waitlist
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
                className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/10 rounded-3xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${role.image})` }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{role.emoji}</div>
                    <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                      {role.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {role.content}
                  </p>
                  
                  {/* Interactive Element */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-purple-400 text-sm font-semibold">Learn More →</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">+</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/5 group-hover:to-purple-500/10 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/5 to-black" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-blue-500/20 p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  🎧 For Listeners
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Imagine pressing play on your favorite track and watching your wallet grow at the same time. 
                  Every single minute you stream on Bullemsync, you earn $BST tokens — real digital rewards tied to your listening time. 
                  Whether you're vibing solo, curating playlists, or discovering new artists, your streams now have tangible value. 
                  Music isn't just entertainment anymore — it's a lifestyle where chilling to your favorite soundtracks puts you on the path to financial gain.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/paragraph_relaxin_1.jpg"
                  alt="Listener Experience"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl -z-10" />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-green-500/20 p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/images/paragraph_records_2.jpg"
                  alt="Trading Experience"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl -z-10" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  💽 For Traders
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Think of songs as digital collectibles with real market value. On Bullemsync, every track can be bought, sold, and resold like limited-edition assets. 
                  As songs gain popularity, their trade value rises, letting you flip tracks like stocks or crypto. 
                  It's not just about listening anymore; it's about timing, strategy, and spotting the next big hit. 
                  Trading on Bullemsync transforms music into a marketplace, where your ear for sound becomes your edge in wealth-building.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-yellow-500/20 p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  🎤 For Artists
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  This is where the game changes for creators. Traditional streaming pays artists only from plays, but on Bullemsync, every trade of their song also funnels revenue back to them. 
                  That means each fan trade — buying, holding, or flipping — boosts the artist's income in real time. 
                  Artists are no longer limited to royalties; they share directly in the growth and demand of their own music. 
                  It's a new era where talent and community trading amplify each other, multiplying artist earnings beyond streams.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/paragraph_stage_3.jpg"
                  alt="Artist Experience"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/20 rounded-3xl border border-purple-500/30 p-12 backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Revolutionize Music?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of early adopters who are already shaping the future of music streaming and trading.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-2xl text-lg transition-all duration-300 shadow-2xl shadow-purple-500/25"
                onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              >
                Join Waitlist Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-2xl text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Live Counter */}
            <div className="mt-8 p-4 bg-black/30 rounded-2xl border border-purple-500/20">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Live Waitlist Count:</span>
                </div>
                <span className="text-purple-400 font-bold text-xl">{waitlistCount.toLocaleString()}+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/images/bullemsync-logo.png" alt="Bullemsync Logo" width={50} height={50} />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  BULLEMSYNC
                </h2>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionizing the music industry through blockchain technology and community-driven innovation.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
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
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    <SocialIcon.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 Bullemsync. All rights reserved. The future of music is here.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
