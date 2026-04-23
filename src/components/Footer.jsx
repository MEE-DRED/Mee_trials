import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="text-2xl font-semibold mb-4 block tracking-tight">Dine with <span className="text-accent">Mee</span></span>
          <p className="text-white/80 mb-6 leading-relaxed">
            Premium African health-tech platform delivering clinically informed nutrition pathways and therapeutic meal discovery.
          </p>
          <div className="flex gap-3">
            <a 
              href="#" 
              aria-label="X (Twitter)"
              className="w-9 h-9 bg-accent/20 hover:bg-accent/40 rounded-full flex items-center justify-center text-white hover:text-accent transition duration-300"
            >
              X
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-9 h-9 bg-accent/20 hover:bg-accent/40 rounded-full flex items-center justify-center text-white hover:text-accent transition duration-300"
            >
              in
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-9 h-9 bg-accent/20 hover:bg-accent/40 rounded-full flex items-center justify-center text-white hover:text-accent transition duration-300"
            >
              F
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-9 h-9 bg-accent/20 hover:bg-accent/40 rounded-full flex items-center justify-center text-white hover:text-accent transition duration-300"
            >
              IG
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-base font-semibold mb-4 text-accent">Clinical Areas</h5>
          <ul className="space-y-3 text-white/85">
            <li>
              <Link to="/health#diabetes" className="hover:text-accent transition duration-300">Diabetes Care</Link>
            </li>
            <li>
              <Link to="/health#hypertension" className="hover:text-accent transition duration-300">Hypertension Support</Link>
            </li>
            <li>
              <Link to="/health#maternal-care-pathway" className="hover:text-accent transition duration-300">Maternal Health</Link>
            </li>
            <li>
              <Link to="/health#obesity" className="hover:text-accent transition duration-300">Weight Management</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-base font-semibold mb-4 text-accent">Platform</h5>
          <ul className="space-y-3 text-white/85">
            <li>
              <Link to="/" className="hover:text-accent transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/health" className="hover:text-accent transition duration-300">Health Hub</Link>
            </li>
            <li>
              <Link to="/marketplace" className="hover:text-accent transition duration-300">Marketplace</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-base font-semibold mb-4 text-accent">Account</h5>
          <ul className="space-y-3 text-white/85">
            <li>
              <Link to="/login" className="hover:text-accent transition duration-300">Log in</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-accent transition duration-300">Join Free</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-accent transition duration-300">Create Health Profile</Link>
            </li>
            <li>
              <Link to="/marketplace" className="hover:text-accent transition duration-300">Start Ordering</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-accent/20 pt-8 mt-12 flex flex-col md:flex-row gap-3 justify-between items-start md:items-center text-white/65 text-sm">
        <span>&copy; 2026 Dine with Mee. All rights reserved.</span>
        <span>Built by <span className="text-accent">Mee Technologies Ltd.</span></span>
      </div>
    </footer>
  );
};

export default Footer;
