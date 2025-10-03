import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { positions } from '../components/pages/Careers';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/ui/Breadcrumb';

const companyProfile = {
    name: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN NETCORP',
    industry: 'Technology',
    address: 'Tầng 3, Tòa Casa, Ngõ 78 Duy Tân, P. Cầu Giấy, Hà Nội',
    addressEn: '3rd Floor, Casa Building, 78 Duy Tan Alley, Cau Giay, Hanoi',
    website: 'https://netcorp.vn',
    email: 'info@netcorp.vn',
    phone: '(+84) 24.777.01912',
    size: '< 50 người',
    sizeEn: '< 50 employees',
    description: 'NETCORP cung cấp dịch vụ tổng thể, triển khai trung tâm dữ liệu, hệ thống mạng, máy chủ, điện nhẹ, điều hòa, giám sát, bảo mật, dịch vụ quản lý và bảo hành, bảo trì. Đội ngũ chuyên gia giàu kinh nghiệm, uy tín, đã đồng hành cùng nhiều khách hàng lớn trong các lĩnh vực khác nhau.',
    descriptionEn: 'NETCORP provides comprehensive services, implements data centers, network systems, servers, ELV, air conditioning, monitoring, security, management, warranty and maintenance services. Our experienced and reputable experts have accompanied many large customers in various fields.'
};

const CareerDetail: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const isEn = i18n.language === 'en';
    const position = positions.find(pos => pos.slug === slug);

    if (!position) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-500 mb-4">
                        {isEn ? "Position not found!" : "Không tìm thấy vị trí tuyển dụng!"}
                    </h2>
                    <button
                        onClick={() => navigate('/careers')}
                        className="px-6 py-2 bg-primary text-white rounded shadow hover:bg-primary-dark transition"
                    >
                        {isEn ? "Back to list" : "Quay lại danh sách"}
                    </button>
                </div>
            </div>
        );
    }

    // Danh sách các vị trí cùng khối (technology/business), trừ vị trí hiện tại
    const similarPositions = positions.filter(
        pos => pos.type === position.type && pos.slug !== position.slug
    );

    return (
        <section className='relative'>
            {/* Banner 1 */}
            <div className="relative h-[40vh] mt-0 w-full">
                <div className="fixed top-0 left-0 right-0">
                    <img
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
                        alt="Career Banner"
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
                            {isEn ? "Career Detail" : "Chi tiết tuyển dụng"}
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
                                    },
                                    {
                                        name: {
                                            en: 'Career Detail',
                                            vi: 'Chi tiết tuyển dụng'
                                        }
                                    }
                                ]}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Banner 2 */}
            {/* <div className="relative h-[40vh] w-full flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
                    alt="Career Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
                        {isEn ? "Career Detail" : "Chi tiết tuyển dụng"}
                    </h1>
                    <div className="text-lg opacity-80">
                        {position.type === 'technology'
                            ? (isEn ? 'Technology Block' : 'Khối Công Nghệ')
                            : (isEn ? 'Business Block' : 'Khối Kinh Doanh')}
                    </div>
                </div>
            </div> */}

            {/* Main Detail Section */}
            <div className="bg-white">
                {/* Main Content Section */}
                <div className="relative py-8 md:py-10 bg-white z-10 mt-12 md:mt-16">
                    <div className="container mx-auto px-2 sm:px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Sidebar: Vị trí liên quan */}
                            <aside className="md:col-span-1 bg-white rounded-2xl shadow-lg p-8 h-fit">
                                {
                                    similarPositions.length > 0 && (
                                        <h3 className="text-xl font-bold text-primary mb-6 text-left uppercase">
                                            {isEn ? "Similar Positions" : "Vị trí liên quan"}
                                        </h3>
                                    )
                                }
                                <div className={`space-y-6${similarPositions.length > 0 ? ' mb-8' : ''}`}>
                                    {similarPositions.map(pos => (
                                        <div
                                            key={pos.slug}
                                            className="relative bg-gray-50 rounded-xl shadow border hover:shadow-lg transition-all duration-300 p-4 cursor-pointer flex flex-col items-start gap-2"
                                            onClick={() => navigate(`/careers/${pos.slug}`)}
                                        >
                                            <h4 className="text-xl font-bold text-primary ">
                                                {isEn ? pos.titleEn : pos.title}
                                            </h4>
                                            <ul className="list-disc pl-4 text-sm">
                                                <li className="text-gray-600">
                                                    {isEn ? "Quantity" : "Số lượng"}: {pos.quantity}
                                                </li>
                                                <li className="text-gray-600">
                                                    {isEn ? "Deadline" : "Hạn ứng tuyển"}: {pos.deadline}
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => navigate('/careers')}
                                    className="w-full px-6 py-2 bg-primary text-white font-bold rounded shadow hover:bg-primary-dark transition"
                                >
                                    {isEn ? "Back to list" : "Quay lại danh sách"}
                                </button>
                            </aside>
                            {/* Main Info */}
                            <main className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-primary mb-2 text-left">
                                                {isEn ? position.titleEn : position.title}
                                            </h2>
                                            <div className="flex gap-4 mb-2">
                                                <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-700">
                                                    {isEn ? "Quantity" : "Số lượng"}: {position.quantity}
                                                </span>
                                                <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-700">
                                                    {isEn ? "Deadline" : "Hạn tuyển"}: {position.deadline}
                                                </span>
                                                <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-700">
                                                    {isEn ? "Salary" : "Mức lương"}: {isEn ? position.salaryEn : position.salary}
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="my-4 border-gray-300" />
                                        <div className="flex flex-col gap-8">
                                            <div>
                                                <h3 className="text-lg font-bold text-primary mb-3">
                                                    {isEn ? "Job Description" : "Mô tả công việc"}
                                                </h3>
                                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                                    {(isEn ? position.detail.responsibilitiesEn : position.detail.responsibilities).map((item, idx) => (
                                                        <li className='text-sm' key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-primary mb-3">
                                                    {isEn ? "Job Requirements" : "Yêu cầu công việc"}
                                                </h3>
                                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                                    {(isEn ? position.detail.requirementsEn : position.detail.requirements).map((item, idx) => (
                                                        <li className='text-sm' key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-primary mb-3">
                                                    {isEn ? "Benefits" : "Quyền lợi"}
                                                </h3>
                                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                                    {(isEn ? position.detail.benefitsEn : position.detail.benefits).map((item, idx) => (
                                                        <li className='text-sm' key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-2">
                                                <a
                                                    href={`mailto:${companyProfile.email}?subject=${isEn ? "Apply for position" : "Ứng tuyển vị trí"} ${isEn ? position.titleEn : position.title}`}
                                                    className="inline-block px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary-dark transition font-semibold"
                                                >
                                                    {isEn ? "Apply now" : "Ứng tuyển ngay"}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerDetail;