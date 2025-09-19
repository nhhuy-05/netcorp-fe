import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ReadySection: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="relative bg-white py-16 z-10 mt-20">
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div 
            className="lg:w-2/3 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight uppercase">
              {currentLanguage === 'vi' ? (
                <>
                  Sẵn sàng với những dự án
                  <div className="h-5"></div>
                  quy mô <span className="text-primary">&</span> mạnh mẽ hơn
                </>
              ) : (
                <>
                  We're Ready To Bring Bigger
                  <div className="h-5"></div>
                  <span className="text-primary">&</span> Stronger Projects
                </>
              )}
            </h2>
          </motion.div>

          {/* Button */}
          <motion.div
            className="mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary text-white font-bold text-lg rounded hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {currentLanguage === 'vi' ? 'LIÊN HỆ VỚI CHÚNG TÔI' : 'CONTACT WITH US'}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary/5 rounded-full filter blur-2xl"></div>
    </section>
  );
};

export default ReadySection; 