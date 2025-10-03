import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPhone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Breadcrumb from '../ui/Breadcrumb';

const solutions = [
  { name: { en: 'ICT', vi: 'ICT' }, path: '/solutions/ict' },
  { name: { en: 'Broadcasting', vi: 'Broadcasting' }, path: '/solutions/broadcasting' },
  { name: { en: 'Business Application', vi: 'Business Application' }, path: '/solutions/business-application' },
  { name: { en: 'M&E', vi: 'M&E' }, path: '/solutions/me' },
];

const BroadcastingServicePage: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Broadcasting Service Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isEn ? 'Broadcasting' : 'Broadcasting'}
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
                    en: 'Solutions',
                    vi: 'Giải pháp'
                  },
                  path: '/solutions'
                },
                {
                  name: {
                    en: 'Broadcasting',
                    vi: 'Broadcasting'
                  }
                }
              ]}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8">
        {/* Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              {isEn ? 'BROADCASTING & MEDIA SYSTEMS' : 'HỆ THỐNG TRUYỀN THÔNG SỐ & HỘI NGHỊ'}
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {isEn
                ? "We provide modern communication infrastructure for seamless connectivity, presentation, and remote monitoring."
                : "Chúng tôi cung cấp giải pháp phát triển hạ tầng truyền thông hiện đại phục vụ kết nối, trình chiếu và giám sát từ xa hiệu quả."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {isEn ? (
                <>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Video Conference Systems</h4>
                    <p className="text-gray-600">Enables high-quality, multi-point video conferencing to enhance remote communication and collaboration.</p>
                  </motion.div>
                    <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    >
                    <h4 className="text-xl font-bold mb-2">Analog Signal Modulation Equipment & Accessories</h4>
                    <p className="text-gray-600">
                      Supply of high-quality analog signal modulators and accessories, ensuring stable and efficient signal transmission for broadcast applications.
                    </p>
                    </motion.div>
                    <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    >
                    <h4 className="text-xl font-bold mb-2">Digital Television Systems</h4>
                    <p className="text-gray-600">
                      Provision and installation of broadcast transmission equipment, renovation, maintenance, and upgrade of studio systems and program production technology.
                    </p>
                    </motion.div>
                    <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    >
                    <h4 className="text-xl font-bold mb-2">Digital Signal Modulation Equipment (IP QAM, Switch)</h4>
                    <p className="text-gray-600">
                      Investment in digital modulation devices such as IP QAM and switches for television units, supporting advanced broadcast operations.
                    </p>
                    </motion.div>
                    <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    >
                    <h4 className="text-xl font-bold mb-2">Test Equipment for Broadcast Units</h4>
                    <p className="text-gray-600">
                      Investment in specialized test equipment for television stations to ensure optimal system performance and reliability.
                    </p>
                    </motion.div>
                    <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    >
                    <h4 className="text-xl font-bold mb-2">Channel Reception & Distribution Equipment</h4>
                    <p className="text-gray-600">
                      Supply of professional equipment for receiving and distributing television channels, supporting efficient broadcast network management.
                    </p>
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
                    <h4 className="text-xl font-bold mb-2">Hệ thống Hội nghị Truyền hình</h4>
                    <p className="text-gray-600">Hỗ trợ kết nối đa điểm với hình ảnh và âm thanh chất lượng cao, nâng cao hiệu quả giao tiếp và cộng tác từ xa.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Thiết bị điều chế tín hiệu Analog và phụ kiện</h4>
                    <p className="text-gray-600">
                      Cung cấp các thiết bị điều chế tín hiệu Analog và phụ kiện chất lượng cao, đảm bảo truyền tải tín hiệu ổn định và hiệu quả.
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Hệ thống truyền hình số</h4>
                    <p className="text-gray-600">Cung cấp, lắp đặt thiết bị phát sóng truyền hình, cải tạo, sửa chữa, nâng cấp hệ thống truyền quay, kỹ thuật sản xuất chương trình.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Thiết bị điều chế tín hiệu số (IP QAM, Switch)</h4>
                    <p className="text-gray-600">Đầu tư thiết bị chạy thử cho các đơn vị truyền hình.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Thiết bị chạy thử cho các đơn vị</h4>
                    <p className="text-gray-600">Đầu tư thiết bị chạy thử cho các đơn vị truyền hình.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Thiết bị nhận và phân phối kênh</h4>
                    <p className="text-gray-600"> Cung cấp thiết bị nhận và phân phối kênh truyền hình.</p>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.aside
          className="w-full lg:w-80 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* All Solutions List */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">
                {isEn ? 'All Solutions' : 'Tất cả giải pháp'}
              </h4>
              <ul className="space-y-2">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={typeof solution.name === 'string' ? solution.name : solution.name.en}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      to={solution.path}
                      className={`flex items-center justify-between px-4 py-2 rounded-md transition-colors font-medium text-gray-700 hover:bg-primary/10 hover:text-primary ${(typeof solution.name === 'string' ? solution.name : solution.name.en) === 'Broadcasting'
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : ''
                        }`}
                    >
                      {typeof solution.name === 'string' ? solution.name : isEn ? solution.name.en : solution.name.vi}
                      <FiChevronRight className="ml-2" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Need Consultation Section */}
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
                >
                  {isEn ? 'Contact Us' : 'Liên Hệ Ngay'}
                  <FiChevronRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default BroadcastingServicePage;