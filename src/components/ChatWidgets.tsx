
import { useState } from 'react';
import { MessageCircle, Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChatWidgets = () => {
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState('');

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello%20CareSaathi,%20I%20need%20help%20with...', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4">
      {/* AI Chat Modal */}
      {isAiChatOpen && (
        <Card className="w-80 h-96 shadow-2xl animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-['Poppins'] flex items-center">
                <Bot className="w-5 h-5 mr-2 animate-pulse" />
                AI Saathi - Emotional Support
              </CardTitle>
              <button 
                onClick={() => setIsAiChatOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto mb-4">
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-700">👋 Namaste! I'm your AI companion. How are you feeling today? I'm here to listen and support you.</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-600">💝 Available 24/7 for:</p>
                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                  <li>• Emotional support & listening</li>
                  <li>• Daily mood tracking</li>
                  <li>• Stress management tips</li>
                  <li>• Connect with Bada Bhai/Behen</li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={aiMessage}
                onChange={(e) => setAiMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chat Widget Buttons */}
      <div className="flex flex-col space-y-3">
        {/* WhatsApp Widget */}
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:animate-bounce" />
        </Button>

        {/* AI Chat Widget */}
        <Button
          onClick={() => setIsAiChatOpen(!isAiChatOpen)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          size="icon"
        >
          <Bot className="w-6 h-6 text-white group-hover:animate-pulse" />
        </Button>
      </div>

      {/* Floating Labels */}
      <div className="absolute right-16 bottom-16 flex flex-col space-y-3 items-end">
        <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-medium animate-fade-in">
          💬 WhatsApp Support
        </div>
        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-medium animate-fade-in delay-200">
          🤖 AI Emotional Support
        </div>
      </div>
    </div>
  );
};

export default ChatWidgets;
