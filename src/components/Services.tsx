
import { Heart, Brain, Eye, Bone, Baby, Stethoscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Complete heart care with advanced diagnostic and treatment options for all cardiac conditions."
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology."
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Comprehensive eye care services including surgery, treatment, and preventive care for all ages."
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Advanced treatment for bone, joint, and muscle conditions with minimally invasive procedures."
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents with compassionate care."
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary healthcare services for routine check-ups, preventive care, and general health concerns."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive healthcare services with state-of-the-art equipment and experienced medical professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-blue-100 group-hover:bg-blue-600 rounded-full p-4 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
