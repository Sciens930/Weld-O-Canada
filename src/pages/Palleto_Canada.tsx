import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../pages/CartContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const Palleto_Canada: React.FC = () => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  const products: Product[] = [
    {
      id: 4,
      name: 'Eco Steel Pallet',
      price: 129.99,
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
    },
    {
      id: 5,
      name: 'Industrial Steel Pallet',
      price: 179.99,
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
    },
  ];

  // Slider data (images and captions)
  const sliderItems = [
    {
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
      caption: 'Discover Our Eco Steel Pallets - Durable and Sustainable',
    },
    {
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
      caption: 'Industrial Steel Pallets - Built for Heavy Duty Use',
    },
    {
      img: 'https://palletocanada.com/wp-content/uploads/2024/02/sl-collage-2.webp',
      caption: 'Custom Steel Pallets - Tailored to Your Needs',
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4 font-cardo">Palleto Canada</h1>
          <p className="text-gray-600">
            Browse our exclusive range of steel pallets.
          </p>
        </section>

        {/* Slider Section */}
        <section className="max-w-7xl mx-auto mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img
                    src={item.img}
                    alt={`Slide ${index + 1}`}
                    onError={(e) => {
                      console.error(`Slider image failed to load for slide ${index + 1}:`, e);
                      (e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/1200x400?text=Slider+Image+Not+Found';
                    }}
                  />
                  <div>
                    <h3>{item.caption}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center font-cardo">
            Our Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
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
        </section>
      </main>
    </div>
  );
};

export default Palleto_Canada;