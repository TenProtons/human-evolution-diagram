import ardipithecusImg from '../assets/img/ardipithecus-ramidus.jpg';
import bonoboImg from '../assets/img/bonobo.jpg';
import chimpanzeeImg from '../assets/img/chimpanzee.jpg';
import chlcaImg from '../assets/img/chlca.jpg';
import questionMarkImg from '../assets/img/question-mark.jpg';
import sahelanthropusImg from '../assets/img/sahelanthropus.jpg';
import australopithecusAfarensisImg from '../assets/img/australopithecus-afarensis.jpg';
import homoHabilisImg from '../assets/img/homo-habilis.jpg';
import homoErectusImg from '../assets/img/homo-erectus.jpg';
import homoАloresiensisImg from '../assets/img/homo-floresiensis.jpg';
import homoHeidelbergensisImg from '../assets/img/homo-heidelbergensis.jpg';
import homoІapiensImg from '../assets/img/homo-sapiens.jpg';
import neanderthalImg from '../assets/img/neanderthal.jpg';
import { timelineLines } from './timelineLines';

export const cardsData = [
  {
    id: '100',
    position: { x: 600, y: timelineLines.chlca.y },
    data: {
      labelKey: 'chlca.title',
      latinNameKey: 'chlca.latin_name',
      dateOfOriginKey: 'chlca.date_of_origin',
      whoDidItComeFromKey: 'chlca.who_did_it_come_from',
      whoAroseFromHimKey: 'chlca.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'chlca.did_he_come_out_of_Africa',
      imgPath: chlcaImg,
      imgSource: 'ai_origin',
      imgAuthor: '',
      handleOptions: {
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '101',
    position: { x: -600, y: timelineLines.sahelanthropus_panGenus.y },
    data: {
      labelKey: 'sahelanthropus.title',
      latinNameKey: 'sahelanthropus.latin_name',
      dateOfOriginKey: 'sahelanthropus.date_of_origin',
      whoDidItComeFromKey: 'sahelanthropus.who_did_it_come_from',
      whoAroseFromHimKey: 'sahelanthropus.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'sahelanthropus.did_he_come_out_of_Africa',
      imgPath: sahelanthropusImg,
      imgSource: 'ai_origin',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '102',
    position: { x: 1850, y: timelineLines.sahelanthropus_panGenus.y },
    data: {
      labelKey: 'panGenus.title',
      latinNameKey: 'panGenus.latin_name',
      dateOfOriginKey: 'panGenus.date_of_origin',
      whoDidItComeFromKey: 'panGenus.who_did_it_come_from',
      whoAroseFromHimKey: 'panGenus.who_arose_from_him',
      didHeComeOutOfAfricaKey: null,
      imgPath: questionMarkImg,
      imgSource: 'ai_origin',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '103',
    position: { x: 1200, y: timelineLines.chimpanzee_bonobo.y },
    data: {
      labelKey: 'chimpanzee.title',
      latinNameKey: 'chimpanzee.latin_name',
      dateOfOriginKey: 'chimpanzee.date_of_origin',
      whoDidItComeFromKey: 'chimpanzee.who_did_it_come_from',
      didHeComeOutOfAfricaKey: null,
      imgPath: chimpanzeeImg,
      imgSource: 'https://commons.wikimedia.org/wiki/File:Schimpanse_Zoo_Leipzig.jpg',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
      }
    },
  },
  {
    id: '104',
    position: { x: 2500, y: timelineLines.chimpanzee_bonobo.y },
    data: {
      labelKey: 'bonobo.title',
      latinNameKey: 'bonobo.latin_name',
      dateOfOriginKey: 'bonobo.date_of_origin',
      whoDidItComeFromKey: 'bonobo.who_did_it_come_from',
      didHeComeOutOfAfricaKey: null,
      imgPath: bonoboImg,
      imgSource: 'https://commons.wikimedia.org/wiki/File:Apeldoorn_Apenheul_zoo_Bonobo.jpg',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
      }
    },
  },
  {
    id: '105',
    position: { x: -600, y: timelineLines.ardipithecus.y},
    data: {
      labelKey: 'ardipithecus.title',
      latinNameKey: 'ardipithecus.latin_name',
      dateOfOriginKey: 'ardipithecus.date_of_origin',
      whoDidItComeFromKey: 'ardipithecus.who_did_it_come_from',
      whoAroseFromHimKey: 'ardipithecus.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'ardipithecus.did_he_come_out_of_Africa',
      imgPath: ardipithecusImg,
      imgSource: 'https://humanorigins.si.edu/evidence/human-fossils/species/ardipithecus-ramidus',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '106',
    position: { x: -600, y: timelineLines.australopithecus_afarensis.y},
    data: {
      labelKey: 'australopithecus_afarensis.title',
      latinNameKey: 'australopithecus_afarensis.latin_name',
      dateOfOriginKey: 'australopithecus_afarensis.date_of_origin',
      whoDidItComeFromKey: 'australopithecus_afarensis.who_did_it_come_from',
      whoAroseFromHimKey: 'australopithecus_afarensis.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'australopithecus_afarensis.did_he_come_out_of_Africa',
      imgPath: australopithecusAfarensisImg,
      imgSource: 'https://www.donsmaps.com/lucy.html',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '107',
    position: { x: -600, y: timelineLines.homo_habilis.y},
    data: {
      labelKey: 'homo_habilis.title',
      latinNameKey: 'homo_habilis.latin_name',
      dateOfOriginKey: 'homo_habilis.date_of_origin',
      whoDidItComeFromKey: 'homo_habilis.who_did_it_come_from',
      whoAroseFromHimKey: 'homo_habilis.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'homo_habilis.did_he_come_out_of_Africa',
      imgPath: homoHabilisImg,
      imgSource: 'https://humanorigins.si.edu/evidence/human-fossils/species/homo-habilis',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '108',
    position: { x: -600, y: timelineLines.homo_erectus.y},
    data: {
      labelKey: 'homo_erectus.title',
      latinNameKey: 'homo_erectus.latin_name',
      dateOfOriginKey: 'homo_erectus.date_of_origin',
      whoDidItComeFromKey: 'homo_erectus.who_did_it_come_from',
      whoAroseFromHimKey: 'homo_erectus.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'homo_erectus.did_he_come_out_of_Africa',
      imgPath: homoErectusImg,
      imgSource: 'https://www.britannica.com/topic/Homo-erectus/Body-structure',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '109',
    position: { x: 300, y: timelineLines.homo_floresiensis.y},
    data: {
      labelKey: 'homo_floresiensis.title',
      latinNameKey: 'homo_floresiensis.latin_name',
      dateOfOriginKey: 'homo_floresiensis.date_of_origin',
      whoDidItComeFromKey: 'homo_floresiensis.who_did_it_come_from',
      whoAroseFromHimKey: 'homo_floresiensis.who_arose_from_him',
      imgPath: homoАloresiensisImg,
      imgSource: 'https://www.worldhistory.org/image/6740/homo-floresiensis-reconstruction/',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        }
      }
    },
  },
  {
    id: '110',
    position: { x: -600, y: timelineLines.homo_heidelbergensis.y},
    data: {
      labelKey: 'homo_heidelbergensis.title',
      latinNameKey: 'homo_heidelbergensis.latin_name',
      dateOfOriginKey: 'homo_heidelbergensis.date_of_origin',
      whoDidItComeFromKey: 'homo_heidelbergensis.who_did_it_come_from',
      whoAroseFromHimKey: 'homo_heidelbergensis.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'homo_heidelbergensis.did_he_come_out_of_Africa',
      imgPath: homoHeidelbergensisImg,
      imgSource: 'https://www.worldhistory.org/image/6442/homo-heidelbergensis-reconstruction/#google_vignette',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        },
        bottom:{
          type: 'source',
          position: 'bottom'
        }
      }
    },
  },
  {
    id: '111',
    position: { x: -600, y: timelineLines.homo_sapiens.y},
    data: {
      labelKey: 'homo_sapiens.title',
      latinNameKey: 'homo_sapiens.latin_name',
      dateOfOriginKey: 'homo_sapiens.date_of_origin',
      whoDidItComeFromKey: 'homo_sapiens.who_did_it_come_from',
      whoAroseFromHimKey: 'homo_sapiens.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'homo_sapiens.did_he_come_out_of_Africa',
      imgPath: homoІapiensImg,
      imgSource: 'https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head.jpg',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        }
      }
    },
  },
  {
    id: '112',
    position: { x: -100, y: timelineLines.homo_neanderthalensis.y},
    data: {
      labelKey: 'homo_neanderthalensis.title',
      latinNameKey: 'homo_neanderthalensis.latin_name',
      dateOfOriginKey: 'homo_neanderthalensis.date_of_origin',
      whoDidItComeFromKey: 'homo_neanderthalensis.who_did_it_come_from',
      whoAroseFromHimKey: 'homo_neanderthalensis.who_arose_from_him',
      didHeComeOutOfAfricaKey: 'homo_neanderthalensis.did_he_come_out_of_Africa',
      imgPath: neanderthalImg,
      imgSource: 'https://humanorigins.si.edu/evidence/human-fossils/species/homo-neanderthalensis',
      imgAuthor: '',
      handleOptions: {
        top:{
          type: 'target',
          position: 'top'
        }
      }
    },
  },
];
