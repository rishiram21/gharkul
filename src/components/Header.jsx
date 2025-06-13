import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-3 space-y-3 sm:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9632748927</span>
            </div>
            <div className="flex flex-wrap items-center justify-between space-y-2 sm:space-y-0 sm:flex-nowrap sm:space-x-4">
  {/* Email Section */}
  <div className="flex items-center space-x-2">
    <Mail className="h-4 w-4" />
    <span className="text-sm">gharkul@gmail.com</span>
  </div>

  {/* Social Links */}
  <div className="flex items-center space-x-4 px-10">
    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
      <Facebook className="h-5 w-5" />
    </a>
    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
      <Twitter className="h-5 w-5" />
    </a>
    <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
      <Instagram className="h-5 w-5" />
    </a>
    <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
      <Linkedin className="h-5 w-5" />
    </a>
  </div>
</div>
</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
