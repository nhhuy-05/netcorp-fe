import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // thêm dòng này

interface WorkItem {
  id: number;
  category: string;
  image: string;
  title: string;
  titleVi?: string;
  customer: string;
  customerVi?: string;
  address: string;
  addressVi?: string;
  description: string;
  descriptionVi?: string;
  year: number;
  slug: string;
  customerImage?: string;
}

export const categories = [
  { en: 'ALL', vi: 'TẤT CẢ' },
  { en: 'NETWORK', vi: 'NETWORK' },
  { en: 'SYSTEM', vi: 'SYSTEM' },
  { en: 'SECURITY', vi: 'SECURITY' },
  { en: 'M&E', vi: 'M&E' },
  { en: 'APPLICATION', vi: 'APPLICATION' },
  { en: 'BROADCASTING', vi: 'BROADCASTING' }
];

export const works: WorkItem[] = [
  // NETWORK
  {
    id: 1,
    category: 'NETWORK',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Enterprise Network Upgrade',
    titleVi: 'Nâng cấp mạng doanh nghiệp',
    customer: 'Techcom Bank',
    customerVi: 'Ngân hàng Techcom',
    address: '191 Ba Trieu, Hanoi',
    addressVi: '191 Bà Triệu, Hà Nội',
    description: 'Upgraded core network infrastructure for Techcom Bank branches nationwide.',
    descriptionVi: 'Nâng cấp hạ tầng mạng lõi cho các chi nhánh của Ngân hàng Techcom.',
    year: 2023,
    slug: 'techcom-bank-network-upgrade',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'NETWORK',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Campus WiFi Solution',
    titleVi: 'Giải pháp WiFi trường học',
    customer: 'Hanoi University',
    customerVi: 'Đại học Hà Nội',
    address: 'Km9 Nguyen Trai, Hanoi',
    addressVi: 'Km9 Nguyễn Trãi, Hà Nội',
    description: 'Designed and deployed high-density WiFi for Hanoi University.',
    descriptionVi: 'Thiết kế và triển khai WiFi mật độ cao cho Đại học Hà Nội.',
    year: 2022,
    slug: 'hanoi-university-wifi',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },

  // SYSTEM
  {
    id: 3,
    category: 'SYSTEM',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Server Virtualization',
    titleVi: 'Ảo hóa máy chủ',
    customer: 'Viettel Group',
    customerVi: 'Tập đoàn Viettel',
    address: '1 Tran Huu Duc, Hanoi',
    addressVi: '1 Trần Hữu Đức, Hà Nội',
    description: 'Implemented VMware virtualization for Viettel Group data center.',
    descriptionVi: 'Triển khai ảo hóa VMware cho trung tâm dữ liệu của Tập đoàn Viettel.',
    year: 2024,
    slug: 'viettel-server-virtualization',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'SYSTEM',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Cloud Migration',
    titleVi: 'Di chuyển lên đám mây',
    customer: 'FPT Software',
    customerVi: 'FPT Software',
    address: '10 Pham Van Bach, HCMC',
    addressVi: '10 Phạm Văn Bạch, TP.HCM',
    description: 'Migrated legacy systems to AWS cloud for FPT Software.',
    descriptionVi: 'Di chuyển hệ thống kế thừa lên đám mây AWS cho FPT Software.',
    year: 2023,
    slug: 'fpt-cloud-migration',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },

  // SECURITY
  {
    id: 5,
    category: 'SECURITY',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Firewall Deployment',
    titleVi: 'Triển khai tường lửa',
    customer: 'VinGroup',
    customerVi: 'VinGroup',
    address: '72 Le Van Luong, Hanoi',
    addressVi: '72 Lê Văn Lương, Hà Nội',
    description: 'Deployed next-gen firewall and security policies for VinGroup.',
    descriptionVi: 'Triển khai tường lửa thế hệ mới và chính sách bảo mật cho VinGroup.',
    year: 2022,
    slug: 'vingroup-firewall',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'SECURITY',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'SOC Implementation',
    titleVi: 'Triển khai SOC',
    customer: 'MB Bank',
    customerVi: 'Ngân hàng MB',
    address: '21 Cat Linh, Hanoi',
    addressVi: '21 Cát Linh, Hà Nội',
    description: 'Built Security Operation Center for MB Bank.',
    descriptionVi: 'Xây dựng Trung tâm Điều hành An ninh cho Ngân hàng MB.',
    year: 2023,
    slug: 'mb-bank-soc',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },

  // M&E
  {
    id: 7,
    category: 'M&E',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Smart Building M&E',
    titleVi: 'M&E tòa nhà thông minh',
    customer: 'Sun Group',
    customerVi: 'Sun Group',
    address: '16 Tran Hung Dao, Da Nang',
    addressVi: '16 Trần Hưng Đạo, Đà Nẵng',
    description: 'Provided M&E solutions for Sun Group smart building.',
    descriptionVi: 'Cung cấp giải pháp M&E cho tòa nhà thông minh của Sun Group.',
    year: 2024,
    slug: 'sun-group-me',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    category: 'M&E',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Factory Automation',
    titleVi: 'Tự động hóa nhà máy',
    customer: 'Hoa Phat Steel',
    customerVi: 'Thép Hòa Phát',
    address: 'KCN Dinh Vu, Hai Phong',
    addressVi: 'KCN Đình Vũ, Hải Phòng',
    description: 'Automated M&E systems for Hoa Phat Steel factory.',
    descriptionVi: 'Tự động hóa hệ thống M&E cho nhà máy Thép Hòa Phát.',
    year: 2022,
    slug: 'hoa-phat-me',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },

  // APPLICATION
  {
    id: 9,
    category: 'APPLICATION',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Mobile Banking App',
    titleVi: 'Ứng dụng ngân hàng di động',
    customer: 'ACB Bank',
    customerVi: 'Ngân hàng ACB',
    address: '442 Nguyen Thi Minh Khai, HCMC',
    addressVi: '442 Nguyễn Thị Minh Khai, TP.HCM',
    description: 'Developed mobile banking application for ACB Bank.',
    descriptionVi: 'Phát triển ứng dụng ngân hàng di động cho Ngân hàng ACB.',
    year: 2023,
    slug: 'acb-mobile-app',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    category: 'APPLICATION',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'E-commerce Platform',
    titleVi: 'Nền tảng thương mại điện tử',
    customer: 'Tiki',
    customerVi: 'Tiki',
    address: '52 Ut Tich, HCMC',
    addressVi: '52 Út Tịch, TP.HCM',
    description: 'Built scalable e-commerce platform for Tiki.',
    descriptionVi: 'Xây dựng nền tảng thương mại điện tử mở rộng cho Tiki.',
    year: 2024,
    slug: 'tiki-ecommerce',
    customerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },
  
  // BROADCASTING
  {
    id: 11,
    category: 'BROADCASTING',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    title: 'TV Studio Automation',
    titleVi: 'Tự động hóa trường quay truyền hình',
    customer: 'VTV',
    customerVi: 'Đài Truyền hình Việt Nam',
    address: '43 Nguyen Chi Thanh, Hanoi',
    addressVi: '43 Nguyễn Chí Thanh, Hà Nội',
    description: 'Implemented automated broadcasting systems for VTV studios.',
    descriptionVi: 'Triển khai hệ thống phát sóng tự động cho các trường quay của VTV.',
    year: 2023,
    slug: 'vtv-studio-automation',
    customerImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 12,
    category: 'BROADCASTING',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'Live Event Streaming',
    titleVi: 'Phát trực tiếp sự kiện',
    customer: 'HTV',
    customerVi: 'Đài Truyền hình TP.HCM',
    address: '8 Nguyen Thi Minh Khai, HCMC',
    addressVi: '8 Nguyễn Thị Minh Khai, TP.HCM',
    description: 'Provided live streaming solutions for HTV major events.',
    descriptionVi: 'Cung cấp giải pháp phát trực tiếp cho các sự kiện lớn của HTV.',
    year: 2024,
    slug: 'htv-live-streaming',
    customerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 13,
    category: 'BROADCASTING',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f3b8?auto=format&fit=crop&w=800&q=80',
    title: 'Digital Radio Network',
    titleVi: 'Mạng phát thanh số',
    customer: 'VOV',
    customerVi: 'Đài Tiếng nói Việt Nam',
    address: '58 Quan Su, Hanoi',
    addressVi: '58 Quán Sứ, Hà Nội',
    description: 'Upgraded VOV to a digital radio broadcasting network.',
    descriptionVi: 'Nâng cấp hệ thống phát thanh của VOV lên mạng số hóa.',
    year: 2022,
    slug: 'vov-digital-radio',
    customerImage: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f3b8?auto=format&fit=crop&w=800&q=80'
  }

];

const WorkShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(0);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate(); // thêm dòng này

  const ITEMS_PER_PAGE = 4;

  const filteredWorks = activeCategory === 'ALL'
    ? works
    : works.filter(work => work.category === activeCategory);

  const totalPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE);

  const getCurrentPageItems = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return filteredWorks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === totalPages - 1 ? 0 : prevPage + 1
      );
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  useEffect(() => {
    setCurrentPage(0); // Reset to first page when category changes
  }, [activeCategory]);

  return (
    <section className="py-20 bg-gray-50 relative z-10">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            {currentLanguage === 'vi' ? 'Danh mục dự án' : 'Our Portfolio'}
          </div>
          <h2 className="font-bold mb-6 text-gray-900" style={{ fontSize: '40px' }}>
            {currentLanguage === 'vi' ? 'CÁC DỰ ÁN TIÊU BIỂU' : 'WORK SHOWCASE'}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            {currentLanguage === 'vi'
              ? 'Khám phá danh mục dự án đa dạng của chúng tôi trong nhiều lĩnh vực khác nhau.'
              : 'Explore our diverse portfolio across various domains.'}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.en}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 
                ${activeCategory === category.en
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'}`}
              onClick={() => {
                setActiveCategory(category.en);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {currentLanguage === 'vi' ? category.vi : category.en}
              {category.en === 'ALL' && <span className="ml-1 text-xs">[{works.length}]</span>}
            </motion.button>
          ))}
        </div>

        {/* Multi-item Showcase with Auto-rotation */}
        <div className="relative overflow-hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-4 gap-6"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentPageItems().map((work, index) => (
                <motion.div
                  key={work.id}
                  className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => navigate(`/project/${work.slug}`)}
                >
                  <div className="aspect-square">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {currentLanguage === 'vi' ? work.titleVi : work.title}
                        </h3>
                        <p className="text-sm text-white/80 font-semibold">
                          {currentLanguage === 'vi' ? work.customerVi : work.customer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          {totalPages > 1 && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  type='button'
                  title={`Navigate to page ${index + 1}`}
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;