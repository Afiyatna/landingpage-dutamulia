import React from 'react';

const GaleriSection = () => {
  const photos = [
    {
      src: "https://images.pexels.com/photos/4668228/pexels-photo-4668228.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Ka'bah di Makkah"
    },
    {
      src: "https://images.pexels.com/photos/161956/pexels-photo-161956.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Patung Dewi Hainan"
    },
    {
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Pesawat Hainan Airlines"
    },
    {
      src: "https://images.pexels.com/photos/161931/pexels-photo-161931.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Jam Makkah (Abraj Al Bait)"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">
            Galeri Umroh Plus Hainan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dokumentasi perjalanan Umroh Plus Hainan bersama Duta Mulia: Makkah, Madinah, dan wisata Hainan, Tiongkok.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gold-500 hover:bg-gold-600 text-brown-950 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Lihat Brosur Lengkap
          </button>
        </div>
      </div>
    </section>
  );
};

export default GaleriSection;