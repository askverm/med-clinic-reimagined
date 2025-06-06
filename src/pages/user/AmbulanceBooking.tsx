
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, Star, Navigation } from 'lucide-react';

interface Ambulance {
  id: string;
  driverName: string;
  vehicleNumber: string;
  distance: string;
  eta: string;
  rating: number;
  fare: number;
  type: 'Basic' | 'Advanced' | 'ICU';
}

const AmbulanceBooking = () => {
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [ambulances] = useState<Ambulance[]>([
    {
      id: '1',
      driverName: 'Rajesh Kumar',
      vehicleNumber: 'TS 09 AB 1234',
      distance: '0.8 km',
      eta: '4 mins',
      rating: 4.8,
      fare: 250,
      type: 'Basic'
    },
    {
      id: '2',
      driverName: 'Priya Sharma',
      vehicleNumber: 'TS 09 CD 5678',
      distance: '1.2 km',
      eta: '6 mins',
      rating: 4.9,
      fare: 400,
      type: 'Advanced'
    },
    {
      id: '3',
      driverName: 'Mohammed Ali',
      vehicleNumber: 'TS 09 EF 9012',
      distance: '2.1 km',
      eta: '8 mins',
      rating: 4.7,
      fare: 650,
      type: 'ICU'
    }
  ]);
  const [selectedAmbulance, setSelectedAmbulance] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'booking' | 'booked' | 'enroute'>('idle');

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const handleBookAmbulance = (ambulanceId: string) => {
    setSelectedAmbulance(ambulanceId);
    setBookingStatus('booking');
    
    // Simulate booking process
    setTimeout(() => {
      setBookingStatus('booked');
      setTimeout(() => {
        setBookingStatus('enroute');
      }, 2000);
    }, 3000);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Basic': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'ICU': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (bookingStatus === 'booked' || bookingStatus === 'enroute') {
    const ambulance = ambulances.find(a => a.id === selectedAmbulance);
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="text-center">
              <CardTitle className="text-green-800">
                {bookingStatus === 'booked' ? 'Ambulance Booked Successfully!' : 'Ambulance En Route'}
              </CardTitle>
              <CardDescription>
                {bookingStatus === 'booked' ? 'Driver is preparing to start' : 'Your ambulance is on the way'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {ambulance && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {ambulance.driverName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{ambulance.driverName}</h3>
                      <p className="text-gray-600">{ambulance.vehicleNumber}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{ambulance.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span>ETA:</span>
                      <span className="font-semibold text-blue-600">{ambulance.eta}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Distance:</span>
                      <span>{ambulance.distance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fare:</span>
                      <span className="font-semibold">₹{ambulance.fare}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Driver
                    </Button>
                    <Button className="flex-1" variant="outline">
                      <Navigation className="h-4 w-4 mr-2" />
                      Track Live
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ambulance Booking</h1>
          <p className="text-gray-600">Book the nearest ambulance instantly</p>
        </div>

        {/* Current Location */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-red-600 mr-3" />
              <div>
                <span className="font-medium">Your Location</span>
                <p className="text-sm text-gray-600">
                  {location ? 'Location detected automatically' : 'Detecting your location...'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Ambulances */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Available Ambulances</h2>
          
          {ambulances.map((ambulance) => (
            <Card key={ambulance.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {ambulance.driverName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{ambulance.driverName}</h3>
                      <p className="text-gray-600">{ambulance.vehicleNumber}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{ambulance.rating}</span>
                        <span className="text-gray-500 ml-1">(89 rides)</span>
                      </div>
                      <Badge className={`mt-2 ${getTypeColor(ambulance.type)}`}>
                        {ambulance.type} Ambulance
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">₹{ambulance.fare}</div>
                    <div className="text-sm text-gray-600">Estimated fare</div>
                    <div className="flex items-center mt-2 text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-medium">{ambulance.eta}</span>
                    </div>
                    <div className="text-sm text-gray-600">{ambulance.distance} away</div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button
                    onClick={() => handleBookAmbulance(ambulance.id)}
                    disabled={bookingStatus === 'booking'}
                    className="px-8"
                  >
                    {bookingStatus === 'booking' && selectedAmbulance === ambulance.id 
                      ? 'Booking...' 
                      : 'Book Now'
                    }
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Button */}
        <Card className="mt-8 bg-red-50 border-red-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Situation?</h3>
            <p className="text-red-700 mb-4">For critical emergencies, use our instant SOS feature</p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              SOS Emergency Request
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AmbulanceBooking;
