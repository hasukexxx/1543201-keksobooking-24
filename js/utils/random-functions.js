const getRandomNumber = (min,max) => Math.floor(min + Math.random() * (max + 1 - min));

const AVATAR_NUMBERS = 10;
const getRandomAvatar = () => {
  let randomAvatar = getRandomNumber(1,AVATAR_NUMBERS);
  if (randomAvatar < 10) {
    randomAvatar = `0${getRandomNumber(1,AVATAR_NUMBERS-1)}`;
  }
  return randomAvatar;
};

const getRandomPoint = function (from,to,decimalPlace) {
  if (to <= from || from < 0) {
    return 'Некорректные данные';
  }
  const point = Math.random() * (to - from) + from;
  return point.toFixed(decimalPlace);
};

const randomArray = (array) => Array.from({
  length: getRandomNumber(1,array.length)},
() => array.splice(Math.random() * array.length | 0, 1)[0]);

export {getRandomNumber, getRandomAvatar, getRandomPoint, randomArray};
