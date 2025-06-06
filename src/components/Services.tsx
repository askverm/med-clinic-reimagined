
import { Heart, Users, Phone, Bell, Ambulance, Hospital, UserCheck, Stethoscope, Activity, MessageCircle, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const emergencyServices = [
    {
      icon: Ambulance,
      title: "Emergency Medical Triage & Ambulance Response",
      description: "Instant AI-powered triage, immediate ambulance dispatch, and family notifications with live tracking.",
      color: "red"
    },
    {
      icon: Hospital,
      title: "Real-Time Hospital Bed Booking",
      description: "Live bed availability across ICU, oxygen, general, and emergency units with instant booking.",
      color: "blue"
    }
  ];

  const careServices = [
    {
      icon: UserCheck,
      title: "Verified Elderly Home Care Services",
      description: "Background-checked nurses and caretakers for daily monitoring, medicine reminders, and companionship.",
      color: "green"
    },
    {
      icon: Stethoscope,
      title: "Doctor Teleconsultation & 2nd Opinion",
      description: "Affordable video/audio consults from specialists with secure medical record storage.",
      color: "blue"
    },
    {
      icon: Activity,
      title: "Post-Surgery Homecare & Recovery",
      description: "ICU-trained nurses and physios for medicine, dressing, hygiene, and mobility support at home.",
      color: "green"
    }
  ];

  const emotionalServices = [
    {
      icon: Users,
      title: "Bada Bhai / Badi Behen Support",
      description: "Young, trained mentors providing friendly emotional support for students facing academic and life stress.",
      color: "orange"
    },
    {
      icon: MessageCircle,
      title: "AI Emotional Companion",
      description: "24/7 AI-powered companion with voice journaling, mood tracking, and family message features.",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return 'from-red-100 to-red-200 text-red-600';
      case 'blue':
        return 'from-blue-100 to-blue-200 text-blue-600';
      case 'green':
        return 'from-green-100 to-green-200 text-green-600';
      case 'orange':
        return 'from-orange-100 to-orange-200 text-orange-600';
      default:
        return 'from-gray-100 to-gray-200 text-gray-600';
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Core</span> <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "One Platform. Total Peace of Mind." - Complete healthcare ecosystem combining emergency response, home care, and emotional wellness
          </p>
        </div>

        {/* Emergency Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-red-600">🚨 Emergency Response Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${getColorClasses(service.color)} h-32 rounded-t-lg flex items-center justify-center`}>
                    <service.icon className="h-12 w-12" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Care Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-600">🏥 Medical Care Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {careServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${getColorClasses(service.color)} h-32 rounded-t-lg flex items-center justify-center`}>
                    <service.icon className="h-12 w-12" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emotional Wellness Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-orange-600">💝 Emotional Wellness Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {emotionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${getColorClasses(service.color)} h-32 rounded-t-lg flex items-center justify-center`}>
                    <service.icon className="h-12 w-12" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-red-50 via-white to-blue-50 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Why CareSaathi is Different</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">India-First Platform</h4>
              <p className="text-sm text-gray-600">Combining emergency, homecare, and emotional AI designed for Bharat</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-sm text-gray-600">Round-the-clock emergency response and emotional support</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Emotionally Intelligent</h4>
              <p className="text-sm text-gray-600">Made with empathy, built with technology, scaled with trust</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white p-8 rounded-2xl inline-block">
            <h3 className="text-3xl font-bold mb-3">🚀 Coming Soon!</h3>
            <p className="text-xl mb-2">CareSaathi.com & Mobile App</p>
            <p className="text-lg opacity-90">"Apno ke liye apno jaisa saathi"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
