import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full translate-x-1/2 translate-y-1/3"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="text-white font-bold text-3xl flex items-center mb-4">
                <img src="/image/LOGO_NC.png" alt="NetCorp Logo" className="h-full w-full object-cover" />
              </Link>
              {/* Newsletter - compact card under logo */}
              {/* <div className="mt-6">
                <div className="bg-white text-gray-800 rounded-xl shadow p-4 w-56">
                  <h4 className="text-sm font-semibold mb-1">
                    {currentLanguage === 'vi' ? 'Cập nhật tin tức' : 'Newsletter'}
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    {currentLanguage === 'vi'
                      ? 'Nhận tin mới nhất'
                      : 'Get latest updates'}
                  </p>
                  <form className="flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder={currentLanguage === 'vi' ? 'Email của bạn' : 'Your email'}
                      className="flex-1 px-2 py-1 text-sm rounded border border-gray-200 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white p-2 rounded text-sm flex items-center justify-center"
                      aria-label={currentLanguage === 'vi' ? 'Đăng ký' : 'Subscribe'}
                    >
                      <FiSend />
                    </button>
                  </form>
                </div>
              </div> */}
              <p className="text-gray-400 mb-6 -mt-2">
                {currentLanguage === 'vi'
                  ? "Chuyên gia về tư vấn giải pháp, giám sát và triển khai các ứng dụng quản trị cho các doanh nghiệp và các tổ chức sử dụng công nghệ nền tảng của hãng Oracle."
                  : "Expert in consulting solutions, monitoring and deploying administrative applications for businesses and organizations using Oracle's platform technology."}
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/NetCorpVN" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <FiFacebook />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <FiLinkedin />
                </a>
              </div>


            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                {currentLanguage === 'vi' ? 'Liên Kết Nhanh' : 'Quick Links'}
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Trang chủ' : 'Home'}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Về chúng tôi' : 'About Us'}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Dịch vụ' : 'Services'}
                  </Link>
                </li>
                <li>
                  <Link to="/client" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Khách hàng' : 'Clients'}
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Đối tác' : 'Partners'}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Liên hệ' : 'Contact'}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                {currentLanguage === 'vi' ? 'Dịch Vụ' : 'Our Services'}
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/ict" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    ICT
                  </Link>
                </li>
                <li>
                  <Link to="/services/broadcasting" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Truyền thông' : 'Broadcasting'}
                  </Link>
                </li>
                <li>
                  <Link to="/services/business-application" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Ứng dụng doanh nghiệp' : 'Business Application'}
                  </Link>
                </li>
                <li>
                  <Link to="/services/me" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    M&E
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                {currentLanguage === 'vi' ? 'Liên Hệ' : 'Contact Us'}
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiMapPin className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">
                      {currentLanguage === 'vi'
                        ? 'Tòa nhà Casla, Ngõ 78 Duy Tân, Cầu Giấy, Hà Nội'
                        : 'Casla Building, 78 Duy Tan Alley, Cau Giay, Hanoi'}
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiPhone className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">02477701912</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiMail className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">info@netcorp.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} NetCorp. {currentLanguage === 'vi' ? 'Đã đăng ký bản quyền.' : 'All Rights Reserved.'}
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                {currentLanguage === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                {currentLanguage === 'vi' ? 'Điều khoản dịch vụ' : 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                {currentLanguage === 'vi' ? 'Chính sách cookie' : 'Cookie Policy'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;