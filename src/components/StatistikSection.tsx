import React from 'react';
import { Users, Plane, Calendar, Shield } from 'lucide-react';

const StatistikSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2.500+",
      label: "Jemaah Umroh & Haji",
      description: "Jemaah yang telah diberangkatkan Duta Mulia ke tanah suci."
    },
    {
      icon: Plane,
      number: "100+",
      label: "Keberangkatan Sukses",
      description: "Penerbangan umroh & haji dengan maskapai ternama."
    },
    {
      icon: Calendar,
      number: "10+",
      label: "Tahun Pengalaman",
      description: "Pengalaman melayani jemaah umroh & wisata halal."
    },
    {
      icon: Shield,
      number: "100% Legal",
      label: "Travel Berizin Resmi",
      description: "Izin PPIU No. U.574 Tahun 2023 dari Kemenag RI."
    }
  ];

  return (
    <section className="py-20 bg-orange-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-orange-200">
            Statistik Duta Mulia
          </h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Bukti nyata dedikasi dan kepercayaan jemaah kepada Duta Mulia
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <h4 className="text-xl font-semibold mb-2">
                {stat.label}
              </h4>
              <p className="text-orange-100 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatistikSection;