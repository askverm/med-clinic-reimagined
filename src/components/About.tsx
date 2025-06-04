
import { CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    "24/7 Emergency Services",
    "State-of-the-art Equipment",
    "Experienced Medical Team",
    "Comprehensive Health Packages",
    "Insurance Accepted",
    "Multilingual Support"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading Healthcare Provider in the Region
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 20 years of experience, MediCare Clinic has been providing exceptional healthcare services to our community. We combine advanced medical technology with compassionate care to ensure the best outcomes for our patients.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Our Certifications
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">15,000+</div>
                  <div className="text-sm text-gray-600">Patients Served</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Award className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
