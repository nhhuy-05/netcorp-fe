import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPhone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Breadcrumb from '../ui/Breadcrumb';

const services = [
  { name: { en: 'ICT', vi: 'ICT' }, path: '/services/ict' },
  { name: { en: 'Broadcasting', vi: 'Truyền thông' }, path: '/services/broadcasting' },
  { name: { en: 'Business Application', vi: 'Ứng dụng doanh nghiệp' }, path: '/services/business-application' },
  { name: { en: 'M&E', vi: 'M&E' }, path: '/services/me' },
];

const IctServicePage: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="service-hero">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="ICT Service Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="service-hero-content">
          <motion.h1 
            className="service-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ICT
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
                  }, 
                  path: '/services' 
                },
                { 
                  name: { 
                    en: 'ICT',
                    vi: 'ICT'
                  }
                }
              ]}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4">
        <div className="service-content">
          {/* Main Content */}
          <div className="service-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                {isEn ? 'ICT INFRASTRUCTURE' : 'HẠ TẦNG ICT'}
              </h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {isEn 
                    ? "We provide comprehensive and secure ICT (Information & Communication Technology) foundation solutions with a focus on modernization, efficiency, and integration."
                    : "Chúng tôi cung cấp giải pháp nền tảng toàn diện cho hệ thống hạ tầng ICT (Công nghệ thông tin & Truyền thông) với tiêu chí hiện đại – đồng bộ – an toàn."}
                </p>
            </motion.div>

            <div className="space-y-8">
              {isEn ? (
                <>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-2">Server & Storage Systems</h4>
                  <p className="text-gray-600">High-performance servers and scalable storage solutions to meet growing data and processing needs.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-2">Advanced Networking Technologies</h4>
                  <p className="text-gray-600">Deployment of modern network infrastructure using solutions like SD-WAN and Cisco ACI to ensure flexibility, speed, and centralized control.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h4 className="text-xl font-bold mb-2">Cybersecurity & System Protection</h4>
                  <p className="text-gray-600">End-to-end security architecture that safeguards data integrity and protects IT systems from threats and vulnerabilities.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <h4 className="text-xl font-bold mb-2">Virtualization & Resource Optimization</h4>
                  <p className="text-gray-600">Streamlining infrastructure through virtualization to enhance performance, reduce hardware dependency, and optimize resource utilization.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <h4 className="text-xl font-bold mb-2">Enterprise-Grade Software Solutions</h4>
                  <p className="text-gray-600">Integration of trusted platforms from industry leaders such as VMware, RedHat, Veeam, SUSE, and Nutanix for maximum compatibility and support.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <h4 className="text-xl font-bold mb-2">IT Monitoring & Management Tools</h4>
                  <p className="text-gray-600">Specialized software like IBM QRadar and Tufin to enhance infrastructure visibility, automate policy management, and strengthen security operations.</p>
                </motion.div>
                </>
              ) : (
                <>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-2">Hệ thống Máy chủ & Lưu trữ dữ liệu</h4>
                  <p className="text-gray-600">Triển khai máy chủ hiệu năng cao và giải pháp lưu trữ mở rộng, đáp ứng nhu cầu xử lý và lưu trữ ngày càng tăng.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-2">Công nghệ Mạng tiên tiến</h4>
                  <p className="text-gray-600">Ứng dụng các công nghệ hiện đại như SD-WAN, Cisco ACI nhằm tối ưu hóa tốc độ, tính linh hoạt và khả năng quản lý tập trung.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h4 className="text-xl font-bold mb-2">An ninh mạng & Bảo mật hệ thống</h4>
                  <p className="text-gray-600">Xây dựng kiến trúc bảo mật toàn diện, đảm bảo dữ liệu và hệ thống luôn an toàn trước các rủi ro và mối đe dọa.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <h4 className="text-xl font-bold mb-2">Ảo hóa & Tối ưu tài nguyên</h4>
                  <p className="text-gray-600">Tận dụng công nghệ ảo hóa để nâng cao hiệu suất, giảm phụ thuộc phần cứng và sử dụng tài nguyên hiệu quả hơn.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <h4 className="text-xl font-bold mb-2">Giải pháp phần mềm doanh nghiệp</h4>
                  <p className="text-gray-600">Tích hợp các nền tảng uy tín từ các hãng hàng đầu như VMware, RedHat, Veeam, SUSE, Nutanix,… để đảm bảo tính tương thích và hỗ trợ lâu dài.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <h4 className="text-xl font-bold mb-2">Phần mềm giám sát & quản lý thiết bị</h4>
                  <p className="text-gray-600">Sử dụng các công cụ chuyên dụng như IBM QRadar, Tufin giúp tăng cường khả năng giám sát, quản trị chính sách và bảo mật hạ tầng CNTT hiệu quả.</p>
                </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <motion.aside 
            className="service-sidebar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* All Services List */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {isEn ? 'Our Services' : 'Dịch Vụ Của Chúng Tôi'}
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className={`block py-2 px-3 rounded transition-colors duration-200 ${
                        location.pathname === service.path
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {isEn ? service.name.en : service.name.vi}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <motion.div 
              className="bg-primary/10 rounded-xl shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <FiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">
                    {isEn ? 'Need Consultation?' : 'Cần Tư Vấn?'}
                  </h4>
                  <p className="text-gray-600">
                    {isEn ? 'Our experts are here to help' : 'Các chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ'}
                  </p>
                </div>
              </div>
              <motion.a 
                href="/contact" 
                className="w-full inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isEn ? 'Contact Us' : 'Liên Hệ Ngay'}
                <FiChevronRight className="ml-2" />
              </motion.a>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default IctServicePage;
