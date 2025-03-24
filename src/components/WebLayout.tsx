import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, ArrowUp } from 'lucide-react';

interface WeldLayoutProps {
  children: React.ReactNode;
}

const WeldLayout: React.FC<WeldLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="py-2 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 416-630-7177</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@weldocanada.com" className="hover:text-yellow-400">info@weldocanada.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/weldocanada" className="hover:text-yellow-400">Facebook</a>
              <a href="https://www.linkedin.com/company/weldocanada" className="hover:text-yellow-400">LinkedIn</a>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="py-4 flex justify-between items-center">
            <div className="flex-shrink-0">
              <img src="https://weldocanada.com/wp-content/uploads/2018/03/logo-weldo1.png" alt="Weld O Canada" className="h-16" />
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-yellow-400">Home</Link>
              <Link to="/services" className="hover:text-yellow-400">Services</Link>
              <Link to="/about" className="hover:text-yellow-400">About Us</Link>
              <Link to="/palleto_canada" className="hover:text-yellow-400">Palleto Canada</Link>
              <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
              <button className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-md hover:bg-yellow-500 transition">
                Get Quote
              </button>
            </div>
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src="https://weldocanada.com/wp-content/uploads/2018/03/logo-weldo1.png" alt="Weld O Canada" className="h-12 mb-4" />
              <p className="mb-4">Excellence in industrial welding and fabrication services since 1998.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellow-400">Facebook</a>
                <a href="#" className="hover:text-yellow-400">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
                <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
                <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-yellow-400">Power & Process Pipe Welding</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Custom Fabrication</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Structural Work</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Tank Fabrication</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Engineering Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  6811 Edwards Blvd, Mississauga, ON L5T 2S2
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  +1 416-630-7177
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  info@weldocanada.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <p>© 2025 Weld O Canada. All rights reserved.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeldLayout;

