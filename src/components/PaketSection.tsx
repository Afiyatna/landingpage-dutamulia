import React from 'react';
import { Check, X } from 'lucide-react';

const PaketSection = () => {
  const paket = {
    name: "Umroh Plus Hainan",
    price: "Rp 26.500.000",
      duration: "12 Hari",
    departure: "05 September 2025",
      features: [
      "Tiket Pesawat Hainan Airlines",
      "Visa Umroh",
      "LA dan Bus",
      "Handling Bandara CGK",
      "Tour Leader",
      "Muthawiff",
      "Handling Saudi",
      "Makan 3x Sehari",
      "Perlengkapan Umroh",
      "Air Zam-Zam 5L",
      "Hotel Madinah: Andalus Golden/setaraf",
      "Hotel Makkah: Nada Dheafa/setaraf"
    ],
    notIncluded: [
      "Pembuatan Paspor",
      "Vaksin Meningitis",
      "Pengiriman Perlengkapan",
      "Domestik PP"
      ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">
            Paket Umroh Plus Hainan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Program spesial Umroh Plus Hainan bersama Duta Mulia. Nikmati perjalanan spiritual ke Makkah, Madinah, dan wisata Hainan, Tiongkok dengan fasilitas lengkap dan harga terjangkau.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-brown-900 mb-2 text-center">{paket.name}</h3>
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <div className="mb-2 md:mb-0">
              <span className="text-4xl font-bold text-gold-600">{paket.price}</span>
                  <span className="text-gray-600 ml-2">/ {paket.duration}</span>
                </div>
            <div className="text-brown-900 font-semibold">Keberangkatan: {paket.departure}</div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-brown-900 mb-3">Sudah Termasuk:</h4>
              <ul className="space-y-2 mb-4">
                {paket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            <div>
              <h4 className="font-bold text-brown-900 mb-3">Belum Termasuk:</h4>
              <ul className="space-y-2 mb-4">
                {paket.notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="w-full bg-gold-500 hover:bg-gold-600 text-brown-950 font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 mt-6">
            Daftar Sekarang
          </button>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ingin konsultasi atau info lebih lanjut? Hubungi kami di <a href="https://www.traveldutamulia.co.id" className="text-gold-600 underline">www.traveldutamulia.co.id</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaketSection;