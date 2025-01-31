import chlcaImg from '../assets/img/chlca.jpg';
import sahelanthropusImg from '../assets/img/sahelanthropus.jpg';
import chimpanzeeImg from '../assets/img/chimpanzee.jpg';
import bonoboImg from '../assets/img/bonobo.jpg';
import questionMarkImg from '../assets/img/question-mark.jpg';
import ardipithecusImg from '../assets/img/ardipithecus-ramidus.jpg';
import { timelineLines } from './timelineLines';

export const cardsData = [
  {
    id: '100',
    position: { x: 0, y: timelineLines[0].y },
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
    position: { x: -650, y: timelineLines[1].y },
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
    position: { x: 650, y: timelineLines[1].y },
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
    position: { x: 0, y: timelineLines[3].y },
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
    position: { x: 1300, y: timelineLines[3].y },
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
    position: { x: -650, y: timelineLines[2].y - 150},
    data: {
      labelKey: 'ardipithecus.title',
      latinNameKey: 'ardipithecus.latin_name',
      dateOfOriginKey: 'ardipithecus.date_of_origin',
      whoDidItComeFromKey: 'ardipithecus.who_did_it_come_from',
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
];
