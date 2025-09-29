import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const services = [
  { name: { en: 'ICT', vi: 'ICT' }, path: '/services/ict' },
  { name: { en: 'Broadcasting', vi: 'Truyền thông' }, path: '/services/broadcasting' },
  { name: { en: 'Business Application', vi: 'Ứng dụng doanh nghiệp' }, path: '/services/business-application' },
  { name: { en: 'M&E', vi: 'M&E' }, path: '/services/me' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // ref to debounce hide of services dropdown to avoid flicker when moving mouse
  const hideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  // Nav items (contact removed from main list; careers added)
  const navItems = [
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.services'), path: '/services' },
    { name: t('navbar.client'), path: '/client' },
    { name: t('navbar.partners'), path: '/partners' },
    { name: t('navbar.news'), path: '/news' },
    { name: currentLanguage === 'vi' ? 'Tuyển dụng' : 'Careers', path: '/careers' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 shadow-lg backdrop-blur-sm py-4' : 'bg-transparent py-6'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className={`flex items-center ${scrolled ? 'text-white' : 'text-white'}`}>
              <div className="flex items-center justify-center h-12 md:h-14 lg:h-16 -my-1">
                <img src="/image/LOGO_NC.png" alt="NetCorp Logo" className="h-full max-h-12 md:max-h-14 lg:max-h-16 w-auto object-contain" />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              item.path === '/services' ? (
                <div
                  key={item.path}
                  className="relative group"
                  onMouseEnter={() => {
                    if (hideTimeoutRef.current) {
                      clearTimeout(hideTimeoutRef.current);
                      hideTimeoutRef.current = null;
                    }
                    setServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    // small delay to allow pointer move into dropdown without closing immediately
                    hideTimeoutRef.current = window.setTimeout(() => setServicesOpen(false), 150);
                  }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link px-5 py-3 font-medium transition-all duration-300 flex items-center ${location.pathname.startsWith('/services')
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                      }`}
                  >
                    {item.name}
                    <FiChevronDown className="ml-1" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-2 mt-1">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`block px-4 py-2 text-gray-800 transition-colors duration-200 ${location.pathname === service.path ? 'text-primary' : 'hover:text-primary hover:bg-primary/10'
                            }`}
                        >
                          {typeof service.name === 'string' ? service.name : currentLanguage === 'vi' ? service.name.vi : service.name.en}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link px-5 py-3 font-medium transition-all duration-300 relative group ${isActive(item.path)
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                    }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              )
            ))}
          </div>

            <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center border border-white text-white px-4 py-2 rounded-full font-medium transition hover:bg-primary hover:border-primary hover:text-white"
            >
              {currentLanguage === 'vi' ? 'Liên hệ' : 'Contact'}
            </Link>
            </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 flex flex-col items-end justify-center space-y-1.5">
              <span className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 transform -rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 transform rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-[60px] left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 max-h-[calc(100vh-60px)] overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-4 px-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                item.path === '/services' ? (
                  <div key={item.path} className="border-b border-gray-800/50 pb-2">
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 font-medium rounded-md transition-colors duration-200 ${location.pathname === '/services'
                        ? 'text-primary'
                        : 'text-white hover:text-primary hover:bg-gray-800/30'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Service sub-items */}
                    <div className="ml-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`block px-4 py-2 rounded-md transition-colors duration-200 ${location.pathname === service.path
                            ? 'text-primary'
                            : 'text-gray-300 hover:text-primary hover:bg-gray-800/30'
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {typeof service.name === 'string' ? service.name : currentLanguage === 'vi' ? service.name.vi : service.name.en}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 font-medium rounded-md transition-colors duration-200 ${isActive(item.path)
                      ? 'text-primary'
                      : 'text-white hover:text-primary hover:bg-gray-800/30'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-3 mt-2 border-t border-gray-800/50 flex justify-between items-center">
                <LanguageSwitcher />
                <Link
                  to="/contact"
                  className="ml-4 inline-flex items-center bg-white text-primary px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {currentLanguage === 'vi' ? 'LIÊN HỆ' : 'Contact'}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;