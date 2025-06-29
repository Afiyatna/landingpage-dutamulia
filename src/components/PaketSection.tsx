import React from 'react';
import { Check, X } from 'lucide-react';

const PaketSection = () => {
  const paket = {
    name: "Paket Promo Umroh Akhir Tahun 2025",
    price: "Rp 26.200.000",
    duration: "-",
    departure: "04 Desember 2025",
    maskapai: "Oman Air",
    hotelMekkah: "Snood Ajyad / Setaraf",
    hotelMadinah: "Royal Madinah / Setaraf",
    features: [
      "Tiket Pesawat",
      "Visa Umroh",
      "LA dan Bus",
      "Handling Bandara CGK",
      "Tour Leader",
      "Muthawiff",
      "Handling Saudi",
      "Makan 3x Sehari",
      "Perlengkapan Umroh",
      "Air Zam-Zam 5L"
    ],
    notIncluded: [
      "Pembuatan Paspor",
      "Vaksin Meningitis",
      "Pengiriman Perlengkapan",
      "Domestik PP"
    ],
    // image: "/paketumroh-dutamulia.jpg" // Pastikan gambar ini di-upload ke folder public
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-700 mb-4">
            {paket.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Promo spesial akhir tahun 2025! Nikmati perjalanan umroh bersama Duta Mulia dengan fasilitas lengkap, hotel nyaman, dan maskapai Oman Air. Kuota terbatas!
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* <img src={paket.image} alt="Promo Umrah 2025" className="w-full md:w-1/2 rounded-xl shadow mb-6 md:mb-0" /> */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-4xl font-bold text-orange-600">{paket.price}</span>
            </div>
            <div className="mb-2 text-brown-900 font-semibold">Keberangkatan: {paket.departure}</div>
            <div className="mb-2 text-brown-900 font-semibold">Maskapai: {paket.maskapai}</div>
            <div className="mb-2 text-brown-900 font-semibold">Hotel Mekkah: {paket.hotelMekkah}</div>
            <div className="mb-4 text-brown-900 font-semibold">Hotel Madinah: {paket.hotelMadinah}</div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-orange-700 mb-3">Sudah Termasuk:</h4>
                <ul className="space-y-2 mb-4">
                  {paket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-orange-700 mb-3">Sudah Termasuk:</h4>
                <ul className="space-y-2 mb-4">
                  {paket.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 mt-6">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ingin konsultasi atau info lebih lanjut? Hubungi kami di <a href="https://www.traveldutamulia.co.id" className="text-orange-600 underline">www.traveldutamulia.co.id</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaketSection;