import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-orange-700 text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>+62 813-1313-1313</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle size={16} />
            <span>WhatsApp: +62 813-1313-1313</span>
          </div>
        </div>
        <div className="hidden md:block">
          <span>Konsultasi Umroh Plus Hainan • Duta Mulia</span>
        </div>
      </div>
    </header>
  );
};

export default Header;