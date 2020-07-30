import $ from "../core";

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childrens = [...parent.children];

  const myIndex = (elem) => {
    return elem == this[0];
  };

  return childrens.findIndex(myIndex);
};

$.prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const objLength = Object.keys(this).length;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  this.length = numberOfItems;
  return this;
};

$.prototype.clossest = function (selector) {
  let counter = 0;
  const objLength = Object.keys(this).length;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  this.length = counter;
  return this;
};

$.prototype.sibilings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const objLength = Object.keys(this).length;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] == arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
