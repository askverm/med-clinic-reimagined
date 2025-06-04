
import { Heart, Users, Phone, Bell, Ambulance, Hospital } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Hospital,
      title: "Real-time Hospital Bed Booking",
      description: "Instant availability & confirmation for hospital beds across India with verified partners."
    },
    {
      icon: Ambulance,
      title: "Emergency Ambulance Services",
      description: "24/7 verified ambulance partners near you for immediate emergency response."
    },
    {
      icon: Users,
      title: "Elder Care at Home",
      description: "Daily support, companionship, and medical attention for your loved ones at home."
    },
    {
      icon: Heart,
      title: "Bada Bhai / Badi Behen",
      description: "Trusted peer emotional support system for youth facing life challenges."
    },
    {
      icon: Bell,
      title: "AI Companion Bot",
      description: "Combat loneliness with emotional release and daily check-ins through AI."
    },
    {
      icon: Phone,
      title: "Online Consultations",
      description: "Verified second opinions and online consultations with certified doctors."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Care Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete healthcare ecosystem combining medical help, emergency response, and emotional wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-gradient-to-br from-orange-100 to-green-100 group-hover:from-orange-500 group-hover:to-green-500 rounded-full p-4 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white p-6 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-2">🚀 Launching Soon!</h3>
            <p className="text-lg">CareSaathi.com & Mobile App</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
