import $ from "../core";

$.prototype.addAttribute = function (name, value) {
  if (name && value) {
    for (let i = 0; i < this.length; i++) {
      this[i].setAttribute(name, value);
    }
    return this;
  }
  return this;
};

$.prototype.deleteAttribute = function (name) {
  if (name) {
    for (let i = 0; i < this.length; i++) {
      this[i].removeAttribute(name);
    }
    return this;
  }
  return this;
};

$.prototype.toggleAttribute = function (name, value = "") {
  if (name) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].hasAttribute(name)) {
        this[i].removeAttribute(name);
      } else {
        this[i].setAttribute(name, value);
      }
    }
  }
  return this;
};
