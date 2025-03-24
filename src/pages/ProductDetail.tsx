import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../pages/CartContext'; // Import useCart

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const ProductDetail: React.FC = () => {
  const { addToCart } = useCart(); // Use CartContext
  const { id } = useParams<{ id: string }>();

  const products: Product[] = [
    { id: 1, name: 'Super Light Steel Pallet', price: 99.99, img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp' },
    { id: 2, name: 'Heavy Duty Steel Pallet', price: 149.99, img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp' },
    { id: 3, name: 'Custom Steel Pallet', price: 199.99, img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp' },
  ];

  const product = products.find((p) => p.id === parseInt(id || '0'));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-4 font-cardo">{product.name}</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-96 object-cover rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://via.placeholder.com/500x300?text=Image+Not+Found';
              }}
            />
            <div>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;