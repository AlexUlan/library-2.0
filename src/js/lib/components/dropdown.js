import $ from "../core";

$.prototype.dropdown = function () {
  for (let i = 0; i <= this.length; i++) {
    const id = this[i].getAttribute("id");
    $(this[i]).click(() => {
      $(`[data-toggle-id = "${id}"]`).fadeToggle(300);
    });
  }
};

try {
  $(".dropdown-toogle").dropdown();
} catch (error) {}