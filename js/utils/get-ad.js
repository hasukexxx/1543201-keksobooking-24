import {getRandomNumber, getRandomAvatar, getRandomPoint, randomArray} from './random-functions.js';

const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHEKIN = ['12:00', '13:00', '14:00'];
const CHEKOUT = ['12:00', '13:00', '14:00'];
const ROOMS_MAX = 6;
const PRICE_MAX = 150000;
const GUESTS_MAX = 10;
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getAd = () => {
  const author = {
    avatar: `img/avatars/user${getRandomAvatar()}.png`,
  };
  const location = {
    lat: getRandomPoint(LAT_MIN,LAT_MAX,5),
    lng: getRandomPoint(LNG_MIN,LNG_MAX,5),
  };
  const copyFeatures = FEATURES.slice();
  const copyPhotos = PHOTOS.slice();
  const offer = {
    title: 'Квартира для вашего отпуска',
    address: `${location.lat}, ${location.lng}`,
    price: getRandomNumber(1,PRICE_MAX),
    type: TYPE[getRandomNumber(0,TYPE.length - 1)],
    rooms: getRandomNumber(1,ROOMS_MAX),
    guests: getRandomNumber(1,GUESTS_MAX),
    chekin: CHEKIN[getRandomNumber(0,CHEKIN.length - 1)],
    chekout: CHEKOUT[getRandomNumber(0,CHEKOUT.length - 1)],
    description: 'Рядом с центром, недалеко от аэропорта',
    photos: randomArray(copyPhotos),
    features: randomArray(copyFeatures),
  };
  return {author, offer, location};
};

export {getAd};
