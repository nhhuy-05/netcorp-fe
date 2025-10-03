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
            <div className="relative h-[40vh] mt-0 w-full">
                <div className="fixed top-0 left-0 right-0">
                    <img
                        src={work.customerImage || work.image}
                        alt={work.customer}
                        className="w-screen h-screen object-cover fixed"
                    />
                    <div className="fixed inset-0 bg-black/60"></div>
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
                    <div className="mt-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {currentLanguage === 'vi' ? work.customerVi : work.customer}
                        </h1>
                        <p className="text-lg md:text-xl">
                            {currentLanguage === 'vi' ? work.titleVi : work.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="relative py-20 bg-white z-10 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
                        {/* Left Column: Project Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-lg h-full flex min-w-[400px] md:min-w-[520px]">
                            {/* Nút/quay lại nằm phía trên ảnh */}
                            <button
                                onClick={() => navigate(-1)}
                                className="absolute top-4 left-4 z-10 flex items-center justify-center w-12 h-12 bg-black/30 hover:bg-white text-primary rounded-full shadow transition-all"
                                title={currentLanguage === 'vi' ? 'Quay lại' : 'Go Back'}
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <img
                                src={work.customerImage || work.image}
                                alt={work.customer}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute bottom-0 left-0 w-0 h-0 border-l-[120px] border-t-[120px] border-t-transparent"
                                style={{ borderLeftColor: 'var(--primary)' }}
                            ></div>
                        </div>

                        {/* Right Column: Project Details */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6"> {/* Giảm kích thước chữ */}
                                {currentLanguage === 'vi' ? (
                                    <>DỰ ÁN <span className="text-primary">{work.titleVi}</span></>
                                ) : (
                                    <>PROJECT <br /><span className="text-primary">{work.title}</span></>
                                )}
                            </h2>
                            <div className="grid grid-cols-1 gap-8">
                                <div>
                                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                                        {currentLanguage === 'vi'
                                            ? 'Thông tin chi tiết về dự án này được trình bày dưới đây.'
                                            : 'Detailed information about this project is presented below.'}
                                    </p>
                                </div>
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                    <table className="w-full text-left border-collapse">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="p-4 text-gray-700 font-semibold">{currentLanguage === 'vi' ? 'Tên khách hàng' : 'Customer Name'}</th>
                                                <td className="p-4 text-gray-900">
                                                    {currentLanguage === 'vi' ? work.customerVi : work.customer}
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="p-4 text-gray-700 font-semibold w-1/3">{currentLanguage === 'vi' ? 'Địa chỉ' : 'Address'}</th>
                                                <td className="p-4 text-gray-900">{
                                                    currentLanguage === 'vi' ? work.addressVi : work.address
                                                }</td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="p-4 text-gray-700 font-semibold">{currentLanguage === 'vi' ? 'Mô tả' : 'Description'}</th>
                                                <td className="p-4 text-gray-900">{
                                                    currentLanguage === 'vi' ? work.descriptionVi : work.description
                                                }</td>
                                            </tr>
                                            <tr>
                                                <th className="p-4 text-gray-700 font-semibold">{currentLanguage === 'vi' ? 'Năm thực hiện' : 'Year'}</th>
                                                <td className="p-4 text-gray-900">{work.year}</td>
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