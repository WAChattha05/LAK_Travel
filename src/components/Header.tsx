import { Menu, X, Phone } from 'lucide-react';
import LakTravelLogo from '../Images/LAKTravelLogo.webp';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
          <div
  className="flex items-center space-x-3 cursor-pointer -ml-4"
  onClick={() => handleNavClick('home')}
>
  <img
    src={LakTravelLogo}
    alt="Lak Travel Logo"
    className="h-14 w-auto object-contain"
  />
  <div>
    <h1 className="text-xl font-bold">Lak Travel & Transport</h1>
    <p className="text-xs text-amber-400">Premium Saudi Travel</p>
  </div>
</div>




           
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  currentPage === item.id ? 'text-amber-400' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+966501234567"
              className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>

          <button
            className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-700 text-amber-400'
                    : 'text-white hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+966501234567"
              className="flex items-center justify-center space-x-2 bg-amber-500 text-slate-900 px-4 py-3 rounded-lg font-semibold mt-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
