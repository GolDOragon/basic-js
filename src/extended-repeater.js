module.exports = function repeater(str, options) {
  let addition = "";
  if (Object.keys(options).includes("addition")) { // if addition is passed
    addition = String(options.addition);
  }

  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";

  function repeat(inside_options) {
    let edit_str = inside_options.edit_str;
    let times = inside_options.times || 1;
    let sep = inside_options.sep || "+";
    let add = inside_options.add || "";

    let result = [];
    for (let i = 0; i < times; i++) {
      result.push(edit_str + add);
    }
    return result.join(sep);
  }

  addition = repeat({
    edit_str: addition,
    times: additionRepeatTimes,
    sep: additionSeparator
  });

  let answer = repeat({
    edit_str: str,
    times: repeatTimes,
    sep: separator,
    add: addition
  });

  return answer;
};
