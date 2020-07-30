import $ from "../core";

$.prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector(".carousel-inner"),
    ).width;
    const slides = this[i].querySelectorAll(".carousel-item");
    const slideFields = this[i].querySelector(".carousel-slides");
    const dots = this[i].querySelectorAll(".carousel-indicator li");
    slideFields.style.width = 100 * slides.length + "%";
    slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideCurrent = 0;

    $(this[i].querySelector('[data-slide = "next"]')).click((e) => {
      e.preventDefault();
      if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, "");
      }
      slideFields.style.transform = `translateX(-${offset}px)`;

      if (slideCurrent >= slides.length - 1) {
        slideCurrent = 0;
      } else {
        slideCurrent++;
      }

      dots.forEach((dot) => dot.classList.remove("active"));
      dots[slideCurrent].classList.add("active");
    });

    $(this[i].querySelector('[data-slide = "prev"]')).click((e) => {
      e.preventDefault();
      if (offset == 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, "");
      }
      slideFields.style.transform = `translateX(-${offset}px)`;

      if (slideCurrent <= 0) {
        slideCurrent = slides.length - 1;
      } else {
        slideCurrent--;
      }
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[slideCurrent].classList.add("active");
    });

    const sliderId = this[i].getAttribute("id");
    $(`#${sliderId} .carousel-indicator li`).click((e) => {
      let sliderTo = e.target.getAttribute("data-slide-to");
      slideCurrent = sliderTo;
      offset = +width.replace(/\D/g, "") * sliderTo;
      slideFields.style.transform = `translateX(-${offset}px)`;
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[slideCurrent].classList.add("active");
    });
  }
};

$(".carousel").carousel();
