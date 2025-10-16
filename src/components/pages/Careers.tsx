import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Breadcrumb from '../ui/Breadcrumb';

// Sample data
export const positions = [
  {
    id: 1,
    type: 'technology',
    slug: 'assistant-project-manager-account-manager-it',
    title: 'Assistant Project Manager/Account Manager (CNTT)',
    titleEn: 'Assistant Project Manager/Account Manager (IT)',
    image: '/image/LOGO_NC.png',
    quantity: 1,
    deadline: '30/10/2025',
    location: 'Tầng 3, Tòa Casa, Ngõ 78 Duy Tân, Cầu Giấy, Hà Nội',
    locationEn: '3rd Floor, Casa Building, 78 Duy Tan Alley, Cau Giay, Hanoi',
    salary: '10.000.000 – 14.000.000 VNĐ',
    salaryEn: '10,000,000 – 14,000,000 VND',
    description: 'Hỗ trợ quản lý dự án, theo dõi tiến độ, quản trị nhiệm vụ, phối hợp khách hàng và các bên liên quan.',
    descriptionEn: 'Support project management, monitor progress, manage tasks, coordinate with customers and stakeholders.',
    detail: {
      responsibilities: [
        'Hỗ trợ Quản lý Dự án trong việc quản lý và theo dõi dự án, lập kế hoạch, theo dõi tiến độ và quản trị các nhiệm vụ với khách hàng, đối tác và nội bộ.',
        'Soạn thảo hợp đồng, phụ lục hợp đồng, biên bản làm việc, công văn, hồ sơ thanh toán theo quy định của công ty, phối hợp làm báo giá, hỗ trợ với đối tác liên quan.',
        'Chuẩn bị, hoàn thiện và nộp hồ sơ theo yêu cầu của khách hàng.',
        'Quản lý tài liệu dự án, theo dõi cam kết hợp đồng, nhắc nhở các bên liên quan đảm bảo tiến độ.',
        'Tổng hợp báo cáo tiến độ hàng tuần, các vấn đề phát sinh cho cấp quản lý liên quan, chuẩn bị tài liệu họp và hỗ trợ xử lý các vấn đề phát sinh.',
        'Tổ chức và tham gia công tác hành chính cho dự án được phân công.',
        'Hỗ trợ các công tác triển khai và công việc chuyên môn khác.'
      ],
      responsibilitiesEn: [
        'Support Project Manager in managing and monitoring projects, planning, tracking progress, and managing tasks with customers, partners, and internal teams.',
        'Draft contracts, contract appendices, meeting minutes, official documents, payment documents according to company regulations, coordinate quotations, support related partners.',
        'Prepare, complete, and submit documents as required by customers.',
        'Manage project documents, monitor contract commitments, remind stakeholders to ensure progress.',
        'Summarize weekly progress reports, arising issues for relevant managers, prepare meeting documents and support issue resolution.',
        'Organize and participate in administrative tasks for assigned projects.',
        'Support implementation and other professional tasks.'
      ],
      requirements: [
        'Nam/nữ ngoại hình ưa nhìn, tốt nghiệp đại học chuyên ngành Quản trị kinh doanh, Kinh tế, CNTT hoặc liên quan (ưu tiên ứng viên có kinh nghiệm trợ lý dự án, sale admin từ 1 năm trở lên).',
        'Kỹ năng quản lý tài liệu, hợp đồng; ưu tiên có kinh nghiệm làm hồ sơ thầu/báo giá.',
        'Thành thạo tin học văn phòng (Word, Excel, Powerpoint…), kỹ năng giao tiếp và phối hợp tốt.',
        'Ngoại ngữ: Tiếng Anh (tối thiểu kỹ năng đọc - viết).',
        'Cẩn thận, có trách nhiệm, chịu được áp lực công việc.'
      ],
      requirementsEn: [
        'Male/female with good appearance, graduated from university majoring in Business Administration, Economics, IT or related fields (priority for candidates with at least 1 year experience as project assistant, sales admin).',
        'Document and contract management skills; priority for candidates with experience in bidding/quotation documents.',
        'Proficient in office computing (Word, Excel, PowerPoint...), good communication and coordination skills.',
        'Foreign language: English (minimum reading - writing skills).',
        'Careful, responsible, able to work under pressure.'
      ],
      benefits: [
        'Hưởng đầy đủ các chế độ theo quy định của pháp luật (BHYT, BHXH, BHTN) và các chế độ phúc lợi theo nội quy, quy chế của Công ty (tham quan, nghỉ mát, Team Building, ...).',
        'Môi trường làm việc trẻ trung, năng động và chú trọng vào phát triển năng lực sự nghiệp.',
        'Cơ hội làm việc với đối tác là những ngân hàng lớn, tập đoàn lớn trong lĩnh vực tài chính.',
        'Cơ hội thăng tiến trong công việc.',
        'Xét lương định kỳ, thưởng theo hiệu quả công việc.',
        'Xét lương định kỳ: Chính sách xét tăng lương hàng năm dựa trên đánh giá năng lực và thành tích cá nhân.'
      ],
      benefitsEn: [
        'Full benefits according to legal regulations (health insurance, social insurance, unemployment insurance) and company welfare policies (travel, vacation, team building, ...).',
        'Young, dynamic working environment focused on career development.',
        'Opportunity to work with major banks and corporations in the financial sector.',
        'Promotion opportunities.',
        'Periodic salary review, bonuses based on work performance.',
        'Annual salary review policy based on individual capacity and achievement assessment.'
      ]
    }
  }
];

