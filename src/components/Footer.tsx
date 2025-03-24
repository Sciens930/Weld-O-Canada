import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const handleLinkClick = (path: string) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Palleto Canada</h3>
            <p className="text-gray-400">
              Innovative steel pallet solutions for a sustainable future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white" onClick={() => handleLinkClick('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop_section" className="text-gray-400 hover:text-white" onClick={() => handleLinkClick('/shop_section')}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white" onClick={() => handleLinkClick('/about-us')}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white" onClick={() => handleLinkClick('/contact-us')}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Phone: +1 416-630-7177</p>
            <p className="text-gray-400">
              Email: <a href="mailto:info@palletocanada.com" className="hover:text-white">info@palletocanada.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Palleto Canada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;