import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

interface Partner {
  id: number;
  name: string;
  category: string;
  description: {
    en: string;
    vi: string;
  };
  image: string;
}

const Partners: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeCategory, setActiveCategory] = useState('all');

  const partners: Partner[] = [
    // Banking Partners
    {
      id: 1,
      name: "Vietcombank",
      category: "banking",
      description: {
        en: "Leading commercial bank in Vietnam",
        vi: "Ngân hàng thương mại hàng đầu Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 2,
      name: "BIDV",
      category: "banking",
      description: {
        en: "Bank for Investment and Development of Vietnam",
        vi: "Ngân hàng Đầu tư và Phát triển Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 3,
      name: "VietinBank",
      category: "banking",
      description: {
        en: "Vietnam Joint Stock Commercial Bank for Industry and Trade",
        vi: "Ngân hàng Thương mại Cổ phần Công thương Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 4,
      name: "Agribank",
      category: "banking",
      description: {
        en: "Vietnam Bank for Agriculture and Rural Development",
        vi: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 5,
      name: "ACB Bank",
      category: "banking",
      description: {
        en: "Asia Commercial Bank",
        vi: "Ngân hàng Thương mại Cổ phần Á Châu"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 6,
      name: "Sacombank",
      category: "banking",
      description: {
        en: "Saigon Thuong Tin Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Sài Gòn Thương Tín"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 7,
      name: "HDBank",
      category: "banking",
      description: {
        en: "Ho Chi Minh City Development Joint Stock Commercial Bank",
        vi: "Ngân hàng Thương mại Cổ phần Phát triển TP.HCM"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 8,
      name: "Shinhan Bank",
      category: "banking",
      description: {
        en: "Shinhan Bank Vietnam",
        vi: "Ngân hàng Shinhan Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },

    // Enterprise Partners
    {
      id: 9,
      name: "PetroVietnam",
      category: "enterprise",
      description: {
        en: "Vietnam Oil and Gas Group",
        vi: "Tập đoàn Dầu khí Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 10,
      name: "Viettel Solutions",
      category: "enterprise",
      description: {
        en: "Viettel Technology Solutions Corporation",
        vi: "Tổng Công ty Giải pháp Công nghệ Viettel"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 11,
      name: "VNPay",
      category: "enterprise",
      description: {
        en: "Vietnam Payment Solution Joint Stock Company",
        vi: "Công ty Cổ phần Giải pháp Thanh toán Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 12,
      name: "VTVcab",
      category: "enterprise",
      description: {
        en: "Vietnam Television Cable Corporation",
        vi: "Tổng Công ty Truyền hình Cáp Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 13,
      name: "ACV",
      category: "enterprise",
      description: {
        en: "Airports Corporation of Vietnam",
        vi: "Tổng Công ty Cảng hàng không Việt Nam"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 14,
      name: "Genco 1",
      category: "enterprise",
      description: {
        en: "Power Generation Corporation 1",
        vi: "Tổng Công ty Phát điện 1"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },

    // Government Partners
    {
      id: 15,
      name: "Bộ TNMT",
      category: "government",
      description: {
        en: "Ministry of Natural Resources and Environment",
        vi: "Bộ Tài nguyên và Môi trường"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 16,
      name: "Bộ Văn hóa",
      category: "government",
      description: {
        en: "Ministry of Culture, Sports and Tourism",
        vi: "Bộ Văn hóa, Thể thao và Du lịch"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 17,
      name: "Tỉnh Bắc Ninh",
      category: "government",
      description: {
        en: "Bac Ninh Province People's Committee",
        vi: "Ủy ban Nhân dân tỉnh Bắc Ninh"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    },
    {
      id: 18,
      name: "Tỉnh Phú Thọ",
      category: "government",
      description: {
        en: "Phu Tho Province People's Committee",
        vi: "Ủy ban Nhân dân tỉnh Phú Thọ"
      },
      image: "https://via.placeholder.com/300x200/CCCCCC/666666?text=Partner+Logo"
    }
  ];

  const categories = [
    { id: 'all', label: currentLanguage === 'vi' ? 'TẤT CẢ' : 'ALL', count: partners.length },
    { id: 'banking', label: currentLanguage === 'vi' ? 'NGÂN HÀNG' : 'BANKING', count: partners.filter(p => p.category === 'banking').length },
    { id: 'enterprise', label: currentLanguage === 'vi' ? 'DOANH NGHIỆP' : 'ENTERPRISE', count: partners.filter(p => p.category === 'enterprise').length },
    { id: 'government', label: currentLanguage === 'vi' ? 'CHÍNH PHỦ' : 'GOVERNMENT', count: partners.filter(p => p.category === 'government').length }
  ];

  const filteredPartners = activeCategory === 'all'
    ? partners
    : partners.filter(partner => partner.category === activeCategory);

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Partners Hero Background"
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
              {currentLanguage === 'vi' ? 'ĐỐI TÁC' : 'PARTNERS'}
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
                      en: 'Partners',
                      vi: 'Đối tác'
                    }
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Content */}
      <div className="relative py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {currentLanguage === 'vi' 
                ? 'Netcorp cam kết luôn đồng hành với các đối tác công nghệ của mình để cung cấp các giải pháp công nghệ, dịch vụ tốt nhất vì mục tiêu chung là sự hài lòng của khách hàng. Netcorp đã thành công trong việc hợp tác, phát triển cung cấp các sản phẩm, giải pháp và dịch vụ của nhiều hãng danh tiếng trên thế giới cho các khách hàng tại khu vực. Hàng năm, chúng tôi đầu tư phần lớn chi phí vào nghiên cứu phát triển, đào tạo chuyên gia để cung cấp các giải pháp chiến lược mà các đối tác đem lại.' 
                : 'Netcorp is committed to working closely with our technology partners to deliver the best technology solutions and services, with the shared goal of ensuring customer satisfaction. We have successfully collaborated with renowned global brands to develop and provide their products, solutions, and services to clients across the region. Each year, we dedicate a significant portion of our budget to research and development, as well as expert training, to offer strategic solutions introduced by our partners.'}
            </p>
          </motion.div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-2 text-sm font-medium transition-colors
                  ${activeCategory === category.id 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
                {category.count && (
                  <span className="ml-1 text-xs">({category.count})</span>
                )}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
                      <p className="text-sm">{currentLanguage === 'vi' ? partner.description.vi : partner.description.en}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Partners; 