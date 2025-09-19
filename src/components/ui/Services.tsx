import React, { useState } from 'react';
import { FiServer, FiCode, FiDatabase, FiRadio } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  delay: number;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, link }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isActive, setIsActive] = useState(false);

  const cardContent = (
    <motion.div 
      className={`group relative overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all duration-300 p-6 h-full hover:shadow-[0_8px_30px_rgba(0,128,0,0.12)] ${isActive || 'hover:bg-primary'} ${isActive && 'bg-primary'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex flex-col h-full">
        <div className="w-16 h-16 rounded-lg mb-6 p-3.5 flex items-center justify-center bg-[#f0f4d8] text-primary transition-colors duration-300">
          <div className="text-2xl">{icon}</div>
        </div>
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
          {typeof title === 'string' ? title : currentLanguage === 'vi' ? title.vi : title.en}
        </h3>
        <div className={`h-0.5 w-12 bg-primary mb-4 transition-all duration-300 group-hover:w-20 ${isActive ? 'bg-white w-20' : 'group-hover:bg-white'}`}></div>
        <p className={`text-gray-600 mt-auto mb-6 leading-relaxed transition-colors duration-300 ${isActive ? 'text-white/90' : 'group-hover:text-white/90'}`}>
          {typeof description === 'string' ? description : currentLanguage === 'vi' ? description.vi : description.en}
        </p>
        <a href="#" className={`mt-auto inline-flex items-center text-sm font-medium text-primary transition-all duration-300 group-hover:translate-x-2 ${isActive ? 'text-white translate-x-2' : 'group-hover:text-white'}`}>
          {currentLanguage === 'vi' ? 'Tìm Hiểu Thêm' : 'Learn More'}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
  return link ? <Link to={link}>{cardContent}</Link> : cardContent;
};

const Services: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const services = [
    {
      icon: <FiServer />,
      title: {
        en: "ICT",
        vi: "ICT"
      },
      description: {
        en: "Comprehensive information and communication technology solutions for your business.",
        vi: "Giải pháp công nghệ thông tin và truyền thông toàn diện cho doanh nghiệp của bạn."
      },
      delay: 0.1,
      link: '/services/ict'
    },
    {
      icon: <FiDatabase />,
      title: {
        en: "Business Application",
        vi: "Ứng dụng doanh nghiệp"
      },
      description: {
        en: "Development and deployment of custom business applications tailored to your needs.",
        vi: "Phát triển và triển khai các ứng dụng doanh nghiệp tùy chỉnh theo nhu cầu của bạn."
      },
      delay: 0.2,
      link: '/services/business-application'
    },
    {
      icon: <FiCode />,
      title: {
        en: "M&E",
        vi: "M&E"
      },
      description: {
        en: "Monitoring and evaluation solutions for projects and business processes.",
        vi: "Giải pháp giám sát và đánh giá hiệu quả cho các dự án và quy trình kinh doanh."
      },
      delay: 0.3,
      link: '/services/me'
    },
    {
      icon: <FiRadio />,
      title: {
        en: "Broadcasting",
        vi: "Truyền thông"
      },
      description: {
        en: "Advanced broadcasting and multimedia communication systems.",
        vi: "Hệ thống phát sóng và truyền thông đa phương tiện tiên tiến."
      },
      delay: 0.4,
      link: '/services/broadcasting'
    }
  ];

  return (
    <section id="services" className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Services Hero Background"
            className="w-screen h-screen object-cover fixed"
          />
          <div className="fixed inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <div className="mt-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {currentLanguage === 'vi' ? 'DỊCH VỤ' : 'OUR SERVICES'}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Breadcrumb
                items={[
                  { 
                    name: { 
                      en: 'Home',
                      vi: 'Trang chủ'
                    }, 
                    path: '/' 
                  },
                  { 
                    name: { 
                      en: 'Services',
                      vi: 'Dịch vụ'
                    }
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="relative py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-xl mx-auto text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentLanguage === 'vi' ? 'Lĩnh Vực Hoạt Động' : 'What We Do'}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon} 
                title={service.title} 
                description={service.description}
                delay={service.delay}
                link={service.link}
              />
            ))}
          </div>

          <motion.div 
            className="mt-16 bg-primary/10 rounded-lg p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full -ml-10 -mb-10"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">
                  {currentLanguage === 'vi' 
                    ? 'Sẵn sàng chuyển đổi doanh nghiệp của bạn?' 
                    : 'Ready to transform your business?'}
                </h3>
                <p className="text-gray-700">
                  {currentLanguage === 'vi'
                    ? 'Nhận giải pháp tùy chỉnh được thiết kế riêng cho nhu cầu của bạn.'
                    : 'Get a customized solution designed specifically for your needs.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="/contact" 
                  className="btn bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors inline-flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentLanguage === 'vi' ? 'Yêu Cầu Tư Vấn' : 'Request a Consultation'}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Services; 