import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Human Evolution",
      "subtitle": "Timeline from the Last Common Ancestor between chimpanzees and humans to Homo Sapiens",
      "img_source": "Image source",
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
        "time_ago": "mln years ago",
        "400_cm_brain": "🧠 Increase in brain size up to 400-500 cm³",
        "510_cm_brain": "🧠 Increase in brain size up to 510-600 cm³",
        "600_cm_brain": "🧠 Increase in brain size up to 600-1100 cm³",
        "first_exodus_Africa": "🦶🏼 The first exodus from Africa",
        "fireDiscovery1.5": "🔥 First evidence of fire use in Swartkrans Cave, South Africa",
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
      "img_source": "Джерело ілюстрації",
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
        "time_ago": "млн років тому",
        "400_cm_brain": "🧠 Збільшення мозку до 400-500 см³",
        "510_cm_brain": "🧠 Збільшення мозку до 510-600 см³",
        "600_cm_brain": "🧠 Збільшення мозку до 600-1100 см³",
        "first_exodus_Africa": "🦶🏼 Перший вихід з Африки",
        "fireDiscovery1.5": "🔥 Перші докази використання вогню у печері Сварткранс, Південна Африка",
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
      australopithecus_afarensis: {
        "title": "Австралопітек",
        "latin_name": "Australopithecus afarensis",
        "date_of_origin": "близько 3.9-2.9 млн років тому",
        "who_did_it_come_from": "Ардипітек",
        "who_arose_from_him": "Людина уміла",
        "did_he_come_out_of_Africa": "ні",
      },
      homo_habilis: {
        "title": "Людина уміла",
        "latin_name": "Homo habilis",
        "date_of_origin": "близько 2.4-1.4 млн років тому",
        "who_did_it_come_from": "Австралопітек",
        "who_arose_from_him": "Людина прямоходяча",
        "did_he_come_out_of_Africa": "ні",
      },
      homo_erectus: {
        "title": "Людина прямоходяча",
        "latin_name": "Homo erectus",
        "date_of_origin": "близько 1.9 млн років тому",
        "who_did_it_come_from": "Людина уміла",
        "who_arose_from_him": "Гайдельберзька людина та Людина флореська (Хобіт)",
        "did_he_come_out_of_Africa": "так - розселились до Азії та Європи близько 1.8 млн років тому",
      },
      homo_floresiensis: {
        "title": "Людина флореська (Хобіт)",
        "latin_name": "Homo floresiensis",
        "date_of_origin": "близько 700 тисяч років тому",
        "who_did_it_come_from": "походить від ранньоазійської Людини прямоходячої",
        "who_arose_from_him": "тупикова гілка",
      },
      homo_heidelbergensis: {
        "title": "Гайдельберзька людина",
        "latin_name": "Homo heidelbergensis",
        "date_of_origin": "близько 700 - 600 тисяч років тому",
        "who_did_it_come_from": "Людина прямоходяча",
        "who_arose_from_him": "Денисівська людина, Неандерталець та Людина розумна",
        "did_he_come_out_of_Africa": "Невдовзі після появи, 700 - 600 тисяч років тому, почали мігрувати з Африки до Європи та, можливо, частини Західної Азії.",
      },
      homo_sapiens: {
        "title": "Людина розумна",
        "latin_name": "Homo sapiens",
        "date_of_origin": "близько 300 тисяч років тому",
        "who_did_it_come_from": "Гайдельберзька людина",
        "who_arose_from_him": "сучасні люди",
        "did_he_come_out_of_Africa": "так - кілька хвиль міграцій в періоді 130 - 45 тисяч років тому",
      },
      homo_neanderthalensis: {
        "title": "Неандерталець",
        "latin_name": "Homo neanderthalensis",
        "date_of_origin": "близько 430 тисяч років тому",
        "who_did_it_come_from": "Гайдельберзька людина",
        "who_arose_from_him": "тупикова гілка",
        "did_he_come_out_of_Africa": "ні - жили в Європі",
      },
      homo_denisova: {
        "title": "Денисівська людина",
        "latin_name": "Homo denisova",
        "date_of_origin": "близько 370 тисяч років тому",
        "who_did_it_come_from": "Гайдельберзька людина",
        "who_arose_from_him": "тупикова гілка",
        "did_he_come_out_of_Africa": "ні - жили в Сибіру та Східній Азії",
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
