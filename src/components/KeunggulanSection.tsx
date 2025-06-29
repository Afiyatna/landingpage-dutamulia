import React from 'react';
import { Plane, Hotel, CheckCircle, Shield } from 'lucide-react';

const KeunggulanSection = () => {
  const keunggulan = [
    {
      icon: Plane,
      title: "Penerbangan Langsung Hainan Airlines",
      description: "Menggunakan maskapai ternama Hainan Airlines untuk kenyamanan dan keamanan perjalanan Anda."
    },
    {
      icon: Hotel,
      title: "Hotel Nyaman & Dekat Masjid",
      description: "Akomodasi di hotel Andalus Golden (Madinah) dan Nada Dheafa (Makkah) atau setaraf, menjamin kenyamanan ibadah."
    },
    {
      icon: CheckCircle,
      title: "Program Plus Wisata Hainan",
      description: "Selain ibadah umroh, Anda juga akan menikmati wisata ke destinasi menarik di Hainan, Tiongkok."
    },
    {
      icon: Shield,
      title: "Travel Resmi & Berizin",
      description: "Duta Mulia berizin resmi Kemenag RI, menjamin keamanan dan kepastian keberangkatan Anda."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-700 mb-4">
            Keunggulan Umroh Plus Hainan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alasan mengapa Umroh Plus Hainan Duta Mulia adalah pilihan terbaik untuk perjalanan spiritual dan wisata Anda
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {keunggulan.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-700 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanSection;