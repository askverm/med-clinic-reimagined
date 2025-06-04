
import { Button } from '@/components/ui/button';
import { Calendar, Shield, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Health is Our 
              <span className="text-blue-600"> Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience world-class healthcare with our team of experienced doctors and state-of-the-art medical facilities. We're committed to providing personalized care for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">
                Emergency Care
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15k+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center text-blue-600">
                <Shield className="h-24 w-24 mx-auto mb-4" />
                <p className="text-lg font-semibold">Professional Medical Care</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
