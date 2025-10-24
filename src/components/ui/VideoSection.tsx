import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { video_section } from '../../assets/videos';
import { Link } from 'react-router-dom';

const VideoSection: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="py-10 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 backdrop-blur-sm"></div>
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-black/5 rounded-full filter blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-8 md:mb-16 px-2 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            {currentLanguage === 'vi' ? 'Phương pháp của chúng tôi' : 'Our Approach'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase text-white">
            {currentLanguage === 'vi' ? 'GIẢI PHÁP' : 'SOLUTIONS'}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto my-3 md:my-6"></div>
          <p className="text-gray-200">
            {currentLanguage === 'vi'
              ? 'Hãy xem NetCorp mang đến các giải pháp công nghệ đổi mới như thế nào, góp phần thúc đẩy thành công kinh doanh cho khách hàng trên toàn Việt Nam.'
              : 'Watch how NetCorp delivers innovative technology solutions that drive business success for our clients across Vietnam.'}
          </p>
        </motion.div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left: video (3/5 on md+) */}
            <div className="md:col-span-3">
              <div className="relative aspect-video w-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src={video_section} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right: content (2/5 on md+) */}
            <motion.div
              className="md:col-span-2 relative w-full h-full md:bg-primary-dark flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Mobile background overlay */}
              <div className="md:hidden absolute inset-0 bg-primary/90"></div>

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {currentLanguage === 'vi'
                    ? 'Giải pháp công nghệ thúc đẩy tăng trưởng doanh nghiệp'
                    : 'Technology Solutions that Drive Business Growth'}
                </h3>

                <div className="mb-4 sm:mb-6">
                  <ul className="space-y-2 sm:space-y-2.5">
                    {[
                      currentLanguage === 'vi' ? 'Phát triển phần mềm trí tuệ nhân tạo AI' : 'AI software development',
                      currentLanguage === 'vi' ? 'Tối ưu hạ tầng CNTT' : 'IT infrastructure optimization',
                      currentLanguage === 'vi' ? 'Giải pháp an ninh mạng' : 'Cybersecurity solutions',
                      currentLanguage === 'vi' ? 'Chuyển đổi nền tảng điện toán đám mây' : 'Cloud transformation'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-white"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <FiCheck className="mr-2 text-white/90 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-4 py-2.5 sm:py-3 md:py-4 bg-white text-primary text-sm sm:text-base md:text-lg rounded hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
                  style={{ width: 'auto' }}
                >
                  {currentLanguage === 'vi' ? 'Khám phá các giải pháp của chúng tôi' : 'Explore Our Solutions'}
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;