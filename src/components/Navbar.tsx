import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useCart } from '../pages/CartContext';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (path: string) => {
    console.log(`Navigating to: ${path}`);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaPhone className="mr-2" size={20} />
              <span className="font-bold">+1 416-630-7177</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" size={20} />
              <a href="mailto:info@palletocanada.com" className="font-bold">
                info@palletocanada.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(153,220,52)] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <Link to="/" onClick={() => handleLinkClick('/')}>
              <img
                src="https://palletocanada.com/wp-content/uploads/2024/02/palleto-logo.png"
                alt="Palleto Canada"
                className="h-10"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  (e.target as HTMLImageElement).src =
                    'https://via.placeholder.com/210x70?text=Palleto+Canada+Logo';
                }}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-6 relative">
            <Link to="/Palleto_Canada" className="hover:text-gray-200 font-medium" onClick={() => handleLinkClick('/Palleto_Canada')}>
              Home
            </Link>
            {/* Shop Dropdown */}
            <div className="relative group">
              <Link
                to="/shop_section"
                className="hover:text-gray-200 font-medium flex items-center"
                onClick={() => handleLinkClick('/shop_section')}
              >
                Shop
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-96 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <div className="flex">
                  {/* Left Green Section */}
                  <div className="w-1/3 bg-custom-green text-white p-4 rounded-l-lg">
                    <h3 className="text-lg font-semibold mb-2">Pallets</h3>
                  </div>
                  {/* Right Content Section */}
                  <div className="w-2/3 p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Steel Pallets */}
                      <div>
                        <h4 className="font-bold text-sm uppercase mb-2">Steel Pallets</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              to="https://palletocanada.com/product/super-light-steel-pallet/"
                              className="text-gray-700 hover:text-custom-green text-sm"
                              onClick={() => handleLinkClick('/shop/steel/super-light')}
                            >
                              Super Light Steel Pallet
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://palletocanada.com/product/light-steel-pallet/"
                              className="text-gray-700 hover:text-custom-green text-sm"
                              onClick={() => handleLinkClick('/shop/steel/light')}
                            >
                              Light Steel Pallet
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://palletocanada.com/product/medium-steel-pallet/"
                              className="text-gray-700 hover:text-custom-green text-sm"
                              onClick={() => handleLinkClick('/shop/steel/medium')}
                            >
                              Medium Steel Pallet
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://palletocanada.com/product/heavy-steel-pallet/"
                              className="text-gray-700 hover:text-custom-green text-sm"
                              onClick={() => handleLinkClick('/shop/steel/heavy')}
                            >
                              Heavy Steel Pallet
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Aluminum Pallets */}
                      <div>
                        <h4 className="font-bold text-sm uppercase mb-2">Aluminum Pallets</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              to="https://palletocanada.com/product/super-light-steel-pallet/"
                              className="text-gray-700 hover:text-custom-green text-sm"
                              onClick={() => handleLinkClick('/shop/aluminum/size-40x40')}
                            >
                              Size 40 x 40
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/aboutus" className="hover:text-gray-200 font-medium" onClick={() => handleLinkClick('/aboutus')}>
              About us
            </Link>
            <Link to="/contactus" className="hover:text-gray-200 font-medium" onClick={() => handleLinkClick('/contactus')}>
              Contact us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <FaSearch className="cursor-pointer hover:text-gray-200" size={20} />
            <Link to="/cart" className="relative">
              <FaShoppingCart className="cursor-pointer hover:text-gray-200" size={20} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </Link>
          </div>

          <div className="lg:hidden">
            <FaBars className="cursor-pointer" size={24} onClick={toggleMobileMenu} />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-green-600 text-white">
            <div className="flex border-b border-green-700">
              <button className="flex-1 py-3 text-center font-medium border-b-2 border-white">
                Menu
              </button>
              <button className="flex-1 py-3 text-center font-medium">
                Categories
              </button>
            </div>
            <ul className="px-4 py-2">
              <li className="py-2">
                <Link to="/" onClick={() => { toggleMobileMenu(); handleLinkClick('/'); }}>
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link to="/shop_section" onClick={() => { toggleMobileMenu(); handleLinkClick('/shop_section'); }}>
                  Shop
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about" onClick={() => { toggleMobileMenu(); handleLinkClick('/about'); }}>
                  About us
                </Link>
              </li>
              <li className="py-2">
                <Link to="/contact" onClick={() => { toggleMobileMenu(); handleLinkClick('/contact'); }}>
                  Contact us
                </Link>
              </li>
              <li className="py-2">
                <Link to="/account" onClick={() => { toggleMobileMenu(); handleLinkClick('/account'); }}>
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;