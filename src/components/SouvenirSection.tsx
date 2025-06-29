import React from 'react';
import { ShoppingCart } from 'lucide-react';

const SouvenirSection = () => {
  const products = [
    {
      name: "Air Zamzam",
      price: "Rp 150.000",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Air suci langsung dari sumur Zamzam, kemasan 1 liter"
    },
    {
      name: "Tasbih Kayu",
      price: "Rp 75.000",
      image: "https://images.pexels.com/photos/8728264/pexels-photo-8728264.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Tasbih kayu berkualitas tinggi dengan ukiran indah"
    },
    {
      name: "Mukena Bordir",
      price: "Rp 250.000",
      image: "https://images.pexels.com/photos/8728265/pexels-photo-8728265.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Mukena sutra dengan bordir khas Timur Tengah"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">
            Oleh-Oleh & Souvenir
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bawa pulang kenangan indah dari tanah suci dengan koleksi souvenir berkualitas pilihan kami
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-brown-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold-600">
                    {product.price}
                  </span>
                  <button className="bg-gold-500 hover:bg-gold-600 text-brown-950 font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center space-x-2">
                    <ShoppingCart size={16} />
                    <span>Beli</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-brown-900 hover:bg-brown-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
};

export default SouvenirSection;