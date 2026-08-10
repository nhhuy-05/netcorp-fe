import { bg_image_f5_partner, bg_image_national_day } from '../assets/images';

export interface BlogPost {
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
  bodyImages?: {
    [key: string]: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      en: "NETCORP OFFICIALLY CERTIFIED AS F5 SILVER PARTNER 2026",
      vi: "NETCORP CHÍNH THỨC ĐẠT CHỨNG NHẬN F5 SILVER PARTNER 2026"
    },
    category: "security",
    excerpt: {
      en: "NetCorp is proud to announce that it has officially achieved the F5 Silver Partner 2026 certification, confirming our capability in consulting, deploying, and operating application infrastructure, security, and cloud computing solutions for enterprises.",
      vi: "NetCorp tự hào thông báo đã chính thức đạt chứng nhận F5 Silver Partner 2026, khẳng định năng lực tư vấn, triển khai và vận hành các giải pháp hạ tầng ứng dụng, bảo mật và điện toán đám mây cho doanh nghiệp."
    },
    content: {
      en: `NetCorp is proud to announce that it has officially achieved the F5 Silver Partner 2026 certification, confirming our capability in consulting, deploying, and operating application infrastructure, security, and cloud computing solutions for enterprises.

Achieving this certification is an important milestone in NetCorp's strategy to develop its technology partner ecosystem, while demonstrating our commitment to continuously improving technical capabilities, service quality, and the value brought to customers.

As an F5 Silver Partner, NetCorp continues to accompany enterprises in building modern, secure, and highly scalable IT infrastructures through F5's key solution groups:
* Application Delivery & Traffic Management
* Web Application & API Protection (WAAP)
* Zero Trust Architecture
* Network Security & DDoS Protection
* Hybrid & Multi-Cloud Connectivity
* Kubernetes Networking & Application Modernization
* F5 Distributed Cloud Services
* AI Infrastructure & AI Security

[IMAGE:f5_partner|Chứng nhận F5 Silver Partner 2026 của NetCorp|NetCorp's F5 Silver Partner 2026 Certification]

These capabilities enable NetCorp to support customers in optimizing system performance, enhancing security, ensuring service continuity, and meeting digital transformation requirements in an increasingly complex technology environment.

Over the past years, NetCorp has participated in deploying many large-scale projects in the finance and banking sector, including:
* Investment in load balancing equipment for the DMZ partition at Vietcombank's Data Center.
* Provision of application security solutions for Agribank.
* Provision of firewall equipment for Agribank's Card System.
* Investment in load balancing equipment for BIDV's Core Banking system.
* Procurement to replace and supplement load balancing systems for BIDV's non-Core Banking services.

These projects are testament to NetCorp's capability in deploying infrastructure and security systems with high performance, stability, and availability requirements.

The F5 Silver Partner 2026 certification is recognition of the NetCorp team's efforts in developing professional expertise, improving service quality, and bringing modern technology solutions to customers. With F5's partnership, NetCorp is committed to continuing to support enterprises in accelerating their digital transformation, enhancing security, and optimizing operational efficiency in the digital era.`,
      vi: `NetCorp tự hào thông báo đã chính thức đạt chứng nhận F5 Silver Partner 2026, khẳng định năng lực tư vấn, triển khai và vận hành các giải pháp hạ tầng ứng dụng, bảo mật và điện toán đám mây cho doanh nghiệp.

Việc đạt được chứng nhận này là dấu mốc quan trọng trong chiến lược phát triển hệ sinh thái đối tác công nghệ của NetCorp, đồng thời thể hiện cam kết không ngừng nâng cao năng lực kỹ thuật, chất lượng dịch vụ và giá trị mang lại cho khách hàng.

Với vai trò là F5 Silver Partner, NetCorp tiếp tục đồng hành cùng doanh nghiệp trong việc xây dựng hạ tầng CNTT hiện đại, an toàn và có khả năng mở rộng cao thông qua các nhóm giải pháp trọng yếu của F5 như:
* Application Delivery & Traffic Management
* Web Application & API Protection (WAAP)
* Zero Trust Architecture
* Network Security & DDoS Protection
* Hybrid & Multi-Cloud Connectivity
* Kubernetes Networking & Application Modernization
* F5 Distributed Cloud Services
* AI Infrastructure & AI Security

[IMAGE:f5_partner|Chứng nhận F5 Silver Partner 2026 của NetCorp|NetCorp's F5 Silver Partner 2026 Certification]

Những năng lực này giúp NetCorp hỗ trợ khách hàng tối ưu hiệu năng hệ thống, nâng cao khả năng bảo mật, đảm bảo tính liên tục của dịch vụ và đáp ứng yêu cầu chuyển đổi số trong môi trường công nghệ ngày càng phức tạp.

Trong những năm qua, NetCorp đã tham gia triển khai nhiều dự án quy mô lớn trong lĩnh vực tài chính – ngân hàng, bao gồm:
* Đầu tư thiết bị cân bằng tải cho phân vùng DMZ tại Trung tâm dữ liệu của Vietcombank.
* Trang bị giải pháp bảo mật ứng dụng cho Agribank.
* Cung cấp thiết bị tường lửa cho Hệ thống Thẻ Agribank.
* Đầu tư thiết bị cân bằng tải cho hệ thống Core Banking của BIDV.
* Mua sắm thay thế, bổ sung hệ thống cân bằng tải cho các dịch vụ ngoài Core Banking của BIDV.

Các dự án trên là minh chứng cho năng lực triển khai các hệ thống hạ tầng và bảo mật có yêu cầu cao về hiệu năng, độ ổn định và tính sẵn sàng.

Chứng nhận F5 Silver Partner 2026 là sự ghi nhận cho những nỗ lực của đội ngũ NetCorp trong việc phát triển năng lực chuyên môn, nâng cao chất lượng dịch vụ và mang đến các giải pháp công nghệ hiện đại cho khách hàng. Với sự đồng hành của F5, NetCorp cam kết tiếp tục hỗ trợ doanh nghiệp đẩy nhanh quá trình chuyển đổi số, tăng cường bảo mật và tối ưu hiệu quả vận hành trong kỷ nguyên số.`
    },
    image: bg_image_f5_partner,
    date: "2026-06-19",
    author: "NetCorp Team",
    tags: ["F5", "Silver Partner", "Security", "Cloud", "Application Delivery"],
    bodyImages: {
      f5_partner: bg_image_f5_partner
    }
  },
  {
    id: 2,
    title: {
      en: "ANNOUNCEMENT ON NATIONAL DAY (SEPTEMBER 2ND) HOLIDAY SCHEDULE 2026",
      vi: "THÔNG BÁO LỊCH NGHỈ LỄ QUỐC KHÁNH 02/9 NĂM 2026"
    },
    category: "announcement",
    excerpt: {
      en: "On the occasion of the National Day of the Socialist Republic of Vietnam (September 2nd), NetCorp respectfully announces our 2026 holiday schedule to facilitate work planning and coordination for our valued Customers, Partners, and all Employees.",
      vi: "Nhân dịp Lễ Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam (02/9), NetCorp trân trọng thông báo lịch nghỉ lễ năm 2026 để Quý Khách hàng, Quý Đối tác và toàn thể Cán bộ nhân viên thuận tiện trong việc sắp xếp kế hoạch làm việc và phối hợp với Công ty."
    },
    content: {
      en: `On the occasion of the National Day of the Socialist Republic of Vietnam (September 2nd), NetCorp respectfully announces our 2026 holiday schedule to facilitate work planning and coordination for our valued Customers, Partners, and all Employees.

### National Day Holiday Schedule
* Holiday period: From Saturday, August 29, 2026 to Wednesday, September 2, 2026 inclusive.
* Business resumes: Thursday, September 3, 2026.

[IMAGE:national_day|Thông báo lịch nghỉ lễ Quốc khánh 02/9 năm 2026 của NetCorp|NetCorp's National Day 2026 Holiday Schedule Announcement]

### Support Services During the Holiday
To ensure continuity of service operations, NetCorp will arrange on-call personnel according to department plans to receive and handle support requests for systems, services, and ongoing projects.

In case of urgent support needs, Customers and Partners please contact your account manager directly or reach out via official NetCorp support channels for prompt assistance.

### Thank You
NetCorp sincerely thanks our valued Customers and Partners for your continued trust and partnership.

We commit to continuously enhancing service quality and maintaining timely support to deliver the best experience for our Customers and Partners.

Best regards!`,
      vi: `Nhân dịp Lễ Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam (02/9), NetCorp trân trọng thông báo lịch nghỉ lễ năm 2026 để Quý Khách hàng, Quý Đối tác và toàn thể Cán bộ nhân viên thuận tiện trong việc sắp xếp kế hoạch làm việc và phối hợp với Công ty.

### Lịch nghỉ Lễ Quốc khánh
* Thời gian nghỉ lễ: Từ Thứ Bảy, ngày 29/08/2026 đến hết Thứ Tư, ngày 02/09/2026.
* Thời gian làm việc trở lại: Thứ Năm, ngày 03/09/2026.

[IMAGE:national_day|Thông báo lịch nghỉ lễ Quốc khánh 02/9 năm 2026 của NetCorp|NetCorp's National Day 2026 Holiday Schedule Announcement]

### Hoạt động hỗ trợ trong thời gian nghỉ lễ
Nhằm đảm bảo tính liên tục trong hoạt động cung cấp dịch vụ, NetCorp vẫn bố trí nhân sự theo kế hoạch của từng bộ phận để tiếp nhận và xử lý các yêu cầu hỗ trợ đối với hệ thống, dịch vụ và các dự án đang triển khai.

Trong trường hợp cần hỗ trợ, Quý Khách hàng và Quý Đối tác vui lòng liên hệ trực tiếp với đầu mối phụ trách hoặc các kênh hỗ trợ chính thức của NetCorp để được tiếp nhận và xử lý trong thời gian sớm nhất.

### Lời cảm ơn
NetCorp chân thành cảm ơn Quý Khách hàng và Quý Đối tác đã luôn tin tưởng, đồng hành cùng chúng tôi trong suốt thời gian qua.

Chúng tôi cam kết không ngừng nâng cao chất lượng dịch vụ và duy trì sự hỗ trợ kịp thời nhằm mang đến những trải nghiệm tốt nhất cho Quý Khách hàng và Quý Đối tác.

Trân trọng thông báo!`
    },
    image: bg_image_national_day,
    date: "2026-08-24",
    author: "NetCorp Team",
    tags: ["Thông Báo", "Lịch Nghỉ Lễ", "Quốc Khánh 2/9", "NetCorp"],
    bodyImages: {
      national_day: bg_image_national_day
    }
  }
];

export const isPostPublished = (post: BlogPost): boolean => {
  if (!post.date) return true;
  const [year, month, day] = post.date.split('-').map(Number);
  if (!year || !month || !day) return true;
  const postDate = new Date(year, month - 1, day, 0, 0, 0);
  const now = new Date();
  return postDate <= now;
};

export const getAllBlogPosts = (includeUnpublished = false): BlogPost[] => {
  if (includeUnpublished) return blogPosts;
  return blogPosts.filter(isPostPublished);
};

export const getBlogPostById = (id: number | string, includeUnpublished = false): BlogPost | undefined => {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  const post = blogPosts.find(p => p.id === numericId);
  if (!post) return undefined;
  if (!includeUnpublished && !isPostPublished(post)) {
    return undefined;
  }
  return post;
};
