import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content rounded p-5 mt-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="text-lg font-bold">Learn</div>
          <div className="text-lg font-bold">Support</div>
          <div className="text-lg font-bold">Company</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <Link to="/terms-of-service" className="block hover:underline">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="block hover:underline mt-2">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="block hover:underline mt-2">
              Refund Policy
            </Link>
          </div>
          <div>
            <Link to="/contact" className="block hover:underline">
              Contact Us
            </Link>
            <Link to="/cancellation-policy" className="block hover:underline mt-2">
              Cancellation Policy
            </Link>
            <Link to="/shipping-policy" className="block hover:underline mt-2">
              Shipping Policy
            </Link>
          </div>
          <div>
            <p className="text-lg font-bold">About Us</p>
            <p className="text-sm mt-2">
              Coder Community is a platform for coders to learn, grow, and connect with each other.
            </p>
          </div>
        </div>
        <p className="text-center mt-4">
          Copyright {new Date().getFullYear()} - All rights reserved by Coder Community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