const Careers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const categories = [
    { key: 'all', label: isEn ? 'ALL' : 'TẤT CẢ' },
    { key: 'technology', label: isEn ? 'TECHNOLOGY' : 'KHỐI CÔNG NGHỆ' },
    { key: 'business', label: isEn ? 'BUSINESS' : 'KHỐI KINH DOANH' }
  ];

  const filteredPositions =
    activeCategory === 'all'
      ? positions
      : positions.filter(pos => pos.type === activeCategory);

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
            alt="News Hero Background"
            className="w-screen h-screen object-cover fixed"
          />
          <div className="fixed inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <div className="mt-16">
            <motion.h1
              className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isEn ? 'CAREERS' : 'TUYỂN DỤNG'}
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
                      en: 'Careers',
                      vi: 'Tuyển dụng'
                    }
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Main Content Section */}
        <div className="relative py-8 md:py-10 bg-white z-10 mt-12 md:mt-16">
          <div className="container mx-auto px-2 sm:px-4">
            {/* Intro Text */}
            <motion.div
              className="text-center max-w-2xl md:max-w-4xl mx-auto mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {isEn
                  ? "Discover exciting career opportunities at NetCorp. We always welcome talented and passionate candidates!"
                  : "Khám phá các vị trí tuyển dụng hấp dẫn tại NetCorp. Chúng tôi luôn chào đón những ứng viên tài năng và nhiệt huyết!"
                }
              </p>
            </motion.div>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`relative px-3 md:px-6 py-2 text-xs md:text-sm font-medium transition-colors
            ${activeCategory === category.key
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                  {activeCategory === category.key && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            {/* Position Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filteredPositions.map(pos => (
                <div
                  key={pos.id}
                  className="relative bg-white rounded-xl shadow border hover:shadow-lg transition-all duration-300 p-4 md:p-6 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/careers/${pos.slug}`)}
                >
                  {/* Logo/Image */}
                  <div className="flex items-start mb-3 md:mb-4">
                    <div className="flex-shrink-0 w-full h-auto rounded-lg bg-gray-50 flex items-center justify-center border mr-2 md:mr-4">
                      <img
                        src={pos.image}
                        alt={isEn ? pos.titleEn : pos.title}
                        className="w-20 h-20 md:w-28 md:h-28 object-contain"
                      />
                    </div>
                  </div>
                  {/* Info */}
                  <h3 className="text-base md:text-xl font-bold text-primary mb-1">
                    {isEn ? pos.titleEn : pos.title}
                  </h3>
                  <div className="mb-2 text-gray-700 text-xs md:text-sm">
                    {isEn ? pos.descriptionEn : pos.description}
                  </div>
                  <div className="text-gray-500 text-xs mb-2">
                    {isEn ? pos.locationEn : pos.location}
                  </div>
                  <div className="flex gap-2 mb-3 md:mb-4 flex-wrap">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                      {isEn ? 'Hanoi' : 'Hà Nội'}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                      {(() => {
                        const deadlineDate = new Date(
                          pos.deadline.split('/').reverse().join('-')
                        );
                        const today = new Date();
                        deadlineDate.setHours(0, 0, 0, 0);
                        today.setHours(0, 0, 0, 0);
                        const diff = Math.ceil(
                          (deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
                        );
                        if (diff < 0) {
                          return isEn ? 'Closed' : 'Đã hết hạn';
                        }
                        return isEn
                          ? `${diff} days left to apply`
                          : `Còn ${diff} ngày để ứng tuyển`;
                      })()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;