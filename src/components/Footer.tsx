import { Instagram, Youtube, MessageCircle, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Journal', href: '/journal' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-dark-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-serif text-2xl tracking-wide uppercase text-white">
                Baasuri Design Studio
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase mt-1 text-white/50">
                Interior Design Studio
              </span>
            </Link>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-transform">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="font-serif text-lg mb-6">Contact Info</h4>
             <ul className="space-y-4 text-sm text-white/60">
               <li>+91 7083064377</li>
               <li>hello@baasuridesign.com</li>
               <li>Shop no. 07, samruddhi vihar apartment, Hari Vishwa Balaji Car Rd, behind Radisson Blu hotel, Buddha Vihar, Pathardi Phata, Nashik, Maharashtra 422010</li>
             </ul>
             <div className="mt-8 text-xs text-white/40">
               <p>© {new Date().getFullYear()} Baasuri Design Studio.</p>
               <p>All Rights Reserved.</p>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
