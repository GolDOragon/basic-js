module.exports = function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }
  if (isNaN(date)) throw new Error();

  const month = date.getMonth();

  if ([11, 0, 1].includes(month)) return "winter";
  if ([2, 3, 4].includes(month)) return "spring";
  if ([5, 6, 7].includes(month)) return "summer";
  if ([8, 9, 10].includes(month)) return "autumn";
};
