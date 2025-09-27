"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Music, Facebook, ChevronDown, Play, Users, TrendingUp, Headphones } from "lucide-react";
import Image from "next/image";

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function BullemsyncLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(4200);
  const [activePads, setActivePads] = useState<number[]>([]);
  const [puzzleUnlocked, setPuzzleUnlocked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const audienceCards = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "🎧 For Listeners",
      content: "Imagine pressing play on your favorite track and watching your wallet grow at the same time. Every single minute you stream on Bullemsync, you earn $BST tokens — real digital rewards tied to your listening time. Whether you're vibing solo, curating playlists, or discovering new artists, your streams now have tangible value. Music isn't just entertainment anymore — it's a lifestyle where chilling to your favorite soundtracks puts you on the path to financial gain.",
      image: "/images/paragraph_relaxin_1.jpg",
      color: "from-green-500/10 to-blue-500/10",
      border: "border-green-400/30"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "💽 For Traders",
      content: "Think of songs as digital collectibles with real market value. On Bullemsync, every track can be bought, sold, and resold like limited-edition assets. As songs gain popularity, their trade value rises, letting you flip tracks like stocks or crypto. It's not just about listening anymore; it's about timing, strategy, and spotting the next big hit. Trading on Bullemsync transforms music into a marketplace, where your ear for sound becomes your edge in wealth-building.",
      image: "/images/paragraph_records_2.jpg",
      color: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-400/30"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "🎤 For Artists",
      content: "This is where the game changes for creators. Traditional streaming pays artists only from plays, but on Bullemsync, every trade of their song also funnels revenue back to them. That means each fan trade — buying, holding, or flipping — boosts the artist's income in real time. Artists are no longer limited to royalties; they share directly in the growth and demand of their own music. It's a new era where talent and community trading amplify each other, multiplying artist earnings beyond streams.",
      image: "/images/paragraph_stage_3.jpg",
      color: "from-orange-500/10 to-red-500/10",
      border: "border-orange-400/30"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "🪙 For Everyone",
      content: "At the core of this ecosystem is $BST — the heartbeat of Bullemsync. It powers every stream, every trade, and every transaction seamlessly across the globe. $BST ensures instant, borderless, and transparent interactions, making it simple for anyone, anywhere, to engage with music as both culture and economy. Whether you're a listener stacking tokens, a trader building a portfolio, or an artist scaling your career, $BST ties it all together into one unified, future-ready platform.",
      image: "/images/paragraph_stage_3.jpg",
      color: "from-blue-500/10 to-green-500/10",
      border: "border-neon-green/30"
    }
  ];

  const faqs = [
    {
      q: "What is Bullemsync?",
      a: "Bullemsync is a next-gen music streaming and trading platform where songs are assets you can stream, trade, and earn from."
    },
    {
      q: "How do I earn as a listener?",
      a: "Listeners earn BST tokens for the time they spend streaming music. Every minute pays you back with 0.05 $BST."
    },
    {
      q: "What's special for artists?",
      a: "Artists earn not just from streams but also trading commissions whenever their tracks are bought or sold."
    },
    {
      q: "Can I trade songs like crypto?",
      a: "Yes! Songs on Bullemsync can be traded like digital assets, allowing you to buy, hold, and resell tracks for profit."
    },
    {
      q: "What is BST?",
      a: "BST (Bullemsync Token) is our in-app currency powering streams, trades, and rewards."
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setWaitlistCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePadClick = (padIndex: number) => {
    const newActivePads = [...activePads, padIndex];
    setActivePads(newActivePads);

    if (newActivePads.length === 3 && newActivePads.join("") === "012") {
      setPuzzleUnlocked(true);
    } else if (newActivePads.length >= 3) {
      setActivePads([]);
      setPuzzleUnlocked(false);
    }
  };

  const handleFAQScroll = (direction: "left" | "right") => {
    const container = document.querySelector(".faq-slider") as HTMLElement;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center reflective-floor hero-bg">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-1 bg-neon-green/30 animate-waveform"
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
              className="absolute w-1 h-1 bg-neon-green rounded-full animate-float opacity-60"
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
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-neon-green animate-neon-pulse text-balance">
              BULLEMSYNC
            </h1>
            <div className="w-32 h-1 bg-neon-green mx-auto mt-4 neon-border" />
          </div>

          <div className="space-y-6 mb-12">
            <p
              className={`text-lg sm:text-2xl md:text-4xl font-light transition-all duration-1000 delay-500 text-balance ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              We're about to turn sound into assets<span className="text-neon-green">...</span>
            </p>
            <p
              className={`text-lg sm:text-2xl md:text-4xl font-light transition-all duration-1000 delay-1000 text-balance ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <span className="text-neon-green">...and vibes into value... Brace up!</span>
            </p>
          </div>

          <Button
            size="lg"
            className={`text-xl px-8 py-6 bg-neon-green text-black hover:bg-neon-green/90 neon-border animate-neon-pulse transition-all duration-1000 delay-1500 cursor-pointer ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
          >
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* What We Serve Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-neon-green">
            What We Serve
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {audienceCards.map((card, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl border ${card.border} bg-gradient-to-br ${card.color} backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-neon-green">
                      {card.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neon-green">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {card.content}
                  </p>
                  
                  {index === 0 && (
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-neon-green/20 rounded-full">
                      <span className="text-neon-green text-sm font-semibold">Earn Rate: 0.05 $BST/min</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-neon-green/20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-neon-green">
              About Bullemsync
            </h2>
            
            <div className="space-y-8 text-lg text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
                <p>
                  Bullemsync is a next-generation music and trading platform designed to revolutionize how music is
                  experienced, valued, and monetized. At our core, we empower artists, traders, and listeners to
                  participate in a dynamic digital ecosystem where every song is an asset, every play has impact, and
                  every user can earn.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">The Ecosystem</h3>
                <p>
                  We're not just a streaming service — we're building an economy around music. Songs on Bullemsync are
                  tradable, each with a unique energy signature, trade color identity, and earning potential. Artists
                  maintain control and transparency over their content. Traders can speculate and earn through song
                  performance. Listeners can mine value by simply enjoying music or curating powerful Radio Channels.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                <p>
                  Our mission is to democratize digital music ownership, protect creative integrity, and unlock new
                  financial opportunities across borders. With immersive design, real-time metrics, and in-app currency
                  (BST), Bullemsync blends innovation, community, and creativity into one seamless experience.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-neon-green text-xl font-semibold">
                  Join us as we reshape the future of music — one beat, one trade, one play at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-black/70">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-neon-green">
              Already {waitlistCount.toLocaleString()}+ joined the wave
            </h3>

            <div className="bg-black/50 border border-neon-green/20 rounded-lg p-4 mb-8 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-gray-300">
                  @Setswana joined • @fredrick joined • Enzokuhle signed up • @joey_fan joined • @futurebeats registered •
                  @nneka joined • @enzokuhle joined • @yemi joined •
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black neon-border bg-transparent cursor-pointer"
              onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
            >
              Claim Your Spot
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Music Puzzle */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-neon-green">Unlock the Future</h3>

          <div className="flex justify-center space-x-4 mb-8">
            {[0, 1, 2].map((padIndex) => (
              <button
                key={padIndex}
                onClick={() => handlePadClick(padIndex)}
                className={`w-20 h-20 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  activePads.includes(padIndex)
                    ? "bg-neon-green border-neon-green neon-border animate-neon-pulse"
                    : "border-neon-green/30 hover:border-neon-green/60"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full ${activePads.includes(padIndex) ? "bg-black" : "bg-neon-green/30"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {puzzleUnlocked && (
            <div className="mb-8 animate-fade-in">
              <p className="text-xl text-neon-green mb-6">You've unlocked the future of music.</p>
              <Button
                className="bg-neon-green text-black hover:bg-neon-green/90 px-8 py-4 text-lg"
                onClick={() => window.open("https://forms.gle/8f2o9aFvqrKn7pwU9", "_blank")}
              >
                Join the Revolution
              </Button>
            </div>
          )}

          {!puzzleUnlocked && (
            <p className="text-gray-400">Click the pads in the right order to unlock something special...</p>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neon-green animate-neon-pulse">
            Frequently Asked Questions
          </h3>

          <div className="relative">
            <button
              onClick={() => handleFAQScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-neon-green/20 rounded-full hover:bg-neon-green/40 transition text-neon-green"
            >
              ◀
            </button>

            <div
              className="faq-slider flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-8"
              style={{ scrollbarWidth: "none" }}
            >
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] snap-center rounded-2xl border-2 border-neon-green/40 bg-black/50 backdrop-blur-lg shadow-lg p-6 transition-all duration-300 cursor-pointer ${
                    openFAQ === i ? "bg-neon-green/10 shadow-xl scale-[1.03]" : "hover:bg-neon-green/5"
                  }`}
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl font-semibold text-neon-green text-left">
                      {faq.q}
                    </h4>
                    <ChevronDown
                      className={`w-6 h-6 text-neon-green transition-transform ${
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

            <button
              onClick={() => handleFAQScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-neon-green/20 rounded-full hover:bg-neon-green/40 transition text-neon-green"
            >
              ▶
            </button>
          </div>

          <div className="mt-12">
            <p className="text-lg sm:text-xl text-neon-green">
              Still curious? The Bullemsync universe keeps expanding 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-neon-green/20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-2">
              <Image src="/images/bullemsync-logo.png" alt="Bullemsync Logo" width={60} height={60} />
            </div>
            <h2 className="text-3xl font-bold text-neon-green mb-2">BULLEMSYNC</h2>
            <p className="text-sm text-gray-400">© All rights reserved. Bullemsync Global Horizon.</p>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/bullemsync?igsh=bGJpdm1vOXQ5aDF5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-green transition-colors cursor-pointer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@bullemsync?_t=ZS-8zzdfqB5JWp&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-green transition-colors cursor-pointer"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.facebook.com/share/1DRhzrtHxz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-green transition-colors cursor-pointer"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/bullemsync?t=qEw7hFSn_pm4ff3a15vBgQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-green transition-colors cursor-pointer"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 128, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 128, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .reflective-floor {
          background: linear-gradient(to bottom, transparent 60%, rgba(0, 255, 128, 0.1));
        }
        
        .hero-bg {
          background: radial-gradient(ellipse at center, rgba(0, 20, 10, 0.8) 0%, rgba(0, 0, 0, 1) 70%);
        }
        
        .glass-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 128, 0.2);
        }
        
        .neon-border {
          box-shadow: 0 0 10px rgba(0, 255, 128, 0.5), 0 0 20px rgba(0, 255, 128, 0.3);
        }
        
        .neon-green {
          color: #00ff80;
        }
        
        .bg-neon-green {
          background-color: #00ff80;
        }
        
        .border-neon-green {
          border-color: #00ff80;
        }
        
        @keyframes neon-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes waveform {
          0%, 100% { height: 20px; }
          50% { height: 60px; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .animate-neon-pulse {
          animation: neon-pulse 2s infinite;
        }
        
        .animate-waveform {
          animation: waveform 1.5s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-glitch {
          animation: glitch 0.5s infinite;
        }
      `}</style>
    </div>
  );
}
