import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Human Evolution",
      "subtitle": "Timeline from the Last Common Ancestor between chimpanzees and humans to Homo Sapiens",

      "img_source": "Source",
      "img_author": "Author",
      "ai_origin": "Generated by artificial intelligence",

      // Single-word references (kept for consistency)
      "australopithecus": "Australopithecus",
      "neanderthal": "Neanderthal",
      "sapiens": "Homo Sapiens",

      // Common field names
      "latin_name": "Latin name",
      "date_of_origin": "Date of origin",
      "who_did_it_come_from": "Who did it come from",
      "who_arose_from_him": "Who arose from him",
      "did_he_come_out_of_Africa": "Did he come out of Africa",

      // Edge/event labels
      labels: {
        "fireDiscovery": "🔥 1.5 million years ago",
      },

      // CHLCA
      chlca: {
        "title": "Last common ancestor between chimpanzees and humans (CHLCA)",
        "latin_name": "(no exact name, possibly similar to Pan and Homo)",
        "date_of_origin": "about 7-8 million years ago",
        "who_did_it_come_from": "early hominins and chimpanzee ancestors",
        "who_arose_from_him": "Sahelanthropus, chimpanzee ancestors",
        "did_he_come_out_of_Africa": "no",
      },

      // Pan (genus)
      panGenus: {
        "title": "Common ancestor of chimpanzees and bonobos",
        "latin_name": "Pan (genus)",
        "date_of_origin": "about 7 million years ago",
        "who_did_it_come_from": "Chimpanzee-Human Last Common Ancestor",
        "who_arose_from_him": "Chimpanzees and bonobos",
      },

      // Sahelanthropus
      sahelanthropus: {
        "title": "Sahelanthropus",
        "latin_name": "Sahelanthropus tchadensis",
        "date_of_origin": "about 7 million years ago",
        "who_did_it_come_from": "Chimpanzee-Human Last Common Ancestor",
        "who_arose_from_him": "Ardipithecus",
        "did_he_come_out_of_Africa": "no",
      },

      // Chimpanzee
      chimpanzee: {
        "title": "Chimpanzee",
        "latin_name": "Pan troglodytes",
        "date_of_origin": "about 1-2 million years ago",
        "who_did_it_come_from": "common ancestor of chimpanzees and bonobos",
      },

      // Bonobo
      bonobo: {
        "title": "Bonobo",
        "latin_name": "Pan paniscus",
        "date_of_origin": "about 1-2 million years ago",
        "who_did_it_come_from": "common ancestor of chimpanzees and bonobos",
      },

      // Ardipithecus
      ardipithecus: {
        "title": "Ardipithecus",
        "latin_name": "Ardipithecus ramidus",
        "date_of_origin": "about 4.4 million years ago",
        "who_did_it_come_from": "Sahelanthropus or similar early hominins",
        "who_arose_from_him": "Australopithecus",
        "did_he_come_out_of_Africa": "no",
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
        "latin_name": "Ardipithecus ramidus",
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
