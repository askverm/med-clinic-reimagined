
import { useState } from 'react';
import { Menu, X, Phone, Bell, Clock, Download, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-4 lg:space-x-8">
              <div className="flex items-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="font-medium">Emergency: +91 98765 43210</span>
              </div>
              <div className="hidden sm:flex items-center">
                <Bell className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span>Pan India Emergency Services Available</span>
              </div>
            </div>
            <div className="flex items-center">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="font-medium text-xs sm:text-sm">Trusted by 50K+ Families</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo size="md" showTagline={false} />

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#care" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm relative group">
              Elder Care
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Heart className="mr-2 h-4 w-4" />
              Emergency Care
            </Button>
            <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-1">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Services</a>
              <a href="#care" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Elder Care</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">Contact</a>
              
              <div className="pt-3 space-y-3">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white w-full rounded-xl font-medium text-sm py-2">
                  <Heart className="mr-2 h-4 w-4" />
                  Emergency Care
                </Button>
                <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 w-full rounded-xl font-medium text-sm py-2">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
