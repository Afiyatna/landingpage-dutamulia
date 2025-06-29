import React from 'react';
import { Star } from 'lucide-react';

const TestimoniSection = () => {
  const testimonials = [
    {
      name: "Ibu Nurhayati",
      location: "Bandung",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: "Alhamdulillah, perjalanan Umroh Plus Hainan bersama Duta Mulia sangat berkesan. Selain ibadah, saya juga bisa menikmati wisata halal di Hainan. Pelayanan ramah dan fasilitas lengkap!"
    },
    {
      name: "Bapak Hendra Saputra",
      location: "Surabaya",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: "Program Umroh Plus Hainan Duta Mulia sangat direkomendasikan. Hotel nyaman, makan enak, dan city tour di Hainan sangat menyenangkan. Terima kasih Duta Mulia!"
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-700 mb-4">
            Testimoni Jemaah
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cerita pengalaman jemaah Umroh bersama Duta Mulia
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-orange-700 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;