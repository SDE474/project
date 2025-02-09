import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Bot, ChevronDown, ChevronRight } from "lucide-react";
import AuthModal from "./AuthModal";
import AIChatModal from "./AIChatModal";

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const openAuth = (type: "login" | "signup") => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

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
