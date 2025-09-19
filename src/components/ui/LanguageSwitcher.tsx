import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button 
        className={`text-sm px-2 py-1 transition-colors ${i18n.language === 'en' ? 'text-primary font-medium' : 'text-gray-200 hover:text-primary'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <span className="text-gray-500">|</span>
      <button 
        className={`text-sm px-2 py-1 transition-colors ${i18n.language === 'vi' ? 'text-primary font-medium' : 'text-gray-200 hover:text-primary'}`}
        onClick={() => changeLanguage('vi')}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher; 