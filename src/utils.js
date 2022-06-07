export const formatTime = (time) => {
  return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
};

export const checkIndex = (array, index) => {
  if (index >= array.length) {
    return 0;
  } else if (index < 0) {
    return array.length - 1;
  }
  return index;
};

export const randomNumberInRange = (range) => {
  return Math.floor(Math.random() * range);
};
