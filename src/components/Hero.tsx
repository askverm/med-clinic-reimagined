
import { Button } from '@/components/ui/button';
import { Heart, Users, Bell, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-orange-50 via-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🦄 India's 1st Emotionally Intelligent Healthcare
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">CareSaathi</span>
              <br />
              Your Complete 
              <span className="text-orange-500"> Care Ecosystem</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              India's most affordable, connected, and emotionally intelligent healthcare & elder care platform. 
              Combining medical help, emergency response, and emotional wellness — all in one powerful ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-green-500 text-green-600 hover:bg-green-50">
                Download App
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Families Served</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Care Available</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Bell className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">Pan India</div>
                <div className="text-sm text-gray-600">Coverage</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 via-green-100 to-blue-100 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-24 w-24 mx-auto mb-4 text-orange-500" />
                <p className="text-lg font-semibold text-gray-700">Emotionally Intelligent Care</p>
                <p className="text-gray-600 mt-2">Coming Soon to CareSaathi.com</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Phone className="h-8 w-8 text-orange-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Heart className="h-8 w-8 text-green-500" />
            </div>
            <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 shadow-lg">
              <Bell className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
