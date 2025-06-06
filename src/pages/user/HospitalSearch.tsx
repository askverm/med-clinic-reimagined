
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Clock, Star } from 'lucide-react';

interface Hospital {
  id: string;
  name: string;
  location: string;
  distance: string;
  rating: number;
  beds: {
    general: number;
    icu: number;
    ventilator: number;
  };
  price: {
    general: number;
    icu: number;
    ventilator: number;
  };
}

const HospitalSearch = () => {
  const [searchCity, setSearchCity] = useState('');
  const [bedType, setBedType] = useState('');
  const [hospitals] = useState<Hospital[]>([
    {
      id: '1',
      name: 'Apollo Hospital',
      location: 'Jubilee Hills, Hyderabad',
      distance: '2.5 km',
      rating: 4.8,
      beds: { general: 25, icu: 8, ventilator: 3 },
      price: { general: 2000, icu: 5000, ventilator: 8000 }
    },
    {
      id: '2',
      name: 'Max Super Specialty Hospital',
      location: 'Banjara Hills, Hyderabad',
      distance: '3.2 km',
      rating: 4.6,
      beds: { general: 15, icu: 5, ventilator: 2 },
      price: { general: 1800, icu: 4500, ventilator: 7500 }
    },
    {
      id: '3',
      name: 'Care Hospital',
      location: 'Hi-Tech City, Hyderabad',
      distance: '4.1 km',
      rating: 4.7,
      beds: { general: 30, icu: 12, ventilator: 4 },
      price: { general: 2200, icu: 5200, ventilator: 8200 }
    }
  ]);

  const handleBookBed = (hospitalId: string, bedType: string) => {
    // Navigate to booking confirmation
    console.log(`Booking ${bedType} bed at hospital ${hospitalId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hospital Search & Bed Booking</h1>
          <p className="text-gray-600">Find and book hospital beds instantly</p>
        </div>

        {/* Search Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>City/Area</Label>
                <Input
                  placeholder="Enter city or area"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
              </div>
              <div>
                <Label>Bed Type</Label>
                <Select value={bedType} onValueChange={setBedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bed type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Bed</SelectItem>
                    <SelectItem value="icu">ICU Bed</SelectItem>
                    <SelectItem value="ventilator">Ventilator Bed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">Search Hospitals</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hospital List */}
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <Card key={hospital.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{hospital.location}</span>
                      <span className="mx-2">•</span>
                      <span>{hospital.distance}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{hospital.rating}</span>
                      <span className="text-gray-500 ml-1">(124 reviews)</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    <Clock className="h-3 w-3 mr-1" />
                    Open 24/7
                  </Badge>
                </div>

                {/* Bed Availability */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">General Bed</span>
                      <Bed className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {hospital.beds.general}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Available beds</div>
                    <div className="text-lg font-semibold mb-2">₹{hospital.price.general}/day</div>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => handleBookBed(hospital.id, 'general')}
                      disabled={hospital.beds.general === 0}
                    >
                      Book Now
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">ICU Bed</span>
                      <Bed className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {hospital.beds.icu}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Available beds</div>
                    <div className="text-lg font-semibold mb-2">₹{hospital.price.icu}/day</div>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => handleBookBed(hospital.id, 'icu')}
                      disabled={hospital.beds.icu === 0}
                    >
                      Book Now
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Ventilator</span>
                      <Bed className="h-4 w-4 text-red-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {hospital.beds.ventilator}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Available beds</div>
                    <div className="text-lg font-semibold mb-2">₹{hospital.price.ventilator}/day</div>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => handleBookBed(hospital.id, 'ventilator')}
                      disabled={hospital.beds.ventilator === 0}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalSearch;
