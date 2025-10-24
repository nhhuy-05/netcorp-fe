import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


// Import works từ WorkShowcase hoặc một file chung
import { works } from '../components/ui/WorkShowcase';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams(); // Lấy slug từ URL
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const navigate = useNavigate(); // Thêm để xử lý nút quay lại

    // Tìm dự án dựa trên slug
    const work = works.find(w => w.slug === slug);

    if (!work) return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-red-500">Project not found.</h2>
            </div>
        </section>
    );

    return (
        <motion.section
            id="project-detail"
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >            {/* Hero Banner */}
            <div className="relative h-[50vh] md:h-[40vh] mt-0 w-full">
                <div className="fixed top-0 left-0 right-0">
                    <img
                        src={work.customerImage || work.image}
                        alt={work.customer}
                        className="w-screen h-screen object-cover fixed"
                    />
                    <div className="fixed inset-0 bg-black/60"></div>
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
                    <div className="mt-12 md:mt-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 px-2">
                            {currentLanguage === 'vi' ? work.customerVi : work.customer}
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl px-4">
                            {currentLanguage === 'vi' ? work.titleVi : work.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="relative py-12 md:py-16 lg:py-20 bg-white z-10 mt-12 md:mt-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
                        {/* Left Column: Project Image */}
                        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg h-full flex items-center justify-center bg-white p-4 md:p-6 lg:p-8 min-h-[200px] md:min-h-[250px]">
                            {/* Nút/quay lại nằm phía trên ảnh */}
                            <button
                                onClick={() => navigate(-1)}
                                className="absolute top-3 left-3 md:top-4 md:left-4 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-white text-primary rounded-full shadow transition-all"
                                title={currentLanguage === 'vi' ? 'Quay lại' : 'Go Back'}
                            >
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <img
                                src={work.customerImage || work.image}
                                alt={work.customer}
                                className="max-w-full max-h-[60px] md:max-h-[100px] lg:max-h-160px w-auto object-contain mx-auto"
                            />
                            <div
                                className="absolute bottom-0 left-0 w-0 h-0 border-l-[60px] md:border-l-[80px] lg:border-l-[120px] border-t-[60px] md:border-t-[80px] lg:border-t-[120px] border-t-transparent"
                                style={{ borderLeftColor: 'var(--primary)' }}
                            ></div>
                        </div>

                        {/* Right Column: Project Details */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                                {currentLanguage === 'vi' ? (
                                    <>Dự án: <span className="text-primary">{work.titleVi}</span></>
                                ) : (
                                    <>Project: <span className="text-primary">{work.title}</span></>
                                )}
                            </h2>
                            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8">
                                <div>
                                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                                        {currentLanguage === 'vi'
                                            ? 'Thông tin chi tiết về dự án này được trình bày dưới đây:'
                                            : 'Detailed information about this project is presented below:'}
                                    </p>
                                </div>
                                <div className="bg-gray-50 md:bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
                                    <table className="w-full text-left border-collapse">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="p-2 md:p-4 text-gray-700 font-semibold text-sm md:text-base">{currentLanguage === 'vi' ? 'Tên khách hàng' : 'Customer Name'}</th>
                                                <td className="p-2 md:p-4 text-gray-900 text-sm md:text-base">
                                                    {currentLanguage === 'vi' ? work.customerVi : work.customer}
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="p-2 md:p-4 text-gray-700 font-semibold w-1/3 text-sm md:text-base">{currentLanguage === 'vi' ? 'Địa chỉ' : 'Address'}</th>
                                                <td className="p-2 md:p-4 text-gray-900 text-sm md:text-base">{
                                                    currentLanguage === 'vi' ? work.addressVi : work.address
                                                }</td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="p-2 md:p-4 text-gray-700 font-semibold text-sm md:text-base">{currentLanguage === 'vi' ? 'Mô tả' : 'Description'}</th>
                                                <td className="p-2 md:p-4 text-gray-900 text-sm md:text-base">{
                                                    currentLanguage === 'vi' ? work.descriptionVi : work.description
                                                }</td>
                                            </tr>
                                            <tr>
                                                <th className="p-2 md:p-4 text-gray-700 font-semibold text-sm md:text-base">{currentLanguage === 'vi' ? 'Năm thực hiện' : 'Year'}</th>
                                                <td className="p-2 md:p-4 text-gray-900 text-sm md:text-base">{work.year}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectDetail;