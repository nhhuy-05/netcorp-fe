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
              <Link to="/" className="text-white font-bold text-2xl flex items-center mb-4">
                <img
                  src="/image/LOGO_NC.png"
                  alt="NetCorp Logo"
                  className="w-auto max-w-[180px] object-contain"
                  style={{ minWidth: 60 }}
                />
              </Link>
              <p className="text-gray-400 mb-6 -mt-2 text-sm">
                {currentLanguage === 'vi'
                  ? "Chúng tôi mang đến những giải pháp công nghệ mạnh mẽ và đáng tin cậy, bứt phá trong kỷ nguyên số. Với cam kết về chất lượng và sự đồng hành lâu dài, NetCorp góp phần kiến tạo nền tảng phát triển bền vững."
                  : "We provide powerful and reliable technology solutions, breaking through in the digital age. With a commitment to quality and long-term partnership, NetCorp contributes to building a sustainable development foundation."}
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/NetCorpVN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <FiFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/netcorp-vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <FiLinkedin />
                </a>
              </div>


            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                {currentLanguage === 'vi' ? 'Liên Kết Nhanh' : 'Quick Links'}
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-lg text-primary" />
                    {currentLanguage === 'vi' ? 'Trang chủ' : 'Home'}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-lg text-primary" />
                    {currentLanguage === 'vi' ? 'Về chúng tôi' : 'About Us'}
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-lg text-primary" />
                    {currentLanguage === 'vi' ? 'Giải pháp' : 'Solutions'}
                  </Link>
                </li>
                <li>
                  <Link to="/client" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-lg text-primary" />
                    {currentLanguage === 'vi' ? 'Khách hàng' : 'Clients'}
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-lg text-primary" />
                    {currentLanguage === 'vi' ? 'Đối tác' : 'Partners'}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-lg text-primary" />
                    {currentLanguage === 'vi' ? 'Liên hệ' : 'Contact'}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                {currentLanguage === 'vi' ? 'Dịch Vụ' : 'Our Services'}
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions/ict" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    ICT
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/broadcasting" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Broadcasting' : 'Broadcasting'}
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/business-application" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    {currentLanguage === 'vi' ? 'Business Application' : 'Business Application'}
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/me" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    M&E
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                {currentLanguage === 'vi' ? 'Liên Hệ' : 'Contact Us'}
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiMapPin className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4 flex items-center h-10">
                    <p className="text-gray-400 text-sm">
                      {currentLanguage === 'vi'
                        ? 'Địa chỉ: Số 12, Ngõ 1, Số 178 Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Hà Nội, Việt Nam'
                        : 'Address: No. 12, Alley 1, Lane 178 Trung Liet, Trung Liet Ward, Dong Da District, Hanoi, Vietnam'}
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiMapPin className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4 flex items-center h-10">
                    <p className="text-gray-400 text-sm">
                      {currentLanguage === 'vi'
                        ? 'Văn phòng đại diện: Tòa nhà Casla, Ngõ 78 Duy Tân, Cầu Giấy, Hà Nội'
                        : 'R/O: Casla Building, 78 Duy Tan Alley, Cau Giay, Hanoi'}
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiPhone className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4 flex items-center h-10">
                    <p className="text-gray-400 text-sm">(+84) 24.777.01912</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiMail className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4 flex items-center h-10">
                    <p className="text-gray-400 text-sm">info@netcorp.com</p>
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
            <p className="text-gray-400 mb-4 md:mb-0 text-sm">
              © {currentYear} NetCorp. {currentLanguage === 'vi' ? 'Đã đăng ký bản quyền.' : 'All Rights Reserved.'}
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                {currentLanguage === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                {currentLanguage === 'vi' ? 'Điều khoản dịch vụ' : 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
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