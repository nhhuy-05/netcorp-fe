import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Breadcrumb from './Breadcrumb';


type TabType = 'humanResource' | 'visionMission' | 'coreValues';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('humanResource');

  const tabContent = {
    humanResource: {
      en: "We are proud of our staffs, technology experts with experience accrued from hundreds of projects in nearly 20 years, many large customers have appreciated for our competence and professional qualifications. Our experts always try the best with the mission bringing Best Products – Best Solutions – Best Service as customer demand currently and in the future. We accompany closely with customers in building technology-oriented strategy, developing product, service and commitment to optimization more value for customer. Besides, with the expanding of business scope, we have been building the system of recruitment and professional training to meet the needs of Group as well as customers.",
      vi: "Chúng tôi tự hào với đội ngũ nhân viên và chuyên gia công nghệ có kinh nghiệm từ hàng trăm dự án trong gần 20 năm qua. Nhiều khách hàng lớn đã đánh giá cao năng lực và trình độ chuyên môn của chúng tôi. Các chuyên gia của chúng tôi luôn nỗ lực mang đến Sản phẩm – Giải pháp – Dịch vụ tốt nhất theo nhu cầu khách hàng hiện tại và tương lai.\n\nChúng tôi luôn đồng hành cùng khách hàng trong việc xây dựng chiến lược công nghệ, phát triển sản phẩm, dịch vụ và cam kết tối ưu hóa giá trị cho khách hàng. Với quy mô ngày càng mở rộng, chúng tôi đang xây dựng hệ thống tuyển dụng và đào tạo chuyên nghiệp để đáp ứng nhu cầu của doanh nghiệp và khách hàng.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    visionMission: {
      en: "Netcorp Corporation's vision is to become one of the leading solution supplier of ICT, Electronics, Industrial sector in Vietnam. We have been creating our own values by building a network among customers, partners and manufacturers as well as enhancing capabilities and setting higher and higher goals to achieve and satisfy customers.",
      vi: "Tầm nhìn của Netcorp Corporation là trở thành một trong những nhà cung cấp giải pháp hàng đầu trong lĩnh vực CNTT, Điện tử và Công nghiệp tại Việt Nam. Chúng tôi tạo nên giá trị riêng bằng cách xây dựng mạng lưới kết nối giữa khách hàng, đối tác và nhà sản xuất, đồng thời không ngừng nâng cao năng lực và đặt ra những mục tiêu cao hơn để đạt được sự hài lòng của khách hàng.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    coreValues: {
      en: "<strong>SERVE</strong> each customer like the only customer we have. Our customer-centric focus drives us to create innovative solutions that directly address customer needs.\n\n<strong>RECOGNIZE</strong> our people like our most valuable asset. We work with each other to enable development, by adopting a strong ethos of sharing experiences, team working, regular communications and consultation.\n\n<strong>PROVIDE</strong> an environment of integrity and honesty. We are open and fair in our approach in order to establish clear, professional and sustainable working relationships.\n\n<strong>KAIZEN</strong>, also known as continuous improvement is our survival motto. We constantly strive to do better, setting the high standard for ourselves and each other.",
      vi: "<strong>PHỤC VỤ</strong> mỗi khách hàng như khách hàng duy nhất của chúng tôi. Tập trung vào khách hàng thúc đẩy chúng tôi tạo ra các giải pháp sáng tạo đáp ứng trực tiếp nhu cầu của họ.\n\n<strong>CÔNG NHẬN</strong> nhân viên là tài sản quý giá nhất. Chúng tôi làm việc cùng nhau để phát triển, thông qua việc chia sẻ kinh nghiệm, làm việc nhóm, giao tiếp và tư vấn thường xuyên.\n\n<strong>TẠO LẬP</strong> môi trường chính trực và trung thực. Chúng tôi cởi mở và công bằng trong cách tiếp cận để xây dựng mối quan hệ làm việc rõ ràng, chuyên nghiệp và bền vững.\n\n<strong>CẢI TIẾN</strong> liên tục là phương châm sống còn của chúng tôi. Chúng tôi không ngừng phấn đấu để làm tốt hơn, đặt ra tiêu chuẩn cao cho bản thân và nhau.",
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
                  src="/image/LOGO.png"
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
                  <>CÔNG TY CỔ PHẦN <br/><span className="text-primary">NETCORP</span></>
                ) : (
                  <>NETCORP<br /><span className="text-primary">CORPORATION</span></>
                )}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {currentLanguage === 'vi' 
                  ? "Tập đoàn NETCORP bao gồm 2 công ty NetCorp và iERP"
                  : "NetCorp Corporation includes 2 companies NetCorp and iERP"}
              </p>
              <div className="grid grid-cols-1 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2">•</span> NETCORP
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentLanguage === 'vi' 
                      ? "Thành lập năm 2005, NETCORP cung cấp dịch vụ tổng thể, từ triển khai trung tâm dữ liệu, máy chủ, hệ thống mạng, tổng đài, hệ thống bảo mật, hệ thống điện, ảo hoá, dịch vụ quản lý và bảo hành, bảo trì... Tới nay, NETCORP đã có những thành tựu đáng kể trong ngành công nghệ thông tin, góp phần trong sự phát triển chung của ngành."
                      : "Established in 2005, NETCORP provides total services, from deploying data centers, servers, network systems, switchboards, security systems, power systems, virtualization, management services and warranty, maintenance... Up to now, NETCORP has made remarkable achievements in the information technology industry, contributing to the overall development of the industry."}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2">•</span> IERP
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentLanguage === 'vi'
                      ? "Năm 2013, IERP ra đời, tập trung vào các giải pháp tổng thể quản trị (ERP - Enterprise Resource Planning) và BI (Business Intelligence) cho các doanh nghiệp và các tổ chức. Đặc biệt, IERP là chuyên gia về tư vấn giải pháp, giám sát và triển khai các ứng dụng quản trị cho các doanh nghiệp và các tổ chức sử dụng công nghệ nền tảng của hãng Oracle."
                      : "In 2013, IERP was born, focusing on total management solutions (ERP - Enterprise Resource Planning) and BI (Business Intelligence) for businesses and organizations. In particular, IERP is an expert in consulting solutions, monitoring and deploying administrative applications for businesses and organizations using Oracle's platform technology."}
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71l-4.29 4.29-1.71-1.71a.996.996 0 1 0-1.41 1.41l2.41 2.41c.39.39 1.02.39 1.41 0l5-5a.996.996 0 1 0-1.41-1.41z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            DO THE <span className="text-primary">BEST</span><br />
            FROM BEGINNING
          </h2>
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
                    className={`px-4 md:px-8 lg:px-12 py-3 border-b-2 transition-all uppercase text-xl font-bold flex flex-col items-center justify-end min-w-[180px] md:min-w-[200px] lg:min-w-[220px] ${
                      activeTab === 'humanResource' 
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
                    className={`px-4 md:px-8 lg:px-12 py-3 border-b-2 transition-all uppercase text-xl font-bold flex flex-col items-center justify-end min-w-[160px] md:min-w-[180px] whitespace-nowrap ${
                      activeTab === 'visionMission' 
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
                    className={`px-4 md:px-8 lg:px-12 py-3 border-b-2 transition-all uppercase text-xl font-bold flex flex-col items-center justify-end min-w-[160px] md:min-w-[180px] ${
                      activeTab === 'coreValues' 
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
                    className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-6"
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