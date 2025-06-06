
import { Button } from '@/components/ui/button';
import { Heart, Users, Bell, Phone, Ambulance, Hospital } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold">
                🚀 India's First Emotionally Intelligent Healthcare Platform
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">CareSaathi</span>
              <br />
              Your Companion 
              <span className="text-blue-500"> in Care</span>
            </h1>
            
            <div className="text-2xl font-semibold text-gray-700 mb-4">
              "Apno ke liye apno jaisa saathi"
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Because Care Should Never Be Distant. India's most reliable care network where AI meets empathy, 
              combining emergency response, elderly care, and emotional wellness — all in one powerful ecosystem.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🎯 Our Promise</h3>
              <p className="text-gray-700 italic">
                "You're never alone. Not on our watch. We make sure your emergency doesn't wait in a queue."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-500 text-blue-600 hover:bg-blue-50">
                Download App
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center bg-white rounded-xl p-4 shadow-md">
                <div className="flex justify-center mb-2">
                  <Ambulance className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-lg font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Emergency Response</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md">
                <div className="flex justify-center mb-2">
                  <Hospital className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-lg font-bold text-gray-900">Live</div>
                <div className="text-xs text-gray-600">Bed Booking</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md">
                <div className="flex justify-center mb-2">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-lg font-bold text-gray-900">Pan India</div>
                <div className="text-xs text-gray-600">Coverage</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-lg font-bold text-gray-900">AI-Powered</div>
                <div className="text-xs text-gray-600">Care</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-white to-red-100 rounded-3xl h-96 flex items-center justify-center p-8">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/a40d16cc-2d57-43e3-9b97-33df4f281d24.png" 
                  alt="CareSaathi Logo" 
                  className="h-32 w-auto mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Emergency Care</h3>
                <p className="text-gray-600 mb-4">One tap auto hospital bed booking, ambulance dispatch & guardian notification</p>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Launching Soon!
                </div>
              </div>
            </div>
            
            {/* Floating service icons */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Ambulance className="h-8 w-8 text-red-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 shadow-lg">
              <Hospital className="h-6 w-6 text-blue-500" />
            </div>
            <div className="absolute top-1/4 -right-6 bg-white rounded-full p-3 shadow-lg">
              <Bell className="h-6 w-6 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
