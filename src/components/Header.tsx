
import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Pan India Services Available</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>24/7 Emergency Care Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-orange-500 mr-2" />
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                CareSaathi
              </div>
              <div className="text-xs text-gray-600">India's 1st Emotionally Intelligent Healthcare</div>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Services</a>
            <a href="#care" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Elder Care</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Services</a>
              <a href="#care" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Elder Care</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full">
                Download App
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
