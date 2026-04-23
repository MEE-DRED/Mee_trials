import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, toggleCart, isOpen } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-primary/10 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg shadow-premium-sm">D</div>
            <span className="text-base sm:text-lg font-semibold text-primary tracking-tight">
              Dine with <span className="text-accent">Mee</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className={`text-sm font-medium transition duration-300 ${isActive('/') ? 'text-primary' : 'text-primary/70 hover:text-primary'}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/health" className={`text-sm font-medium transition duration-300 ${isActive('/health') ? 'text-primary' : 'text-primary/70 hover:text-primary'}`}>
              Health Hub
            </Link>
          </li>
          <li>
            <Link to="/marketplace" className={`text-sm font-medium transition duration-300 ${isActive('/marketplace') ? 'text-primary' : 'text-primary/70 hover:text-primary'}`}>
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`text-sm font-medium transition duration-300 ${isActive('/contact') ? 'text-primary' : 'text-primary/70 hover:text-primary'}`}>
              Contact
            </Link>
          </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleCart}
              className="relative rounded-xl border border-primary/20 bg-white px-3 py-2 text-sm font-medium text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm"
              aria-label="Shopping cart"
            >
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <Link
                    to={user?.role === 'admin' ? '/admin-dashboard' : '/dashboard'}
                    className="rounded-xl border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="rounded-xl border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
                  >
                    Join Free
                  </Link>
                </>
              )}
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 rounded-xl border border-primary/20 bg-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/45"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-72 bg-primary shadow-premium-md">
            <div className="p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-accent text-2xl leading-none mb-6"
                aria-label="Close menu"
              >
                ×
              </button>
              
              <ul className="space-y-5">
                <li>
                  <Link 
                    to="/" 
                    className={`block text-white hover:text-accent py-2 text-base ${isActive('/') ? 'text-accent' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/health" 
                    className={`block text-white hover:text-accent py-2 text-base ${isActive('/health') ? 'text-accent' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Health Hub
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/marketplace" 
                    className={`block text-white hover:text-accent py-2 text-base ${isActive('/marketplace') ? 'text-accent' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`block text-white hover:text-accent py-2 text-base ${isActive('/contact') ? 'text-accent' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-accent/30">
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="text-white/80 text-sm">
                      Signed in as {user?.email}
                    </div>
                    <Link 
                      to={user?.role === 'admin' ? '/admin-dashboard' : '/dashboard'}
                      className="block rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Link 
                      to="/login" 
                      className="block rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join Free
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
