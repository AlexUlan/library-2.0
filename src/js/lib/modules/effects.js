import $ from "../core";

$.prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElepsed = time - timeStart;

    let complaction = Math.min(timeElepsed / dur, 1);

    cb(complaction);

    if (timeElepsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }
  return _animateOverTime;
};

$.prototype.fadeIn = function (dur, display = "block", fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;

    const _fadeIn = (complaction) => {
      this[i].style.opacity = complaction;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

$.prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (complaction) => {
      this[i].style.opacity = 1 - complaction;
      if (complaction == 1) {
        this[i].style.display = "none";
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};
