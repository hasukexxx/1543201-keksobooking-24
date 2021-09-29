const getRandomPoint = function (from,to,decimalPlace) {
  if (to <= from || from < 0) {
    return 'Некорректные данные';
  }
  const point = Math.random() * (to - from + 1) + from;
  return point.toFixed(decimalPlace);
};
getRandomPoint(1.1,13.222,6);
