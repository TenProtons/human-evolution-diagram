import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Diagram from "./components/Diagram/Diagram";
import "./App.scss";
import InfoModal from "./components/Info/InfoModal";

function App() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  }, [isDarkMode]);

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
        <div>
          <h1>{t("title")}</h1>
          <p>{t("subtitle")}</p>
        </div>
        <button onClick={() => setModalOpen(!isModalOpen)}>❔</button>
      </section>

      {isModalOpen && <InfoModal onClose={() => setModalOpen(false)} />}
      <Diagram />
    </div>
  );
}

export default App;
