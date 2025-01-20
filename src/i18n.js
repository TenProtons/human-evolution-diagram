import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Human Evolution",
      "subtitle": "Timeline from Australopithecus to Homo Sapiens",
      "australopithecus": "Australopithecus",
      "neanderthal": "Neanderthal",
      "sapiens": "Homo Sapiens",
      "latin_name": "Латинська назва",
      "date_of_origin": "Дата виникнення",
      "who_did_it_come_from": "Від кого виник",
      "who_arose_from_him": "Хто виник від нього",
      "did_he_come_out_of_Africa": "Чи виходив з Африки",
      chlca: {
        "title": "",
        "latin_name": "",
        "date_of_origin": "",
        "who_did_it_come_from": "",
        "who_arose_from_him": "",
        "did_he_come_out_of_Africa": "",
      }
    }
  },
  uk: {
    translation: {
      "title": "Еволюція Людини",
      "subtitle": "Хронологія від Останнього спільнго предка між шимпанзе та людиною до Homo Sapiens",
      "australopithecus": "Австралопітек",
      "neanderthal": "Неандерталець",
      "sapiens": "Homo Sapiens",
      "latin_name": "Латинська назва",
      "date_of_origin": "Дата виникнення",
      "who_did_it_come_from": "Від кого виник",
      "who_arose_from_him": "Хто виник від нього",
      "did_he_come_out_of_Africa": "Чи виходив з Африки",
      chlca: {
        "title": "Останній спільний предок між шимпанзе та людиною (CHLCA)",
        "latin_name": "(немає точної назви, можливо схожі на Pan та Homo)",
        "date_of_origin": "близько 7-8 млн років тому",
        "who_did_it_come_from": "ранні гомініни та предки шимпанзе",
        "who_arose_from_him": "Sahelanthropus, предки шимпанзе",
        "did_he_come_out_of_Africa": "ні",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk', // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
