
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleEmergency = () => {
    if (user) {
      navigate('/emergency');
    } else {
      navigate('/auth?type=user');
    }
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header className="lg:hidden bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <Logo size="sm" />
        
        <div className="flex items-center space-x-2">
          {/* Emergency Button */}
          <Button
            onClick={handleEmergency}
            className="bg-red-600 hover:bg-red-700 text-white p-2"
            size="sm"
          >
            <Phone className="h-4 w-4" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="p-2">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {user ? (
                  <>
                    <div className="border-b pb-4">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    
                    <Button
                      onClick={() => {
                        navigate('/dashboard');
                        setIsOpen(false);
                      }}
                      className="justify-start"
                      variant="ghost"
                    >
                      Dashboard
                    </Button>
                    
                    <Button
                      onClick={() => {
                        navigate('/hospitals');
                        setIsOpen(false);
                      }}
                      className="justify-start"
                      variant="ghost"
                    >
                      Hospitals
                    </Button>
                    
                    <Button
                      onClick={() => {
                        navigate('/ambulance');
                        setIsOpen(false);
                      }}
                      className="justify-start"
                      variant="ghost"
                    >
                      Ambulance
                    </Button>
                    
                    <Button
                      onClick={() => {
                        navigate('/caregivers');
                        setIsOpen(false);
                      }}
                      className="justify-start"
                      variant="ghost"
                    >
                      Caregivers
                    </Button>
                    
                    <Button
                      onClick={() => {
                        navigate('/bookings');
                        setIsOpen(false);
                      }}
                      className="justify-start"
                      variant="ghost"
                    >
                      Bookings
                    </Button>
                    
                    <Button
                      onClick={handleLogout}
                      className="justify-start mt-4"
                      variant="outline"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        navigate('/auth?type=user');
                        setIsOpen(false);
                      }}
                      className="justify-start"
                    >
                      Login
                    </Button>
                    
                    <Button
                      onClick={() => {
                        navigate('/');
                        setIsOpen(false);
                      }}
                      className="justify-start"
                      variant="ghost"
                    >
                      Home
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
