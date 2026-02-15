import { Car, Hotel, MessageCircle, ArrowRight } from 'lucide-react';
import heroBg from '../Images/Hero.webp';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on background
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100,
        ease: 'none',
      });

      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      }

      // Description animation
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      }

      // Stats cards animation
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('[data-stat]');
        gsap.fromTo(
          statCards,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/+966530727351', '_blank');
  };

  const handleBookTransport = () => {
    if (onNavigate) {
      onNavigate('services');
    }
  };

  const handleBookHotel = () => {
    if (onNavigate) {
      onNavigate('hotels');
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div
      className="absolute inset-0 bg-cover bg-center opacity-90"
      style={{ backgroundImage: `url(${heroBg})` }} 
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <br></br>
          <div className="mb-6 animate-fade-in">
            <span className="inline-block bg-amber-500/10 text-amber-400 px-6 py-2 rounded-full text-sm font-semibold border border-amber-500/20">
              Trusted by Thousands of Pilgrims & Travelers
            </span>
          </div>
          <br></br>
          <br></br>
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Premium Travel & Transport
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mt-2">
              Across Saudi Arabia
            </span>
          </h1>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
                    

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up-delay-2">
            <button
              onClick={handleBookTransport}
              className="group bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <Car size={24} />
              <span>Book Transport</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={handleBookHotel}
              className="group bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <Hotel size={24} />
              <span>Book Hotel</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={handleWhatsApp}
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </button>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '50K+', label: 'Happy Clients' },
              { number: '100+', label: 'Premium Vehicles' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div
                key={index}
                data-stat="true"
                className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-6 hover:bg-slate-800/70 transition-all hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
