
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Clock, MapPin, Heart, Video, MessageCircle } from 'lucide-react';

interface Caregiver {
  id: string;
  name: string;
  photo: string;
  experience: string;
  rating: number;
  reviews: number;
  specialties: string[];
  hourlyRate: number;
  dailyRate: number;
  location: string;
  availability: 'Available' | 'Busy' | 'Offline';
  languages: string[];
}

const CaregiverBooking = () => {
  const [caregivers] = useState<Caregiver[]>([
    {
      id: '1',
      name: 'Priya Sharma',
      photo: '/api/placeholder/150/150',
      experience: '5 years',
      rating: 4.9,
      reviews: 127,
      specialties: ['Elderly Care', 'Post-Surgery', 'Mobility Assistance'],
      hourlyRate: 200,
      dailyRate: 1500,
      location: 'Banjara Hills',
      availability: 'Available',
      languages: ['Hindi', 'English', 'Telugu']
    },
    {
      id: '2',
      name: 'Sunita Devi',
      photo: '/api/placeholder/150/150',
      experience: '8 years',
      rating: 4.8,
      reviews: 203,
      specialties: ['Chronic Care', 'Diabetes Management', 'Physiotherapy'],
      hourlyRate: 180,
      dailyRate: 1300,
      location: 'Jubilee Hills',
      availability: 'Available',
      languages: ['Hindi', 'Telugu']
    },
    {
      id: '3',
      name: 'Lakshmi Reddy',
      photo: '/api/placeholder/150/150',
      experience: '3 years',
      rating: 4.7,
      reviews: 89,
      specialties: ['Child Care', 'Medical Assistance', 'Companionship'],
      hourlyRate: 150,
      dailyRate: 1200,
      location: 'Hi-Tech City',
      availability: 'Busy',
      languages: ['Telugu', 'English']
    }
  ]);

  const [selectedCaregiver, setSelectedCaregiver] = useState<string | null>(null);
  const [bookingType, setBookingType] = useState<'hourly' | 'daily'>('hourly');

  const handleBookCaregiver = (caregiverId: string) => {
    setSelectedCaregiver(caregiverId);
    // Navigate to booking confirmation
    console.log(`Booking caregiver ${caregiverId} for ${bookingType} service`);
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Busy': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Caregiver Booking</h1>
          <p className="text-gray-600">Find and book experienced caregivers for your loved ones</p>
        </div>

        {/* Booking Type Toggle */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Booking Type:</span>
              <div className="flex space-x-2">
                <Button
                  variant={bookingType === 'hourly' ? 'default' : 'outline'}
                  onClick={() => setBookingType('hourly')}
                  size="sm"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Hourly
                </Button>
                <Button
                  variant={bookingType === 'daily' ? 'default' : 'outline'}
                  onClick={() => setBookingType('daily')}
                  size="sm"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Full Day
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Caregiver List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caregivers.map((caregiver) => (
            <Card key={caregiver.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={caregiver.photo} alt={caregiver.name} />
                    <AvatarFallback>{caregiver.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold">{caregiver.name}</h3>
                      <Badge className={getAvailabilityColor(caregiver.availability)}>
                        {caregiver.availability}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{caregiver.location}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{caregiver.experience} experience</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{caregiver.rating}</span>
                      <span className="text-gray-500 ml-1">({caregiver.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {caregiver.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caregiver.specialties.map((specialty) => (
                      <Badge key={specialty} className="bg-blue-100 text-blue-800">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {bookingType === 'hourly' ? 'Hourly Rate' : 'Daily Rate'}:
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      ₹{bookingType === 'hourly' ? caregiver.hourlyRate : caregiver.dailyRate}
                      {bookingType === 'hourly' ? '/hour' : '/day'}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleBookCaregiver(caregiver.id)}
                    disabled={caregiver.availability !== 'Available'}
                    className="flex-1"
                  >
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Caregiver */}
        <Card className="mt-8 bg-orange-50 border-orange-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Need Immediate Care?</h3>
            <p className="text-orange-700 mb-4">Get urgent caregiver assistance within 30 minutes</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Request Emergency Caregiver
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaregiverBooking;
