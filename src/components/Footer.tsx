import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-orange-200 mb-4">
              Duta Mulia
            </h3>
            <p className="text-orange-100 mb-6 leading-relaxed">
              Biro perjalanan umroh & haji berizin resmi. Spesialis program Umroh Plus Hainan, fasilitas lengkap, dan pelayanan profesional.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/dutamulia.travel" className="bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-colors duration-300">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-200">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-200 mt-1" />
                <div>
                  <p>+62 813-1313-1313</p>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-200 mt-1" />
                <p>info@traveldutamulia.co.id</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-200 mt-1" />
                <p>Jl. Raya Umroh No. 123<br />Jakarta Selatan 12345</p>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-200">Menu Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-orange-100 hover:text-orange-300 transition-colors duration-300">Paket Umroh Plus Hainan</a></li>
              <li><a href="#" className="text-orange-100 hover:text-orange-300 transition-colors duration-300">Testimoni</a></li>
              <li><a href="#" className="text-orange-100 hover:text-orange-300 transition-colors duration-300">Galeri</a></li>
              <li><a href="#" className="text-orange-100 hover:text-orange-300 transition-colors duration-300">Tentang Kami</a></li>
              <li><a href="#" className="text-orange-100 hover:text-orange-300 transition-colors duration-300">Kontak</a></li>
            </ul>
          </div>
          {/* CTA */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-200">Siap Berangkat?</h4>
            <p className="text-orange-100 mb-6">
              Konsultasikan rencana umroh Anda dengan tim Duta Mulia sekarang juga!
            </p>
            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <MessageCircle size={20} />
              <span>Konsultasi Gratis</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-orange-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-orange-100">
            <p>&copy; 2024 Duta Mulia. Semua hak cipta dilindungi.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-300 transition-colors duration-300">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-orange-300 transition-colors duration-300">Kebijakan Privasi</a>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-orange-200">
            <p>Berizin resmi Kementerian Agama RI | Izin PPIU No. U.574 Tahun 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;