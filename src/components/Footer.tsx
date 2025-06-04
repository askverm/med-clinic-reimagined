
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6">MediCare Clinic</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing exceptional healthcare services with compassion and expertise. Your health and well-being are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="text-gray-300 hover:text-blue-400 transition-colors">Our Doctors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Appointments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Health Packages</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Medical Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Cardiology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Neurology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Orthopedics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pediatrics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Ophthalmology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">General Medicine</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@medicareclinic.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">123 Medical Center Dr<br />City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 MediCare Clinic. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
