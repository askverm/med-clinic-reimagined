
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Services from '@/components/Services';
import ElderCare from '@/components/ElderCare';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidgets from '@/components/ChatWidgets';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-32">
        <Hero />
      </div>
      
      {/* Login Options Section with improved styling */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Poppins']">
              Access Your <span className="text-red-500">Care</span><span className="text-blue-500">Saathi</span> Portal
            </h2>
            <p className="text-xl text-gray-600 font-['Inter']">
              Choose your portal to get started with our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader className="text-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg">
                <CardTitle className="text-lg font-['Poppins'] group-hover:text-blue-700 transition-colors">👥 General Users</CardTitle>
                <CardDescription className="group-hover:text-blue-600 transition-colors">
                  Book services, manage appointments
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Button 
                  onClick={() => navigate('/auth?type=user')}
                  className="w-full bg-blue-600 hover:bg-blue-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  🚪 User Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader className="text-center bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg">
                <CardTitle className="text-lg font-['Poppins'] group-hover:text-green-700 transition-colors">🏥 Hospital Partners</CardTitle>
                <CardDescription className="group-hover:text-green-600 transition-colors">
                  Manage beds, view bookings
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Button 
                  onClick={() => navigate('/auth?type=hospital')}
                  className="w-full bg-green-600 hover:bg-green-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  🏥 Hospital Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader className="text-center bg-gradient-to-br from-red-100 to-red-200 rounded-t-lg">
                <CardTitle className="text-lg font-['Poppins'] group-hover:text-red-700 transition-colors">🚑 Ambulance Drivers</CardTitle>
                <CardDescription className="group-hover:text-red-600 transition-colors">
                  Accept requests, track routes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Button 
                  onClick={() => navigate('/auth?type=ambulance')}
                  className="w-full bg-red-600 hover:bg-red-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  🚑 Driver Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader className="text-center bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg">
                <CardTitle className="text-lg font-['Poppins'] group-hover:text-purple-700 transition-colors">👩‍⚕️ Caregivers</CardTitle>
                <CardDescription className="group-hover:text-purple-600 transition-colors">
                  Manage schedule, accept bookings
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Button 
                  onClick={() => navigate('/auth?type=caregiver')}
                  className="w-full bg-purple-600 hover:bg-purple-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  👩‍⚕️ Caregiver Login
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Card className="inline-block hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 font-['Poppins']">🔧 System Administrator</h3>
                <Button 
                  onClick={() => navigate('/auth?type=admin')}
                  variant="outline"
                  className="border-gray-600 text-gray-700 hover:bg-gray-50 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  🔐 Admin Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <About />
      <Features />
      <Services />
      <ElderCare />
      <Contact />
      <Footer />
      
      {/* Chat Widgets */}
      <ChatWidgets />
    </div>
  );
};

export default Index;
