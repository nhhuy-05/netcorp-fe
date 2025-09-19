import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';

// Components
import Navbar from './components/layout/Navbar';
import About from './components/ui/About';
import Clients from './components/ui/Clients';
import Partners from './components/ui/Partners';
import Footer from './components/layout/Footer';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import IctServicePage from './components/pages/IctServicePage';
import BroadcastingServicePage from './components/pages/BroadcastingServicePage';
import BusinessApplicationServicePage from './components/pages/BusinessApplicationServicePage';
import MeServicePage from './components/pages/MeServicePage';
import ScrollToTop from './components/ui/ScrollToTop';
import Services from './components/ui/Services';
import News from './components/ui/News';
import Blog from './components/pages/Blog';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get the language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-light relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={
            <div className="pt-20">
              <About />
            </div>
          } />
          <Route path="/about/home" element={<Navigate to="/" replace />} />
          <Route path="/client" element={
            <div className="pt-20">
              <Clients />
            </div>
          } />
          <Route path="/partners" element={
            <div className="pt-20">
              <Partners />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={
            <div className="pt-20">
              <Services />
            </div>
          } />
          <Route path="/services/ict" element={<IctServicePage />} />
          <Route path="/services/broadcasting" element={<BroadcastingServicePage />} />
          <Route path="/services/business-application" element={<BusinessApplicationServicePage />} />
          <Route path="/services/me" element={<MeServicePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
