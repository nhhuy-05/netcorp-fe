import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiUser, FiTag } from 'react-icons/fi';
import Breadcrumb from '../ui/Breadcrumb';

interface BlogPost {
  id: number;
  title: {
    en: string;
    vi: string;
  };
  category: string;
  excerpt: {
    en: string;
    vi: string;
  };
  content: {
    en: string;
    vi: string;
  };
  image: string;
  date: string;
  author: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Mock blog post data - in a real app, this would come from an API
  const getBlogPost = (id: number): BlogPost => {
    const blogPosts: { [key: number]: BlogPost } = {
      1: {
        id: 1,
        title: {
          en: "Điều phối bảo mật mạng với Tufin Orchestration Suite",
          vi: "Điều phối bảo mật mạng với Tufin Orchestration Suite"
        },
        category: "security",
        excerpt: {
          en: "Complete solution to automatically design, provision, analyze and test firewall security policy changes from application to network",
          vi: "Giải pháp hoàn chỉnh để tự động thiết kế, cung cấp, phân tích và kiểm tra các thay đổi chính sách bảo mật tường lửa từ ứng dụng cho đến mạng"
        },
        content: {
          en: `Tufin Orchestration Suite (TOS) is a centralized firewall security management layer that allows you to define and deploy comprehensive security policies and quickly automate network changes while maintaining compliance with those policies.

          ## Policy-Focused Approach to Security Management

          ### Centralized Security Policy
          Define and enforce central security policies to control who can talk to whom and what can talk to what on the combined network.

          ### Automated Network Changes
          Leverage one of the industry's most sophisticated network orchestration tools to automatically design and provision policy changes on demand across the entire network, including private and public cloud infrastructure.

          ### Data Analysis for Security and Compliance
          Use a data-driven approach to analyze firewall, router, switch, and cloud platform configurations. Identify risks, misconfigurations, and unused rules that can be removed.

          ### Open and Extensible Platform
          Integrate Tufin Orchestration Suite with multiple platforms and existing security and IT operations tools to ensure a single interface for controlling network security changes.

          ## Tufin Orchestration Suite for Today's Enterprise Networks

          ### SecureTrack+
          Firewall and security policy management: Accelerate your security policy journey with SecureTrack+
          • Centralized network security policy management, risk reduction and compliance monitoring on firewalls, NGFW, routers, switches, SDN and hybrid cloud
          • Automated policy optimization
          • Prioritize and mitigate vulnerabilities

          ### SecureChange+
          Automate network security changes: Enhance visibility and automate routine tasks with SecureChange+
          • Achieve continuous compliance
          • Reduce network change SLA to 90% with network change design and rule lifecycle management
          • Identify dangerous attack vectors and detect lateral movement
          • Troubleshoot connectivity issues on hybrid cloud

          ### Enterprise
          Zero-Trust network security at scale: Enhance your network security operations with Enterprise
          • Achieve touchless automation through network access change provisioning
          • Deploy applications faster through application connection management
          • Minimize downtime and data loss with high availability and integrated redundancy

          ## Get the visibility and control you need to protect your enterprise

          Only Tufin provides unified security policy and automation, from on-premises to cloud, across NetSec and DevOps.

          Source: https://www.tufin.com/blog/tufin-firewall-expert-tip-8-how-to-perform-a-firewall-audit`,
          vi: `Tufin Orchestration Suite (TOS) là lớp quản lý bảo mật tường lửa tập trung cho phép bạn xác định và triển khai chính sách bảo mật toàn diện và tự động hóa nhanh chóng các thay đổi mạng trong khi vẫn tuân thủ chính sách đó.

          ## Phương pháp tiếp cận tập trung vào chính sách tường lửa để quản lý bảo mật

          ### Tự động thay đổi mạng
          Tận dụng một trong những công cụ cấu trúc mạng tinh vi nhất trong ngành để tự động thiết kế và cung cấp các thay đổi chính sách theo yêu cầu trên toàn bộ mạng, bao gồm cơ sở hạ tầng đám mây riêng và công cộng.

          ### Phân tích dữ liệu để đảm bảo an ninh và tuân thủ
          Sử dụng phương pháp tiếp cận dựa trên dữ liệu để phân tích cấu hình tường lửa, bộ định tuyến, bộ chuyển mạch và nền tảng đám mây. Xác định rủi ro, cấu hình sai và các quy tắc không sử dụng có thể loại bỏ.

          ### Nền tảng mở và có thể mở rộng
          Tích hợp Tufin Orchestration Suite với nhiều nền tảng và các công cụ bảo mật và vận hành CNTT hiện có để đảm bảo có một giao diện duy nhất để kiểm soát các thay đổi về bảo mật mạng.

          ## Bộ Tufin Orchestration dành cho mạng doanh nghiệp ngày nay

          ### Tài nguyên quản lý tường lửa liên quan

          #### Nghiên cứu trường hợp: Tối ưu hóa tường lửa
          **Tự động thay đổi bảo mật mạng**
          SwissTXT nâng cao khả năng hiển thị mạng và hiệu quả hoạt động thông qua SecureTrack+ và SecureChange+ của Tufin

          #### Nghiên cứu trường hợp: Tự động thay đổi bảo mật mạng
          Johnson Controls Giảm Bề Mặt Tấn Công, Tăng Tốc Quy Trình NetSec và Nâng Cao Khả Năng Hiển Thị với Tufin

          #### Thực hành tốt nhất về tường lửa
          Cách thực hiện kiểm tra tường lửa – Danh sách kiểm tra đánh giá quy tắc chính sách

          ## Tufin bảo vệ các mạng lớn nhất thế giới

          Có được khả năng hiển thị toàn diện, tự động hóa quản lý chính sách và giảm thiểu rủi ro trên toàn bộ mạng kết hợp toàn cầu của bạn – từ cơ sở hạ tầng tường lửa doanh nghiệp thế hệ tiếp theo đến các công nghệ đám mây hiện đại – mà không ảnh hưởng đến tốc độ hoặc tính linh hoạt.

          ### SecureTrack+
          Quản lý tường lửa và chính sách bảo mật: Thúc đẩy hành trình chính sách bảo mật của bạn với SecureTrack+
          • Tập trung quản lý chính sách bảo mật mạng, giảm thiểu rủi ro và giám sát tuân thủ trên tường lửa, NGFW, bộ định tuyến, bộ chuyển mạch, SDN và đám mây lai
          • Tự động hóa tối ưu hóa chính sách
          • Ưu tiên và giảm thiểu lỗ hổng

          ### SecureChange+
          Tự động hóa thay đổi bảo mật mạng: Tăng cường khả năng hiển thị và tự động hóa các tác vụ thông thường với SecureChange+
          • Đạt được sự tuân thủ liên tục
          • Giảm SLA thay đổi mạng tới 90% với thiết kế thay đổi mạng và quản lý vòng đời quy tắc
          • Xác định các hướng tấn công nguy hiểm và phát hiện chuyển động ngang
          • Khắc phục sự cố kết nối trên đám mây lai

          ### Enterprise
          Bảo mật mạng Zero-Trust ở quy mô lớn: Tăng cường hoạt động bảo mật mạng của bạn với Enterprise
          • Đạt được tự động hóa không cần chạm thông qua việc cung cấp các thay đổi về quyền truy cập mạng
          • Triển khai ứng dụng nhanh hơn thông qua quản lý kết nối ứng dụng
          • Giảm thiểu thời gian chết và mất dữ liệu với tính năng sẵn sàng cao và dự phòng tích hợp

          ## Nhận được khả năng hiển thị và kiểm soát bạn cần để bảo vệ doanh nghiệp của mình

          Chỉ có Tufin cung cấp tính năng tự động hóa và chính sách bảo mật thống nhất, từ tại chỗ đến đám mây, trên NetSec và DevOps.

          Trích dẫn từ tài liệu: https://www.tufin.com/blog/tufin-firewall-expert-tip-8-how-to-perform-a-firewall-audit`
        },
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        date: "2024-01-16",
        author: "NetCorp Team",
        tags: ["Tufin", "Network Security", "Firewall Management", "Automation"]
      },
      2: {
        id: 2,
        title: {
          en: "Các Loại Firewall Hiện Nay Có Làm Khó 1 Số Hacker",
          vi: "Các Loại Firewall Hiện Nay Có Làm Khó 1 Số Hacker"
        },
        category: "security",
        excerpt: {
          en: "Exploring the evolution of firewall technology and its impact on cybersecurity",
          vi: "Khám phá sự phát triển của công nghệ tường lửa và tác động của nó đến bảo mật mạng"
        },
        content: {
          en: `In today's security world, you might have heard about how many types of firewalls exist and their applications. Firewalls can be software or hardware. Software firewalls are programs installed on each computer that regulate network traffic through applications and port numbers.

          Meanwhile, hardware firewalls are devices set up between the gateway and your network. Additionally, firewalls provided by virtualization solutions are called virtual firewalls, and those provided by the cloud are cloud firewalls.

          If you look back at the development process of information technology systems and you're someone who pays attention to their development process, you also know about the types of firewalls and firewall systems that were created to serve the things that were born.

          Initially, in the beginning, we had physical information technology systems (Physical Systems), then along with the continuous research of professors and doctors from Vietnam and internationally, virtual information technology systems with global virtualization models (Virtual System) were created.

          Along with the nature of exploring strange things and liking to conquer new things of engineers, professors, and doctors at the forefront of technology around the world. So they began researching how to store data in one place and retrieve it for use in another place without fear of loss when incidents occur.

          Thus, the Cloud system was born, which has been famous for many years up to the present with many incredibly powerful services that have appeared on On-Premise from ancient to modern times.

          But the nature of engineers, professors, and doctors is people who like to think and explore new things to optimize the operation of systems and want to find the most cutting-edge technologies to be worthy of their academic titles and degrees.

          So engineers, professors, and doctors from countries around the world have not sat still watching life, but instead started researching day and night and produced an incredibly powerful system. That is the quantum computer system and using AI technology to build infrastructures that can be transformed to be smarter and far surpass the cloud.

          Following that, to manage and operate optimally with such cutting-edge information technology systems and to fight against hackers who train day and night, forgetting to eat and sleep to upgrade their level, not because they can't DDoS due to helplessness. The current types of firewalls have also developed by leaps and bounds and produced products with incredibly powerful capabilities.

          ## Current Types of Firewalls

          ### 1. Packet Filtering
          Packet filtering firewalls, one of the firewall types that control data flow to and from the network. It allows or blocks data transmission based on the source address of the packet, the destination address of the packet, the application protocols for data transmission, etc.

          ### 2. Proxy Service Firewall
          These types of firewalls protect the network by filtering messages at the application layer. For a specific application, the proxy firewall acts as a gateway from one network to another.

          ### 3. Stateful Inspection
          Such firewalls allow or block network traffic based on state, port, and protocol. Here, it decides filtering based on rules and context defined by the administrator.

          ### 4. Unified Threat Management (UTM) Firewall
          UTM devices, one of the current firewall types, typically integrate the capabilities of stateful inspection firewalls, intrusion prevention, and antivirus in a loosely coupled manner. It can include additional services and in many cases, cloud management. UTM is designed to be simple and easy to use.

          ### 5. Next-Generation Firewall
          According to Gartner, Inc.'s definition, next-generation firewalls are deep packet inspection firewalls that add application-layer inspection capabilities, intrusion prevention, and information from outside the firewall to pass inspection and block ports and protocols.

          ### 6. Threat-Focused NGFW
          NGFW, one of the current firewall types that is gradually covering the market with expensive costs. These firewalls provide advanced threat detection and mitigation capabilities. With correlation between network and endpoint events, they can detect evasive or suspicious behavior.

          ### 7. AI Firewall
          Artificial Intelligence (AI) firewalls, a next-generation product of next-generation firewalls (NGFW), use intelligent detection technologies to improve the ability to detect advanced threats and unknown threats.
          AI firewalls use intelligent detection tools to train threat detection models based on large patterns and continuously optimize models based on real-time traffic data, improving threat detection capabilities.

          Source: https://sspit.vn/cac-loai-firewall-hien-nay-co-lam-kho-hacker/`,
          vi: `Trong thế giới bảo mật hiện nay thì chắc bạn cũng đôi lúc nghe qua có bao nhiêu loại firewall và những ứng dụng của nó nhỉ. Tường lửa có thể là phần mềm hoặc phần cứng. Tường lửa phần mềm là các chương trình được cài đặt trên mỗi máy tính và chúng điều chỉnh lưu lượng mạng thông qua các ứng dụng và số cổng.

          Trong khi đó, tường lửa phần cứng là thiết bị được thiết lập giữa cổng và mạng của bạn. Ngoài ra, bạn gọi tường lửa do giải pháp ảo hóa thì là tường lửa ảo hóa và do đám mây cung cấp là tường lửa đám mây.

          Nếu nhìn lại quá trình phát triển của hệ thống công nghệ thông tin và bạn là người chú ý đến quy trình phát triển của nó thì bạn cũng biết được các loại firewall và hệ thống firewall sản sinh ra để phục vụ những thứ được sinh ra.

          Ban đầu, khai thiên lập địa chúng ta có hệ thống công nghệ thông tin vật lý(Physical Systems), sau đó cùng với sự nghiên cứu không ngừng nghỉ của các giáo sư, tiến sĩ của Việt Nam và Quốc Tế đã sản sinh ra được các hệ thống công nghệ thông tin với mô hình ảo hóa toàn cầu(Virtual System).

          Cùng với bản chất hay khám phá điều lạ và thích chinh phục những điều mới lạ của các vị kỹ sư, giáo sư, tiến sĩ đầu nghành công nghệ khắp nơi trên thế giới. Nên họ bắt tay vào nghiên cứu, làm thế nào lưu trữ dữ liệu ở một nơi mà lấy ra sài ở nơi khác và không sợ mất khi có biến cố ập đến.

          Thể là sản sinh ra hệ thống Cloud đang nổi tiếng nhiều năm về trước cho tới hiện nay với nhiều services vô cùng ghê gớm đã xuất hiện trên On-Premise từ cổ chí kim.

          Nhưng bản chất của các kỹ sư, giáo sư, tiến sĩ là những người thích suy nghĩ hay tìm tòi sự mới lạ để tối ưu hoạt động các hệ thống và muốn tìm ra những công nghệ tối tân nhất để xứng danh với học hàm học vị của mình.

          Thế nên các kỹ sư, giáo sư, tiến sĩ các nước trên thế giới đã không chịu ngồi yên ngắm nhìn cuộc sống, mà lại bắt tay vào nghiên cứu ngày đêm và cho ra được hệ thống vô cùng ghê gớm. Đó là hệ thống máy tính lượng tử và sử dụng công nghệ AI để xây dựng những hạ tầng có thể xoay chuyển được càng khôn và vượt xa đám mây.

          Kéo theo đó để quản lý cũng như hoạt động được tối ưu cùng những hệ thống công nghệ thông tin tối tân như vậy và chống lại những hacker ngày đêm khổ luyện quên ăn mất ngủ để nâng cấp level của mình, mà không phải ddos vì bất lực. Thì các loại firewall hiện nay cũng phát triển vượt bật và cho ra những sản phẩm có sức mạnh vô cùng mạnh mẽ.

          ## Các Loại Firewall Hiện Nay

          ### 1. Packet Filtering
          Tường lửa lọc gói một trong các loại firewall điều khiển luồng dữ liệu đến và đi từ mạng. Nó cho phép hoặc chặn việc truyền dữ liệu dựa trên địa chỉ nguồn của gói, địa chỉ đích của gói, các giao thức ứng dụng để truyền dữ liệu, v.v…

          ### 2. Proxy Service Firewall
          Các loại tường lửa này bảo vệ mạng bằng cách lọc các thông báo ở lớp ứng dụng. Đối với một ứng dụng cụ thể, tường lửa proxy đóng vai trò là cổng từ mạng này sang mạng khác.

          ### 3. Stateful Inspection
          Các loại tường lửa như vậy cho phép hoặc chặn lưu lượng mạng dựa trên trạng thái, cổng và giao thức. Ở đây, nó quyết định lọc dựa trên các quy tắc và ngữ cảnh do quản trị viên xác định.

          ### 4. Unified Threat Management (UTM) Firewall
          Thiết bị UTM một trong các loại firewall hiện nay thường tích hợp các khả năng của tường lửa kiểm tra trạng thái, ngăn chặn xâm nhập và chống vi-rút theo cách được liên kết lỏng lẻo. Nó có thể bao gồm các dịch vụ bổ sung và trong nhiều trường hợp, quản lý đám mây. UTM được thiết kế đơn giản và dễ sử dụng.

          ### 5. Next-Generation Firewall
          Theo định nghĩa của Gartner, Inc., các loại tường lửa thế hệ tiếp theo là tường lửa kiểm tra gói sâu, bổ sung thêm tính năng kiểm tra cấp ứng dụng, ngăn chặn xâm nhập và thông tin từ bên ngoài tường lửa để vượt qua kiểm tra và chặn cổng, giao thức.

          ### 6. Threat-Focused NGFW
          NGFW một trong những loại firewall hiện nay đang dần phủ sóng thị trường với chi phí đắt đỏ. Các loại tường lửa này cung cấp khả năng phát hiện và giảm thiểu mối đe dọa nâng cao. Với sự tương quan giữa mạng và sự kiện điểm cuối, chúng có thể phát hiện hành vi trốn tránh hoặc đáng ngờ.

          ### 7. AI Firewall
          Tường lửa trí tuệ nhân tạo (AI), một sản phẩm thế hệ tiếp theo của tường lửa thế hệ tiếp theo (NGFW), sử dụng các công nghệ phát hiện thông minh để cải thiện khả năng phát hiện các mối đe dọa tiên tiến và các mối đe dọa chưa biết.
          Tường lửa AI sử dụng công cụ phát hiện thông minh để đào tạo các mô hình phát hiện mối đe dọa dựa trên các mẫu lớn và liên tục tối ưu hóa các mô hình dựa trên dữ liệu lưu lượng truy cập thời gian thực, cải thiện khả năng phát hiện mối đe dọa.

          Trích dẫn từ tài liệu: https://sspit.vn/cac-loai-firewall-hien-nay-co-lam-kho-hacker/`
        },
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        date: "2024-01-15",
        author: "NetCorp Team",
        tags: ["Firewall", "Cybersecurity", "Network Security", "Technology"]
      }
    };

    return blogPosts[id] || blogPosts[1]; // Default to first post if ID not found
  };

