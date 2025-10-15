import React from 'react';
import { FiHome, FiBriefcase, FiCpu } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../ui/Breadcrumb';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const contactCards = isEn
    ? [
      {
        icon: <FiHome size={32} className="text-primary" />,
        title: 'Address',
        content: (
          <>
            <div>
              <span>Address:</span>{' '}
              <span >No. 12, Alley 1, Lane 178 Trung Liet, Trung Liet Ward, Dong Da District, Hanoi, Vietnam</span>
            </div>
            <div>
              <span>R/O:</span>{' '}
              <span >Casla Building, 78 Duy Tan Alley, Cau Giay, Hanoi.</span>
            </div>
          </>
        ),
      },
      {
        icon: <FiBriefcase size={32} className="text-primary" />,
        title: 'Sales Department',
        content: (
          <>
            <div>
              <span>Email:</span>{' '}
              <span >info@netcorp.vn</span>
            </div>
            <div>
              <span>Tel:</span>{' '}
              <span >(+84) 24.777.01912</span>
            </div>
          </>
        ),
      },
      {
        icon: <FiCpu size={32} className="text-primary" />,
        title: 'Technical Department',
        content: (
          <>
            <div>
              <span>Email:</span>{' '}
              <span >nis@netcorp.vn</span>
            </div>
          </>
        ),
      },
    ]
    : [
      {
        icon: <FiHome size={32} className="text-primary" />,
        title: 'Địa chỉ',
        content: (
          <>
            <div>
              <span>Địa chỉ:</span>{' '}
              <span >Số 12, Ngõ 1, Số 178 Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Hà Nội, Việt Nam</span>
            </div>
            <div>
              <span>Văn phòng đại diện:</span>{' '}
              <span >Tòa nhà Casla, Ngõ 78 Duy Tân, Cầu Giấy, Hà Nội.</span>
            </div>
          </>
        ),
      },
      {
        icon: <FiBriefcase size={32} className="text-primary" />,
        title: 'Bộ Phận Kinh Doanh',
        content: (
          <>
            <div>
              <span>Email:</span>{' '}
              <span >info@netcorp.vn</span>
            </div>
            <div>
              <span>Tel:</span>{' '}
              <span >(+84) 24.777.01912</span>
            </div>
          </>
        ),
      },
      {
        icon: <FiCpu size={32} className="text-primary" />,
        title: 'Bộ Phận Kỹ Thuật',
        content: (
          <>
            <div>
              <span>Email:</span>{' '}
              <span >nis@netcorp.vn</span>
            </div>
          </>
        ),
      },
    ];

  const namePlaceholder = isEn ? 'Your Name' : 'Họ tên';
  const emailPlaceholder = isEn ? 'Email Address' : 'Địa chỉ mail';
  const phonePlaceholder = isEn ? 'Phone Number' : 'Số điện thoại';
  const subjectPlaceholder = isEn ? 'Subject' : 'Chủ đề';
  const messagePlaceholder = isEn ? 'Write Message' : 'Tin nhắn';
  const buttonText = isEn ? 'SEND MESSAGE' : 'Gửi tin';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full flex items-center justify-center pt-20">
        <img
          src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1500&q=80"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isEn ? 'Contact Us' : 'Liên Hệ'}
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
                    en: 'Contact',
                    vi: 'Liên hệ'
                  }
                }
              ]}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative py-0 bg-white z-10 mt-16">
        <div className="container mx-auto px-4">
          {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, idx) => (
              <motion.div
              key={card.title}
              className="group rounded-xl p-8 shadow-md flex flex-col items-start transition-all duration-300 bg-white text-gray-800 hover:bg-primary hover:text-white hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 * idx }}
              >
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-lg bg-primary/10 shadow-md transition-colors duration-300 group-hover:bg-white mr-3">
                {React.cloneElement(card.icon, { className: 'text-primary group-hover:text-primary transition-colors duration-300', size: 24 })}
                </span>
                <span className="text-lg font-bold tracking-widest transition-colors duration-300 group-hover:text-white">{card.title}</span>
              </div>
              <div className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">{card.content}</div>
              </motion.div>
            ))}
            </div>

          {/* Google Map */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <iframe
              title="Netcorp Location"
              src="https://www.google.com/maps?q=Tòa+nhà+Casla,+Ngõ+78+Duy+Tân,+Dịch+Vọng+Hậu,+Cầu+Giấy,+Hà+Nội&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '1rem', minHeight: '300px', maxWidth: '900px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              {isEn ? 'Request a Consultation' : 'Gửi yêu cầu tư vấn'}
            </h2>
            <form
              action="https://formspree.io/f/xkgqrvel"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  name="name"
                  placeholder={namePlaceholder}
                  required
                  className="bg-gray-100 rounded-md px-6 py-5 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  required
                  className="bg-gray-100 rounded-md px-6 py-5 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  name="phone"
                  placeholder={phonePlaceholder}
                  className="bg-gray-100 rounded-md px-6 py-5 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="text"
                  name="subject"
                  placeholder={subjectPlaceholder}
                  className="bg-gray-100 rounded-md px-6 py-5 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.textarea
                rows={6}
                name="message"
                placeholder={messagePlaceholder}
                required
                className="bg-gray-100 rounded-md px-6 py-5 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-md shadow-md transition-all duration-300 tracking-widest text-lg relative"
                  style={{ letterSpacing: '0.15em' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {buttonText}
                  <span className="absolute right-0 bottom-0 w-6 h-6 bg-green-700 rounded-br-md" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>

        {/* Spacing before footer */}
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default Contact; 