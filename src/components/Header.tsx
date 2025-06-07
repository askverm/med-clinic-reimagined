
import { useState } from 'react';
import { Menu, X, Phone, Bell, Clock, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Bell className="h-4 w-4 mr-2" />
                <span>Pan India Emergency Services</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="font-medium">24/7 Care Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo size="md" showTagline={false} />

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
            <a href="#care" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Elder Care</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-medium">
              Emergency Care
            </Button>
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-xl font-medium">
              <Download className="mr-2 h-4 w-4" />
              App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
              <a href="#care" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Elder Care</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full rounded-xl font-medium">
                Emergency Care
              </Button>
              <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 w-full rounded-xl font-medium">
                <Download className="mr-2 h-4 w-4" />
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
