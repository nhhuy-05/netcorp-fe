/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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

  const partners: Partner[] = [
    {
      id: 1,
      name: "DELL",
      category: "enterprise",
      description: {
        en: "Global technology leader in computing and storage.",
        vi: "Nhà cung cấp công nghệ toàn cầu về máy tính và lưu trữ."
      },
      image: "/image/partners/logo-DELL.png"
    },
    {
      id: 2,
      name: "CISCO",
      category: "networking",
      description: {
        en: "World leader in IT, networking, and cybersecurity solutions.",
        vi: "Nhà cung cấp giải pháp CNTT, mạng và an ninh mạng hàng đầu thế giới."
      },
      image: "/image/partners/logo-CISCO.png"
    },
    {
      id: 3,
      name: "IBM",
      category: "software",
      description: {
        en: "Global leader in hybrid cloud and AI.",
        vi: "Nhà cung cấp giải pháp điện toán đám mây lai và AI hàng đầu."
      },
      image: "/image/partners/logo-IBM.png"
    },
    {
      id: 4,
      name: "HPE",
      category: "enterprise",
      description: {
        en: "Enterprise IT infrastructure and cloud solutions.",
        vi: "Giải pháp hạ tầng CNTT và điện toán đám mây doanh nghiệp."
      },
      image: "/image/partners/logo-HPE.png"
    },
    {
      id: 5,
      name: "ORACLE",
      category: "software",
      description: {
        en: "Database, cloud, and enterprise software solutions.",
        vi: "Giải pháp cơ sở dữ liệu, đám mây và phần mềm doanh nghiệp."
      },
      image: "/image/partners/logo-ORACLE.png"
    },
    {
      id: 6,
      name: "MICROSOFT",
      category: "software",
      description: {
        en: "Global leader in software, cloud, and productivity solutions.",
        vi: "Nhà cung cấp phần mềm, điện toán đám mây và giải pháp năng suất hàng đầu."
      },
      image: "/image/partners/logo-MICROSOFT.png"
    },
    {
      id: 7,
      name: "VMWARE",
      category: "enterprise",
      description: {
        en: "Cloud computing and virtualization solutions.",
        vi: "Giải pháp điện toán đám mây và ảo hóa."
      },
      image: "/image/partners/logo-VMWARE.png"
    },
    {
      id: 8,
      name: "PALOALTO",
      category: "security",
      description: {
        en: "Next-generation cybersecurity solutions.",
        vi: "Giải pháp an ninh mạng thế hệ mới."
      },
      image: "/image/partners/logo-PALOALTO.png"
    },
    {
      id: 9,
      name: "CHECKPOINT",
      category: "security",
      description: {
        en: "Global leader in cybersecurity solutions.",
        vi: "Nhà cung cấp giải pháp an ninh mạng hàng đầu thế giới."
      },
      image: "/image/partners/logo-CHECKPOINT.png"
    },
    {
      id: 10,
      name: "THALES",
      category: "security",
      description: {
        en: "Digital identity and security solutions.",
        vi: "Giải pháp nhận dạng số và bảo mật."
      },
      image: "/image/partners/logo-THALES.png"
    },
    {
      id: 11,
      name: "NETAPP",
      category: "enterprise",
      description: {
        en: "Data management and cloud storage solutions.",
        vi: "Giải pháp quản lý dữ liệu và lưu trữ đám mây."
      },
      image: "/image/partners/logo-NETAPP.png"
    },
    {
      id: 12,
      name: "FORTINET",
      category: "security",
      description: {
        en: "Broad, integrated, and automated cybersecurity solutions.",
        vi: "Giải pháp an ninh mạng tích hợp, tự động và toàn diện."
      },
      image: "/image/partners/logo-FORTINET.png"
    },
    {
      id: 13,
      name: "JUNIPER",
      category: "networking",
      description: {
        en: "High-performance networking and cybersecurity.",
        vi: "Giải pháp mạng hiệu suất cao và an ninh mạng."
      },
      image: "/image/partners/logo-JUNIPER.png"
    },
    {
      id: 14,
      name: "F5",
      category: "networking",
      description: {
        en: "Application delivery and security solutions.",
        vi: "Giải pháp phân phối và bảo mật ứng dụng."
      },
      image: "/image/partners/logo-F5.png"
    },
    {
      id: 15,
      name: "RADWARE",
      category: "security",
      description: {
        en: "Application delivery and cybersecurity solutions.",
        vi: "Giải pháp phân phối ứng dụng và an ninh mạng."
      },
      image: "/image/partners/logo-RADWARE.png"
    },
    {
      id: 16,
      name: "MCAFEE",
      category: "security",
      description: {
        en: "Cybersecurity solutions for businesses.",
        vi: "Giải pháp an ninh mạng cho doanh nghiệp."
      },
      image: "/image/partners/logo-MCAFEE.png"
    },
    {
      id: 17,
      name: "CYBERARK",
      category: "security",
      description: {
        en: "Leader in privileged access management.",
        vi: "Nhà cung cấp giải pháp quản lý truy cập đặc quyền hàng đầu."
      },
      image: "/image/partners/logo-CYBERARK.png"
    },
    {
      id: 18,
      name: "TUFIN",
      category: "security",
      description: {
        en: "Security policy automation solutions.",
        vi: "Giải pháp tự động hóa chính sách bảo mật."
      },
      image: "/image/partners/logo-TUFIN.png"
    },
    {
      id: 19,
      name: "VERTIV",
      category: "enterprise",
      description: {
        en: "Critical infrastructure and data center solutions.",
        vi: "Giải pháp hạ tầng quan trọng và trung tâm dữ liệu."
      },
      image: "/image/partners/logo-VERTIV.png"
    },
    {
      id: 20,
      name: "SCHNEIDER",
      category: "enterprise",
      description: {
        en: "Energy management and automation solutions.",
        vi: "Giải pháp quản lý năng lượng và tự động hóa."
      },
      image: "/image/partners/logo-SCHNEIDER.png"
    },
    {
      id: 21,
      name: "POLYCOM",
      category: "enterprise",
      description: {
        en: "Unified communications and collaboration solutions.",
        vi: "Giải pháp truyền thông hợp nhất và cộng tác."
      },
      image: "/image/partners/logo-POLYCOM.png"
    },
    {
      id: 22,
      name: "AVER",
      category: "enterprise",
      description: {
        en: "Innovative video conferencing and education technology.",
        vi: "Công nghệ hội nghị truyền hình và giáo dục sáng tạo."
      },
      image: "/image/partners/logo-AVER.png"
    },
    {
      id: 23,
      name: "SYMANTEC",
      category: "security",
      description: {
        en: "Cybersecurity software and services.",
        vi: "Phần mềm và dịch vụ an ninh mạng."
      },
      image: "/image/partners/logo-SYMANTEC.png"
    },
    {
      id: 24,
      name: "CLEARONE",
      category: "enterprise",
      description: {
        en: "Leading provider of audio and visual communication solutions.",
        vi: "Nhà cung cấp giải pháp truyền thông âm thanh và hình ảnh hàng đầu."
      },
      image: "/image/partners/logo-CLEARONE.png"
    },
    {
      id: 25,
      name: "DAHUA",
      category: "surveillance",
      description: {
        en: "Provider of video surveillance solutions.",
        vi: "Nhà cung cấp giải pháp giám sát video."
      },
      image: "/image/partners/logo-DAHUA.png"
    },
    {
      id: 26,
      name: "AVAYA",
      category: "enterprise",
      description: {
        en: "Leading provider of business communications solutions.",
        vi: "Nhà cung cấp giải pháp truyền thông doanh nghiệp hàng đầu."
      },
      image: "/image/partners/logo-AVAYA.png"
    }
  ];

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

          {/* Filter Categories
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
          </div> */}

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                className="group relative overflow-hidden rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="relative h-48 w-full overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-20 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-110" // max-h-20 ~ 80px
                    style={{ maxWidth: '80%', maxHeight: '80px' }}
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