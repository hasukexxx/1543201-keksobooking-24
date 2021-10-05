const AVATAR_NUMBERS = 10;

const getRandomAvatar = (min,max) => {
  let randomAvatar = Math.floor(min + Math.random() * (max + 1 - min));
  if (randomAvatar < 10) {
    randomAvatar = `0${  randomAvatar}`;
  }
  return randomAvatar;
};

const author = {
  avatar: `img/avatars/user${ getRandomAvatar(1,AVATAR_NUMBERS)  }.png`,
};

const getRandomPoint = function (from,to,decimalPlace) {
  if (to <= from || from < 0) {
    return 'Некорректные данные';
  }
  const point = Math.random() * (to - from) + from;
  return point.toFixed(decimalPlace);
};

const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;

const location = {
  lat: getRandomPoint(LAT_MIN,LAT_MAX,5),
  lng: getRandomPoint(LNG_MIN,LNG_MAX,5),
};

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

const getRandomNumber = (min,max) => Math.floor(min + Math.random() * (max + 1 - min));

const randomArray = (array) => Array.from({
  length: getRandomNumber(1,array.length)},
() => array.splice(Math.random() * array.length | 0, 1)[0]);

const offer = {
  title: 'Квартира для вашего отпуска',
  address: `${location.lat  }, ${   location.lng}`,
  price: getRandomNumber(1,PRICE_MAX),
  type: TYPE[getRandomNumber(0,TYPE.length - 1)],
  rooms: getRandomNumber(1,ROOMS_MAX),
  guests: getRandomNumber(1,GUESTS_MAX),
  chekin: CHEKIN[getRandomNumber(0,CHEKIN.length - 1)],
  chekout: CHEKOUT[getRandomNumber(0,CHEKOUT.length - 1)],
  description: 'Рядом с центром, недалеко от аэропорта',
  photos: randomArray(PHOTOS),
  features: randomArray(FEATURES),
};

const getAd = () => ({author, offer, location});
const ADDS_NUMBER = 1;

const allAdds = Array.from({length: ADDS_NUMBER}, getAd);
