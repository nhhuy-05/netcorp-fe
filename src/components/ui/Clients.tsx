import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

interface Company {
  id: number;
  name: string;
  category: string;
  description: {
    en: string;
    vi: string;
  };
  image: string;
}

const Clients: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeCategory, setActiveCategory] = useState('all');
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeDuration, setMarqueeDuration] = useState("1000s");



  // Sample company data - replace with your actual company data
  const companies: Company[] = [
    // Government Agencies (6)
    {
      id: 35,
      name: "BCYCP",
      category: "government",
      description: {
        en: "Government Cipher Committee",
        vi: "Ban Cơ yếu Chính phủ"
      },
      image: "/image/govern/logo-BCYCP.png"
    },
    {
      id: 36,
      name: "MONRE",
      category: "government",
      description: {
        en: "Ministry of Natural Resources and Environment",
        vi: "Bộ Tài nguyên và Môi trường"
      },
      image: "/image/govern/logo-BTNVMT.jpg"
    },
    {
      id: 37,
      name: "MOCST",
      category: "government",
      description: {
        en: "Ministry of Culture, Sports and Tourism",
        vi: "Bộ Văn hóa, Thể thao và Du lịch"
      },
      image: "/image/govern/logo-BVH.png"
    },
    {
      id: 38,
      name: "Tỉnh Bắc Ninh",
      category: "government",
      description: {
        en: "Bac Ninh Province",
        vi: "Tỉnh Bắc Ninh"
      },
      image: "/image/govern/logo-TBN.png"
    },
    {
      id: 39,
      name: "Tỉnh Phú Thọ",
      category: "government",
      description: {
        en: "Phu Tho Province",
        vi: "Tỉnh Phú Thọ"
      },
      image: "/image/govern/logo-TPT.png"
    },

    // Banking Companies (19)
    {
      id: 19,
      name: "Agribank",
      category: "bank",
      description: {
        en: "Vietnam Bank for Agriculture and Rural Development",
        vi: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam"
      },
      image: "/image/bank/logo-Agribank.png"
    },
    {
      id: 25,
      name: "BIDV",
      category: "bank",
      description: {
        en: "Joint Stock Commercial Bank for Investment and Development of Vietnam",
        vi: "Ngân hàng Thương Mại Cổ Phần Đầu tư và Phát triển Việt Nam"
      },
      image: "/image/bank/logo-BIDV.png"
    },
    {
      id: 29,
      name: "Vietcombank",
      category: "bank",
      description: {
        en: "Joint Stock Commercial Bank for Foreign Trade of Vietnam",
        vi: "Ngân hàng Thương mại Cổ phần Ngoại thương Việt Nam"
      },
      image: "/image/bank/logo-Vietcombank.png"
    }, {
      id: 30,
      name: "VietinBank",
      category: "bank",
      description: {
        en: "Viet Nam Joint Stock Commercial Bank for Industry and Trade",
        vi: "Ngân hàng Thương mại Cổ phần Công thương Việt Nam"
      },
      image: "/image/bank/logo-Vietinbank.png"
    },
    {
      id: 48,
      name: "MBBank",
      category: "bank",
      description: {
        en: "Military Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Quân đội"
      },
      image: "/image/bank/logo-MBBank.png"
    },
    {
      id: 21,
      name: "LPBank",
      category: "bank",
      description: {
        en: "Loc Phat Viet Nam Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Lộc Phát Việt Nam"
      },
      image: "/image/bank/logo-LPbank.png"
    },
    {
      id: 20,
      name: "Bac A Bank",
      category: "bank",
      description: {
        en: "Bac A Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại cổ phần Bắc Á"
      },
      image: "/image/bank/logo-BacABank.png"
    },
    {
      id: 27,
      name: "CoopBank",
      category: "bank",
      description: {
        en: "Cooperative Bank of Vietnam",
        vi: "Ngân hàng Hợp tác xã Việt Nam"
      },
      image: "/image/bank/logo-CoopBank.png"
    },
    {
      id: 18,
      name: "ACB Bank",
      category: "bank",
      description: {
        en: "Asia Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương Mại Cổ Phần Á Châu"
      },
      image: "/image/bank/logo-ACBBank.png"
    },
    {
      id: 28,
      name: "Shinhan Bank",
      category: "bank",
      description: {
        en: "Shinhan Bank Vietnam Limited",
        vi: "Ngân hàng TNHH Một Thành Viên Shinhan Việt Nam"
      },
      image: "/image/bank/logo-ShinhanBank.png"
    },
    {
      id: 33,
      name: "VietBank",
      category: "bank",
      description: {
        en: "VietBank Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Việt Nam Thương Tín"
      },
      image: "/image/bank/logo-Vietbank.png"
    },
    {
      id: 34,
      name: "Sacombank",
      category: "bank",
      description: {
        en: "Saigon Thuong Tin Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Sài Gòn Thương Tín"
      },
      image: "/image/bank/logo-Sacombank.png"
    },
    {
      id: 22,
      name: "MBS",
      category: "bank",
      description: {
        en: "MB Securities Joint Stock Company",
        vi: "Công ty cổ phần Chứng khoán MB"
      },
      image: "/image/bank/logo-MBS.png"
    },
    {
      id: 23,
      name: "MIC",
      category: "bank",
      description: {
        en: "Military Insurance Corporation",
        vi: "Công ty Cổ phần Bảo hiểm Quân đội"
      },
      image: "/image/bank/logo-MIC.png"
    },

    // Enterprise Companies (15)
    {
      id: 1,
      name: "ACV",
      category: "enterprise",
      description: {
        en: "Airport Corporation of Vietnam",
        vi: "Tổng công ty Cảng hàng không Việt Nam"
      },
      image: "/image/enterprise/logo-ACV.png"
    },
    // {
    //   id: 2,
    //   name: "Dịch vụ mặt đất sân bay",
    //   category: "enterprise",
    //   description: {
    //     en: "Vietnam Airport Ground Services",
    //     vi: "Công ty TNHH Dịch vụ mặt đất sân bay Việt Nam"
    //   },
    //   image: "/image/enterprise/logo-Viags.png"
    // },
    {
      id: 3,
      name: "Genco 1",
      category: "enterprise",
      description: {
        en: "Power Generation Corporation 1",
        vi: "Tổng công ty Phát điện 1"
      },
      image: "/image/enterprise/logo-Genco1.png"
    },
    {
      id: 4,
      name: "NCTS",
      category: "enterprise",
      description: {
        en: "Noi Bai Cargo Terminal Service Joint Stock Company",
        vi: "Công ty Cổ phần Dịch vụ Hàng hóa Nội Bài"
      },
      image: "/image/enterprise/logo-NCTS.png"
    },
    {
      id: 5,
      name: "PetroVietnam",
      category: "enterprise",
      description: {
        en: "Vietnam National Industrial & Energy Group",
        vi: "Tập đoàn Công nghiệp Năng lượng Quốc gia Việt Nam"
      },
      image: "/image/enterprise/logo-Petrovietnam.png"
    },
    {
      id: 6,
      name: "PV Gas",
      category: "enterprise",
      description: {
        en: "PetroVietnam Gas Joint Stock Corporation",
        vi: "Tổng công ty Khí Việt Nam"
      },
      image: "/image/enterprise/logo-PVGas.png"
    },
    {
      id: 7,
      name: "VICEM",
      category: "enterprise",
      description: {
        en: "Vietnam National Cement Corporation",
        vi: "Tổng công ty Xi măng Việt Nam"
      },
      image: "/image/enterprise/logo-VICEM.png"
    },
    {
      id: 8,
      name: "VIAGS",
      category: "enterprise",
      description: {
        en: "Vietnam Airport Ground Services Company Limited",
        vi: "Công ty TNHH MTV Dịch vụ mặt đất sân bay Việt Nam"
      },
      image: "/image/enterprise/logo-Viags.png"
    },
    {
      id: 9,
      name: "Viettel Solutions",
      category: "enterprise",
      description: {
        en: "Viettel Business Solutions Corporation",
        vi: "Tổng Công ty Giải pháp Doanh nghiệp Viettel"
      },
      image: "/image/enterprise/logo-ViettelSolutions.png"
    },
    {
      id: 10,
      name: "Vinalines",
      category: "enterprise",
      description: {
        en: "Vietnam National Shipping Lines",
        vi: "Tổng Công ty Hàng hải Việt Nam"
      },
      image: "/image/enterprise/logo-Vinalines.png"
    },
    {
      id: 11,
      name: "VNPay",
      category: "enterprise",
      description: {
        en: "Vietnam Payment Solution",
        vi: "Công ty Cổ phần Giải pháp Thanh toán Việt Nam"
      },
      image: "/image/enterprise/logo-VNPay.png"
    },
    {
      id: 12,
      name: "VTVcab",
      category: "enterprise",
      description: {
        en: "Vietnam Television Cable",
        vi: "Công ty Truyền hình cáp Việt Nam"
      },
      image: "/image/enterprise/logo-VTVcab.png"
    },
    {
      id: 13,
      name: "TH Group",
      category: "enterprise",
      description: {
        en: "TH Group Corporation",
        vi: "Tập đoàn TH"
      },
      image: "/image/enterprise/logo-TH.png"
    },
    // {
    //   id: 14,
    //   name: "MCredit",
    //   category: "enterprise",
    //   description: {
    //     en: "MCredit Financial Services",
    //     vi: "Công ty Tài chính MCredit"
    //   },
    //   image: "/image/enterprise/logo-Mcredit.png"
    // },
    {
      id: 15,
      name: "NAPAS",
      category: "enterprise",
      description: {
        en: "National Payment Corporation",
        vi: "Công ty Cổ phần Thanh toán Quốc gia Việt Nam"
      },
      image: "/image/enterprise/logo-Napas.png"
    },
    // Foreign Companies (5)
    {
      id: 43,
      name: "APPLIANCZ",
      category: "foreign",
      description: {
        en: "APPLIANCZ",
        vi: "APPLIANCZ"
      },
      image: "/image/foreign/logo-APPLIANCZ.png"
    },
    {
      id: 44,
      name: "FORTNA",
      category: "foreign",
      description: {
        en: "FORTNA",
        vi: "FORTNA"
      },
      image: "/image/foreign/logo-FORTNA.png"
    },
    {
      id: 45,
      name: "HILTON",
      category: "foreign",
      description: {
        en: "HILTON",
        vi: "HILTON"
      },
      image: "/image/foreign/logo-HILTON.png"
    },
    {
      id: 46,
      name: "JRC",
      category: "foreign",
      description: {
        en: "JRC",
        vi: "JRC"
      },
      image: "/image/foreign/logo-JRC.png"
    },
    {
      id: 47,
      name: "NTT COMMUNICATIONS",
      category: "foreign",
      description: {
        en: "NTT COMMUNICATIONS",
        vi: "NTT COMMUNICATIONS"
      },
      image: "/image/foreign/logo-NTTCOMMUNICATIONS.png"
    }
  ];

  const categories = [
    { id: 'all', label: currentLanguage === 'vi' ? 'TẤT CẢ' : 'ALL', count: companies.length },
    { id: 'government', label: currentLanguage === 'vi' ? 'CHÍNH PHỦ' : 'GOVERNMENT', count: companies.filter(c => c.category === 'government').length },
    { id: 'bank', label: currentLanguage === 'vi' ? 'NGÂN HÀNG & TÀI CHÍNH' : 'BANKING & FINANCE', count: companies.filter(c => c.category === 'bank').length },
    { id: 'enterprise', label: currentLanguage === 'vi' ? 'DOANH NGHIỆP' : 'ENTERPRISE', count: companies.filter(c => c.category === 'enterprise').length },
    { id: 'foreign', label: currentLanguage === 'vi' ? 'NƯỚC NGOÀI' : 'FOREIGN', count: companies.filter(c => c.category === 'foreign').length },
  ];



  const filteredCompanies = activeCategory === 'all'
    ? companies
    : companies.filter(company => company.category === activeCategory);

  // Tính toán duration theo chiều rộng danh sách
  useEffect(() => {
    if (marqueeRef.current && activeCategory === 'all') {
      const containerWidth = marqueeRef.current.scrollWidth;
      const speed = 800; // px/giây (tăng để chạy nhanh hơn)
      const duration = containerWidth / speed;
      setMarqueeDuration(`${duration}s`);
    }
  }, [filteredCompanies, activeCategory]);

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Clients Hero Background"
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
              {currentLanguage === 'vi' ? 'KHÁCH HÀNG' : 'CLIENTS'}
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
                      en: 'Clients',
                      vi: 'Khách hàng'
                    }
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clients Content */}
      <div className="relative py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4">
          {/* Thank You Message */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {currentLanguage === 'vi'
                ? "Netcorp trân trọng cảm ơn những khách hàng đã tin tưởng lựa chọn chúng tôi là đơn vị cung cấp và triển khai thành công các giải pháp, sản phẩm công nghệ thông tin mang lại hiệu quả tối ưu."
                : "Netcorp sincerely thanks our valued customers for trusting us as the provider and successful implementer of information technology solutions and products that deliver optimal efficiency."
              }
            </p>
          </motion.div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-3 md:px-6 py-1 md:py-2 text-sm font-medium transition-colors
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

          {/* Clients Grid */}
          {activeCategory === 'all' ? (
            <div className="overflow-x-hidden w-full py-4">
              <div
                ref={marqueeRef}
                className="flex gap-8 animate-marquee"
                style={{ animation: `marquee ${marqueeDuration} linear infinite` }}
              >
                {filteredCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="group flex-shrink-0 w-48 h-48 bg-white rounded-lg shadow flex items-center justify-center p-4 overflow-hidden relative"
                  >
                    <img
                      src={company.image}
                      alt={company.name}
                      loading="lazy"
                      className="max-h-20 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-110" // max-h-20 ~ 80px
                      style={{ maxWidth: '80%', maxHeight: '80px' }}
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                        <p className="text-sm">{currentLanguage === 'vi' ? company.description.vi : company.description.en}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Lặp lại để hiệu ứng không bị trống khi chạy */}
                {filteredCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="group flex-shrink-0 w-48 h-48 bg-white rounded-lg shadow flex items-center justify-center p-4 overflow-hidden relative"
                  >
                    <img
                      src={company.image}
                      alt={company.name}
                      loading="lazy"
                      className="max-h-20 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                      style={{ maxWidth: '80%', maxHeight: '80px' }}
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                        <p className="text-sm">{currentLanguage === 'vi' ? company.description.vi : company.description.en}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* CSS cho hiệu ứng marquee */}
              <style>
                {`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-200%); }
                }
              `}
              </style>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCompanies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  className="group relative overflow-hidden rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="max-h-20 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                      style={{ maxWidth: '80%', maxHeight: '80px' }}
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                        <p className="text-sm">{currentLanguage === 'vi' ? company.description.vi : company.description.en}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Background Elements */}
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div> */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Clients; 