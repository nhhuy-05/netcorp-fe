import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

interface BreadcrumbProps {
  items: {
    name: {
      en: string;
      vi: string;
    } | string;
    path?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center justify-center space-x-2 text-lg font-bold">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <FiChevronRight />}
          {item.path ? (
            <Link to={item.path} className="hover:text-primary transition-colors">
              {typeof item.name === 'string' 
                ? item.name 
                : currentLanguage === 'vi' ? item.name.vi : item.name.en}
            </Link>
          ) : (
            <span className="text-primary">
              {typeof item.name === 'string' 
                ? item.name 
                : currentLanguage === 'vi' ? item.name.vi : item.name.en}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb; 