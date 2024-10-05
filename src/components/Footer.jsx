import React from 'react';
import logo from './Asset/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-6 ">
      {/* Top Section: Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-gray-600">
        {/* Product */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Overview</a></li>
            <li><a href="#" className="hover:text-gray-800">Features</a></li>
            <li>
              <a href="#" className="hover:text-gray-800 flex items-center">
                Solutions <span className="ml-1 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">New</span>
              </a>
            </li>
            <li><a href="#" className="hover:text-gray-800">Tutorials</a></li>
            <li><a href="#" className="hover:text-gray-800">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-800">Releases</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">About us</a></li>
            <li><a href="#" className="hover:text-gray-800">Careers</a></li>
            <li><a href="#" className="hover:text-gray-800">Press</a></li>
            <li><a href="#" className="hover:text-gray-800">News</a></li>
            <li><a href="#" className="hover:text-gray-800">Media kit</a></li>
            <li><a href="#" className="hover:text-gray-800">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Blog</a></li>
            <li><a href="#" className="hover:text-gray-800">Newsletter</a></li>
            <li><a href="#" className="hover:text-gray-800">Events</a></li>
            <li><a href="#" className="hover:text-gray-800">Help centre</a></li>
            <li><a href="#" className="hover:text-gray-800">Tutorials</a></li>
            <li><a href="#" className="hover:text-gray-800">Support</a></li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Use cases</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Startups</a></li>
            <li><a href="#" className="hover:text-gray-800">Enterprise</a></li>
            <li><a href="#" className="hover:text-gray-800">Government</a></li>
            <li><a href="#" className="hover:text-gray-800">SaaS centre</a></li>
            <li><a href="#" className="hover:text-gray-800">Marketplaces</a></li>
            <li><a href="#" className="hover:text-gray-800">Ecommerce</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Social</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-800">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gray-800">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-800">GitHub</a></li>
            <li><a href="#" className="hover:text-gray-800">AngelList</a></li>
            <li><a href="#" className="hover:text-gray-800">Dribbble</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-800">Terms</a></li>
            <li><a href="#" className="hover:text-gray-800">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-800">Cookies</a></li>
            <li><a href="#" className="hover:text-gray-800">Licenses</a></li>
            <li><a href="#" className="hover:text-gray-800">Settings</a></li>
            <li><a href="#" className="hover:text-gray-800">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Logo & Copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Untitled UI Logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-lg font-semibold text-gray-800">Untitled UI</span>
        </div>
        <p className="text-sm text-gray-600">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
