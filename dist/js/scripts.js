function puzzleAnim() {
  let puzzlePics = document.querySelectorAll(".footer-card img");
  puzzlePics.forEach((x, i) => {
    x.classList.add("slide" + (i + 1));
  });
  console.log("puzzleAnim geting called");
}

let ticking = false;
let viewHeight = document.documentElement.clientHeight;
let footer = document.querySelector(".footer-card");
let footerBottom = footer.getBoundingClientRect().bottom;

window.addEventListener("scroll", function(e) {
  viewHeight = document.documentElement.clientHeight;
  footerBottom = footer.getBoundingClientRect().bottom;

  if (!ticking) {
    console.log("inside ticking");
    if (footerBottom - viewHeight < 50) {
      puzzleAnim();
      ticking = true;
      console.log("inside math exe");
    }
  }
});
