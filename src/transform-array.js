module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error();

  let new_array = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {

      case "--discard-next":
        i++;
        break;

      case "--discard-prev":
        new_array.pop();
        break;

      case "--double-next":
        if (i+1 == arr.length) break;

        new_array.push(arr[i + 1]);
        break;

      case "--double-prev":
        if (i-1 == -1) break;

        new_array.push(arr[i - 1]);
        break;

      default:
        new_array.push(arr[i]);
    }
  }
  return new_array;
};
