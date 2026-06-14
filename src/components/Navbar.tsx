import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Journal', href: '/journal' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerBgStyle = isScrolled || !isHomePage
    ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm'
    : 'bg-transparent py-6';

  const textColorClass = isScrolled || !isHomePage ? 'text-dark-brown' : 'text-white';
  const subtitleColorClass = isScrolled || !isHomePage ? 'text-taupe' : 'text-white/80';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerBgStyle}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col">
              <span className={`font-serif text-2xl tracking-wide uppercase transition-colors ${textColorClass}`}>
                Your Interior Studio
              </span>
              <span className={`text-[0.65rem] tracking-[0.2em] font-medium uppercase mt-1 transition-colors ${subtitleColorClass}`}>
                Interior Design Studio
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase transition-colors hover:opacity-100 ${
                    isActive
                      ? (isScrolled || !isHomePage ? 'text-dark-brown font-semibold' : 'text-white font-semibold')
                      : (isScrolled || !isHomePage ? 'text-dark-brown/70 hover:text-dark-brown' : 'text-white/80 hover:text-white')
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`transition-colors ${textColorClass}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center pt-24 pb-12 px-6"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-dark-brown"
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-3xl transition-colors ${
                      isActive ? 'text-gold' : 'text-dark-brown hover:text-gold'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
