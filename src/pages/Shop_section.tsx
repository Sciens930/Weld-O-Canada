import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../pages/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

interface ShopSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Shop_Section: React.FC<ShopSectionProps> = ({ searchQuery, setSearchQuery }) => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const location = useLocation();

  const products: Product[] = [
    {
      id: 1,
      name: 'Super Light Steel Pallet',
      price: 99.99,
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
      category: 'steel-super-light',
    },
    {
      id: 2,
      name: 'Heavy Duty Steel Pallet',
      price: 149.99,
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
      category: 'steel-heavy',
    },
    {
      id: 3,
      name: 'Custom Steel Pallet',
      price: 199.99,
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
      category: 'steel-medium',
    },
  ];

  const selectedCategory = location.pathname.split('/').pop() || '';
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'shop_section' || selectedCategory === ''
        ? true
        : product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4 font-cardo">Shop</h1>
          <p className="text-gray-600">
            This is where you can browse products in this store.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center font-cardo">
            Featured Products
          </h2>
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600">No products found.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const cartItem = cartItems.find((item) => item.id === product.id);
                return (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="block"
                    onClick={() => console.log(`Navigating to product: ${product.id}`)}
                  >
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4 rounded"
                        onError={(e) => {
                          console.error(`Product image failed to load for ${product.name}:`, e);
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/500x300?text=Image+Not+Found';
                        }}
                      />
                      <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
                      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                      {cartItem ? (
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              decreaseQuantity(product.id);
                            }}
                            className="bg-green-800 text-white p-2 rounded hover:bg-green-700 transition"
                          >
                            <FaMinus />
                          </button>
                          <span className="text-gray-800">{cartItem.quantity}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              increaseQuantity(product.id);
                            }}
                            className="bg-green-800 text-white p-2 rounded hover:bg-green-700 transition"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition w-full"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop_Section;