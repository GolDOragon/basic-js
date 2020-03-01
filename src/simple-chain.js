const chainMaker = {
  all_links: [],

  getLength() {
    return this.all_links.length;
  },

  addLink(value) {
    if (value == null) {
      this.all_links.push(String(value));
    } else {
      this.all_links.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      (position > this.all_links.length) || (+position != position)
    ) {
      this.all_links = [];
      throw new Error();
    }

    this.all_links.splice(position - 1, 1);
    return this;
  },
  
  reverseChain() {
    this.all_links = this.all_links.reverse();
    return this;
  },

  finishChain() {
    let result = "( " + this.all_links.join(" )~~( ") + " )";
    this.all_links = [];
    return result;
  },
};

module.exports = chainMaker;
