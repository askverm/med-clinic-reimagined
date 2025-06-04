
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Bell, Heart, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to revolutionize healthcare in India. Whether you need care services or want to be part of our ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Helpline</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 rounded-full p-3 mr-4">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">General Support</h3>
                    <p className="text-gray-600">care@caresaathi.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Coverage</h3>
                    <p className="text-gray-600">Pan India Services<br />Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mission</h3>
                    <p className="text-gray-600">India's Most Trusted<br />Care Ecosystem by 2028</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Join Our Care Revolution</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" className="border-gray-300" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input placeholder="+91 98765 43210" className="border-gray-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Elder Care Services</option>
                      <option>Emergency Response</option>
                      <option>Emotional Support</option>
                      <option>Partnership Opportunities</option>
                      <option>Join Our Team</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us how we can help you or how you'd like to be part of our mission..." 
                      className="border-gray-300 min-h-32"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-lg py-3">
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🚀 Early Access</h4>
                  <p className="text-gray-600 text-sm">
                    Be among the first to experience CareSaathi when we launch. 
                    Get notified about our app release and exclusive early access benefits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
