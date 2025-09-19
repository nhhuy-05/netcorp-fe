import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface WorkItem {
  id: number;
  category: string;
  image: string;
  title: string;
  titleVi?: string;
}

const WorkShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(0);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const categories = [
    { en: 'ALL', vi: 'TẤT CẢ' },
    { en: 'BRANDING', vi: 'THƯƠNG HIỆU' },
    { en: 'ILLUSTRATION', vi: 'MINH HỌA' },
    { en: 'PHOTOGRAPHY', vi: 'NHIẾP ẢNH' },
    { en: 'WEB DESIGN', vi: 'THIẾT KẾ WEB' }
  ];
  
  const ITEMS_PER_PAGE = 4;
  
  const works: WorkItem[] = [
    {
      id: 1,
      category: 'PHOTOGRAPHY',
      image: 'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Vintage Camera',
      titleVi: 'Máy Ảnh Cổ Điển'
    },
    {
      id: 2,
      category: 'WEB DESIGN',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'World Globe',
      titleVi: 'Quả Địa Cầu'
    },
    {
      id: 3,
      category: 'ILLUSTRATION',
      image: 'https://images.unsplash.com/photo-1477505982272-ead89926a577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Ice Cream',
      titleVi: 'Kem'
    },
    {
      id: 4,
      category: 'BRANDING',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
      title: 'Modern Workspace',
      titleVi: 'Không Gian Làm Việc Hiện Đại'
    },
    {
      id: 5,
      category: 'PHOTOGRAPHY',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Headphones',
      titleVi: 'Tai Nghe'
    },
    {
      id: 6,
      category: 'WEB DESIGN',
      image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      title: 'Modern Design',
      titleVi: 'Thiết Kế Hiện Đại'
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {currentLanguage === 'vi' ? 'CÁC DỰ ÁN TIÊU BIỂU' : 'WORK SHOWCASE'}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'vi' 
              ? 'Khám phá danh mục dự án đa dạng, sáng tạo của chúng tôi trong nhiều lĩnh vực khác nhau.'
              : 'Explore our diverse portfolio of creative projects across different categories'}
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
        <div className="relative min-h-[400px] overflow-hidden px-4">
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
                        <p className="text-sm text-white/80">
                          {currentLanguage === 'vi' 
                            ? categories.find(cat => cat.en === work.category)?.vi 
                            : work.category}
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
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
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