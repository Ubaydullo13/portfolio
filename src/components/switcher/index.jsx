import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language'));

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleChangeLanguage = (lng) => {
    setSelectedLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <select onChange={(e) => handleChangeLanguage(e.target.value)} value={selectedLanguage}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};

export default LanguageSwitcher;
  