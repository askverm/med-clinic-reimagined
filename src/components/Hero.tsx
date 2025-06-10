
import { Button } from '@/components/ui/button';
import { Heart, Users, Bell, Phone, Ambulance, Hospital, Play, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-red-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Trust Badge */}
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold cursor-pointer hover:shadow-lg transition-all duration-300 group">
                <Shield className="inline w-4 h-4 mr-2 group-hover:animate-pulse" />
                🏆 India's Most Trusted Healthcare Platform
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight font-['Inter']">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">CareSaathi</span>
              <br />
              Your Companion 
              <span className="text-blue-500"> in Care</span>
            </h1>
            
            <div className="text-2xl font-semibold text-gray-700 mb-4 font-['Poppins'] animate-fade-in">
              "Apno ke liye apno jaisa saathi"
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-['Inter']">
              Experience India's next-gen healthcare, engineered for care + convenience. 
              Where AI meets empathy, combining emergency response, elderly care, and emotional wellness.
            </p>

            {/* Verified By Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-2xl mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-2">✅ Verified by:</p>
              <div className="flex items-center space-x-4 text-xs text-gray-600">
                <span className="bg-white px-3 py-1 rounded-full">NABH Certified</span>
                <span className="bg-white px-3 py-1 rounded-full">ISO 27001</span>
                <span className="bg-white px-3 py-1 rounded-full">Govt Health Approved</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Ambulance className="mr-2 h-5 w-5" />
                🚨 Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-4 w-4" />
                📺 Watch Demo
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex justify-center mb-2">
                  <Ambulance className="h-6 w-6 text-red-500 group-hover:animate-pulse" />
                </div>
                <div className="text-lg font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Emergency Response</div>
                <div className="text-xs text-green-600 mt-1">Help reaches before panic sets in</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex justify-center mb-2">
                  <Hospital className="h-6 w-6 text-blue-500 group-hover:animate-pulse" />
                </div>
                <div className="text-lg font-bold text-gray-900">Live</div>
                <div className="text-xs text-gray-600">Bed Booking</div>
                <div className="text-xs text-green-600 mt-1">Real-time availability</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex justify-center mb-2">
                  <Heart className="h-6 w-6 text-red-500 group-hover:animate-pulse" />
                </div>
                <div className="text-lg font-bold text-gray-900">Pan India</div>
                <div className="text-xs text-gray-600">Coverage</div>
                <div className="text-xs text-green-600 mt-1">Everywhere you need us</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-500 group-hover:animate-pulse" />
                </div>
                <div className="text-lg font-bold text-gray-900">AI-Powered</div>
                <div className="text-xs text-gray-600">Care</div>
                <div className="text-xs text-green-600 mt-1">Technology with heart</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-white to-red-100 rounded-3xl h-96 flex items-center justify-center p-8 hover:shadow-2xl transition-all duration-500">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/a40d16cc-2d57-43e3-9b97-33df4f281d24.png" 
                  alt="CareSaathi Logo" 
                  className="h-32 w-auto mx-auto mb-6 hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Poppins']">Smart Emergency Care</h3>
                <p className="text-gray-600 mb-4">One tap auto hospital bed booking, ambulance dispatch & guardian notification</p>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                  Launching Soon!
                </div>
              </div>
            </div>
            
            {/* Floating service icons with animations */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce hover:scale-110 transition-transform">
              <Ambulance className="h-8 w-8 text-red-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-bounce delay-500 hover:scale-110 transition-transform">
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 shadow-lg animate-pulse hover:scale-110 transition-transform">
              <Hospital className="h-6 w-6 text-blue-500" />
            </div>
            <div className="absolute top-1/4 -right-6 bg-white rounded-full p-3 shadow-lg animate-pulse delay-300 hover:scale-110 transition-transform">
              <Bell className="h-6 w-6 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
