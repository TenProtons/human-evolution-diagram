import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }, [isDarkMode]);

  // Toggle language
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
  };

  return (
    <div className="app">
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light Theme' : 'Dark Theme'}
      </button>
      <button onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}
      </button>

      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>

      {/* Render the diagram */}
      {/* <Diagram /> */}
    </div>
  );
}

export default App;
