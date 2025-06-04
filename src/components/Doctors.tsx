
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      education: "MD, Harvard Medical School",
      rating: 4.9,
      location: "Main Building, Floor 2"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 years",
      education: "MD, Johns Hopkins University",
      rating: 4.8,
      location: "Neurology Wing, Floor 3"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10 years",
      education: "MD, Stanford University",
      rating: 4.9,
      location: "Children's Wing, Floor 1"
    },
    {
      name: "Dr. David Thompson",
      specialty: "Orthopedic Surgeon",
      experience: "18 years",
      education: "MD, Mayo Clinic",
      rating: 4.7,
      location: "Surgical Wing, Floor 4"
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced physicians are dedicated to providing the highest quality care with compassion and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-48 rounded-t-lg flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-blue-600">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600 mb-3">{doctor.education}</p>
                  
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{doctor.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({Math.floor(Math.random() * 100 + 50)} reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{doctor.location}</span>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
