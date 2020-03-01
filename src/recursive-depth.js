module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let local_depth = 0;

    for (let element of arr) {
      if (!(element instanceof Array)) continue;

      local_depth = Math.max(local_depth, this.calculateDepth(element));
    }

    return depth + local_depth;
  }
};
