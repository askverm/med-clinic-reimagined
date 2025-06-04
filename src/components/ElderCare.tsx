
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Phone, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ElderCare = () => {
  const careServices = [
    {
      name: "Daily Companionship",
      specialty: "Emotional Support",
      description: "Dedicated companions for daily conversations, activities, and emotional well-being",
      icon: Users,
      color: "orange"
    },
    {
      name: "Medical Monitoring",
      specialty: "Health Tracking",
      description: "Regular health check-ups, medication reminders, and vital monitoring",
      icon: Heart,
      color: "green"
    },
    {
      name: "Emergency Response",
      specialty: "24/7 Safety",
      description: "Immediate response system for medical emergencies and urgent situations",
      icon: Phone,
      color: "blue"
    },
    {
      name: "Family Updates",
      specialty: "Peace of Mind",
      description: "Regular updates to family members, especially for NRIs living abroad",
      icon: Bell,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return 'from-orange-100 to-orange-200 text-orange-600';
      case 'green':
        return 'from-green-100 to-green-200 text-green-600';
      case 'blue':
        return 'from-blue-100 to-blue-200 text-blue-600';
      default:
        return 'from-gray-100 to-gray-200 text-gray-600';
    }
  };

  return (
    <section id="care" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-green-500">Elder Care</span> at Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care and companionship for your loved ones. Special support for NRI families to stay connected with their elders in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${getColorClasses(service.color)} h-32 rounded-t-lg flex items-center justify-center`}>
                  <service.icon className="h-12 w-12" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{service.specialty}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Special Support for <span className="text-orange-500">NRI Families</span>
              </h3>
              <p className="text-gray-600 mb-6">
                We understand the challenges NRIs face in caring for their parents from abroad. 
                Our dedicated team provides regular updates, video calls, and ensures your loved ones 
                receive the care and attention they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  Start Elder Care
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Caring for Your Loved Ones</p>
                <p className="text-gray-600">With Love & Professional Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElderCare;
