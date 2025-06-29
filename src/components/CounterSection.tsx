import React, { useEffect, useState } from 'react';

const CounterSection = () => {
  const [counts, setCounts] = useState({
    umroh: 2500,
    haji: 300,
    pendaftar: 120
  });

  // Animasi counter bisa ditambahkan jika ingin, untuk sekarang langsung tampilkan angka

  return (
    <section className="py-20 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-orange-200">
            Statistik Keberangkatan
          </h2>
          <p className="text-lg text-orange-100">
            Data kepercayaan jemaah kepada Duta Mulia
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl font-bold text-orange-300 mb-4">
              {counts.umroh.toLocaleString()}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Jemaah Umroh</h3>
            <p className="text-orange-100">Yang telah berangkat bersama Duta Mulia</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl font-bold text-orange-300 mb-4">
              {counts.haji.toLocaleString()}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Jemaah Haji</h3>
            <p className="text-orange-100">Yang telah menunaikan rukun Islam kelima</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl font-bold text-orange-300 mb-4">
              {counts.pendaftar.toLocaleString()}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Pendaftar Aktif</h3>
            <p className="text-orange-100">Yang sedang mempersiapkan keberangkatan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;