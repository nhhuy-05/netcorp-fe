import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // thêm dòng này

interface WorkItem {
  id: number;
  category: string;
  image?: string;
  title: string;
  titleVi?: string;
  customer: string;
  customerVi?: string;
  address: string;
  addressVi?: string;
  description: string;
  descriptionVi?: string;
  year: number;
  slug: string;
  customerImage?: string;
}

export const categories = [
  { en: 'ALL', vi: 'TẤT CẢ' },
  { en: 'NETWORK', vi: 'NETWORK' },
  { en: 'SYSTEM', vi: 'SYSTEM' },
  { en: 'SECURITY', vi: 'SECURITY' },
  { en: 'M&E', vi: 'M&E' },
  { en: 'APPLICATION', vi: 'APPLICATION' },
  { en: 'BROADCASTING', vi: 'BROADCASTING' }
];

export const works: WorkItem[] = 
[
  {
    id: 1,
    category: "NETWORK",
    title: "Router & Switch Installation for LPBank",
    titleVi: "Cung cấp lắp đặt thiết bị Router và Switch cho LPBank",
    customer: "Loc Phat Viet Nam Commercial Joint Stock Bank (LPBank)",
    customerVi: "Ngân hàng TMCP Lộc Phát Việt Nam (LPBank)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Supply and installation of Router and Switch devices for LPBank",
    descriptionVi: "Cung cấp lắp đặt thiết bị Router và Switch cho LPBank",
    year: 2024,
    slug: "router-switch-installation-for-lpbank",
    customerImage: "/image/bank/logo-LPbank.png"
  },
  {
    id: 2,
    category: "NETWORK",
    title: "Centralized Procurement of Information Equipment for BIDV",
    titleVi: "Mua sắm tập trung thiết bị thông tin của BIDV",
    customer: "Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV)",
    customerVi: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Centralized procurement of information equipment for BIDV",
    descriptionVi: "Mua sắm tập trung thiết bị thông tin của BIDV",
    year: 2024,
    slug: "centralized-procurement-of-bidv-equipment",
    customerImage: "/image/bank/logo-BIDV.png"
  },
  {
    id: 3,
    category: "NETWORK",
    title: "Network and Information Security Equipment for LPBank",
    titleVi: "Cung cấp lắp đặt thiết bị mạng và an ninh thông tin cho LPBank",
    customer: "Loc Phat Viet Nam Commercial Joint Stock Bank (LPBank)",
    customerVi: "Ngân hàng TMCP Lộc Phát Việt Nam (LPBank)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Supply and installation of network and information security equipment for LPBank",
    descriptionVi: "Cung cấp lắp đặt thiết bị mạng và an ninh thông tin cho LPBank",
    year: 2023,
    slug: "network-and-information-security-equipment-for-lpbank",
    customerImage: "/image/bank/logo-LPbank.png"
  },
  {
    id: 4,
    category: "NETWORK",
    title: "Replacement of Communication Network and SAN Switch Equipment (2024)",
    titleVi: "Mua sắm thay thế thiết bị mạng truyền thông và SAN Switch năm 2024",
    customer: "Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV)",
    customerVi: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Procurement of replacement communication network and SAN Switch equipment in 2024",
    descriptionVi: "Mua sắm thay thế thiết bị mạng truyền thông và SAN Switch năm 2024",
    year: 2024,
    slug: "replacement-of-communication-network-and-san-switch-equipment-2024",
    customerImage: "/image/bank/logo-BIDV.png"
  },
  {
    id: 5,
    category: "NETWORK",
    title: "Router Installation for Branches to Connect Multi-Service Unified Network",
    titleVi: "Cung cấp lắp đặt thiết bị Router tại các chi nhánh kết nối mạng hợp nhất đa dịch vụ",
    customer: "Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV)",
    customerVi: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Supply and installation of Router equipment at branches to connect to the multi-service unified network",
    descriptionVi: "Cung cấp lắp đặt thiết bị Router tại các chi nhánh kết nối mạng hợp nhất đa dịch vụ",
    year: 2021,
    slug: "router-installation-for-branches-to-connect-multi-service-unified-network",
    customerImage: "/image/bank/logo-BIDV.png"
  },
  {
    id: 6,
    category: "NETWORK",
    title: "Replacement of Central Control Equipment for Communication Network (2025)",
    titleVi: "Mua sắm thay thế thiết bị điều khiển trung tâm của hệ thống mạng truyền thông năm 2025 của BIDV",
    customer: "Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV)",
    customerVi: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Procurement of replacement central control equipment for the communication network system in 2025",
    descriptionVi: "Mua sắm thay thế thiết bị điều khiển trung tâm của hệ thống mạng truyền thông năm 2025 của BIDV",
    year: 2025,
    slug: "replacement-of-central-control-equipment-for-communication-network-2025",
    customerImage: "/image/bank/logo-BIDV.png"
  },
  {
    id: 7,
    category: "NETWORK",
    title: "Replacement and Supplement of Central Control and Segmentation Equipment",
    titleVi: "Mua sắm thay thế thiết bị điều khiển trung tâm của hệ thống mạng truyền thông và bổ sung thiết bị mạng phân vùng kết nối máy chủ",
    customer: "Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV)",
    customerVi: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Procurement of replacement central control equipment for the communication network system and supplement network segmentation equipment for server connections",
    descriptionVi: "Mua sắm thay thế thiết bị điều khiển trung tâm của hệ thống mạng truyền thông và bổ sung thiết bị mạng phân vùng kết nối máy chủ",
    year: 2024,
    slug: "replacement-and-supplement-of-central-control-and-segmentation-equipment",
    customerImage: "/image/bank/logo-BIDV.png"
  },
  {
    id: 8,
    category: "NETWORK",
    title: "Supply and Implementation of Load Balancer",
    titleVi: "Cung cấp và triển khai thiết bị cân bằng tải",
    customer: "Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV)",
    customerVi: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Supply and implementation of load balancing equipment",
    descriptionVi: "Cung cấp và triển khai thiết bị cân bằng tải",
    year: 2023,
    slug: "supply-and-implementation-of-load-balancer",
    customerImage: "/image/bank/logo-BIDV.png"
  },
  {
    id: 9,
    category: "NETWORK",
    title: "Complete Network System Supply and Installation",
    titleVi: "Cung cấp toàn bộ vật tư, thiết bị, nhân lực, thiết kế, thi công, lắp đặt, cài đặt hoàn chỉnh, hướng dẫn sử dụng, chuyển giao trọn gói hệ thống mạng",
    customer: "Vicem Hoang Thach Cement",
    customerVi: "Công ty xi măng VICEM Hoàng Thạch",
    address: "Hai Phong",
    addressVi: "Hải Phòng",
    description: "Complete supply and installation of materials, equipment, human resources, design, construction, installation, complete configuration, usage instruction, and handover of the entire network system",
    descriptionVi: "Cung cấp toàn bộ vật tư, thiết bị, nhân lực, thiết kế, thi công, lắp đặt, cài đặt hoàn chỉnh, hướng dẫn sử dụng, chuyển giao trọn gói hệ thống mạng",
    year: 2014,
    slug: "complete-network-system-supply-and-installation",
    customerImage: "/image/enterprise/logo-VICEMHOANGTHACH.png"
  },
  {
    id: 10,
    category: "NETWORK",
    title: "Self-procurement of various types for VCB",
    titleVi: "Mua sắm tự mua các loại cho VCB",
    customer: "Viet Nam Joint Stock Commercial Bank for Foreign Trade (VCB)",
    customerVi: "Ngân hàng TMCP Ngoại thương Việt Nam (VCB)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Self-procurement of various types of equipment for VCB",
    descriptionVi: "Mua sắm tự mua các loại cho VCB",
    year: 2023,
    slug: "self-procurement-of-various-types-for-vcb",
    customerImage: "/image/bank/logo-Vietcombank.png"
  },
  {
    id: 11,
    category: "NETWORK",
    title: "Supply of WAN Equipment for Regional Data Centers",
    titleVi: "Cung cấp hệ thống thiết bị WAN cho trung tâm vùng miền Bắc, miền Nam, miền Trung",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of WAN equipment for North, South, and Central regional data centers",
    descriptionVi: "Cung cấp hệ thống thiết bị WAN cho trung tâm vùng miền Bắc, miền Nam, miền Trung",
    year: 2022,
    slug: "supply-of-wan-equipment-for-regional-data-centers",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 12,
    category: "NETWORK",
    title: "Supply of Router and Switch Equipment for CN and PGD",
    titleVi: "Cung cấp hệ thống thiết bị định tuyến, thiết bị chuyển mạch cho các CN và PGD",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of routing and switching equipment for branches (CN) and transaction offices (PGD)",
    descriptionVi: "Cung cấp hệ thống thiết bị định tuyến, thiết bị chuyển mạch cho các CN và PGD",
    year: 2020,
    slug: "supply-of-router-and-switch-equipment-for-cn-and-pgd",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 13,
    category: "NETWORK",
    title: "Supply and Construction of ACI System",
    titleVi: "Cung cấp và xây dựng hệ thống ACI",
    customer: "MB Securities Joint Stock Company (MBS)",
    customerVi: "Công ty Cổ phần Chứng khoán MB (MBS)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Supply and construction of the ACI system",
    descriptionVi: "Cung cấp và xây dựng hệ thống ACI",
    year: 2021,
    slug: "supply-and-construction-of-aci-system",
    customerImage: "/image/bank/logo-MBS.png"
  },
  {
    id: 14,
    category: "NETWORK",
    title: "Supply of Router and Switch Equipment for Branches and PGD (2019)",
    titleVi: "Cung cấp thiết bị định tuyến, thiết bị chuyển mạch cho các chi nhánh và PGD",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of routing and switching equipment for branches and transaction offices (PGD)",
    descriptionVi: "Cung cấp thiết bị định tuyến, thiết bị chuyển mạch cho các chi nhánh và PGD",
    year: 2019,
    slug: "supply-of-router-and-switch-equipment-for-branches-and-pgd-2019",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 15,
    category: "NETWORK",
    title: "Switch Supply for Branches",
    titleVi: "Cung cấp Switch cho Chi nhánh",
    customer: "Viet Nam Joint Stock Commercial Bank for Industry and Trade (Vietinbank)",
    customerVi: "Ngân hàng TMCP Công thương Việt Nam (Vietinbank)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Supply of Switches for branches",
    descriptionVi: "Cung cấp Switch cho Chi nhánh",
    year: 2025,
    slug: "switch-supply-for-branches",
    customerImage: "/image/bank/logo-Vietinbank.png"
  },
  {
    id: 16,
    category: "NETWORK",
    title: "Installation of Network Infrastructure for Data Center and Head Units",
    titleVi: "Cung cấp lắp đặt thiết bị hạ tầng mạng cho trung tâm dữ liệu và các đơn vị đầu mối",
    customer: "Ministry of Culture, Sports and Tourism's IT Center",
    customerVi: "Trung tâm Công nghệ Thông tin-Bộ văn hóa thể thao và du lịch",
    address: "Hai Ba Trung Ward, Hanoi",
    addressVi: "Phường Hai Bà Trưng, Hà Nội",
    description: "Supply and installation of network infrastructure equipment for the data center and head units",
    descriptionVi: "Cung cấp lắp đặt thiết bị hạ tầng mạng cho trung tâm dữ liệu và các đơn vị đầu mối",
    year: 2013,
    slug: "installation-of-network-infrastructure-for-data-center-and-head-units",
    customerImage: "/image/govern/logo-BVH.png"
  },
  {
    id: 17,
    category: "NETWORK",
    title: "Supply and Service for Internal Network System",
    titleVi: "Cung cấp lắp đặt thiết bị và dịch vụ cho Hệ thống mạng nội bộ",
    customer: "Vicem But Son Cement Joint Stock Company",
    customerVi: "Công ty Cổ Phần Xi măng Vicem Bút Sơn",
    address: "Ninh Binh",
    addressVi: "Ninh Bình",
    description: "Supply and installation of equipment and services for the internal network system",
    descriptionVi: "Cung cấp lắp đặt thiết bị và dịch vụ cho Hệ thống mạng nội bộ",
    year: 2015,
    slug: "supply-and-service-for-internal-network-system",
    customerImage: "/image/enterprise/logo-VICEMBUTSON.png"
  },
  {
    id: 18,
    category: "NETWORK",
    title: "Supply and Installation of Network Equipment for MIC",
    titleVi: "Cung cấp lắp đặt thiết bị mạng cho MIC",
    customer: "Military Insurance Corporation (MIC)",
    customerVi: "Tổng Công ty Bảo hiểm Quân đội (MIC)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Supply and installation of network equipment for MIC",
    descriptionVi: "Cung cấp lắp đặt thiết bị mạng cho MIC",
    year: 2023,
    slug: "supply-and-installation-of-network-equipment-for-mic",
    customerImage: "/image/bank/logo-MIC.png"
  },
  {
    id: 19,
    category: "NETWORK",
    title: "Supply and Integration of Network and Security Equipment",
    titleVi: "Cung cấp và tích hợp thiết bị hệ thống mạng, an ninh",
    customer: "MB Securities Joint Stock Company (MBS)",
    customerVi: "Công ty cổ phần chứng khoán MB (MBS)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Supply and integration of network and security system equipment",
    descriptionVi: "Cung cấp và tích hợp thiết bị hệ thống mạng, an ninh",
    year: 2021,
    slug: "supply-and-integration-of-network-and-security-equipment",
    customerImage: "/image/bank/logo-MBS.png"
  },
  {
    id: 20,
    category: "NETWORK",
    title: "Supply and Construction of HCI System",
    titleVi: "Cung cấp và xây dựng hệ thống HCI",
    customer: "Noi Bai Cargo Terminal Service Joint Stock Company (NCTS)",
    customerVi: "Công ty Cổ phần Dịch vụ Hàng hóa Nội Bài",
    address: "Noi Bai International Airport, Hanoi",
    addressVi: "Sân bay quốc tế Nội Bài, Hà Nội",
    description: "Supply and construction of the HCI system",
    descriptionVi: "Cung cấp và xây dựng hệ thống HCI",
    year: 2021,
    slug: "supply-and-construction-of-hci-system",
    customerImage: "/image/enterprise/logo-NCTS.png"
  },
  {
    id: 21,
    category: "NETWORK",
    title: "Supply and Deployment of Access Point for An Khanh Data Center Building",
    titleVi: "Cung cấp, triển khai thiết bị Access Point cho tòa nhà Trung tâm dữ liệu An Khánh",
    customer: "Vietnam Bank for Agriculture and Rural Development (Agribank)",
    customerVi: "Ngân hàng Nông nghiệp và Phát triển nông thôn Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply and deployment of Access Point equipment for the An Khanh Data Center building",
    descriptionVi: "Cung cấp, triển khai thiết bị Access Point cho tòa nhà Trung tâm dữ liệu An Khánh",
    year: 2025,
    slug: "supply-and-deployment-of-access-point-for-an-khanh-data-center-building",
    customerImage: "/image/bank/logo-Agribank.png"
  },
  {
    id: 22,
    category: "SYSTEM",
    title: "Supply and Maintenance of Storage and Server Infrastructure",
    titleVi: "Mua sắm thiết bị lưu trữ và quản trị hệ thống và phần mềm thương mại",
    customer: "Ministry of Natural Resources and Environment",
    customerVi: "Bộ Tài nguyên và Môi trường",
    address: "Nam Tu Liem Ward, Hanoi",
    addressVi: "Phường Nam Từ Liêm, Hà Nội",
    description: "Procurement of storage devices, system management, and commercial software",
    descriptionVi: "Mua sắm thiết bị lưu trữ và quản trị hệ thống và phần mềm thương mại",
    year: 2024,
    slug: "storage-and-server-infrastructure-supply-and-maintenance",
    customerImage: "/image/govern/logo-BTNVMT.jpg"
  },
  {
    id: 23,
    category: "SYSTEM",
    title: "Supply of High-Performance Computing (HPC) for Core Banking",
    titleVi: "Cung cấp hạ tầng máy chủ hiệu suất cao (HPC) cho hệ thống core",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of high-performance computing (HPC) infrastructure for the core banking system",
    descriptionVi: "Cung cấp hạ tầng máy chủ hiệu suất cao (HPC) cho hệ thống core",
    year: 2024,
    slug: "high-performance-computing-supply-for-core-banking",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 24,
    category: "SYSTEM",
    title: "AI and BigData Platform Implementation",
    titleVi: "Cung cấp hạ tầng máy chủ AI và triển khai platform BigData",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of AI server infrastructure and implementation of the BigData platform",
    descriptionVi: "Cung cấp hạ tầng máy chủ AI và triển khai platform BigData",
    year: 2022,
    slug: "ai-and-bigdata-platform-implementation",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 25,
    category: "SYSTEM",
    title: "Supply of Enterprise Servers",
    titleVi: "Cung cấp hệ thống máy chủ Intel",
    customer: "MB Securities Joint Stock Company (MBS)", 
    customerVi: "Công ty Cổ phần Chứng khoán MB (MBS)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Supply of Intel server systems",
    descriptionVi: "Cung cấp hệ thống máy chủ Intel",
    year: 2021,
    slug: "supply-of-enterprise-servers",
    customerImage: "/image/bank/logo-MBS.png"
  },
  // {
  //   id: 26,
  //   category: "SYSTEM",
  //   title: "Supply of Network, Fiber Optic, Storage, and Server Equipment",
  //   titleVi: "Cung cấp thiết bị mạng máy tính, truyền hình cáp, hệ thống máy chủ, hệ thống lưu trữ và hạ tầng mạng",
  //   customer: "Hong Co Information Technology and Trading Company Branch",
  //   customerVi: "Chi nhánh Công ty TNHH Tin Học và Thương mại Hồng Cơ",
  //   address: "",
  //   addressVi: "",
  //   description: "Supply of computer network equipment, cable TV, server systems, storage systems, and network infrastructure",
  //   descriptionVi: "Cung cấp thiết bị mạng máy tính, truyền hình cáp, hệ thống máy chủ, hệ thống lưu trữ và hạ tầng mạng",
  //   year: 2016,
  //   slug: "supply-of-network-fiber-optic-storage-and-server-equipment",
  //   customerImage: ""
  // },
  // {
  //   id: 27,
  //   category: "SYSTEM",
  //   title: "Supply of Server, Storage, HT Camera, and Datacenter Equipment",
  //   titleVi: "Cung cấp hệ thống máy chủ, thiết bị hạ tầng, HT Camera, HT Datacenter... Bộ Quốc phòng",
  //   customer: "Ministry of National Defence",
  //   customerVi: "Công ty TNHH Tin Học Hồng Cơ - Bộ Quốc phòng",
  //   address: "",
  //   addressVi: "",
  //   description: "Supply of server systems, infrastructure equipment, HT Camera, and Datacenter for the Ministry of National Defence",
  //   descriptionVi: "Cung cấp hệ thống máy chủ, thiết bị hạ tầng, HT Camera, HT Datacenter... Bộ Quốc phòng",
  //   year: 2014,
  //   slug: "supply-of-server-storage-ht-camera-and-datacenter-equipment",
  //   customerImage: ""
  // },
  {
    id: 28,
    category: "SYSTEM",
    title: "Supply of IBM P-series Server",
    titleVi: "Cung cấp máy chủ IBM P-series hệ thống SAP",
    customer: "TH Milk Joint Stock Company (TH)",
    customerVi: "Công ty Cổ phần Thực phẩm Sữa TH",
    address: "Nghe An",
    addressVi: "Nghệ An",
    description: "Supply of IBM P-series server for the SAP system",
    descriptionVi: "Cung cấp máy chủ IBM P-series hệ thống SAP",
    year: 2020,
    slug: "supply-of-ibm-p-series-server",
    customerImage: "/image/enterprise/logo-TH.png"
  },
  {
    id: 29,
    category: "SYSTEM",
    title: "Supply and Installation of Desktop Computers for MIC",
    titleVi: "Cung cấp lắp đặt thiết bị máy chủ cho MIC",
    customer: "Military Insurance Corporation (MIC)",
    customerVi: "Tổng Công ty Bảo hiểm Quân đội (MIC)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Supply and installation of desktop computers for MIC",
    descriptionVi: "Cung cấp lắp đặt thiết bị máy chủ cho MIC",
    year: 2023,
    slug: "supply-and-installation-of-desktop-computers-for-mic",
    customerImage: "/image/bank/logo-MIC.png"
  },
  {
    id: 30,
    category: "SYSTEM",
    title: "Supply and Deployment of Storage, Server, Network, and SAN/LAN Equipment",
    titleVi: "Cung cấp và triển khai tích hợp hệ thống máy chủ, lưu trữ, Network, hạ tầng mạng LAN, SAN",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply and integrated deployment of server systems, storage, Network, LAN, and SAN infrastructure",
    descriptionVi: "Cung cấp và triển khai tích hợp hệ thống máy chủ, lưu trữ, Network, hạ tầng mạng LAN, SAN",
    year: 2020,
    slug: "supply-and-deployment-of-storage-server-network-and-san-lan-equipment",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 31,
    category: "SYSTEM",
    title: "Procurement of Network and Peripheral Equipment for Branches",
    titleVi: "Mua sắm thiết bị mạng, an ninh bổ sung cho các chi nhánh và phòng giao dịch",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Procurement of network and supplementary security equipment for branches and transaction offices",
    descriptionVi: "Mua sắm thiết bị mạng, an ninh bổ sung cho các chi nhánh và phòng giao dịch",
    year: 2019,
    slug: "procurement-of-network-and-peripheral-equipment-for-branches",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 32,
    category: "SYSTEM",
    title: "Procurement of Software and Hardware for Oracle BI System",
    titleVi: "Mua sắm máy chủ và phần mềm hệ thống triển khai hệ thống Oracle BI cho ViceM",
    customer: "Vietnam National Cement Corporation (Vicem)",
    customerVi: "Tổng Công ty Công nghiệp Xi măng Việt Nam (Vicem)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Procurement of server and software systems for Oracle BI deployment for ViceM",
    descriptionVi: "Mua sắm máy chủ và phần mềm hệ thống triển khai hệ thống Oracle BI cho ViceM",
    year: 2013,
    slug: "procurement-of-software-and-hardware-for-oracle-bi-system",
    customerImage: "/image/enterprise/logo-VICEM.png"
  },
  {
    id: 33,
    category: "SYSTEM",
    title: "Supply and Installation of IBM Server and Core Switch for ERP",
    titleVi: "Cung cấp, triển khai lắp đặt máy chủ IBM, thiết bị lưu trữ, thiết bị chuyển mạch cho hệ thống ERP cho Văn phòng chính",
    customer: "Ha Tien 1 Cement Joint Stock Company",
    customerVi: "Công ty Cổ phần Xi măng Hà Tiên 1",
    address: "Cau Ong Lanh Ward, Ho Chi Minh City",
    addressVi: "Phường Cầu Ông Lãnh, TP. Hồ Chí Minh",
    description: "Supply, deployment, and installation of IBM server, storage, and core switch equipment for the ERP system at the Head Office",
    descriptionVi: "Cung cấp, triển khai lắp đặt máy chủ IBM, thiết bị lưu trữ, thiết bị chuyển mạch cho hệ thống ERP cho Văn phòng chính",
    year: 2021,
    slug: "supply-and-installation-of-ibm-server-and-core-switch-for-erp",
    customerImage: "/image/enterprise/logo-VICEMHATIEN.png"
  },
  {
    id: 34,
    category: "SYSTEM",
    title: "Supply of IT System for DX Project",
    titleVi: "Cung cấp hệ thống máy tính cho dự án ERP",
    customer: "Vicem Hoang Thach Cement",
    customerVi: "Công ty xi măng VICEM Hoàng Thạch",
    address: "Hai Phong",
    addressVi: "Hải Phòng",
    description: "Supply of computer systems for the ERP project",
    descriptionVi: "Cung cấp hệ thống máy tính cho dự án ERP",
    year: 2013,
    slug: "supply-of-it-system-for-dx-project",
    customerImage: "/image/enterprise/logo-VICEMHOANGTHACH.png"
  },
  {
    id: 35,
    category: "SYSTEM",
    title: "Supply of Storage System for Web Cho Bank Lab",
    titleVi: "Cung cấp hệ thống tường lửa ứng dụng WEB cho Bank Lab",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of WEB application firewall system for the Bank Lab",
    descriptionVi: "Cung cấp hệ thống tường lửa ứng dụng WEB cho Bank Lab",
    year: 2023,
    slug: "supply-of-storage-system-for-web-cho-bank-lab",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 36,
    category: "SYSTEM",
    title: "Supply and Installation of IT, Network, and Security Equipment",
    titleVi: "Cung cấp thiết bị công nghệ thông tin, hệ thống máy chủ và bảo mật, hỗ trợ kỹ thuật và cài đặt",
    customer: "Bac A Commercial Joint Stock Bank (Bac A Bank)",
    customerVi: "Ngân hàng TMCP Bắc Á",
    address: "Nghe An",
    addressVi: "Nghệ An",
    description: "Supply of IT equipment, server and security systems, technical support, and installation",
    descriptionVi: "Cung cấp thiết bị công nghệ thông tin, hệ thống máy chủ và bảo mật, hỗ trợ kỹ thuật và cài đặt",
    year: 2016,
    slug: "supply-and-installation-of-it-network-and-security-equipment",
    customerImage: "/image/bank/logo-BacABank.png"
  },
  {
    id: 37,
    category: "SYSTEM",
    title: "License Upgrade for Core Banking Software",
    titleVi: "Đầu tư license phần mềm phục vụ core banking",
    customer: "Joint Stock Commercial Bank for Foreign Trade of Vietnam (Vietcombank)",
    customerVi: "Ngân hàng TMCP Ngoại thương Việt Nam (VCB)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Investment in software license for core banking services",
    descriptionVi: "Đầu tư license phần mềm phục vụ core banking",
    year: 2024,
    slug: "license-upgrade-for-core-banking-software",
    customerImage: "/image/bank/logo-Vietcombank.png"
  },
  {
    id: 38,
    category: "SYSTEM",
    title: "Valuation of Technical Support Services for Main Servers and Data Warehouses",
    titleVi: "Giá dịch vụ hỗ trợ kỹ thuật hệ thống cho các máy chủ phần mềm trung gian và kho lưu trữ dữ liệu",
    customer: "Northern Power Information Technology Company Branch",
    customerVi: "Công ty Công nghệ thông tin Điện lực miền Bắc - Chi nhánh Tổng công ty Điện lực miền Bắc",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Valuation of technical support services for middleware servers and data warehouses",
    descriptionVi: "Giá dịch vụ hỗ trợ kỹ thuật hệ thống cho các máy chủ phần mềm trung gian và kho lưu trữ dữ liệu",
    year: 2024,
    slug: "valuation-of-technical-support-services-for-main-servers-and-data-warehouses",
    customerImage: "/image/enterprise/logo-Genco1.png"
  },
  {
    id: 39,
    category: "SYSTEM",
    title: "Supply and Installation of Equipment for ERP",
    titleVi: "Cung cấp, lắp đặt máy chủ cho hệ thống ERP",
    customer: "Vicem But Son Cement Joint Stock Company",
    customerVi: "Công ty Cổ phần Xi măng Vicem Bút Sơn",
    address: "Ninh Binh",
    addressVi: "Ninh Bình",
    description: "Supply and installation of server equipment for the ERP system",
    descriptionVi: "Cung cấp, lắp đặt máy chủ cho hệ thống ERP",
    year: 2014,
    slug: "supply-and-installation-of-equipment-for-erp",
    customerImage: "/image/enterprise/logo-VICEMBUTSON.png"
  },
  {
    id: 40,
    category: "SYSTEM",
    title: "Supply, Installation, and Integration of Network and Server Equipment",
    titleVi: "Cung cấp, lắp đặt và tích hợp hệ thống máy chủ, thiết bị mạng và lưu trữ",
    customer: "Bac A Commercial Joint Stock Bank (Bac A Bank)",
    customerVi: "Ngân hàng TMCP Bắc Á",
    address: "Nghe An",
    addressVi: "Nghệ An",
    description: "Supply, installation, and integration of server systems, network equipment, and storage",
    descriptionVi: "Cung cấp, lắp đặt và tích hợp hệ thống máy chủ, thiết bị mạng và lưu trữ",
    year: 2021,
    slug: "supply-installation-and-integration-of-network-and-server-equipment",
    customerImage: "/image/bank/logo-BacABank.png"
  },
  {
    id: 41,
    category: "SYSTEM",
    title: "Procurement of Network and Security Equipment for PVN Head Office",
    titleVi: "Mua sắm máy chủ, bộ lưu trữ hệ thống BCMS của tòa nhà trụ sở Tập Đoàn Dầu khí Việt Nam",
    customer: "Vietnam National Oil and Gas Group (PVN)",
    customerVi: "Tập Đoàn Dầu khí Việt Nam",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Procurement of server and storage systems for the BCMS of the Vietnam National Oil and Gas Group Head Office building",
    descriptionVi: "Mua sắm máy chủ, bộ lưu trữ hệ thống BCMS của tòa nhà trụ sở Tập Đoàn Dầu khí Việt Nam",
    year: 2018,
    slug: "procurement-of-network-and-security-equipment-for-pvn-head-office",
    customerImage: "/image/enterprise/logo-Petrovietnam.png"
  },
  {
    id: 42,
    category: "SYSTEM",
    title: "Valuation of Technical Support Services as required",
    titleVi: "Giá dịch vụ hỗ trợ kỹ thuật hệ thống theo yêu cầu",
    customer: "Northern Power Information Technology Company Branch",
    customerVi: "Công ty Công nghệ thông tin Điện lực miền Bắc - Chi nhánh Tổng công ty Điện lực miền Bắc",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Valuation of technical support services for the system as required",
    descriptionVi: "Giá dịch vụ hỗ trợ kỹ thuật hệ thống theo yêu cầu",
    year: 2025,
    slug: "valuation-of-technical-support-services-as-required",
    customerImage: "/image/enterprise/logo-Genco1.png"
  },
  {
    id: 66,
    category: "SECURITY",
    title: "Investment in Load Balancer for DMZ Partition",
    titleVi: "Đầu tư thiết bị cân bằng tải cho phân vùng DMZ tại DC",
    customer: "Joint Stock Commercial Bank for Foreign Trade of Vietnam (VCB)",
    customerVi: "Ngân hàng TMCP Ngoại thương Việt Nam (VCB)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Investment in load balancing equipment for the DMZ partition at the Data Center",
    descriptionVi: "Đầu tư thiết bị cân bằng tải cho phân vùng DMZ tại DC",
    year: 2025,
    slug: "investment-in-load-balancer-for-dmz-partition",
    customerImage: "/image/bank/logo-Vietcombank.png"
  },
  {
    id: 67,
    category: "SECURITY",
    title: "Internal Zoning Firewall System",
    titleVi: "Hệ thống tường lửa vùng bên trong",
    customer: "MB Securities Joint Stock Company (MBS)",
    customerVi: "Công ty Cổ phần Chứng khoán MB (MBS)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Internal zoning firewall system",
    descriptionVi: "Hệ thống tường lửa vùng bên trong",
    year: 2022,
    slug: "internal-zoning-firewall-system",
    customerImage: "/image/bank/logo-MBS.png"
  },
  {
    id: 68,
    category: "SECURITY",
    title: "Investment in Load Balancer and Application Security Services",
    titleVi: "Đầu tư mua sắm cho cân bằng tải và dịch vụ hỗ trợ (Application Loadbalancer và Support)",
    customer: "Joint Stock Commercial Bank for Foreign Trade of Vietnam (VCB)",
    customerVi: "Ngân hàng TMCP Ngoại thương Việt Nam (VCB)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Investment in procurement of load balancer and support services (Application Loadbalancer and Support)",
    descriptionVi: "Đầu tư mua sắm cho cân bằng tải và dịch vụ hỗ trợ (Application Loadbalancer và Support)",
    year: 2024,
    slug: "investment-in-load-balancer-and-application-security-services",
    customerImage: "/image/bank/logo-Vietcombank.png"
  },
  {
    id: 69,
    category: "SECURITY",
    title: "Procurement of HSM Equipment (HSM Thay thế HSMPayShield9000)",
    titleVi: "Mua sắm thiết bị HSM thay thế HSM PayShield9000",
    customer: "Joint Stock Commercial Bank for Foreign Trade of Vietnam (VCB)",
    customerVi: "Ngân hàng TMCP Ngoại thương Việt Nam (VCB)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Procurement of HSM equipment to replace HSM PayShield9000",
    descriptionVi: "Mua sắm thiết bị HSM thay thế HSM PayShield9000",
    year: 2023,
    slug: "procurement-of-hsm-equipment-replacement",
    customerImage: "/image/bank/logo-Vietcombank.png"
  },
  {
    id: 70,
    category: "SECURITY",
    title: "Investment in Firewall Management and Optimization",
    titleVi: "Đầu tư phần mềm quản lý và tối ưu hóa chính sách bảo mật trên firewall cho Vietcombank",
    customer: "Joint Stock Commercial Bank for Foreign Trade of Vietnam (VCB)",
    customerVi: "Ngân hàng TMCP Ngoại thương Việt Nam (VCB)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Investment in management software and optimization of security policies on the firewall for Vietcombank",
    descriptionVi: "Đầu tư phần mềm quản lý và tối ưu hóa chính sách bảo mật trên firewall cho Vietcombank",
    year: 2025,
    slug: "investment-in-firewall-management-and-optimization",
    customerImage: "/image/bank/logo-Vietcombank.png"
  },
  {
    id: 71,
    category: "SECURITY",
    title: "Supply of Security Equipment for Agribank",
    titleVi: "Trang bị thiết bị bảo mật ứng dụng",
    customer: "Vietnam Bank for Agriculture and Rural Development (Agribank)",
    customerVi: "Ngân hàng Nông nghiệp và Phát triển nông thôn Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Equipping application security devices",
    descriptionVi: "Trang bị thiết bị bảo mật ứng dụng",
    year: 2025,
    slug: "supply-of-security-equipment-for-agribank",
    customerImage: "/image/bank/logo-Agribank.png"
  },
  {
    id: 72,
    category: "SECURITY",
    title: "Supply and Installation of Network Security Equipment for Bac A Bank",
    titleVi: "Cung cấp, lắp đặt và tích hợp hệ thống thiết bị bảo mật cho Ngân hàng Bắc Á",
    customer: "Amigo Technologies Joint Stock Company",
    customerVi: "Công ty Cổ phần Công nghệ Bằng Hữu",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply, installation, and integration of security equipment systems for Bac A Bank",
    descriptionVi: "Cung cấp, lắp đặt và tích hợp hệ thống thiết bị bảo mật cho Ngân hàng Bắc Á",
    year: 2021,
    slug: "supply-and-installation-of-network-security-equipment-for-bac-a-bank",
    customerImage: "/image/enterprise/logo-AMIGO.png"
  },
  {
    id: 73,
    category: "SECURITY",
    title: "Website Security Assessment via SkyHigh",
    titleVi: "Giải pháp bảo mật truy cập web SkyHigh",
    customer: "Joint Stock Commercial Bank for Foreign Trade of Vietnam (VCB)",
    customerVi: "Ngân hàng TMCP Ngoại thương Việt Nam (VCB)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "SkyHigh web access security solution",
    descriptionVi: "Giải pháp bảo mật truy cập web SkyHigh",
    year: 2021,
    slug: "website-security-assessment-via-skyhigh",
    customerImage: "/image/bank/logo-Vietcombank.png"
  },
  {
    id: 74,
    category: "SECURITY",
    title: "Supply, Installation, and Integration of Storage at Data Center",
    titleVi: "Cung cấp, lắp đặt và tích hợp thiết bị lưu trữ tại trung tâm dữ liệu",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply, installation, and integration of storage equipment at the data center",
    descriptionVi: "Cung cấp, lắp đặt và tích hợp thiết bị lưu trữ tại trung tâm dữ liệu",
    year: 2021,
    slug: "supply-installation-and-integration-of-storage-at-data-center",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 75,
    category: "SECURITY",
    title: "Supply and Deployment of Integrated Firewall for MB Bank Network",
    titleVi: "Cung cấp, triển khai lắp đặt tường lửa ứng dụng web tích hợp vào hệ thống MB Bank",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply and deployment of integrated web application firewall for MB Bank system",
    descriptionVi: "Cung cấp, triển khai lắp đặt tường lửa ứng dụng web tích hợp vào hệ thống MB Bank",
    year: 2020,
    slug: "supply-and-deployment-of-integrated-firewall-for-mb-bank-network",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 76,
    category: "SECURITY",
    title: "Replacement of Firewall Switch Module",
    titleVi: "Thay thế, bổ sung thiết bị Firewall Switch Module - 6509 - DR (module Core DR)",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Replacement and supplement of Firewall Switch Module - 6509 - DR (Core DR module)",
    descriptionVi: "Thay thế, bổ sung thiết bị Firewall Switch Module - 6509 - DR (module Core DR)",
    year: 2020,
    slug: "replacement-of-firewall-switch-module",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 77,
    category: "SECURITY",
    title: "Supply of Load Balancer Services for Core Banking",
    titleVi: "Cung cấp dịch vụ cho các chi nhánh cân bằng tải của hệ thống Corebanking",
    customer: "Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV)",
    customerVi: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Supply of load balancer services for Corebanking system branches",
    descriptionVi: "Cung cấp dịch vụ cho các chi nhánh cân bằng tải của hệ thống Corebanking",
    year: 2025,
    slug: "supply-of-load-balancer-services-for-core-banking",
    customerImage: "/image/bank/logo-BIDV.png"
  },
  {
    id: 78,
    category: "SECURITY",
    title: "Supply of Security Audit and Management Services for CNTT System",
    titleVi: "Cung cấp dịch vụ Giá bản quyền cho các giải pháp bảo mật và giám sát hệ thống CNTT cho Ngân hàng Bắc Á",
    customer: "Amigo Technologies Joint Stock Company",
    customerVi: "Công ty Cổ phần Công nghệ Bằng Hữu",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of license rights services for security and IT system monitoring solutions for Bac A Bank",
    descriptionVi: "Cung cấp dịch vụ Giá bản quyền cho các giải pháp bảo mật và giám sát hệ thống CNTT cho Ngân hàng Bắc Á",
    year: 2025,
    slug: "supply-of-security-audit-and-management-services-for-cntt-system",
    customerImage: "/image/enterprise/logo-AMIGO.png"
  },
  {
    id: 79,
    category: "SECURITY",
    title: "Supply of Private Cloud Firewall",
    titleVi: "Cung cấp hệ thống tường lửa ứng dụng Private cloud",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of Private Cloud application firewall system",
    descriptionVi: "Cung cấp hệ thống tường lửa ứng dụng Private cloud",
    year: 2024,
    slug: "supply-of-private-cloud-firewall",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 80,
    category: "SECURITY",
    title: "Procurement of Firewall for Phase 1 of Data Center",
    titleVi: "Mua sắm Firewall chi nhánh, toà nhà đợt 1",
    customer: "Viet Nam Joint Stock Commercial Bank for Industry and Trade (Vietinbank)",
    customerVi: "Ngân hàng TMCP Công thương Việt Nam (Vietinbank)",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Procurement of Firewall for branches and building (Phase 1)",
    descriptionVi: "Mua sắm Firewall chi nhánh, toà nhà đợt 1",
    year: 2024,
    slug: "procurement-of-firewall-for-phase-1-of-data-center",
    customerImage: "/image/bank/logo-Vietinbank.png"
  },
  {
    id: 81,
    category: "SECURITY",
    title: "Procurement of Threat Intelligence License",
    titleVi: "Mua bản license giải pháp Threat Intelligence",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Procurement of Threat Intelligence solution license",
    descriptionVi: "Mua bản license giải pháp Threat Intelligence",
    year: 2023,
    slug: "procurement-of-threat-intelligence-license",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 82,
    category: "SECURITY",
    title: "Supply and Installation of Imperva Web Application Firewall for BankLab",
    titleVi: "Cung cấp, lắp đặt hệ thống tường lửa ứng dụng Imperva web cho BankLab",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply and installation of Imperva web application firewall system for BankLab",
    descriptionVi: "Cung cấp, lắp đặt hệ thống tường lửa ứng dụng Imperva web cho BankLab",
    year: 2024,
    slug: "supply-and-installation-of-imperva-web-application-firewall-for-banklab",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 83,
    category: "SECURITY",
    title: "Valuation of Licensing for Security and Network System",
    titleVi: "Giá bản quyền phần mềm và các dịch vụ bảo hành, bảo trì thiết bị để vận hành an toàn hệ thống thông tin",
    customer: "Ministry of Culture, Sports and Tourism's IT Center",
    customerVi: "Trung tâm Công nghệ Thông tin - Bộ văn hóa thể thao và du lịch",
    address: "Hai Ba Trung Ward, Hanoi",
    addressVi: "Phường Hai Bà Trưng, Hà Nội",
    description: "Valuation of software licensing and warranty/maintenance services for safe operation of the information system",
    descriptionVi: "Giá bản quyền phần mềm và các dịch vụ bảo hành, bảo trì thiết bị để vận hành an toàn hệ thống thông tin",
    year: 2024,
    slug: "valuation-of-licensing-for-security-and-network-system",
    customerImage: "/image/govern/logo-BVH.png"
  },
  {
    id: 84,
    category: "SECURITY",
    title: "Supply and Installation of VDI Firewall",
    titleVi: "Cung cấp lắp đặt hệ thống tường lửa VDI",
    customer: "Military Commercial Joint Stock Bank (MB Bank)",
    customerVi: "Ngân hàng TMCP Quân đội (MB Bank)",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply and installation of VDI firewall system",
    descriptionVi: "Cung cấp lắp đặt hệ thống tường lửa VDI",
    year: 2022,
    slug: "supply-and-installation-of-vdi-firewall",
    customerImage: "/image/bank/logo-MBBank.png"
  },
  {
    id: 85,
    category: "SECURITY",
    title: "Valuation of Licensing for Security and IT System",
    titleVi: "Giá bản quyền phần mềm và các dịch vụ bảo hành, bảo trì thiết bị để vận hành an toàn hệ thống thông tin",
    customer: "Ministry of Culture, Sports and Tourism's IT Center",
    customerVi: "Trung tâm Công nghệ Thông tin - Bộ văn hóa thể thao và du lịch",
    address: "Hai Ba Trung Ward, Hanoi",
    addressVi: "Phường Hai Bà Trưng, Hà Nội",
    description: "Valuation of software licensing and warranty/maintenance services for safe operation of the information system",
    descriptionVi: "Giá bản quyền phần mềm và các dịch vụ bảo hành, bảo trì thiết bị để vận hành an toàn hệ thống thông tin",
    year: 2023,
    slug: "valuation-of-licensing-for-security-and-it-system",
    customerImage: "/image/govern/logo-BVH.png"
  },
  {
    id: 86,
    category: "SECURITY",
    title: "Supply of Core Firewall for TH Milk's Central Data Center",
    titleVi: "Cung cấp thiết bị tường lửa Core Firewall bảo vệ phân vùng máy chủ DC của TH",
    customer: "TH Milk Joint Stock Company (TH)",
    customerVi: "Công ty Cổ phần Thực phẩm Sữa TH",
    address: "Nghe An",
    addressVi: "Nghệ An",
    description: "Supply of Core Firewall equipment to protect the server partition in TH's Data Center",
    descriptionVi: "Cung cấp thiết bị tường lửa Core Firewall bảo vệ phân vùng máy chủ DC của TH",
    year: 2022,
    slug: "supply-of-core-firewall-for-th-milk-central-data-center",
    customerImage: "/image/enterprise/logo-TH.png"
  },
  {
    id: 87,
    category: "SECURITY",
    title: "Supply of HSM Security Equipment",
    titleVi: "Trang bị thiết bị bảo mật HSM",
    customer: "Military Insurance Corporation (MIC)",
    customerVi: "Tổng Công ty Bảo hiểm Quân đội (MIC)",
    address: "Dong Da Ward, Hanoi",
    addressVi: "Phường Đống Đa, Hà Nội",
    description: "Equipping HSM security devices",
    descriptionVi: "Trang bị thiết bị bảo mật HSM",
    year: 2017,
    slug: "supply-of-hsm-security-equipment",
    customerImage: "/image/bank/logo-MIC.png"
  },
  // {
  //   id: 43,
  //   category: "M&E",
  //   title: "Supply of Server, Network, Communication, Storage, and Server Equipment",
  //   titleVi: "Cung cấp hệ thống máy chủ, thiết bị mạng máy tính, truyền hình cáp, hệ thống lưu trữ và hạ tầng mạng chủ",
  //   customer: "Hong Co Information Technology and Trading Company Branch",
  //   customerVi: "Chi nhánh công ty TNHH Tin học và Thương mại Hồng Cơ",
  //   address: "",
  //   addressVi: "",
  //   description: "Supply of server systems, computer network equipment, cable TV, storage systems, and master network infrastructure",
  //   descriptionVi: "Cung cấp hệ thống máy chủ, thiết bị mạng máy tính, truyền hình cáp, hệ thống lưu trữ và hạ tầng mạng chủ",
  //   year: 2016,
  //   slug: "supply-of-server-network-communication-storage-and-server-equipment-hk-itc",
  //   customerImage: ""
  // },
  {
    id: 44,
    category: "M&E",
    title: "UPS, IT Rack, and Security System",
    titleVi: "Hệ thống UPS, Hệ thống tủ rack, Hệ thống làm mát, Hệ thống báo cháy..",
    customer: "Vietnam Petroleum Institute (VPI)",
    customerVi: "Viện Dầu khí Việt Nam",
    address: "Cau Giay Ward, Hanoi",
    addressVi: "Phường Cầu Giấy, Hà Nội",
    description: "Supply of UPS system, IT rack system, cooling system, fire alarm system, etc",
    descriptionVi: "Hệ thống UPS, Hệ thống tủ rack, Hệ thống làm mát, Hệ thống báo cháy..",
    year: 2016,
    slug: "ups-it-rack-and-security-system-vpi",
    customerImage: "/image/enterprise/logo-VPI.png"
  },
  {
    id: 45,
    category: "M&E",
    title: "Supply and Installation of High-Precision Clock System",
    titleVi: "Cung cấp và lắp đặt hệ thống điều hoà chính xác",
    customer: "VIETTEL-CHT Company Limited",
    customerVi: "Công ty TNHH VIETTEL - CHT",
    address: "Thach That District, Hanoi",
    addressVi: "Huyện Thạch Thất, Hà Nội",
    description: "Supply and installation of high-precision air conditioning systems",
    descriptionVi: "Cung cấp và lắp đặt hệ thống điều hoà chính xác",
    year: 2024,
    slug: "supply-and-installation-of-high-precision-clock-system-viettel-cht",
    customerImage: "/image/enterprise/logo-VIETTELIDC.png"
  },
  {
    id: 46,
    category: "M&E",
    title: "Supply and Installation of High-Precision Clock System",
    titleVi: "Cung cấp và lắp đặt hệ thống điều hoà chính xác",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply and installation of high-precision air conditioning systems",
    descriptionVi: "Cung cấp và lắp đặt hệ thống điều hoà chính xác",
    year: 2016,
    slug: "supply-and-installation-of-high-precision-clock-system-vtvcab-1",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 47,
    category: "M&E",
    title: "Supply and Installation of Rack, Cable Tray, Lighting System",
    titleVi: "Cung cấp và lắp đặt hệ thống tủ rack, vách chứa, sàn nâng, thang máng cáp, chiếu sáng",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply and installation of rack systems, cable trays, raised floors, cable ladders, and lighting",
    descriptionVi: "Cung cấp và lắp đặt hệ thống tủ rack, vách chứa, sàn nâng, thang máng cáp, chiếu sáng",
    year: 2016,
    slug: "supply-and-installation-of-rack-cable-tray-lighting-system-vtvcab",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 48,
    category: "M&E",
    title: "Supply of UPS Equipment for Headend Rooms (2016)",
    titleVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of power supply equipment and accessories for the 'Investment in continuous power system for Headend rooms in provinces' project",
    descriptionVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    year: 2016,
    slug: "supply-of-ups-equipment-for-headend-rooms-2016-1",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 49,
    category: "M&E",
    title: "Supply of UPS Equipment for Headend Rooms (2017)",
    titleVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of power supply equipment and accessories for the 'Investment in continuous power system for Headend rooms in provinces' project",
    descriptionVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    year: 2017,
    slug: "supply-of-ups-equipment-for-headend-rooms-2017",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 50,
    category: "M&E",
    title: "Supply of UPS Equipment for Headend Rooms (2014)",
    titleVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of power supply equipment and accessories for the 'Investment in continuous power system for Headend rooms in provinces' project",
    descriptionVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    year: 2014,
    slug: "supply-of-ups-equipment-for-headend-rooms-2014",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 51,
    category: "M&E",
    title: "Supply of UPS for News Agency Technical Center",
    titleVi: "Cung cấp hệ thống UPS thuộc dự án nâng cấp thiết bị tại các đơn vị thông tin đối ngoại của TTXVN",
    customer: "VNA Technical Center (TTXVN)",
    customerVi: "Trung tâm kỹ thuật Thông tấn - TTXVN",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Supply of UPS system for the equipment upgrade project at VNA's foreign information units",
    descriptionVi: "Cung cấp hệ thống UPS thuộc dự án nâng cấp thiết bị tại các đơn vị thông tin đối ngoại của TTXVN",
    year: 2017,
    slug: "supply-of-ups-for-news-agency-technical-center",
    customerImage: "/image/enterprise/logo-TTXVN.png"
  },
  {
    id: 52,
    category: "M&E",
    title: "Supply of UPS Equipment for Headend Rooms (2016-2)",
    titleVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of power supply equipment and accessories for the 'Investment in continuous power system for Headend rooms in provinces' project",
    descriptionVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    year: 2016,
    slug: "supply-of-ups-equipment-for-headend-rooms-2016-2",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 53,
    category: "M&E",
    title: "Supply of UPS Equipment for Headend Rooms (2016-3)",
    titleVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of power supply equipment and accessories for the 'Investment in continuous power system for Headend rooms in provinces' project",
    descriptionVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    year: 2016,
    slug: "supply-of-ups-equipment-for-headend-rooms-2016-3",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 54,
    category: "M&E",
    title: "Supply of UPS Equipment for Headend Rooms (2016-4)",
    titleVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of power supply equipment and accessories for the 'Investment in continuous power system for Headend rooms in provinces' project",
    descriptionVi: "Cung cấp thiết bị cấp nguồn và phụ kiện' thuộc dự án \"Đầu tư hệ thống nguồn điện liên tục cho phòng máy Headend các tỉnh\"",
    year: 2016,
    slug: "supply-of-ups-equipment-for-headend-rooms-2016-4",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 55,
    category: "BROADCASTING",
    title: "Supply and Installation of Transmitting Station (Huong Khe, Ha Tinh)",
    titleVi: "Cung cấp và lắp đặt trạm phát, phát sóng truyền hình huyện Hương Khê, tỉnh Hà Tĩnh",
    customer: "Ha Tinh Civil and Industrial Construction Project Management Board",
    customerVi: "Ban QLDA đầu tư xây dựng công trình dân dụng và công nghiệp tỉnh Hà Tĩnh",
    address: "Ha Tinh",
    addressVi: "Hà Tĩnh",
    description: "Supply and installation of transmitting station and TV broadcasting in Huong Khe District, Ha Tinh Province",
    descriptionVi: "Cung cấp và lắp đặt trạm phát, phát sóng truyền hình huyện Hương Khê, tỉnh Hà Tĩnh",
    year: 2019,
    slug: "supply-and-installation-of-transmitting-station-huong-khe",
    customerImage: "/image/govern/logo-THT.png"
  },
  {
    id: 56,
    category: "BROADCASTING",
    title: "Renovation, Repair, and Upgrade of Rotary Antenna Power",
    titleVi: "Cải tạo, sửa chữa, thiết bị bị nâng cấp trường quay",
    customer: "People's Television Center",
    customerVi: "Trung tâm Truyền hình Nhân Dân",
    address: "Hoan Kiem Ward, Hanoi",
    addressVi: "Phường Hoàn Kiếm, Hà Nội",
    description: "Renovation, repair, and upgrade of rotary antenna power for the studio",
    descriptionVi: "Cải tạo, sửa chữa, thiết bị bị nâng cấp trường quay",
    year: 2019,
    slug: "renovation-repair-and-upgrade-of-rotary-antenna-power",
    customerImage: "/image/enterprise/logo-THND.jpg"
  },
  {
    id: 57,
    category: "BROADCASTING",
    title: "Renovation, Repair, and Upgrade of Technical Production Center",
    titleVi: "Cải tạo, sửa chữa và nâng cấp trung tâm kỹ thuật sản xuất chương trình",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Renovation, repair, and upgrade of the technical center for program production",
    descriptionVi: "Cải tạo, sửa chữa và nâng cấp trung tâm kỹ thuật sản xuất chương trình",
    year: 2018,
    slug: "renovation-repair-and-upgrade-of-technical-production-center",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 58,
    category: "BROADCASTING",
    title: "Supply and Installation of Transmitting Station (Ky Anh Town, Ha Tinh)",
    titleVi: "Cung cấp và lắp đặt trạm phát, phát sóng truyền hình thị xã Kỳ Anh, tỉnh Hà Tĩnh",
    customer: "Ha Tinh Civil and Industrial Construction Project Management Board",
    customerVi: "Ban QLDA đầu tư xây dựng công trình dân dụng và công nghiệp tỉnh Hà Tĩnh",
    address: "Ha Tinh",
    addressVi: "Hà Tĩnh",
    description: "Supply and installation of transmitting station and TV broadcasting in Ky Anh Town, Ha Tinh Province",
    descriptionVi: "Cung cấp và lắp đặt trạm phát, phát sóng truyền hình thị xã Kỳ Anh, tỉnh Hà Tĩnh",
    year: 2019,
    slug: "supply-and-installation-of-transmitting-station-ky-anh",
    customerImage: "/image/govern/logo-THT.png"
  },
  {
    id: 59,
    category: "BROADCASTING",
    title: "Supply of Analog Decoder System and Accessories (2018)",
    titleVi: "Cung cấp hệ thống thiết bị điều chế tín hiệu Analog và phụ kiện",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of Analog signal decoding equipment system and accessories",
    descriptionVi: "Cung cấp hệ thống thiết bị điều chế tín hiệu Analog và phụ kiện",
    year: 2018,
    slug: "supply-of-analog-decoder-system-and-accessories-2018",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 60,
    category: "BROADCASTING",
    title: "Supply of Analog Decoder System and Accessories (2016)",
    titleVi: "Cung cấp hệ thống thiết bị điều chế tín hiệu Analog và phụ kiện",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of Analog signal decoding equipment system and accessories",
    descriptionVi: "Cung cấp hệ thống thiết bị điều chế tín hiệu Analog và phụ kiện",
    year: 2016,
    slug: "supply-of-analog-decoder-system-and-accessories-2016",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 61,
    category: "BROADCASTING",
    title: "Supply of Fine Communication System for VTVcab (No. 3/84 Ngoc Khanh)",
    titleVi: "Cung cấp hệ thống thông tin vệ tinh cho VTVcab tại số 3/84 Ngọc Khánh",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of satellite communication system for VTVcab at No. 3/84 Ngoc Khanh",
    descriptionVi: "Cung cấp hệ thống thông tin vệ tinh cho VTVcab tại số 3/84 Ngọc Khánh",
    year: 2016,
    slug: "supply-of-fine-communication-system-for-vtvcab-ngoc-khanh",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 62,
    category: "BROADCASTING",
    title: "Supply of IP QAM and 24-Port Switch Equipment",
    titleVi: "Cung cấp thiết bị điều chế IP QAM và Switch 24 Port",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of IP QAM modulator and 24 Port Switch equipment",
    descriptionVi: "Cung cấp thiết bị điều chế IP QAM và Switch 24 Port",
    year: 2016,
    slug: "supply-of-ip-qam-and-24-port-switch-equipment-1",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 63,
    category: "BROADCASTING",
    title: "Investment in Backup Servers for Branches (2016)",
    titleVi: "Đầu tư thiết bị chạy chữ cho các đơn vị năm 2016",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Investment in ticker servers for units in 2016",
    descriptionVi: "Đầu tư thiết bị chạy chữ cho các đơn vị năm 2016",
    year: 2016,
    slug: "investment-in-backup-servers-for-branches-2016",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 64,
    category: "BROADCASTING",
    title: "Supply of Receiving and Distribution System",
    titleVi: "Cung cấp hệ thống nhận và phân phối kênh",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of channel receiving and distribution system",
    descriptionVi: "Cung cấp hệ thống nhận và phân phối kênh",
    year: 2020,
    slug: "supply-of-receiving-and-distribution-system",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  },
  {
    id: 65,
    category: "BROADCASTING",
    title: "Supply of IP QAM and 24-Port Switch Equipment (2)",
    titleVi: "Cung cấp thiết bị điều chế IP QAM và Switch 24 Port",
    customer: "Vietnam Cable Television Corporation (VTVcab)",
    customerVi: "Tổng Công ty truyền hình cáp Việt Nam",
    address: "Ba Dinh Ward, Hanoi",
    addressVi: "Phường Ba Đình, Hà Nội",
    description: "Supply of IP QAM modulator and 24 Port Switch equipment",
    descriptionVi: "Cung cấp thiết bị điều chế IP QAM và Switch 24 Port",
    year: 2016,
    slug: "supply-of-ip-qam-and-24-port-switch-equipment-2",
    customerImage: "/image/enterprise/logo-VTVcab.png"
  }
];

const WorkShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(0);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate(); // thêm dòng này
  const [isMobile, setIsMobile] = useState(false);

  // Responsive items per page
  const ITEMS_PER_PAGE = isMobile ? 2 : 4;

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredWorks = activeCategory === 'ALL'
    ? works
    : works.filter(work => work.category === activeCategory);

  const totalPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE);

  const getCurrentPageItems = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return filteredWorks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Track navigation direction for animation
  const [navigationDirection, setNavigationDirection] = useState<'next' | 'prev' | 'auto'>('auto');

  const handlePrevious = () => {
    setNavigationDirection('prev');
    setCurrentPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
  };

  const handleNext = () => {
    setNavigationDirection('next');
    setCurrentPage(currentPage === totalPages - 1 ? 0 : currentPage + 1);
  };

  const getAnimationProps = () => {
    if (navigationDirection === 'next') {
      return {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -200 }
      };
    } else if (navigationDirection === 'prev') {
      return {
        initial: { opacity: 0, x: -200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 200 }
      };
    } else {
      // Auto rotation
      return {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -200 }
      };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNavigationDirection('auto');
      setCurrentPage((prevPage) =>
        prevPage === totalPages - 1 ? 0 : prevPage + 1
      );
    }, 15000); // Rotate every 15 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  useEffect(() => {
    setCurrentPage(0); // Reset to first page when category changes
  }, [activeCategory]);

  useEffect(() => {
    // Reset to first page when responsive layout changes
    setCurrentPage(0);
  }, [isMobile]);

  return (
    <section className="py-10 md:py-20 bg-gray-50 relative z-10">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-16 px-2 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            {currentLanguage === 'vi' ? 'Danh mục dự án' : 'Our Portfolio'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase text-gray-900">
            {currentLanguage === 'vi' ? 'CÁC DỰ ÁN TIÊU BIỂU' : 'FEATURED PROJECT'}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto my-3 md:my-6"></div>
          <p className="text-gray-600">
            {currentLanguage === 'vi'
              ? 'Khám phá danh mục dự án đa dạng của chúng tôi trong nhiều lĩnh vực khác nhau.'
              : 'Explore our diverse portfolio across various sectors.'}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2 md:px-0">
          {categories.map((category, index) => (
            <motion.button
              key={category.en}
              className={`px-1 md:px-3  md:px-6 py-1 md:py-2 text-sm font-medium transition-all duration-300 
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
        <div className="relative overflow-hidden px-2 md:px-12">
          {/* Previous Button */}
          {totalPages > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              title="Previous page"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {totalPages > 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              title="Next page"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {filteredWorks.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className={`grid gap-4 md:gap-6 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}
                {...getAnimationProps()}
                transition={{ duration: 0.5 }}
              >
                {getCurrentPageItems().map((work, index) => (
                  <motion.div
                    key={work.id}
                    className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => navigate(`/project/${work.slug}`)}
                  >
                    {/* Image section - 75% height */}
                    <div className="aspect-[4/3] bg-white flex items-center justify-center p-2 md:p-4 border-b border-gray-100">
                      <img
                        src={work.customerImage}
                        alt={work.title}
                        className="max-h-12 md:max-h-20 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center p-2 md:p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 text-white">
                            {currentLanguage === 'vi' ? work.titleVi : work.title}
                          </h3>
                          <p className="text-xs md:text-sm text-white/80 font-semibold">
                            {currentLanguage === 'vi' ? work.customerVi : work.customer}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project name section - 25% height */}
                    <div className="h-[25%] p-2 md:p-3 flex items-center justify-center bg-white">
                      <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-600 text-center w-full overflow-hidden">
                        <span className="line-clamp-2" title={currentLanguage === 'vi' ? work.titleVi : work.title}>
                          {currentLanguage === 'vi' ? work.titleVi : work.title}
                        </span>
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 md:py-24"
            >
              <div className="max-w-md mx-auto px-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {currentLanguage === 'vi' ? 'Không có dự án nào trong danh mục này' : 'No projects in this category'}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  {currentLanguage === 'vi' 
                    ? 'Vui lòng chọn danh mục khác để xem các dự án của chúng tôi.' 
                    : 'Please select another category to view our projects.'}
                </p>
                <button
                  onClick={() => setActiveCategory('ALL')}
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {currentLanguage === 'vi' ? 'Xem tất cả dự án' : 'View All Projects'}
                </button>
              </div>
            </motion.div>
          )}

          {/* Navigation Dots */}
          {totalPages > 1 && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  type='button'
                  title={`Navigate to page ${index + 1}`}
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
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