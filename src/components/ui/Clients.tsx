import React, { useState } from 'react';
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

  // Sample company data - replace with your actual company data
  const companies: Company[] = [
    // Enterprise Companies (15)
    {
      id: 1,
      name: "ACV",
      category: "enterprise",
      description: {
        en: "Airport Corporation of Vietnam",
        vi: "Tổng công ty Cảng hàng không Việt Nam"
      },
      image: "/image/enterprise/logo ACV.jpg"
    },
    {
      id: 2,
      name: "Dịch vụ mặt đất sân bay",
      category: "enterprise",
      description: {
        en: "Vietnam Airport Ground Services",
        vi: "Công ty TNHH Dịch vụ mặt đất sân bay Việt Nam"
      },
      image: "/image/enterprise/logo cong ty tnhh dịch vụ mặt đất sân bay việt nam.png"
    },
    {
      id: 3,
      name: "Genco 1",
      category: "enterprise",
      description: {
        en: "Power Generation Corporation 1",
        vi: "Tổng công ty Phát điện 1"
      },
      image: "/image/enterprise/logo Genco 1.jpg"
    },
    {
      id: 4,
      name: "NCTS",
      category: "enterprise",
      description: {
        en: "National Single Window Portal",
        vi: "Cổng thông tin một cửa quốc gia"
      },
      image: "/image/enterprise/logo NCTS.jpg"
    },
    {
      id: 5,
      name: "PetroVietnam",
      category: "enterprise",
      description: {
        en: "Vietnam Oil and Gas Group",
        vi: "Tập đoàn Dầu khí Việt Nam"
      },
      image: "/image/enterprise/logo petrovietnam.jpg"
    },
    {
      id: 6,
      name: "PV Gas",
      category: "enterprise",
      description: {
        en: "PetroVietnam Gas Corporation",
        vi: "Tổng công ty Khí Việt Nam"
      },
      image: "/image/enterprise/logo PVgas.png"
    },
    {
      id: 7,
      name: "Tổng công ty Xi măng VN",
      category: "enterprise",
      description: {
        en: "Vietnam Cement Corporation",
        vi: "Tổng công ty Xi măng Việt Nam"
      },
      image: "/image/enterprise/logo tổng cty xi măng vn.jpg"
    },
    {
      id: 8,
      name: "VIAGS",
      category: "enterprise",
      description: {
        en: "Vietnam Airlines Ground Services",
        vi: "Công ty Dịch vụ mặt đất hàng không Việt Nam"
      },
      image: "/image/enterprise/logo Viags.jpg"
    },
    {
      id: 9,
      name: "Viettel Solutions",
      category: "enterprise",
      description: {
        en: "Viettel Technology Solutions",
        vi: "Tập đoàn Công nghiệp - Viễn thông Quân đội"
      },
      image: "/image/enterprise/logo viettel solutions.png"
    },
    {
      id: 10,
      name: "Vinalines",
      category: "enterprise",
      description: {
        en: "Vietnam National Shipping Lines",
        vi: "Tổng công ty Hàng hải Việt Nam"
      },
      image: "/image/enterprise/logo vinalines.jpg"
    },
    {
      id: 11,
      name: "VNPay",
      category: "enterprise",
      description: {
        en: "Vietnam Payment Solution",
        vi: "Công ty Cổ phần Giải pháp Thanh toán Việt Nam"
      },
      image: "/image/enterprise/logo vnpay.jpg"
    },
    {
      id: 12,
      name: "VTVcab",
      category: "enterprise",
      description: {
        en: "Vietnam Television Cable",
        vi: "Công ty Truyền hình cáp Việt Nam"
      },
      image: "/image/enterprise/logo VTVcab.png"
    },
    {
      id: 13,
      name: "TH Group",
      category: "enterprise",
      description: {
        en: "TH Group Corporation",
        vi: "Tập đoàn TH"
      },
      image: "/image/enterprise/Logo_th_group.png"
    },
    {
      id: 14,
      name: "MCredit",
      category: "enterprise",
      description: {
        en: "MCredit Financial Services",
        vi: "Công ty Tài chính MCredit"
      },
      image: "/image/enterprise/logo-mcredit-2.png"
    },
    {
      id: 15,
      name: "NAPAS",
      category: "enterprise",
      description: {
        en: "National Payment Corporation",
        vi: "Công ty Cổ phần Thanh toán Quốc gia Việt Nam"
      },
      image: "/image/enterprise/logo-napas.png"
    },

    // Banking Companies (19)
    {
      id: 16,
      name: "ABBank",
      category: "bank",
      description: {
        en: "Digital banking transformation",
        vi: "Chuyển đổi số ngân hàng"
      },
      image: "/image/bank/logo abbank.png"
    },
    {
      id: 17,
      name: "ABIC",
      category: "bank",
      description: {
        en: "Financial technology solutions",
        vi: "Giải pháp công nghệ tài chính"
      },
      image: "/image/bank/logo ABIC.png"
    },
    {
      id: 18,
      name: "ACB Bank",
      category: "bank",
      description: {
        en: "Modern banking infrastructure",
        vi: "Cơ sở hạ tầng ngân hàng hiện đại"
      },
      image: "/image/bank/logo ACB Bank.png"
    },
    {
      id: 19,
      name: "Agribank",
      category: "bank",
      description: {
        en: "Agricultural banking solutions",
        vi: "Giải pháp ngân hàng nông nghiệp"
      },
      image: "/image/bank/logo agribank.png"
    },
    {
      id: 20,
      name: "Bắc Á Bank",
      category: "bank",
      description: {
        en: "Regional banking services",
        vi: "Dịch vụ ngân hàng khu vực"
      },
      image: "/image/bank/logo Bắc Á.png"
    },
    {
      id: 21,
      name: "LPBank",
      category: "bank",
      description: {
        en: "Digital banking innovation",
        vi: "Đổi mới ngân hàng số"
      },
      image: "/image/bank/logo LPbank.png"
    },
    {
      id: 22,
      name: "MBS",
      category: "bank",
      description: {
        en: "Securities and banking services",
        vi: "Dịch vụ chứng khoán và ngân hàng"
      },
      image: "/image/bank/logo MBS.png"
    },
    {
      id: 23,
      name: "MIC",
      category: "bank",
      description: {
        en: "Investment and banking solutions",
        vi: "Giải pháp đầu tư và ngân hàng"
      },
      image: "/image/bank/logo MIC.png"
    },
    {
      id: 24,
      name: "PGBank",
      category: "bank",
      description: {
        en: "Petrol banking services",
        vi: "Dịch vụ ngân hàng xăng dầu"
      },
      image: "/image/bank/logo pgbank.png"
    },
    {
      id: 25,
      name: "BIDV",
      category: "bank",
      description: {
        en: "Bank for Investment and Development",
        vi: "Ngân hàng Đầu tư và Phát triển Việt Nam"
      },
      image: "/image/bank/logo bidv.jpg"
    },
    {
      id: 26,
      name: "BSC",
      category: "bank",
      description: {
        en: "Banking and Securities Company",
        vi: "Công ty Chứng khoán và Ngân hàng"
      },
      image: "/image/bank/logo BSC.png"
    },
    {
      id: 27,
      name: "CoopBank",
      category: "bank",
      description: {
        en: "Cooperative Bank of Vietnam",
        vi: "Ngân hàng Hợp tác xã Việt Nam"
      },
      image: "/image/bank/logo Coopbank.png"
    },
    {
      id: 28,
      name: "Shinhan Bank",
      category: "bank",
      description: {
        en: "Shinhan Bank Vietnam",
        vi: "Ngân hàng Shinhan Việt Nam"
      },
      image: "/image/bank/logo shinhan bank.png"
    },
    {
      id: 29,
      name: "Vietcombank",
      category: "bank",
      description: {
        en: "Joint Stock Commercial Bank for Foreign Trade",
        vi: "Ngân hàng Thương mại Cổ phần Ngoại thương Việt Nam"
      },
      image: "/image/bank/logo Vietcombank.png"
    },
    {
      id: 30,
      name: "VietinBank",
      category: "bank",
      description: {
        en: "Joint Stock Commercial Bank for Industry and Trade",
        vi: "Ngân hàng Thương mại Cổ phần Công thương Việt Nam"
      },
      image: "/image/bank/logo Vietinbank.png"
    },
    {
      id: 31,
      name: "Coop Bank",
      category: "bank",
      description: {
        en: "Cooperative Bank Services",
        vi: "Dịch vụ Ngân hàng Hợp tác"
      },
      image: "/image/bank/logo-coop-bank.jpg"
    },
    {
      id: 32,
      name: "HDBank",
      category: "bank",
      description: {
        en: "HDBank Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Phát triển TP.HCM"
      },
      image: "/image/bank/Logo-HDBank.png"
    },
    {
      id: 33,
      name: "VietBank",
      category: "bank",
      description: {
        en: "VietBank Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Việt Nam Thương Tín"
      },
      image: "/image/bank/logo-vietbank.jpg"
    },
    {
      id: 34,
      name: "Sacombank",
      category: "bank",
      description: {
        en: "Saigon Thuong Tin Commercial Joint Stock Bank",
        vi: "Ngân hàng Thương mại Cổ phần Sài Gòn Thương Tín"
      },
      image: "/image/bank/Logo-Sacombank.png"
    },

    // Government Agencies (6)
    {
      id: 35,
      name: "Ban Cơ yếu Chính phủ",
      category: "government",
      description: {
        en: "Government Cipher Committee",
        vi: "Ban Cơ yếu Chính phủ"
      },
      image: "/image/govern/logo ban cơ yếu chính phủ.png"
    },
    {
      id: 36,
      name: "Bộ TNMT",
      category: "government",
      description: {
        en: "Ministry of Natural Resources and Environment",
        vi: "Bộ Tài nguyên và Môi trường"
      },
      image: "/image/govern/logo Bộ TNMT.png"
    },
    {
      id: 37,
      name: "Bộ Văn hóa",
      category: "government",
      description: {
        en: "Ministry of Culture",
        vi: "Bộ Văn hóa, Thể thao và Du lịch"
      },
      image: "/image/govern/logo Bộ Văn hóa.jpg"
    },
    {
      id: 38,
      name: "Tỉnh Bắc Ninh",
      category: "government",
      description: {
        en: "Bac Ninh Province",
        vi: "Tỉnh Bắc Ninh"
      },
      image: "/image/govern/logo tỉnh bắc ninh.png"
    },
    {
      id: 39,
      name: "Tỉnh Phú Thọ",
      category: "government",
      description: {
        en: "Phu Tho Province",
        vi: "Tỉnh Phú Thọ"
      },
      image: "/image/govern/Logo_tỉnh_Phú_Thọ.png"
    },

    // Foreign Companies (3)
    {
      id: 40,
      name: "Global Tech Solutions",
      category: "foreign",
      description: {
        en: "International technology services",
        vi: "Dịch vụ công nghệ quốc tế"
      },
      image: "https://source.unsplash.com/random/800x600?global&1"
    },
    {
      id: 41,
      name: "Worldwide Systems Inc",
      category: "foreign",
      description: {
        en: "Global IT infrastructure",
        vi: "Cơ sở hạ tầng CNTT toàn cầu"
      },
      image: "https://source.unsplash.com/random/800x600?worldwide&2"
    },
    {
      id: 42,
      name: "International Data Corp",
      category: "foreign",
      description: {
        en: "International data solutions",
        vi: "Giải pháp dữ liệu quốc tế"
      },
      image: "https://source.unsplash.com/random/800x600?international&3"
    }
  ];

  const categories = [
    { id: 'all', label: currentLanguage === 'vi' ? 'TẤT CẢ' : 'ALL', count: 42 },
    { id: 'enterprise', label: currentLanguage === 'vi' ? 'DOANH NGHIỆP' : 'ENTERPRISE', count: 15 },
    { id: 'bank', label: currentLanguage === 'vi' ? 'NGÂN HÀNG' : 'BANKING', count: 19 },
    { id: 'government', label: currentLanguage === 'vi' ? 'CHÍNH PHỦ' : 'GOVERNMENT', count: 6 },
    { id: 'foreign', label: currentLanguage === 'vi' ? 'NƯỚC NGOÀI' : 'FOREIGN', count: 3 },
  ];

  const filteredCompanies = activeCategory === 'all' 
    ? companies 
    : companies.filter(company => company.category === activeCategory);

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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {currentLanguage === 'vi' 
                ? "Netcorp trân trọng cảm ơn những khách hàng đã tin tưởng lựa chọn chúng tôi là đơn vị cung cấp và triển khai thành công các giải pháp, sản phẩm công nghệ thông tin mang lại hiệu quả tối ưu."
                : "Netcorp sincerely thanks our valued customers for trusting us as the provider and successful implementer of information technology solutions and products that deliver optimal efficiency."
              }
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

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCompanies.map((company, index) => (
              <motion.div 
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="relative h-48 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
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
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Clients; 