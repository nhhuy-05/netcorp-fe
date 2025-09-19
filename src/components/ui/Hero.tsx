import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <section className="relative h-[85vh] overflow-hidden">
    
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
                ? "Chúng tôi phân phối các thương hiệu công nghệ hàng đầu nhằm mang đến những giải pháp tối ưu và hiệu quả nhất cho khách hàng."
                : "We distribute leading technology brands to deliver the most optimal and effective solutions to our clients."
              }
            </p>
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-md font-semibold text-base sm:text-lg hover:bg-primary-dark transition-colors duration-300 w-full sm:w-auto"
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
            <div className="relative">
              {/* Circular image container */}
              <div className="aspect-square rounded-full overflow-hidden relative scale-125 -translate-x-12">
                <div className="absolute inset-0 bg-black/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Digital Marketing Team"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Floating info boxes */}
              <motion.div 
                className="absolute -bottom-6 -left-40 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      {currentLanguage === 'vi' ? 'Giải Pháp Số' : 'Digital Solutions'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentLanguage === 'vi' ? 'Dịch Vụ Toàn Diện' : 'End-to-End Services'}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-10 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      {currentLanguage === 'vi' ? 'Đối Tác Tin Cậy' : 'Trusted Partner'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentLanguage === 'vi' ? 'Từ Năm 2005' : 'Since 2005'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="text-sm mb-2">Scroll to discover</div>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>

    </section>
  );
};

export default Hero; 