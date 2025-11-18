import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t('notFound.title', 'Page Not Found')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('notFound.message', 'Sorry, the page you are looking for does not exist or has been moved.')}
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            {t('notFound.goHome', 'Go Back Home')}
          </Link>
          
          <div className="text-gray-500">
            <p className="text-sm">
              {t('notFound.orContact', 'Or contact us if you think this is an error')}
            </p>
            <Link
              to="/contact"
              className="text-primary hover:text-primary-dark underline text-sm mt-2 inline-block"
            >
              {t('notFound.contactUs', 'Contact Support')}
            </Link>
          </div>
        </div>

        <div className="mt-12 text-gray-400">
          <svg
            className="w-24 h-24 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h-.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
