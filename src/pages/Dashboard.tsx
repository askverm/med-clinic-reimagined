import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Ambulance, Hospital, Heart, Users, Phone, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MobileHeader from '@/components/MobileHeader';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const services = [
    {
      title: 'Emergency Request',
      description: 'Quick ambulance + hospital bed booking',
      icon: Phone,
      color: 'bg-red-500',
      route: '/emergency'
    },
    {
      title: 'Hospital Search',
      description: 'Find hospitals and book beds',
      icon: Hospital,
      color: 'bg-blue-500',
      route: '/hospitals'
    },
    {
      title: 'Ambulance Booking',
      description: 'Book nearest ambulance service',
      icon: Ambulance,
      color: 'bg-green-500',
      route: '/ambulance'
    },
    {
      title: 'Caregiver Services',
      description: 'Book trained caregivers',
      icon: Heart,
      color: 'bg-purple-500',
      route: '/caregivers'
    },
    {
      title: 'Mental Wellness',
      description: 'Bada Bhai/Badi Behen support',
      icon: Users,
      color: 'bg-orange-500',
      route: '/mentorship'
    },
    {
      title: 'Booking History',
      description: 'View past and upcoming bookings',
      icon: Calendar,
      color: 'bg-indigo-500',
      route: '/bookings'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader />
      
      {/* Desktop Header */}
      <header className="hidden lg:block bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Welcome back, {user?.name}
              </h1>
              <p className="text-sm text-gray-600">Your health companion is here</p>
            </div>
            <Button onClick={logout} variant="outline">
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Mobile Welcome */}
        <div className="lg:hidden mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome, {user?.name}
          </h1>
          <p className="text-sm text-gray-600">Your health companion</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Hospital className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Available Beds</p>
                  <p className="text-2xl font-semibold text-gray-900">1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Ambulance className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Active Ambulances</p>
                  <p className="text-2xl font-semibold text-gray-900">86</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Caregivers Online</p>
                  <p className="text-2xl font-semibold text-gray-900">234</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 lg:p-3 rounded-lg ${service.color}`}>
                    <service.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-base lg:text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={() => navigate(service.route)}
                  className="w-full h-10"
                >
                  Access Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Quick Access */}
        <Card className="mt-6 lg:mt-8 bg-gradient-to-r from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  Emergency Situation?
                </h3>
                <p className="text-red-700">
                  Get immediate help with our one-tap emergency system
                </p>
              </div>
              <Button 
                onClick={() => navigate('/emergency')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 text-lg w-full lg:w-auto"
                size="lg"
              >
                SOS Emergency
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
