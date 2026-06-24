/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { FiHome, FiBriefcase, FiCpu, FiMail, FiPhone, FiUser, FiMessageCircle, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../ui/Breadcrumb';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage(isEn ? 'Please enter your name' : 'Vui lòng nhập họ tên');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage(isEn ? 'Please enter your email' : 'Vui lòng nhập email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage(isEn ? 'Please enter a valid email address' : 'Vui lòng nhập địa chỉ email hợp lệ');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage(isEn ? 'Please enter your message' : 'Vui lòng nhập tin nhắn');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://netcorp-apis.onrender.com/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(isEn ? 'Failed to send message. Please try again later.' : 'Gửi tin nhắn thất bại. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

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
              <span >Số 12, Ngách 1, Ngõ 178 Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Hà Nội, Việt Nam</span>
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
                  <span className="text-lg font-bold transition-colors duration-300 group-hover:text-white">{card.title}</span>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0434127161366!2d105.77839565032096!3d21.03167143079703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0fb8fd5b31%3A0x4e7748b0b5abe9a6!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gVOG6rXAgxJFvw6BuIE5ldENvcnA!5e0!3m2!1svi!2s!4v1762845781318!5m2!1svi!2s"
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
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {/* Form Card with glassmorphism */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Animated gradient accent bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradientShift 3s ease infinite',
                }}
              />

              <div className="bg-white/95 backdrop-blur-sm px-6 sm:px-10 md:px-14 py-10 md:py-14">
                {/* Section Header */}
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    {isEn ? 'Request a Consultation' : 'Gửi yêu cầu tư vấn'}
                  </h2>
                  <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
                    {isEn
                      ? 'Fill in the form below and our team will get back to you within 24 hours.'
                      : 'Điền thông tin bên dưới, đội ngũ chúng tôi sẽ phản hồi trong vòng 24 giờ.'}
                  </p>
                </motion.div>

                {/* Status Messages */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200 shadow-green-100 shadow-md'
                      : 'bg-red-50 text-red-700 border border-red-200 shadow-red-100 shadow-md'
                      }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                          <FiCheck size={18} />
                        </span>
                        <span className="font-medium">
                          {isEn ? 'Message sent successfully! We will get back to you soon.' : 'Tin nhắn đã được gửi thành công! Chúng tôi sẽ sớm liên hệ với bạn.'}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                          <FiAlertCircle size={18} />
                        </span>
                        <span className="font-medium">{errorMessage}</span>
                      </>
                    )}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.1 }}
                    >
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-300" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={namePlaceholder}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(193,215,46,0.15)] transition-all duration-300 text-base disabled:opacity-50"
                      />
                    </motion.div>
                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                    >
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-300" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={emailPlaceholder}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(193,215,46,0.15)] transition-all duration-300 text-base disabled:opacity-50"
                      />
                    </motion.div>
                  </div>

                  {/* Row 2: Phone + Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.3 }}
                    >
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-300" size={18} />
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={phonePlaceholder}
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(193,215,46,0.15)] transition-all duration-300 text-base disabled:opacity-50"
                      />
                    </motion.div>
                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 }}
                    >
                      <FiMessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-300" size={18} />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={subjectPlaceholder}
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(193,215,46,0.15)] transition-all duration-300 text-base disabled:opacity-50"
                      />
                    </motion.div>
                  </div>

                  {/* Row 3: Message */}
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 }}
                  >
                    <FiMessageCircle className="absolute left-4 top-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" size={18} />
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={messagePlaceholder}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(193,215,46,0.15)] transition-all duration-300 text-base resize-none disabled:opacity-50"
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    className="flex justify-center pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-primary text-white font-bold px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-3"
                      whileHover={!isSubmitting ? { scale: 1.03, y: -2 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                    >
                      {/* Hover shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="relative z-10">
                            {isEn ? 'SENDING...' : 'ĐANG GỬI...'}
                          </span>
                        </>
                      ) : (
                        <>
                          <FiMail size={18} className="relative z-10" />
                          <span className="relative z-10">{buttonText}</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full pointer-events-none" style={{ animation: 'float 6s ease-in-out infinite' }} />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl pointer-events-none" style={{ animation: 'float 4s ease-in-out infinite reverse' }} />

            {/* Inline keyframes */}
            <style>{`
              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-12px) rotate(3deg); }
              }
            `}</style>
          </motion.div>
        </div>

        {/* Background Elements */}
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div> */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>

        {/* Spacing before footer */}
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default Contact; 