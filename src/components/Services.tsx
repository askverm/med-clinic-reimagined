
import { Heart, Users, Phone, Bell, Ambulance, Hospital, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const services = [
    {
      icon: Hospital,
      title: "Real-time Hospital Bed Booking",
      description: "Instant availability & confirmation for hospital beds across India with verified partners.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "from-blue-100 to-cyan-100",
      hoverIconBg: "from-blue-500 to-cyan-500"
    },
    {
      icon: Ambulance,
      title: "Emergency Ambulance Services",
      description: "24/7 verified ambulance partners near you for immediate emergency response.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      iconBg: "from-red-100 to-pink-100",
      hoverIconBg: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Elder Care at Home",
      description: "Daily support, companionship, and medical attention for your loved ones at home.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      iconBg: "from-green-100 to-emerald-100",
      hoverIconBg: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Bada Bhai / Badi Behen",
      description: "Trusted peer emotional support system for youth facing life challenges.",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      iconBg: "from-purple-100 to-indigo-100",
      hoverIconBg: "from-purple-500 to-indigo-500"
    },
    {
      icon: Bell,
      title: "AI Companion Bot",
      description: "Combat loneliness with emotional release and daily check-ins through AI.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      iconBg: "from-yellow-100 to-orange-100",
      hoverIconBg: "from-yellow-500 to-orange-500"
    },
    {
      icon: Phone,
      title: "Online Consultations",
      description: "Verified second opinions and online consultations with certified doctors.",
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50",
      iconBg: "from-teal-100 to-green-100",
      hoverIconBg: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-orange-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Care Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete healthcare ecosystem combining medical help, emergency response, and emotional wellness
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br ${service.bgGradient} h-full`}>
                    <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="mb-6 flex justify-center">
                          <div className={`bg-gradient-to-br ${service.iconBg} group-hover:bg-gradient-to-br group-hover:${service.hoverIconBg} rounded-full p-4 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                            <service.icon className={`h-8 w-8 text-gray-700 group-hover:text-white transition-colors duration-500`} />
                          </div>
                        </div>
                        <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                          {service.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{service.description}</p>
                      </div>
                      
                      <div className="mt-6">
                        <button className={`w-full py-3 px-6 rounded-full bg-gradient-to-r ${service.gradient} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100`}>
                          Learn More
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 shadow-lg" />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 text-white p-8 rounded-3xl inline-block shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold mb-3">🚀 Launching Soon!</h3>
            <p className="text-xl font-medium">CareSaathi.com & Mobile App</p>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">🏥 Healthcare</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">💝 Elder Care</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">🤖 AI Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
