import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-200 via-orange-100 to-white text-brown-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-orange-400/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4668228/pexels-photo-4668228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img src="/logo-dutamulia.jpg" alt="Duta Mulia" className="mx-auto lg:mx-0 mb-4 w-40 rounded-xl shadow-lg" />
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-orange-600 drop-shadow">
                Umroh Plus Hainan
              </h1>
              <div className="w-24 h-1 bg-orange-400 mx-auto lg:mx-0 mb-6"></div>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight">
              Keberangkatan <span className="text-orange-600">04 Desember 2025</span><br />
              Harga <span className="text-orange-600">26,5 Jt</span> &bull; <span className="text-orange-600">12 Hari</span>
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-brown-800 leading-relaxed">
              Program spesial bersama <b>Duta Mulia</b> dengan fasilitas lengkap: Makkah, Madinah, dan wisata Hainan, Tiongkok. Penerbangan langsung <b>Hainan Airlines</b>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Daftar Sekarang
              </button>
              <button className="border-2 border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                Lihat Brosur
              </button>
            </div>
          </div>
          <div className="text-center">
            <div className="relative">
              <img 
                src="/img-dutamulia1.jpg" 
                alt="Pesawat Hainan Airlines" 
                className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400/30 to-transparent rounded-2xl"></div>
            </div>
            {/* <div className="mt-4 flex flex-wrap justify-center gap-4">
              <img src="https://images.pexels.com/photos/4668228/pexels-photo-4668228.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Ka'bah" className="w-24 h-16 object-cover rounded-lg shadow" />
              <img src="https://images.pexels.com/photos/161956/pexels-photo-161956.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Patung Hainan" className="w-24 h-16 object-cover rounded-lg shadow" />
              <img src="https://images.pexels.com/photos/161931/pexels-photo-161931.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Jam Makkah" className="w-24 h-16 object-cover rounded-lg shadow" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;