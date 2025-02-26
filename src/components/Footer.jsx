import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content rounded p-8 mt-15 lg:mt-40">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-2">
          <div className="text-2xl font-bold">Learn</div>
          <div className="text-2xl font-bold">Support</div>
          <div className="text-2xl font-bold">Company</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-b">
          <div className="text-lg">
            <Link to="/privacy-policy" className="block hover:underline mt-2 text-gray-300">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="block hover:underline mt-2 text-gray-300">
              Refund Policy
            </Link>
          </div>
          <div className="text-lg">
            <Link to="/cancellation-policy" className="block hover:underline mt-2 text-gray-300">
              Cancellation Policy
            </Link>
            <Link to="/shipping-policy" className="block hover:underline mt-2 text-gray-300">
              Shipping Policy
            </Link>
          </div>
          <div className="text-lg">
            <Link to="/about" className="block hover:underline mt-2 text-gray-300">
              About Us
            </Link>   
            <Link to="/terms-of-service" className="block hover:underline">
              Terms of Service
            </Link> 
            <Link to="/contact" className="block hover:underline text-gray-300">
              Contact Us
            </Link>
          </div>
        </div>
        <h1 className="text-center text-xl mt-2 font-bold text-gray-300">
          Copyright {new Date().getFullYear()} - All rights reserved by Coder Community
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
