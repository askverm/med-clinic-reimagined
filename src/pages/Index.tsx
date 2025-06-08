
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesBanner from '@/components/ServicesBanner';
import ModernFeatures from '@/components/ModernFeatures';
import About from '@/components/About';
import ElderCare from '@/components/ElderCare';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AiChatBox from '@/components/AiChatBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const loginSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (loginSectionRef.current) observer.observe(loginSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesBanner />
      <ModernFeatures />
      
      {/* Compact Login Options Section */}
      <section ref={loginSectionRef} className="py-12 bg-gray-50 opacity-0 transition-all duration-1000">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Get started with CareSaathi
            </h2>
            <p className="text-base text-gray-600">
              Choose your portal to access our healthcare services
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white">
              <CardHeader className="text-center pb-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg">👤</span>
                </div>
                <CardTitle className="text-base font-semibold">General Users</CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Book services, manage appointments
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={() => navigate('/auth?type=user')}
                  className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-sm"
                  size="sm"
                >
                  User Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white">
              <CardHeader className="text-center pb-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg">🏥</span>
                </div>
                <CardTitle className="text-base font-semibold">Hospital Partners</CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Manage beds, view bookings
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={() => navigate('/auth?type=hospital')}
                  className="w-full bg-green-600 hover:bg-green-700 rounded-lg font-medium text-sm"
                  size="sm"
                >
                  Hospital Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white">
              <CardHeader className="text-center pb-3">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg">🚑</span>
                </div>
                <CardTitle className="text-base font-semibold">Ambulance Drivers</CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Accept requests, track routes
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={() => navigate('/auth?type=ambulance')}
                  className="w-full bg-red-600 hover:bg-red-700 rounded-lg font-medium text-sm"
                  size="sm"
                >
                  Driver Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white">
              <CardHeader className="text-center pb-3">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg">👩‍⚕️</span>
                </div>
                <CardTitle className="text-base font-semibold">Caregivers</CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Manage schedule, accept bookings
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={() => navigate('/auth?type=caregiver')}
                  className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg font-medium text-sm"
                  size="sm"
                >
                  Caregiver Login
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block max-w-xs bg-white border border-gray-100">
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm">⚙️</span>
                </div>
                <h3 className="text-base font-semibold mb-2">System Administrator</h3>
                <Button 
                  onClick={() => navigate('/auth?type=admin')}
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm"
                  size="sm"
                >
                  Admin Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <About />
      <ElderCare />
      <Contact />
      <Footer />
      
      {/* AI Chat Box */}
      <AiChatBox />
    </div>
  );
};

export default Index;
