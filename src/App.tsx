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
import ProjectDetail from './pages/ProjectDetail';
import Careers from './components/pages/Careers';
import CareerDetail from './pages/CareerDetail';
import NotFound from './components/pages/NotFound';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Lấy ngôn ngữ từ localStorage nếu có, không thì mặc định 'vi'
    const savedLanguage = localStorage.getItem('language') || 'vi';
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
          <Route path="/about" element={<About />} />
          <Route path="/about/home" element={<Navigate to="/" replace />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Services />} />
          <Route path="/solutions/ict" element={<IctServicePage />} />
          <Route path="/solutions/broadcasting" element={<BroadcastingServicePage />} />
          <Route path="/solutions/business-application" element={<BusinessApplicationServicePage />} />
          <Route path="/solutions/me" element={<MeServicePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
