import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#9E1B32] mt-1" />
                <span>Akurdi, Pune - 411044, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#9E1B32]" />
                <span>+91 20 2765 4545</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#9E1B32]" />
                <span>info@prmcollege.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Department</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Campus Life</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Career Services</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Faculty Portal</a></li>
              <li><a href="#" className="hover:text-[#9E1B32] transition-colors">Alumni</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Connect</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="hover:text-[#9E1B32] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#9E1B32] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#9E1B32] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#9E1B32] transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <form className="space-y-4">
              <h4 className="font-medium">Stay Updated</h4>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-[#9E1B32]"
              />
              <button
                type="submit"
                className="w-full bg-[#9E1B32] text-white px-4 py-2 rounded hover:bg-[#7D1527] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 Prof. Ramkrishna More College. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-[#9E1B32] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#9E1B32] transition-colors">Terms of Use</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#9E1B32] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}