import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const heroRef = useRef<HTMLElement | null>(null);
  const [heroInView, setHeroInView] = useState(true);
  const [atPageBottom, setAtPageBottom] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        setHeroInView(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // consider bottom when within 80px of document end
      setAtPageBottom(scrollPos >= docHeight - 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleStickyClick = () => {
    if (atPageBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById('ready');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // fallback: scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative h-[85vh] overflow-hidden">

      {/* Main content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            className="text-white lg:col-span-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              {currentLanguage === 'vi' ? (
                <>
                  THƯƠNG HIỆU DẪN ĐẦU
                  <div className="h-2 lg:h-4"></div>
                  GIẢI PHÁP TỐI ƯU
                </>
              ) : (
                <>
                  LEADING BRANDS
                  <div className="h-2 lg:h-4"></div>
                  OPTIMAL SOLUTIONS
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg mb-6 lg:mb-8 text-white/90 max-w-lg mx-auto lg:mx-0">
              {currentLanguage === 'vi'
                ? "Chúng tôi cung cấp các giải pháp công nghệ hàng đầu nhằm mang đến hiệu quả vận hành tối ưu cho khách hàng."
                : "We provide leading technology solutions to deliver optimal operational efficiency for our clients."
              }
            </p>
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border border-white rounded-md font-semibold text-base sm:text-lg hover:bg-primary hover:border-primary transition-colors duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentLanguage === 'vi' ? 'KHÁM PHÁ THÊM' : 'DISCOVER MORE'}
            </motion.button>
          </motion.div>


          <motion.div
            className="relative lg:col-span-4 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

          </motion.div>
        </div>
      </div>

      {/* Sticky action button (bottom-right) */}
      <button
        onClick={handleStickyClick}
        aria-label={atPageBottom ? (currentLanguage === 'vi' ? 'Lên đầu trang' : 'Go to top') : (currentLanguage === 'vi' ? 'Đến phần sẵn sàng' : 'Go to Ready section')}
        className="fixed bottom-6 right-6 z-50 bg-transparent text-white border border-white p-3.5 rounded-full shadow-lg hover:bg-primary hover:border-primary hover:text-white transition-colors duration-300 hover:scale-105 transition-transform"
        title={atPageBottom ? (currentLanguage === 'vi' ? 'Lên đầu trang' : 'Go to top') : (currentLanguage === 'vi' ? 'Đến phần sẵn sàng' : 'Go to Ready section')}
      >
        {/* simple icon: up when at bottom, down otherwise */}
        {atPageBottom ? (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        )}
      </button>

    </section>
  );
};

export default Hero;