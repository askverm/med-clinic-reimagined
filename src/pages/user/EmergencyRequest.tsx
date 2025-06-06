
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Phone, MapPin, Ambulance, Hospital, Clock, User, AlertTriangle } from 'lucide-react';

interface EmergencyStatus {
  stage: 'idle' | 'triaging' | 'dispatching' | 'enroute' | 'arrived';
  ambulance?: {
    driverName: string;
    vehicleNumber: string;
    eta: string;
    phone: string;
  };
  hospital?: {
    name: string;
    address: string;
    bedType: string;
    contact: string;
  };
  requestTime?: string;
}

const EmergencyRequest = () => {
  const [emergencyStatus, setEmergencyStatus] = useState<EmergencyStatus>({ stage: 'idle' });
  const [countdown, setCountdown] = useState(0);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    // Get user location automatically
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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const handleEmergencyRequest = () => {
    setEmergencyStatus({ stage: 'triaging', requestTime: new Date().toISOString() });
    
    // Simulate emergency process
    setTimeout(() => {
      setEmergencyStatus(prev => ({
        ...prev,
        stage: 'dispatching'
      }));
      
      setTimeout(() => {
        setEmergencyStatus(prev => ({
          ...prev,
          stage: 'enroute',
          ambulance: {
            driverName: 'Rajesh Kumar',
            vehicleNumber: 'TS 09 AB 1234',
            eta: '4 mins',
            phone: '+91 9876543210'
          },
          hospital: {
            name: 'Apollo Hospital',
            address: 'Jubilee Hills, Hyderabad',
            bedType: 'ICU Bed',
            contact: '+91 9876543211'
          }
        }));
        setCountdown(240); // 4 minutes countdown
      }, 3000);
    }, 2000);
  };

  const getStatusColor = (stage: string) => {
    switch (stage) {
      case 'triaging': return 'bg-blue-100 text-blue-800';
      case 'dispatching': return 'bg-yellow-100 text-yellow-800';
      case 'enroute': return 'bg-green-100 text-green-800';
      case 'arrived': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (emergencyStatus.stage !== 'idle') {
    return (
      <div className="min-h-screen bg-red-50 p-4">
        <div className="max-w-2xl mx-auto">
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="text-red-800">Emergency Request Active</AlertTitle>
            <AlertDescription className="text-red-700">
              Your emergency request is being processed. Help is on the way.
            </AlertDescription>
          </Alert>

          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Badge className={getStatusColor(emergencyStatus.stage)}>
                  {emergencyStatus.stage.charAt(0).toUpperCase() + emergencyStatus.stage.slice(1)}
                </Badge>
                {countdown > 0 && (
                  <Badge className="bg-red-100 text-red-800">
                    ETA: {formatTime(countdown)}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-2xl">
                {emergencyStatus.stage === 'triaging' && 'Processing Emergency Request...'}
                {emergencyStatus.stage === 'dispatching' && 'Dispatching Ambulance...'}
                {emergencyStatus.stage === 'enroute' && 'Ambulance En Route'}
                {emergencyStatus.stage === 'arrived' && 'Ambulance Arrived'}
              </CardTitle>
            </CardHeader>
          </Card>

          {emergencyStatus.ambulance && (
            <Card className="mb-6 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Ambulance className="h-5 w-5 mr-2 text-red-600" />
                  Ambulance Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Driver:</span>
                    <span className="font-medium">{emergencyStatus.ambulance.driverName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle:</span>
                    <span className="font-medium">{emergencyStatus.ambulance.vehicleNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ETA:</span>
                    <span className="font-medium text-green-600">{emergencyStatus.ambulance.eta}</span>
                  </div>
                  <Button className="w-full mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Driver: {emergencyStatus.ambulance.phone}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {emergencyStatus.hospital && (
            <Card className="mb-6 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Hospital className="h-5 w-5 mr-2 text-blue-600" />
                  Hospital Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hospital:</span>
                    <span className="font-medium">{emergencyStatus.hospital.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bed Type:</span>
                    <span className="font-medium">{emergencyStatus.hospital.bedType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address:</span>
                    <span className="font-medium text-right">{emergencyStatus.hospital.address}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Hospital: {emergencyStatus.hospital.contact}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Emergency Contact</h3>
              <p className="text-blue-700 mb-4">In case of any issues, call our emergency helpline</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Emergency Helpline: 1800-CARE-911
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-4">Emergency Request</h1>
          <p className="text-red-700 text-lg">Get immediate help in critical situations</p>
        </div>

        {/* Location Status */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Your Location</h3>
                  <p className="text-sm text-gray-600">
                    {location ? 'Location detected automatically' : 'Detecting your location...'}
                  </p>
                </div>
              </div>
              <Badge className={location ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                {location ? 'Ready' : 'Detecting...'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Button */}
        <Card className="mb-8 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="p-12 text-center">
            <AlertTriangle className="h-24 w-24 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-4">Medical Emergency?</h2>
            <p className="text-red-100 mb-8 text-lg">
              Press the button below for immediate ambulance dispatch and hospital bed allocation
            </p>
            <Button
              size="lg"
              onClick={handleEmergencyRequest}
              disabled={!location}
              className="bg-white text-red-600 hover:bg-red-50 px-12 py-6 text-xl font-bold"
            >
              🚨 EMERGENCY SOS
            </Button>
            <p className="text-red-100 mt-4 text-sm">
              This will automatically dispatch the nearest ambulance and allocate a hospital bed
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Emergency Request Works</CardTitle>
            <CardDescription>Our automated system ensures fastest response time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">1. Auto Triage</h3>
                <p className="text-sm text-gray-600">
                  System automatically assesses urgency and dispatches appropriate resources
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ambulance className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">2. Ambulance Dispatch</h3>
                <p className="text-sm text-gray-600">
                  Nearest available ambulance is automatically dispatched to your location
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hospital className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">3. Bed Allocation</h3>
                <p className="text-sm text-gray-600">
                  Hospital bed is pre-allocated based on your medical needs and proximity
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyRequest;
