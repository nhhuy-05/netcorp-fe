import React from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiUser, FiTag, FiX } from 'react-icons/fi';
import Breadcrumb from '../ui/Breadcrumb';
import NotFound from './NotFound';
import { getBlogPostById, BlogPost } from '../../data/newsData';

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeImage, setActiveImage] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  const blogPost: BlogPost | undefined = getBlogPostById(id || '1');

  if (!blogPost) {
    return <NotFound />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'vi' ? 'vi-VN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: { en: string; vi: string } } = {
      technology: { en: 'Technology', vi: 'Công Nghệ' },
      business: { en: 'Business', vi: 'Kinh Doanh' },
      security: { en: 'Security', vi: 'Bảo Mật' },
      industry: { en: 'Industry', vi: 'Ngành Nghề' },
      announcement: { en: 'Announcement', vi: 'Thông Báo' }
    };
    return categoryMap[category] || { en: category, vi: category };
  };

  const renderContent = (content: string) => {
    // Split content by two or more newlines to identify paragraphs/blocks
    const blocks = content.split(/\n\s*\n/);

    return blocks.map((block, bIndex) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Check if it is an image block
      // Format: [IMAGE:key|Caption VI|Caption EN]
      if (trimmed.startsWith('[IMAGE:') && trimmed.endsWith(']')) {
        const inner = trimmed.slice(7, -1); // remove '[IMAGE:' and ']'
        const parts = inner.split('|');
        const key = parts[0]?.trim();
        const captionVi = parts[1]?.trim() || '';
        const captionEn = parts[2]?.trim() || '';

        const imgSrc = blogPost.bodyImages?.[key];

        if (imgSrc) {
          const caption = currentLanguage === 'vi' ? captionVi : captionEn;
          return (
            <div key={bIndex} className="my-8 flex flex-col items-center justify-center">
              <div
                className="overflow-hidden rounded-xl shadow-lg border border-gray-100 max-w-2xl w-full cursor-zoom-in"
                onClick={() => setActiveImage(imgSrc)}
              >
                <img
                  src={imgSrc}
                  alt={caption || (currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en)}
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              {caption && (
                <p className="text-xs md:text-sm text-gray-500 italic mt-2 md:mt-3 text-center">
                  {caption}
                </p>
              )}
            </div>
          );
        }
        return null;
      }

      // Check if it is a list block
      const lines = trimmed.split('\n');
      const isList = lines.every(line => {
        const clean = line.trim();
        return clean.startsWith('*') || clean.startsWith('-') || clean === '';
      }) || (lines.length > 1 && lines.slice(1).every(line => {
        const clean = line.trim();
        return clean.startsWith('*') || clean.startsWith('-') || clean === '';
      }) && !lines[0].trim().startsWith('*') && !lines[0].trim().startsWith('-'));

      if (isList) {
        let intro = '';
        const listItems: string[] = [];

        lines.forEach((line, index) => {
          const cleanLine = line.trim();
          if (!cleanLine) return;
          if (cleanLine.startsWith('*') || cleanLine.startsWith('-')) {
            listItems.push(cleanLine.substring(1).trim());
          } else {
            if (index === 0) {
              intro = cleanLine;
            } else {
              listItems.push(cleanLine);
            }
          }
        });

        return (
          <div key={bIndex} className="my-4 md:my-6">
            {intro && <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2 md:mb-3 font-semibold">{intro}</p>}
            <ul className="list-disc pl-5 md:pl-6 space-y-1.5 md:space-y-2 text-base md:text-lg text-gray-700">
              {listItems.map((item, iIndex) => (
                <li key={iIndex} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        );
      }

      // Check if it's a heading
      if (trimmed.startsWith('###')) {
        return <h3 key={bIndex} className="text-lg md:text-xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">{trimmed.replace(/^###\s*/, '')}</h3>;
      }
      if (trimmed.startsWith('##')) {
        return <h2 key={bIndex} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 md:mt-10 mb-4 md:mb-6">{trimmed.replace(/^##\s*/, '')}</h2>;
      }
      if (trimmed.startsWith('#')) {
        return <h1 key={bIndex} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 md:mt-12 mb-4 md:mb-6">{trimmed.replace(/^#\s*/, '')}</h1>;
      }

      // Default paragraph
      return (
        <p key={bIndex} className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 whitespace-pre-line">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src={blogPost.image}
            alt={currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en}
            className="w-screen h-screen object-cover fixed"
          />
          <div className="fixed inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
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
                      en: 'News',
                      vi: 'Tin tức'
                    },
                    path: '/news'
                  },
                  {
                    name: (() => {
                      const fullTitle = currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en;
                      return fullTitle.length > 25 ? fullTitle.substring(0, 25) + '...' : fullTitle;
                    })()
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative py-8 md:py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/news')}
            className="flex items-center text-primary hover:text-primary-dark transition-colors mb-6 md:mb-8 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {currentLanguage === 'vi' ? 'Quay lại Tin tức' : 'Back to News'}
          </motion.button>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            {/* Category Badge */}
            <div className="mb-3 md:mb-4">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                {currentLanguage === 'vi'
                  ? getCategoryLabel(blogPost.category).vi
                  : getCategoryLabel(blogPost.category).en}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>{formatDate(blogPost.date)}</span>
              </div>
              <div className="flex items-center">
                <FiUser className="mr-2" />
                <span>{blogPost.author}</span>
              </div>
            </div>

            {/* Excerpt */}
            <div className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 p-4 md:p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              {currentLanguage === 'vi' ? blogPost.excerpt.vi : blogPost.excerpt.en}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8">
              <FiTag className="text-gray-500 mr-1" />
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs md:text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-6">
              {renderContent(currentLanguage === 'vi' ? blogPost.content.vi : blogPost.content.en)}
            </div>
          </motion.div>

          {/* Share and Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4">
              </div>

              <button
                onClick={() => navigate('/news')}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                {currentLanguage === 'vi' ? 'Xem tất cả tin tức' : 'View All News'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div> */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
        {/* Lightbox Modal */}
        {mounted && createPortal(
          <AnimatePresence>
            {activeImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
                className="cursor-zoom-out"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  zIndex: 999999,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-md"
                  title="Close"
                  style={{ zIndex: 1000000 }}
                >
                  <FiX className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Modal Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  style={{
                    position: 'relative',
                    maxWidth: 'min(95%, 1024px)',
                    maxHeight: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.5rem md:rounded-lg',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)'
                  }}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                >
                  <img
                    src={activeImage}
                    alt="Enlarged blog post image"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                      borderRadius: '0.5rem md:rounded-lg'
                    }}
                  />
                </motion.div>

                {/* Hint text */}
                <p className="text-white/50 text-sm mt-4 italic pointer-events-none">
                  {currentLanguage === 'vi' ? 'Nhấp vào bất kỳ vùng trống nào để đóng' : 'Click anywhere on background to close'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Blog; 