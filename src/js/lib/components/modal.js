import $ from "../core";

$.prototype.modal = function (created) {
  let widthScroll;
  if (
    document.body.offsetHeight > document.documentElement.clientHeight ||
    document.body.offsetHeight > window.innerHeight
  ) {
    widthScroll = calcScroll();
  } else {
    widthScroll = 0;
  }
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");

    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = "hidden";
      if (widthScroll !== 0) {
        document.body.style.marginRight = `${widthScroll}px`;
      }
    });

    const closeElement = document.querySelectorAll(`${target} [data-close]`);
    closeElement.forEach((elem) => {
      $(elem).click(() => {
        $(target).fadeOut(500);
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = "auto";
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });

    $(target).click((e) => {
      if (e.target.classList.contains("modal")) {
        $(target).fadeOut(500);
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = "auto";
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }

  $(".modal").click((e) => {
    if (e.target.classList.contains("modal")) {
      $(".modal").fadeOut(500);
      document.body.style.marginRight = `0px`;
      document.body.style.overflow = "auto";
    }
  });

  function calcScroll() {
    const tempDiv = document.createElement("div");
    tempDiv.style.width = "50px";
    tempDiv.style.height = "50px";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.overflowY = "scroll";

    document.body.append(tempDiv);
    const scroll = tempDiv.offsetWidth - tempDiv.clientWidth;
    tempDiv.remove();
    return scroll;
  }
};

$.prototype.createModal = function ({ text, btns }) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));

    // btns = {count: num, settings: [[text, classNames=[], close, cb]]}
    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];
      if (btns.settings[j][2]) {
        btn.setAttribute("data-close", "true");
      }
      if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
        btn.addEventListener("click", btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close>
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">
                    ${text.title}
                </div>
            </div>
            <div class="modal-body">
                ${text.body}
            </div>
            <div class="modal-footer">
                
            </div>
        </div>
    </div>
    `;

    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute("data-target")).fadeIn(500);
  }
};

$('[data-toggle="modal"]').modal();
