import $ from "../core";

$.prototype.addClass = function (...classesName) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.add(...classesName);
    }
  }
  return this;
};

$.prototype.removeClass = function (...classesName) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...classesName);
    }
  }
  return this;
};

$.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.toggle(className);
    }
  }
  return this;
};
