import React, { useState } from 'react';
import { X, Send, Bot, Loader2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hello! I\'m your PRMCAS AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const response = getAIResponse(input.trim());
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  // Simple response logic (replace with actual AI integration)
  const getAIResponse = (query: string): string => {
    const responses = {
      'admission': 'Admissions for the academic year are open. We offer courses in Arts, Commerce, and Science streams. The admission process is online through our portal.',
      'courses': 'We offer various undergraduate and postgraduate programs in Arts, Commerce, and Science streams. Some popular courses include BBA, BCA, BSc, and MCom.',
      'fees': 'Fee structure varies by course. Please visit our admission portal for detailed fee information.',
      'campus': 'Our campus is located in Akurdi, Pune. We have state-of-the-art facilities including labs, library, sports ground, and more.',
      'default': 'I can help you with information about admissions, courses, fees, campus facilities, and more. What would you like to know?'
    };

    const query_lower = query.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (query_lower.includes(key)) return value;
    }
    return responses.default;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                College AI Assistant
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-96 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2">
                  <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about admissions, courses, fees..."
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}