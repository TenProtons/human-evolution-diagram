import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Human Evolution",
      "subtitle": "Timeline from Australopithecus to Homo Sapiens",
      "img_source": "Source",
      "img_author": "Author",
      "australopithecus": "Australopithecus",
      "neanderthal": "Neanderthal",
      "sapiens": "Homo Sapiens",
      "latin_name": "Латинська назва",
      "date_of_origin": "Дата виникнення",
      "who_did_it_come_from": "Від кого виник",
      "who_arose_from_him": "Хто виник від нього",
      "did_he_come_out_of_Africa": "Чи виходив з Африки",
      labels: {
        "fireDiscovery": "🔥 1.5 million years ago",
      },
      chlca: {
        "title": "",
        "latin_name": "",
        "date_of_origin": "",
        "who_did_it_come_from": "",
        "who_arose_from_him": "",
        "did_he_come_out_of_Africa": "",
      },
      panGenus: {
        "title": "",
        "latin_name": "Pan (genus)",
        "date_of_origin": "",
        "who_did_it_come_from": "Chimpanzee-Human Last Common Ancestor",
      },
      sahelanthropus: {
        "title": "Sahelanthropus",
        "latin_name": "Sahelanthropus tchadensis",
        "date_of_origin": "",
        "who_did_it_come_from": "Chimpanzee-Human Last Common Ancestor",
        "who_arose_from_him": "Ardipithecus",
        "did_he_come_out_of_Africa": "",
      },
      chimpanzee: {
        "title": "",
        "latin_name": "Pan troglodytes",
        "date_of_origin": "",
        "who_did_it_come_from": "",
      },
      bonobo: {
        "title": "",
        "latin_name": "Pan paniscus",
        "date_of_origin": "",
        "who_did_it_come_from": "",
      },
    }
  },
  uk: {
    translation: {
      "title": "Еволюція Людини",
      "subtitle": "Хронологія від Останнього спільного предка між шимпанзе та людиною до Homo Sapiens",
      "img_source": "Джерело",
      "img_author": "Автор",
      "ai_origin": "Згенеровано штучним інтелектом",
      "australopithecus": "Австралопітек",
      "neanderthal": "Неандерталець",
      "sapiens": "Homo Sapiens",
      "latin_name": "Латинська назва",
      "date_of_origin": "Дата виникнення",
      "who_did_it_come_from": "Від кого виник",
      "who_arose_from_him": "Хто виник від нього",
      "did_he_come_out_of_Africa": "Чи виходив з Африки",
      labels: {
        "fireDiscovery": "🔥 1.5 млн років тому",
      },
      chlca: {
        "title": "Останній спільний предок між шимпанзе та людиною (CHLCA)",
        "latin_name": "(немає точної назви, можливо схожі на Pan та Homo)",
        "date_of_origin": "близько 7-8 млн років тому",
        "who_did_it_come_from": "ранні гомініни та предки шимпанзе",
        "who_arose_from_him": "Сахелантроп, предки шимпанзе",
        "did_he_come_out_of_Africa": "ні",
      },
      panGenus: {
        "title": "Спільний предок шимпанзе та бонобо",
        "latin_name": "Pan (genus)",
        "date_of_origin": "близько 7 млн років тому",
        "who_did_it_come_from": "Останній спільний предок між шимпанзе та людиною",
        "who_arose_from_him": "Шимпанзе та Бонобо",
      },
      sahelanthropus: {
        "title": "Сахелантроп",
        "latin_name": "Sahelanthropus tchadensis",
        "date_of_origin": "близько 7 млн років тому",
        "who_did_it_come_from": "Останній спільний предок між шимпанзе та людиною",
        "who_arose_from_him": "Ардипітек",
        "did_he_come_out_of_Africa": "ні",
      },
      chimpanzee: {
        "title": "Шимпанзе",
        "latin_name": "Pan troglodytes",
        "date_of_origin": "близько 1-2 млн років тому",
        "who_did_it_come_from": "спільний предок шимпанзе та бонобо",
      },
      bonobo: {
        "title": "Бонобо",
        "latin_name": "Pan paniscus",
        "date_of_origin": "близько 1-2 млн років тому",
        "who_did_it_come_from": "спільний предок шимпанзе та бонобо",
      },
      ardipithecus: {
        "title": "Ардипітек",
        "latin_name": "Ardipithecus",
        "date_of_origin": "близько 4.4 млн років тому",
        "who_did_it_come_from": "Сахелантроп або подібні ранні гомініни",
        "who_arose_from_him": "Австралопітек",
        "did_he_come_out_of_Africa": "ні",
      },
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
