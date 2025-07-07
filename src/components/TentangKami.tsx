import React from 'react';
import { Shield, Heart, Award } from 'lucide-react';

const TentangKami = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-orange-700 mb-6">
              Tentang <span className="text-orange-500">Duta Mulia</span>
            </h2>
            <p className="text-justify text-lg text-gray-600 mb-8 leading-relaxed">
              Duta Mulia adalah biro perjalanan umroh dan haji berizin resmi Kementerian Agama RI (izin PPIU  No. U. 574 tahun 2020), (izin PIHK NO: 91201117125800003). Kami berkomitmen memberikan pelayanan terbaik, aman, dan terpercaya untuk setiap jemaah. Program unggulan kami, <b>Umroh Plus Turki, Dubai, Doha dan Hainan</b>, menghadirkan pengalaman spiritual sekaligus wisata ke destinasi menarik.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">Legalitas & Keamanan</h4>
                  <p className="text-gray-600">Berizin resmi Kemenag RI, menjamin kepastian dan keamanan perjalanan Anda.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">Pelayanan Ramah & Profesional</h4>
                  <p className="text-gray-600">Didukung tim berpengalaman, tour leader, dan muthawiff yang siap membimbing ibadah Anda.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">Fasilitas Lengkap</h4>
                  <p className="text-gray-600">Hotel nyaman, makan 3x sehari, perlengkapan umroh, city tour Makkah Madinah, dan air zam-zam 5L.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img-dutamulia1.jpg" 
              alt="Pesawat Hainan Airlines" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-400/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <p className="text-orange-700 font-semibold text-center">
                "Melayani dengan sepenuh hati, mewujudkan umroh dan wisata halal yang berkesan bersama Duta Mulia."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;