import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../pages/CartContext';

const Cart: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center font-cardo">
            Your Cart
          </h1>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your cart is empty.</p>
              <Link
                to="/shop_section"
                className="bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div>
              <div className="grid gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded mr-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/100x100?text=Image+Not+Found';
                        }}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">{item.name}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-green-800 text-white p-2 rounded hover:bg-green-700 transition"
                        >
                          <FaMinus />
                        </button>
                        <span className="text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-green-800 text-white p-2 rounded hover:bg-green-700 transition"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-right">
                <p className="text-xl font-bold text-green-800">
                  Total: ${totalPrice.toFixed(2)}
                </p>
                <Link
                  to="/checkout"
                  className="mt-4 inline-block bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;