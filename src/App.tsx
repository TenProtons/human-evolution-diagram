import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Diagram from "./components/Diagram/Diagram";
import "./App.scss";

function App() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  }, [isDarkMode]);

  // Toggle language
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
  };

  return (
    <div className="app">
      <section className="app__controls">
        <button className="regular-button" onClick={toggleLanguage}>
          {i18n.language === "en" ? "Ukrainian" : "English"}
        </button>
        <button className="regular-button" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Theme" : "Dark Theme"}
        </button>
      </section>

      <section className="app__header">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </section>

      <Diagram />
    </div>
  );
}

export default App;
