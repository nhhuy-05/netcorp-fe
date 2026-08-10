import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { getAllBlogPosts, BlogPost as NewsItem } from '../../data/newsData';

const News: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();

  const newsItems: NewsItem[] = getAllBlogPosts();



  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="News Hero Background"
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
              {currentLanguage === 'vi' ? 'TIN TỨC' : 'NEWS'}
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
                      en: 'News',
                      vi: 'Tin tức'
                    }
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="relative py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4">

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.article 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl hover:bg-primary transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${news.id}`)}
              >
                {/* Image Section with Metadata Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={news.image}
                    alt={currentLanguage === 'vi' ? news.title.vi : news.title.en}
                    className="w-full h-full object-cover"
                  />

                </div>
                
                {/* Dark Content Section */}
                <div className="bg-white p-6 text-center group-hover:bg-primary transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide leading-tight max-w-xs mx-auto group-hover:text-white transition-colors duration-300">
                    {currentLanguage === 'vi' ? news.title.vi : news.title.en}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-300">
                    {currentLanguage === 'vi' ? news.excerpt.vi : news.excerpt.en}
                  </p>

                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div> */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default News; 