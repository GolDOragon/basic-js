const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity != "string" ||
    /[A-Za-z]/.test(sampleActivity) ||
    parseFloat(sampleActivity) > 15 ||
    parseFloat(sampleActivity) <= 0
  )
    return false;

  let time = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / K;
  time = Math.ceil(time);

  return time;
};
