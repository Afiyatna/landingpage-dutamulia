import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';

const FormKonsultasi = () => {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    paket: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Duta Mulia, saya ${formData.nama} ingin konsultasi tentang paket ${formData.paket}. Nomor WhatsApp saya: ${formData.whatsapp}`;
    const whatsappUrl = `https://wa.me/6281313131313?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-700 mb-4">
              Konsultasi Umroh Akhir Tahun
            </h2>
            <p className="text-lg text-gray-600">
              Hubungi kami untuk informasi lengkap dan konsultasi gratis seputar program Promo Umroh Akhir Tahun Duta Mulia.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-orange-700 font-semibold mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({...formData, nama: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-700 font-semibold mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-700 font-semibold mb-2">
                      Pilihan Paket
                    </label>
                    <select
                      value={formData.paket}
                      onChange={(e) => setFormData({...formData, paket: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Pilih Paket</option>
                      <option value="Umroh Plus Hainan">Umroh Plus Hainan</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Kirim Sekarang</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-orange-700 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-200">
                  Hubungi Kami Langsung
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-200" size={20} />
                    <span>+62 819 7555 354</span>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Phone className="text-orange-200" size={20} />
                    <span>+62 812-3456-7890</span>
                  </div> */}
                </div>
                <p className="mt-4 text-orange-100">
                  Tim Duta Mulia siap melayani Anda 24/7 untuk konsultasi dan informasi lebih lanjut.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-700 mb-2">Jam Operasional</h4>
                <p className="text-gray-600">Senin - Minggu: 08:00 - 22:00 WIB</p>
                <p className="text-sm text-gray-500 mt-2">
                  *Konsultasi darurat tersedia 24 jam
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-700 mb-2">Website Resmi</h4>
                <a href="https://www.traveldutamulia.co.id" className="text-orange-600 underline">www.traveldutamulia.co.id</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormKonsultasi;