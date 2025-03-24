import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './pages/CartContext'; // Import CartProvider
import WeldLayout from './components/WebLayout';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Palleto_Canada from './pages/Palleto_Canada';
import Shop_Section from './pages/Shop_section';
import Palleto_section from './pages/Palleto_section';
import Account from './pages/Account';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // Import Cart
import Checkout from './pages/Checkout'; // Import Checkout
import Aboutus from './pages/Aboutus';
import ContactUs from './pages/Contactus';
import './index.css';


function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<WeldLayout><Home /></WeldLayout>} />
          <Route path="/services" element={<WeldLayout><Services /></WeldLayout>} />
          <Route path="/about" element={<WeldLayout><About /></WeldLayout>} />
          <Route path="/contact" element={<WeldLayout><Contact /></WeldLayout>} />
          <Route
            path="/palleto_canada"
            element={
              <Layout>
                <Palleto_Canada />
              </Layout>
            }
          />
          <Route
            path="/shop_section"
            element={
                <Shop_Section searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
          <Route
            path="/shop/steel/super-light"
            element={
                <Shop_Section searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
          <Route
            path="/shop/steel/light"
            element={
                <Shop_Section searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            }
          />
          <Route
            path="/shop/steel/medium"
            element={
                <Shop_Section searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
          <Route
            path="/shop/steel/heavy"
            element={
              <Shop_Section searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
          <Route
            path="/shop/aluminum/size-40x40"
            element={
              <Shop_Section searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
          <Route path="/palleto_section" element={<Palleto_section />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
          {/* <Route path="*" element={<div>404 - Page Not Found</div>} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;