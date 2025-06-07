
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesBanner from '@/components/ServicesBanner';
import ModernFeatures from '@/components/ModernFeatures';
import About from '@/components/About';
import ElderCare from '@/components/ElderCare';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesBanner />
      <ModernFeatures />
      
      {/* Login Options Section */}
      <section ref={loginSectionRef} className="py-20 bg-gray-50 opacity-0 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Access Your <span className="text-red-500">CareSaathi</span> Portal
            </h2>
            <p className="text-lg text-gray-600">
              Choose your portal to get started with our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <CardTitle className="text-lg">General Users</CardTitle>
                <CardDescription>
                  Book services, manage appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=user')}
                  className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
                  size="lg"
                >
                  User Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <CardTitle className="text-lg">Hospital Partners</CardTitle>
                <CardDescription>
                  Manage beds, view bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=hospital')}
                  className="w-full bg-green-600 hover:bg-green-700 rounded-xl"
                  size="lg"
                >
                  Hospital Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-red-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚑</span>
                </div>
                <CardTitle className="text-lg">Ambulance Drivers</CardTitle>
                <CardDescription>
                  Accept requests, track routes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=ambulance')}
                  className="w-full bg-red-600 hover:bg-red-700 rounded-xl"
                  size="lg"
                >
                  Driver Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <CardTitle className="text-lg">Caregivers</CardTitle>
                <CardDescription>
                  Manage schedule, accept bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=caregiver')}
                  className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl"
                  size="lg"
                >
                  Caregiver Login
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block max-w-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">System Administrator</h3>
                <Button 
                  onClick={() => navigate('/auth?type=admin')}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
                  size="lg"
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
    </div>
  );
};

export default Index;
