
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Bot, ChevronDown, ChevronRight } from "lucide-react";
import AuthModal from "./AuthModal";
import AIChatModal from "./AIChatModal";

import React, { useState } from 'react';
import { Menu, Search, Bot, ChevronDown, ArrowRight } from 'lucide-react';
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

  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  const openAuth = (type: "login" | "signup") => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  const researchItems: DropdownItem[] = [
    { text: 'Research Policy', href: '/research/policy' },
    {
      text: 'Research Centres',
      href: '/research/centres',
      items: [
        { text: "Research Centre in Botany", href: "/research/Botany" },
        { text: 'Research Centre in Zoology', href: '/research/centres/Zoology' },
        { text: 'Research Centre in Chemistry', href: '/research/centres/chemistry' },
        { text: 'Research Centre in Commerce', href: '/research/centres/commerce' },
        { text: 'Research Centre in Economics', href: '/research/centres/economics' },
        { text: 'Research Centre in Geography', href: '/research/centres/geography' },
        { text: 'Research Centre in English', href: '/research/centres/english' },
        { text: 'Research Centre in Hindi', href: '/research/centres/hindi' },
        { text: 'Research Centre in Physics', href: '/research/centres/physics' },
        { text: 'Research Centre in Mathematics', href: '/research/centres/mathematics' },
        { text: 'Research Centre in Psychology', href: '/research/centres/psychology' },
        { text: 'Research Centre in Computer Science', href: '/research/centres/computer-science' }
      ]
    },
    { text: 'Incubation Centre', href: '/research/incubation' },
    { text: 'Funding Schemes', href: '/research/funding' },
    { text: 'Consultancy', href: '/research/consultancy' },
    {
      text: 'Projects',
      href: '/research/projects',
      items: [
        { text: 'Major Research Projects', href: '/research/projects/major' },
        { text: 'Minor Research Projects', href: '/research/projects/minor' }
      ]
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#9E1B32] text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end space-x-6 text-sm">
          <button onClick={() => setIsAIChatOpen(true)} className="hover:text-gray-200 flex items-center">
            <Bot className="h-4 w-4 mr-1" /> AI Assistant
          </button>
          <button onClick={() => openAuth("login")} className="hover:text-gray-200">
            Student Portal
          </button>
          <button className="hover:text-gray-200">Faculty & Staff</button>
        </div>
      </div>

      {/* Logo and Search */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-[#9E1B32] mr-4 cursor-pointer lg:hidden" />
            <h1 className="text-2xl font-serif text-[#9E1B32] tracking-wide">PRMCAS</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#9E1B32] text-white px-4 py-2 rounded hover:bg-[#7D1527] transition-colors">
              Apply Now
            </button>
            <Search className="h-5 w-5 text-gray-600 hover:text-[#9E1B32] transition-colors cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex justify-center py-4 space-x-8">
            <NavLink href="/about" text="About" />

            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                className="text-gray-800 hover:text-[#9E1B32] transition-colors flex items-center px-3 py-2 text-sm uppercase"
              >
                Academics
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isAcademicsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {/* Policy And Procedure Dropdown */}
                    <div className="relative group">
                      <button
                        onClick={() => setIsPolicyOpen(!isPolicyOpen)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                      >
                        Policy And Procedure
                        <ChevronRight className="h-4 w-4" />
                      </button>

                      {isPolicyOpen && (
                        <div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            <NavLink href="/academic" text="Academic" />
                            <NavLink href="/admission" text="Admission" />
                            <NavLink href="/curriculum-delivery" text="Curriculum Delivery" />
                            <NavLink href="/fee-refund-policy" text="Fee Refund Policy" />
                            <NavLink href="/mentor" text="Mentor" />
                            <NavLink href="/physical-academic-facility" text="Facilities" />
                            <NavLink href="/prospective-plan" text="Prospective Plan" />
                            <NavLink href="/short-term-courses" text="Short Term Courses" />
                            <NavLink href="/program-outcome-documents" text="Program Outcome Documents" />
                          </div>
                        </div>
                      )}
                    </div>

                    <NavLink href="/program-outcome-documents" text="Program Outcomes" />
                    <NavLink href="/admission" text="Admission" />
                    <NavLink href="/short-term-courses" text="Short Term Courses" />
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/departments" text="Departments" />
            <NavLink href="/campus-life" text="Campus Life" />
            <NavLink href="/athletics" text="Athletics" />
            <NavLink href="/give" text="Give" />
          </nav>
        </div>
      </div>



      {/* Navigation Links */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex justify-center py-4">
            <div className="flex space-x-8">
              <NavLink href="#" text="About" />
              <NavLink href="#" text="Academics" />
              <NavLink href="#" text="Department" />
              <NavDropdown
  text="Research"
  items={researchItems}
  isActive={activeDropdown === 'research'}
  onMouseEnter={() => setActiveDropdown('research')}
  onMouseLeave={() => {
    // Add a delay of 500ms before hiding the dropdown (you can adjust this time)
    setTimeout(() => {
      setActiveDropdown(null);
    }, 10000); // 500ms delay
  }}
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

// Navigation Link Component
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#9E1B32]"
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
      className="relative group"
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
            <div key={index} className="relative group/submenu">
              {item.items ? (
                <div className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between text-sm text-gray-700 hover:text-[#9E1B32] cursor-pointer">
                  {item.text}
                  <ChevronDown className="h-4 w-4 transform -rotate-90" />
                  <div className="absolute left-full top-0 ml-2 w-72 bg-white rounded-lg shadow-lg py-2 hidden group-hover/submenu:block">
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
