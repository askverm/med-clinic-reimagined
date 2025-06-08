
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Services from '@/components/Services';
import ElderCare from '@/components/ElderCare';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Login Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Access Your CareSaathi Portal
            </h2>
            <p className="text-lg text-gray-600">
              Choose your portal to get started with our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">General Users</CardTitle>
                <CardDescription>
                  Book services, manage appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=user')}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  User Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Hospital Partners</CardTitle>
                <CardDescription>
                  Manage beds, view bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=hospital')}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Hospital Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Ambulance Drivers</CardTitle>
                <CardDescription>
                  Accept requests, track routes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=ambulance')}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Driver Login
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Caregivers</CardTitle>
                <CardDescription>
                  Manage schedule, accept bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/auth?type=caregiver')}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Caregiver Login
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Card className="inline-block">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">System Administrator</h3>
                <Button 
                  onClick={() => navigate('/auth?type=admin')}
                  variant="outline"
                  className="border-gray-600 text-gray-700 hover:bg-gray-50"
                >
                  Admin Access
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
    </div>
  );
};

export default Index;
