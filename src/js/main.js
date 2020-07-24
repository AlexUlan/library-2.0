import "./lib/lib";
import $ from "./lib/lib";
/* 
$(".active").on("click", sayHi);
$("button").on("click", sayHi);
/* console.log($("button").eq("1")); */

/* 
$("button").toggleAttribute("avtive", "flase");
$("button .active").removeAttribute("avtive"); */

/* function sayHi() {
  $("button").eq(1).toggleClass("be");
}

$("div").click(indexSearch);

function indexSearch() {
  console.log($(this).index());
} */
/* console.log($(".some").clossest(".findMe")); */
/* console.log($(".more").sibilings());
$("button").fadeOut(3000);  */

$("button").click(() => {
  $("div").eq(1).fadeToggle(800);
});
$("[data-count='second']").click(() => {
  $("div").eq(2).fadeOut(800);
});
