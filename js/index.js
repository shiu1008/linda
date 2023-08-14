//   <!--* ----------導覽列卷軸 ----------->

let navColorback = document.querySelector(".nav-colorback");
let navtext = document.querySelector(".navtext");

let lastScrollY = 0;
window.addEventListener("scroll", function () {
  let st = this.scrollY;

  if (st < lastScrollY) {
    navColorback.classList.remove("hideUp");
  } else {
    navColorback.classList.add("hideUp");
  }

  lastScrollY = st;
});



