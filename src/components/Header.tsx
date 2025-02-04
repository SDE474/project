import React, { useState } from 'react';
import { Menu, Search, Bot, ChevronDown } from 'lucide-react';
import AuthModal from './AuthModal';
import AIChatModal from './AIChatModal';

interface DropdownItem {
  text: string;
  href: string;
  items?: DropdownItem[];
}

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const openAuth = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  const researchItems: DropdownItem[] = [
    { text: 'Research Policy', href: '/research/policy' },
    {
      text: 'Research Centre',
      href: '/research/centres',
      items: [
        { text: 'Zoology', href: '/research/centres/zoology' },
        { text: 'Botany', href: '/research/centres/botany' },
        { text: 'Chemistry', href: '/research/centres/chemistry' },
        { text: 'Commerce', href: '/research/centres/commerce' },
        { text: 'Economics', href: '/research/centres/economics' },
        { text: 'Geography', href: '/research/centres/geography' },
        { text: 'English', href: '/research/centres/english' },
        { text: 'Hindi', href: '/research/centres/hindi' },
        { text: 'Physics', href: '/research/centres/physics' },
        { text: 'Mathematics', href: '/research/centres/mathematics' },
        { text: 'Psychology', href: '/research/centres/psychology' },
        { text: 'Computer Science', href: '/research/centres/computer-science' }
      ]
    },
    { text: 'Incubation Centre', href: '/research/incubation' },
    { text: 'Funding Scheme', href: '/research/funding' },
    { text: 'Consultancy', href: '/research/consultancy' },
    {
      text: 'Projects',
      href: '/research/projects',
      items: [
        { text: 'Major Projects', href: '/research/projects/major' },
        { text: 'Minor Projects', href: '/research/projects/minor' }
      ]
    }
  ];

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

      {/* Hero Content */}
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-6 tracking-wide">
              Prof. Ramkrishna More College
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl font-light">
              Empowering minds, shaping futures through excellence in education since 1994
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#apply"
                className="bg-white text-[#9E1B32] px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors rounded"
              >
                Apply Now
              </a>
              <a
                href="#tour"
                className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-colors rounded flex items-center"
              >
                Virtual Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links - After hero content */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex justify-center py-4">
            <div className="flex space-x-8">
              <NavLink href="#" text="About" />
              <NavLink href="#" text="Academics" />
              <NavLink href="#" text="Admissions" />
              <NavDropdown
                text="Research"
                items={researchItems}
                isActive={activeDropdown === 'research'}
                onMouseEnter={() => setActiveDropdown('research')}
                onMouseLeave={() => setActiveDropdown(null)}
              />
              <NavLink href="#" text="Campus Life" />
              <NavLink href="#" text="Athletics" />
              <NavLink href="#" text="Give" />
            </div>
          </nav>
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

interface NavDropdownProps {
  text: string;
  items: DropdownItem[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function NavDropdown({ text, items, isActive, onMouseEnter, onMouseLeave }: NavDropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center text-gray-800 hover:text-[#9E1B32] transition-colors px-3 py-2 text-sm font-medium uppercase tracking-wide">
        {text}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isActive && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              {item.items ? (
                <div className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between text-sm text-gray-700 hover:text-[#9E1B32] cursor-pointer">
                  {item.text}
                  <ChevronDown className="h-4 w-4 transform -rotate-90" />
                  <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#9E1B32] hover:bg-gray-50"
                      >
                        {subItem.text}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#9E1B32] hover:bg-gray-50"
                >
                  {item.text}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}