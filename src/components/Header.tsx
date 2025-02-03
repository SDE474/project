import React, { useState } from 'react';
import { Menu, Search, Sun, Moon, Bell, LogIn, UserPlus, Bot } from 'lucide-react';
import AuthModal from './AuthModal';
import AIChatModal from './AIChatModal';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');

  const openAuth = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#9E1B32] text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end space-x-6 text-sm">
            <button
              onClick={() => setIsAIChatOpen(true)}
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <Bot className="h-4 w-4 mr-1" />
              AI Assistant
            </button>
            <button onClick={() => openAuth('login')} className="hover:text-gray-200 transition-colors">
              Student Portal
            </button>
            <button className="hover:text-gray-200 transition-colors">
              Faculty & Staff
            </button>
          </div>
        </div>
      </div>

      {/* Logo and Search */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-[#9E1B32] mr-4 cursor-pointer lg:hidden" />
              <h1 className="text-2xl font-serif text-[#9E1B32] tracking-wide">
                PRMCAS
              </h1>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="bg-[#9E1B32] text-white px-4 py-2 rounded hover:bg-[#7D1527] transition-colors">
                Apply Now
              </button>
              <Search className="h-5 w-5 text-gray-600 hover:text-[#9E1B32] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} type={authType} />
      <AIChatModal isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="text-gray-800 hover:text-[#9E1B32] transition-colors px-3 py-2 text-sm font-medium uppercase tracking-wide"
    >
      {text}
    </a>
  );
}