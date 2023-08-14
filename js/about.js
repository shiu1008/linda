//   <!--* ----------輪播----------->

var counter = 0,
  slide = document.querySelector("#slide"),
  items = slide.querySelectorAll("img"),
  itemsCount = items.length,
  prevBtn = document.createElement("a"),
  nextBtn = document.createElement("a"),
  timer = 6000,
  interval = window.setInterval(showNext, timer);

prevBtn.classList.add("prev");
nextBtn.classList.add("next");
slide.appendChild(prevBtn);
slide.appendChild(nextBtn);

var showCurrent = function () {
  var itemToShow = Math.abs(counter % itemsCount);
  [].forEach.call(items, function (el) {
    el.classList.remove("show");
  });
  items[itemToShow].classList.add("show");
};

function showNext() {
  counter++;
  showCurrent();
}

function showPrev() {
  counter--;
  showCurrent();
}

slide.addEventListener("mouseover", function () {
  interval = clearInterval(interval);
});

slide.addEventListener("mouseout", function () {
  interval = window.setInterval(showNext, timer);
});

nextBtn.addEventListener("click", showNext, false);
prevBtn.addEventListener("click", showPrev, false);

items[0].classList.add("show");

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



