import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Breadcrumb from './Breadcrumb';


type TabType = 'humanResource' | 'visionMission' | 'coreValues';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('humanResource');

  const tabContent = {
    humanResource: {
      en: "At Netcorp, we take pride in our high-caliber workforce — a team of technology experts with many years of experience both domestically and internationally, accumulated through hundreds of real-world projects over nearly two decades. With extensive expertise, dedication, and creativity, the Netcorp team has consistently been highly regarded by major clients for their capabilities and work efficiency.\n\nWe not only deliver outstanding technology products, solutions, and services, but also accompany our clients in shaping their strategic technology direction, developing products, and optimizing operations. In addition, to meet the company’s continuous growth and evolving market demands, Netcorp places strong emphasis on building a professional recruitment and training system.\n\nWe are committed to fostering a modern working environment where every individual can fully unleash their potential, continuously update their knowledge, and contribute to the collective development of the organization.",
      vi: "Tại Netcorp, chúng tôi luôn tự hào về đội ngũ nhân sự chất lượng cao – những chuyên gia công nghệ có nhiều năm kinh nghiệm trong và ngoài nước, tích lũy từ hàng trăm dự án thực tế trong gần 20 năm qua. Với sự chuyên môn sâu rộng, tận tâm và sáng tạo, đội ngũ Netcorp đã và đang được nhiều khách hàng lớn đánh giá cao về năng lực và hiệu quả làm việc.\n\nChúng tôi không chỉ mang đến các sản phẩm, giải pháp và dịch vụ công nghệ vượt trội mà còn đồng hành cùng khách hàng trong việc xây dựng định hướng chiến lược công nghệ, phát triển sản phẩm và tối ưu hóa vận hành. Bên cạnh đó, để đáp ứng sự mở rộng không ngừng của doanh nghiệp và nhu cầu thị trường, Netcorp chú trọng phát triển hệ thống tuyển dụng và đào tạo chuyên nghiệp.\n\nChúng tôi cam kết xây dựng một môi trường làm việc hiện đại, nơi mỗi cá nhân có thể phát huy tối đa tiềm năng, liên tục cập nhật kiến thức mới và đóng góp vào sự phát triển chung của tổ chức.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    visionMission: {
      en: "With the motto \"Smart Partner\", Netcorp is committed to delivering cutting-edge technology solutions, accompanying businesses in their digital transformation journey, enhancing operational efficiency, and creating sustainable value. We continuously innovate to provide the most optimal products and services that meet current demands while anticipating future needs.\n\nNetcorp aspires to become a leading technology corporation in Vietnam. We are pioneers in providing modern technology solutions that help shape a digital future for enterprises. With an unwavering drive for innovation, Netcorp aims to expand its technology ecosystem, build a solid foundation to meet the ever-growing demands of the market, and create a distinctive edge through creativity and high expertise.",
      vi: "Với phương châm \"Smart Partner\", Netcorp cam kết cung cấp các giải pháp công nghệ tiên tiến, đồng hành cùng doanh nghiệp trong quá trình chuyển đổi số, nâng cao hiệu suất vận hành và tạo ra giá trị bền vững. Chúng tôi không ngừng đổi mới, mang đến những sản phẩm và dịch vụ tối ưu nhất, đáp ứng nhu cầu hiện tại và định hướng tương lai của khách hàng.\n\nNetcorp hướng đến trở thành tập đoàn công nghệ hàng đầu tại Việt Nam. Chúng tôi tiên phong trong việc cung cấp các giải pháp công nghệ hiện đại, góp phần định hình tương lai số hóa cho doanh nghiệp. Với khát vọng đổi mới không ngừng, Netcorp đặt mục tiêu mở rộng hệ sinh thái công nghệ, xây dựng nền tảng vững chắc để đáp ứng nhu cầu ngày càng cao của thị trường, đồng thời tạo ra sự khác biệt bằng sự sáng tạo và chuyên môn cao.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    coreValues: {
      en: "<strong>Customer-Centric:</strong> We treat every customer as if they were our only one. By understanding their needs and expectations, we deliver the most innovative, effective, and optimized solutions. \n\n<strong>People as Our Greatest Asset:</strong> We see our people as the solid foundation for growth. Each individual is encouraged to learn, share experiences, and support one another to advance together. Teamwork and unity are core values we deeply cherish. \n\n<strong>Transparency & Professionalism:</strong> We foster a modern, honest, and transparent working environment. Every individual has the opportunity to grow within a fair ecosystem where respect and collaboration are at the heart of everything we do. \n\n<strong>Relentless Innovation:</strong> Innovation is our guiding principle in everything we do. We constantly seek better approaches, set higher standards, and strive for continuous growth to create lasting value for both our customers and ourselves.",
      vi: "<strong>Khách hàng là trọng tâm:</strong> Chúng tôi chăm sóc từng khách hàng như thể họ là khách hàng duy nhất. Bằng cách thấu hiểu nhu cầu và mong muốn của khách hàng, chúng tôi mang đến những giải pháp sáng tạo, hiệu quả và tối ưu nhất. \n\n<strong>Nhân sự là tài sản quý giá:</strong> Chúng tôi coi nhân sự là nền tảng vững chắc để phát triển. Mỗi cá nhân được khuyến khích học hỏi, chia sẻ kinh nghiệm và hỗ trợ lẫn nhau để cùng tiến bộ. Văn hóa làm việc nhóm và tinh thần đoàn kết là điều mà chúng tôi luôn trân trọng. \n\n<strong>Minh bạch và chuyên nghiệp:</strong> Chúng tôi tạo dựng một môi trường làm việc hiện đại, trung thực và minh bạch. Mọi cá nhân đều có cơ hội phát triển trong một hệ sinh thái công bằng, nơi sự tôn trọng và hợp tác là cốt lõi. \n\n<strong>Không ngừng đổi mới:</strong> Đổi mới là kim chỉ nam trong mọi hoạt động của chúng tôi. Chúng tôi luôn tìm kiếm những cách làm tốt hơn, đặt ra những tiêu chuẩn cao hơn và không ngừng phát triển để tạo ra những giá trị bền vững cho khách hàng và chính mình.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  };

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getHumanResourceText = () => {
    return currentLanguage === 'vi' ? tabContent.humanResource.vi : tabContent.humanResource.en;
  };

  const getVisionMissionText = () => {
    return currentLanguage === 'vi' ? tabContent.visionMission.vi : tabContent.visionMission.en;
  };

  const getCoreValuesText = () => {
    return currentLanguage === 'vi' ? tabContent.coreValues.vi : tabContent.coreValues.en;
  };

  const getActiveTabImage = () => {
    return tabContent[activeTab].image;
  };

  return (
    <section id="about" className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            alt="About Hero Background"
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
              {currentLanguage === 'vi' ? 'VỀ CHÚNG TÔI' : 'ABOUT US'}
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
                      en: 'About',
                      vi: 'Về chúng tôi'
                    }
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* NetCorp Content */}
      <div className="relative py-20 bg-white z-10 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[3/2]">
                <img
                  src="/image/LOGO_4-3.png"
                  alt="NetCorp Team"
                  className="w-full h-full object-contain"
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-0 border-l-[120px] border-t-[120px] border-t-transparent"
                  style={{ borderLeftColor: 'var(--primary)' }}
                ></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {currentLanguage === 'vi' ? (
                  <>
                    <span className="text-3xl md:text-4xl font-semibold">CÔNG TY CỔ PHẦN TẬP ĐOÀN</span>
                    <br />
                    <span className="text-primary text-4xl md:text-5xl font-bold">NETCORP</span>
                  </>
                ) : (
                  <>
                    <span className="text-primary text-4xl md:text-5xl font-bold uppercase">NETCORP</span>
                    <br />
                    <span className="text-3xl md:text-4xl font-semibold uppercase">Group Joint Stock Company</span>
                  </>
                )}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line text-justify">
                    {currentLanguage === 'vi'
                      ? `Được thành lập vào năm 2005, với gần hai thập kỷ phát triển, Netcorp đã không ngừng đổi mới và mở rộng để mang đến những giải pháp công nghệ toàn diện, đáp ứng nhu cầu đa dạng của khách hàng.

                      Chúng tôi đã tập trung cung cấp dịch vụ triển khai trung tâm dữ liệu, máy chủ, hệ thống mạng, tổng đài, bảo mật, hệ thống điện, ảo hóa, cũng như dịch vụ quản lý, bảo hành và bảo trì hệ thống. Nhờ vào sự cam kết về chất lượng và uy tín, chúng tôi đã đạt được nhiều thành tựu đáng kể, trở thành đối tác tin cậy của nhiều tổ chức lớn trong các lĩnh vực chính phủ, ngân hàng, tài chính công và tổng công ty nhà nước.

                      Năm 2013, Netcorp mở rộng lĩnh vực hoạt động với sự ra đời của IERP – đơn vị chuyên sâu về các giải pháp quản trị tổng thể (ERP - Enterprise Resource Planning) và phân tích dữ liệu thông minh (BI - Business Intelligence). IERP không chỉ cung cấp phần mềm mà còn đóng vai trò là đối tác chiến lược trong việc tư vấn, giám sát và triển khai các hệ thống quản trị tiên tiến cho doanh nghiệp và tổ chức. Đặc biệt, với thế mạnh ứng dụng công nghệ nền tảng của Oracle, IERP giúp doanh nghiệp tối ưu hóa vận hành, nâng cao hiệu quả kinh doanh và phát triển bền vững.`
                      : `Founded in 2005, with nearly two decades of growth, Netcorp has continuously innovated and expanded to deliver comprehensive technology solutions that meet the diverse needs of our clients.

                      We have focused on providing services in data center deployment, servers, networking systems, cybersecurity, electrical systems, virtualization, as well as system management, warranty, and maintenance services. Thanks to our strong commitment to quality and credibility, we have achieved remarkable milestones and become a trusted partner of many major organizations in government, banking, public finance, and state-owned corporations.

                      In 2013, Netcorp expanded its scope of operations with the establishment of IERP — a specialized unit in Enterprise Resource Planning (ERP) solutions and Business Intelligence (BI) analytics. IERP not only delivers software but also acts as a strategic partner in consulting, supervising, and implementing advanced management systems for enterprises and organizations. Notably, with its expertise in applying Oracle-based technologies, IERP helps businesses optimize operations, enhance performance, and achieve sustainable growth.`}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Motivational Banner */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Team Background"
            className="w-full h-full object-cover fixed"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71l-4.29 4.29-1.71-1.71a.996.996 0 1 0-1.41 1.41l2.41 2.41c.39.39 1.02.39 1.41 0l5-5a.996.996 0 1 0-1.41-1.41z" />
              </svg>
            </div>
          </div>
          {
            currentLanguage === 'vi' ? (
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                DO THE <span className="text-primary">BEST</span><br />
                FROM BEGINNING
              </h2>
            ) : (
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                DO THE <span className="text-primary">BEST</span><br />
                FROM BEGINNING
              </h2>
            )
          }

        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative py-20 bg-gray-50 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <div className="flex space-x-4 md:space-x-6 lg:space-x-8 mb-8">
                <div className="h-24 flex items-end">
                  <button
                    className={`px-4 md:px-8 lg:px-12 py-3 border-b-2 transition-all uppercase text-xl font-bold flex flex-col items-center justify-end min-w-[180px] md:min-w-[200px] lg:min-w-[220px] ${activeTab === 'humanResource'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-transparent hover:border-primary hover:text-primary'
                      }`}
                    onClick={() => setActiveTab('humanResource')}
                  >
                    {currentLanguage === 'vi'
                      ? <div className="flex flex-col items-center gap-1">
                        <div>NGUỒN</div>
                        <div>NHÂN LỰC</div>
                      </div>
                      : <div className="flex flex-col items-center gap-1">
                        <div>HUMAN</div>
                        <div>RESOURCE</div>
                      </div>
                    }
                  </button>
                </div>
                <div className="h-24 flex items-end">
                  <button
                    className={`px-4 md:px-8 lg:px-12 py-3 border-b-2 transition-all uppercase text-xl font-bold flex flex-col items-center justify-end min-w-[160px] md:min-w-[180px] whitespace-nowrap ${activeTab === 'visionMission'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-transparent hover:border-primary hover:text-primary'
                      }`}
                    onClick={() => setActiveTab('visionMission')}
                  >
                    {currentLanguage === 'vi'
                      ? <div className="flex flex-col items-center gap-1">
                        <div>TẦM NHÌN</div>
                        <div>SỨ MỆNH</div>
                      </div>
                      : <div className="flex flex-col items-center gap-1">
                        <div>VISION</div>
                        <div>MISSION</div>
                      </div>
                    }
                  </button>
                </div>
                <div className="h-24 flex items-end">
                  <button
                    className={`px-4 md:px-8 lg:px-12 py-3 border-b-2 transition-all uppercase text-xl font-bold flex flex-col items-center justify-end min-w-[160px] md:min-w-[180px] ${activeTab === 'coreValues'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-transparent hover:border-primary hover:text-primary'
                      }`}
                    onClick={() => setActiveTab('coreValues')}
                  >
                    {currentLanguage === 'vi'
                      ? <div className="flex flex-col items-center gap-1">
                        <div>GIÁ TRỊ</div>
                        <div>CỐT LÕI</div>
                      </div>
                      : <div className="flex flex-col items-center gap-1">
                        <div>CORE</div>
                        <div>VALUES</div>
                      </div>
                    }
                  </button>
                </div>
              </div>

              <div className="h-[300px] overflow-y-auto">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                  className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-6 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: activeTab === 'humanResource'
                    ? getHumanResourceText()
                    : activeTab === 'visionMission'
                      ? getVisionMissionText()
                      : getCoreValuesText()
                  }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center items-end">
              <motion.div
                key={`image-${activeTab}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full flex justify-end pr-0 lg:pr-0"
              >
                <div className="rounded-full overflow-hidden h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shadow-xl">
                  <img
                    src={getActiveTabImage()}
                    alt={`${activeTab} Image`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;