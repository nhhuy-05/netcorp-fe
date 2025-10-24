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

    // Danh sách các vị trí cùng khối (technology/business), trừ vị trí hiện tại
    const similarPositions = positions.filter(
        pos => pos.type === position?.type && pos.slug !== position?.slug
    );

    console.log('Similar Positions:', similarPositions);

    return (
        <section className='relative'>
            {/* Banner 1 */}
            <div className="relative h-[50vh] md:h-[40vh] mt-0 w-full">
                <div className="fixed top-0 left-0 right-0">
                    <img
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
                        alt="Career Banner"
                        className="w-screen h-screen object-cover fixed"
                    />
                    <div className="fixed inset-0 bg-black/60"></div>
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
                    <div className="mt-12 md:mt-16">
                        <motion.h1
                            className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 px-2"
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
            {
                !position ? (
                    // Empty State
                    <div className='min-h-500' >
                        <div className="bg-white">
                            <div className="relative py-8 md:py-10 lg:py-12 bg-white z-10 mt-8 md:mt-12 lg:mt-16">
                                <div className="container mx-auto px-4 md:px-6">
                                    <div className="flex flex-col items-center justify-center py-16 md:py-20">
                                        <div className="text-center mb-8">
                                            <div className="text-6xl md:text-8xl text-gray-300 mb-4">
                                                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h-.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                                {isEn ? "Position Not Found" : "Vị trí không tồn tại"}
                                            </h3>
                                            <p className="text-gray-600 max-w-md mx-auto">
                                                {isEn
                                                    ? "The job position you're looking for doesn't exist or has been removed."
                                                    : "Vị trí công việc bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ."}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => navigate(-1)}
                                            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition flex items-center gap-2"
                                        >
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                            {isEn ? "Go Back" : "Quay lại"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Main Detail Section */}
                        <div className="bg-white">
                            {/* Main Content Section */}
                            <div className="relative py-8 md:py-10 lg:py-12 bg-white z-10 mt-8 md:mt-12 lg:mt-16">
                                <div className="container mx-auto px-4 md:px-6">
                                    <div className={`grid grid-cols-1 ${similarPositions.length > 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-6 md:gap-8 lg:gap-10`}>
                                        {/* Sidebar: Vị trí liên quan */}
                                        {
                                            similarPositions.length > 0 && (
                                                <aside className="lg:col-span-1 order-2 lg:order-1 bg-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 h-fit">
                                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6 text-left uppercase">
                                                        {isEn ? "Similar Positions" : "Vị trí liên quan"}
                                                    </h3>
                                                    <div className={`space-y-4 md:space-y-6${similarPositions.length > 0 ? '' : ''}`}>
                                                        {similarPositions.map(pos => (
                                                            <div
                                                                key={pos.slug}
                                                                className="relative bg-gray-50 rounded-xl shadow border hover:shadow-lg transition-all duration-300 p-3 md:p-4 cursor-pointer flex flex-col items-start gap-2"
                                                                onClick={() => navigate(`/careers/${pos.slug}`)}
                                                            >
                                                                <h4 className="text-lg md:text-xl font-bold text-primary ">
                                                                    {isEn ? pos.titleEn : pos.title}
                                                                </h4>
                                                                <ul className="list-disc pl-4 text-xs md:text-sm">
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
                                                </aside>
                                            )
                                        }
                                        {/* Main Info */}
                                        <main className={`${similarPositions.length > 0 ? 'lg:col-span-2' : 'lg:col-span-1 lg:max-w-4xl mx-auto'} order-1 lg:order-2 bg-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8`}>
                                            <div className="flex flex-col items-start gap-6 md:gap-8">
                                                <div>
                                                    <div className="flex-1">
                                                        {/* Back button */}
                                                        <div className="flex items-center mb-2 md:mb-4 gap-2 md:gap-4">
                                                            <button
                                                                onClick={() => navigate(-1)}
                                                                className="md:top-4 md:left-4 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-transparent hover:bg-primary-dark text-primary rounded-full shadow transition-all"
                                                                title={!isEn ? 'Quay lại' : 'Go Back'}
                                                            >
                                                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                                        d="M15 19l-7-7 7-7" />
                                                                </svg>
                                                            </button>
                                                            <h2 className="text-xl md:text-2xl font-bold text-primary text-left">
                                                                {isEn ? position.titleEn : position.title}
                                                            </h2>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                                                            <span className="bg-gray-100 px-2 py-1 md:px-3 rounded text-sm md:text-base font-medium text-gray-700">
                                                                {isEn ? "Quantity" : "Số lượng"}: {position.quantity}
                                                            </span>
                                                            <span className="bg-gray-100 px-2 py-1 md:px-3 rounded text-sm md:text-base font-medium text-gray-700">
                                                                {isEn ? "Deadline" : "Hạn tuyển"}: {position.deadline}
                                                            </span>
                                                            <span className="bg-gray-100 px-2 py-1 md:px-3 rounded text-sm md:text-base font-medium text-gray-700">
                                                                {isEn ? "Salary" : "Mức lương"}: {isEn ? position.salaryEn : position.salary}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <hr className="my-3 md:my-4 border-gray-300" />
                                                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                                                        <div>
                                                            <h3 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-3">
                                                                {isEn ? "Job Description" : "Mô tả công việc"}
                                                            </h3>
                                                            <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-gray-700">
                                                                {(isEn ? position.detail.responsibilitiesEn : position.detail.responsibilities).map((item, idx) => (
                                                                    <li className='text-sm md:text-base leading-relaxed' key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-3">
                                                                {isEn ? "Job Requirements" : "Yêu cầu công việc"}
                                                            </h3>
                                                            <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-gray-700">
                                                                {(isEn ? position.detail.requirementsEn : position.detail.requirements).map((item, idx) => (
                                                                    <li className='text-sm md:text-base leading-relaxed' key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-3">
                                                                {isEn ? "Benefits" : "Quyền lợi"}
                                                            </h3>
                                                            <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-gray-700">
                                                                {(isEn ? position.detail.benefitsEn : position.detail.benefits).map((item, idx) => (
                                                                    <li className='text-sm md:text-base leading-relaxed' key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="mt-4 md:mt-6 flex justify-end">
                                                            <a
                                                                href={`mailto:${companyProfile.email}?subject=${isEn ? "Apply for position" : "Ứng tuyển vị trí"} ${isEn ? position.titleEn : position.title}`}
                                                                className="inline-block px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded shadow hover:bg-primary-dark transition font-semibold text-sm md:text-base"
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
                    </div>)
            }
        </section>
    );
};

export default CareerDetail;