  const blogPost = getBlogPost(parseInt(id || '1'));

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
      industry: { en: 'Industry', vi: 'Ngành Nghề' }
    };
    return categoryMap[category] || { en: category, vi: category };
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
                    name: currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/news')}
            className="flex items-center text-primary hover:text-primary-dark transition-colors mb-8 group"
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
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentLanguage === 'vi' 
                  ? getCategoryLabel(blogPost.category).vi 
                  : getCategoryLabel(blogPost.category).en}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
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
            <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              {currentLanguage === 'vi' ? blogPost.excerpt.vi : blogPost.excerpt.en}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <FiTag className="text-gray-500" />
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
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
              {/* Introduction with Image */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg leading-relaxed">
                    {currentLanguage === 'vi' 
                      ? blogPost.content.vi.split('\n\n')[0] 
                      : blogPost.content.en.split('\n\n')[0]}
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Cybersecurity Concept"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Evolution of IT Systems */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {currentLanguage === 'vi' ? 'Sự Phát Triển Của Hệ Thống CNTT' : 'Evolution of IT Systems'}
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {currentLanguage === 'vi' ? 'Hệ Thống Vật Lý' : 'Physical Systems'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {currentLanguage === 'vi' ? 'Hệ Thống Ảo Hóa' : 'Virtual Systems'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {currentLanguage === 'vi' ? 'Hệ Thống Đám Mây' : 'Cloud Systems'}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {currentLanguage === 'vi' 
                    ? blogPost.content.vi.split('\n\n')[1] 
                    : blogPost.content.en.split('\n\n')[1]}
                </p>
              </div>

              {/* Cloud and AI Systems */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                    alt="Cloud Computing"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg leading-relaxed">
                    {currentLanguage === 'vi' 
                      ? blogPost.content.vi.split('\n\n')[2] 
                      : blogPost.content.en.split('\n\n')[2]}
                  </p>
                </div>
              </div>

              {/* Firewall Types Section */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {currentLanguage === 'vi' ? 'Các Loại Firewall Hiện Nay' : 'Current Types of Firewalls'}
                </h2>
                
                {/* Firewall Type 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Packet Filtering</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentLanguage === 'vi' 
                          ? 'Tường lửa lọc gói một trong các loại firewall điều khiển luồng dữ liệu đến và đi từ mạng. Nó cho phép hoặc chặn việc truyền dữ liệu dựa trên địa chỉ nguồn của gói, địa chỉ đích của gói, các giao thức ứng dụng để truyền dữ liệu, v.v…'
                          : 'Packet filtering firewalls, one of the firewall types that control data flow to and from the network. It allows or blocks data transmission based on the source address of the packet, the destination address of the packet, the application protocols for data transmission, etc.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firewall Type 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Proxy Service Firewall</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentLanguage === 'vi' 
                          ? 'Các loại tường lửa này bảo vệ mạng bằng cách lọc các thông báo ở lớp ứng dụng. Đối với một ứng dụng cụ thể, tường lửa proxy đóng vai trò là cổng từ mạng này sang mạng khác.'
                          : 'These types of firewalls protect the network by filtering messages at the application layer. For a specific application, the proxy firewall acts as a gateway from one network to another.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firewall Type 3 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Stateful Inspection</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentLanguage === 'vi' 
                          ? 'Các loại tường lửa như vậy cho phép hoặc chặn lưu lượng mạng dựa trên trạng thái, cổng và giao thức. Ở đây, nó quyết định lọc dựa trên các quy tắc và ngữ cảnh do quản trị viên xác định.'
                          : 'Such firewalls allow or block network traffic based on state, port, and protocol. Here, it decides filtering based on rules and context defined by the administrator.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firewall Type 4 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Unified Threat Management (UTM) Firewall</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentLanguage === 'vi' 
                          ? 'Thiết bị UTM một trong các loại firewall hiện nay thường tích hợp các khả năng của tường lửa kiểm tra trạng thái, ngăn chặn xâm nhập và chống vi-rút theo cách được liên kết lỏng lẻo. Nó có thể bao gồm các dịch vụ bổ sung và trong nhiều trường hợp, quản lý đám mây. UTM được thiết kế đơn giản và dễ sử dụng.'
                          : 'UTM devices, one of the current firewall types, typically integrate the capabilities of stateful inspection firewalls, intrusion prevention, and antivirus in a loosely coupled manner. It can include additional services and in many cases, cloud management. UTM is designed to be simple and easy to use.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firewall Type 5 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-lg">5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Next-Generation Firewall</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentLanguage === 'vi' 
                          ? 'Theo định nghĩa của Gartner, Inc., các loại tường lửa thế hệ tiếp theo là tường lửa kiểm tra gói sâu, bổ sung thêm tính năng kiểm tra cấp ứng dụng, ngăn chặn xâm nhập và thông tin từ bên ngoài tường lửa để vượt qua kiểm tra và chặn cổng, giao thức.'
                          : 'According to Gartner, Inc.\'s definition, next-generation firewalls are deep packet inspection firewalls that add application-layer inspection capabilities, intrusion prevention, and information from outside the firewall to pass inspection and block ports and protocols.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firewall Type 6 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-bold text-lg">6</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Threat-Focused NGFW</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentLanguage === 'vi' 
                          ? 'NGFW một trong những loại firewall hiện nay đang dần phủ sóng thị trường với chi phí đắt đỏ. Các loại tường lửa này cung cấp khả năng phát hiện và giảm thiểu mối đe dọa nâng cao. Với sự tương quan giữa mạng và sự kiện điểm cuối, chúng có thể phát hiện hành vi trốn tránh hoặc đáng ngờ.'
                          : 'NGFW, one of the current firewall types that is gradually covering the market with expensive costs. These firewalls provide advanced threat detection and mitigation capabilities. With correlation between network and endpoint events, they can detect evasive or suspicious behavior.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firewall Type 7 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-600 font-bold text-lg">7</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">AI Firewall</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentLanguage === 'vi' 
                          ? 'Tường lửa trí tuệ nhân tạo (AI), một sản phẩm thế hệ tiếp theo của tường lửa thế hệ tiếp theo (NGFW), sử dụng các công nghệ phát hiện thông minh để cải thiện khả năng phát hiện các mối đe dọa tiên tiến và các mối đe dọa chưa biết. Tường lửa AI sử dụng công cụ phát hiện thông minh để đào tạo các mô hình phát hiện mối đe dọa dựa trên các mẫu lớn và liên tục tối ưu hóa các mô hình dựa trên dữ liệu lưu lượng truy cập thời gian thực, cải thiện khả năng phát hiện mối đe dọa.'
                          : 'Artificial Intelligence (AI) firewalls, a next-generation product of next-generation firewalls (NGFW), use intelligent detection technologies to improve the ability to detect advanced threats and unknown threats. AI firewalls use intelligent detection tools to train threat detection models based on large patterns and continuously optimize models based on real-time traffic data, improving threat detection capabilities.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Source Citation */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-blue-800 font-medium">
                      {currentLanguage === 'vi' ? 'Trích dẫn từ tài liệu:' : 'Source:'}
                    </p>
                    <a 
                      href="https://sspit.vn/cac-loai-firewall-hien-nay-co-lam-kho-hacker/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://sspit.vn/cac-loai-firewall-hien-nay-co-lam-kho-hacker/
                    </a>
                  </div>
                </div>
              </div>
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
                <span className="text-gray-600 font-medium">
                  {currentLanguage === 'vi' ? 'Chia sẻ:' : 'Share:'}
                </span>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Blog; 