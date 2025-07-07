import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa saja yang belum termasuk dalam paket?",
      answer: "Belum termasuk pembuatan paspor, vaksin meningitis, pengiriman perlengkapan, dan tiket domestik PP."
    },
    {
      question: "Kapan jadwal keberangkatan Umroh Duta Mulia?",
      answer: "Keberangkatan pada 04 Desember 2025, program selama 9 hari."
    },
    {
      question: "Bagaimana cara mendaftar program ini?",
      answer: "Anda dapat mendaftar melalui website www.traveldutamulia.co.id, menghubungi kontak resmi kami, atau datang langsung ke kantor Duta Mulia."
    },
    {
      question: "Apakah tersedia fasilitas hotel berbintang?",
      answer: "Ya, hotel yang digunakan adalah Andalus Golden (Madinah) dan Nada Dheafa (Makkah) atau setaraf."
    },
    {
      question: "Apakah ada city tour di Hainan?",
      answer: "Ya, program sudah termasuk wisata ke destinasi menarik di Hainan, Tiongkok."
    },
    {
      question: "Apakah bisa konsultasi sebelum mendaftar?",
      answer: "Tentu, silakan hubungi kami di WhatsApp atau melalui website untuk konsultasi gratis seputar program Umroh Plus Hainan."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan seputar program Umroh Duta Mulia
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-left transition-all duration-300 border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-brown-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="bg-white border-l-4 border-gold-400 p-6 mt-2 rounded-r-lg">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;