import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import LakTravelLogo from '../Images/LAKTravelLogo.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
           <div className="flex items-center space-x-3 mb-4">
  <img
    src={LakTravelLogo}
    alt="Lak Travel Logo"
    className="h-14 w-auto object-contain"
  />
  <div>
    <h3 className="text-xl font-bold">Lak Travel & Transport</h3>
    <p className="text-xs text-amber-400">Premium Saudi Travel</p>
  </div>
</div>

            <p className="text-gray-400 leading-relaxed mb-4">
              Your trusted partner for premium transportation and hospitality services across Saudi Arabia's holy cities.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'packages'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-gray-400 hover:text-amber-400 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Our Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-amber-400 transition-colors">Luxury Taxi</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-amber-400 transition-colors">Big Cars & Vans</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-amber-400 transition-colors">Bus Rentals</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-amber-400 transition-colors">Airport Transfer</button></li>
              <li><button onClick={() => handleNavClick('hotels')} className="text-gray-400 hover:text-amber-400 transition-colors">Hotel Booking</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="text-amber-400 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">+966 53 072 7351</p>
                  <p className="text-gray-400">+923 44 841 6835</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="text-amber-400 mr-3 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-400">info@laktransport.sa</p>
              </li>
              <li className="flex items-start">
                <MapPin className="text-amber-400 mr-3 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-400">Makkah, Madinah & Jeddah<br />Saudi Arabia</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lak Travel & Transport. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
