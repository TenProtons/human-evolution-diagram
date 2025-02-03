import { FC } from "react";
import { useTranslation } from "react-i18next";
import { cardsData } from "../../data/cards";
import "./InfoModal.scss";

type InfoModalProps = {
  onClose: () => void;
};

const InfoModal: FC<InfoModalProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="info-modal">
      <div className="info-modal__container">
        <button
          className="info-modal__close regular-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="info-modal__list">
          {cardsData.map((card) => (
            <div key={card.id} className="info-modal__card">
              <h3 className="info-modal__title">{t(card.data.labelKey)}</h3>
              <img
                className="info-modal__image"
                src={card.data.imgPath}
                alt={t(card.data.labelKey)}
              />
              <div className="info-modal__link-wrapper">
                <a
                  className="info-modal__link"
                  href={card.data.infoSource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("info_source")}
                </a>
                {card.data.imgSource.includes("https") ? (
                  <a
                    className="info-modal__link"
                    href={card.data.imgSource}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("img_source")}
                  </a>
                ) : (
                  <span>
                    {t("img_source")}: {t(card.data.imgSource)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
