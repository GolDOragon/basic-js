module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;

  let getFirstLetter = function(str) {
    let first_letter_number = str.search(/[A-Za-z]/);
    return word[first_letter_number];
  };

  let team_name = [];

  for (word of members) {
    if (typeof word != "string") continue;

    let letter = getFirstLetter(word);
    team_name.push(letter.toUpperCase());
  }

  return team_name.sort().join("");
};