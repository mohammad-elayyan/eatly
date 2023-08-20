$(document).ready(function () {
  $nav = $(".nav");
  $toggle_collapse = $(".toggle-collapse .toggle-icons");

  $toggle_collapse.click(function () {
    $nav.toggleClass("collapse-nav");
  });
  splideSetup();

  let options3 = {
    perPage: 1,
    rewind: false,
  };
  var splide3 = new Splide("#splide3", options3);
  splide3.mount();
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 400)
    document.querySelector(".scrollToHome").classList.add("active");
  else document.querySelector(".scrollToHome").classList.remove("active");
});

window.addEventListener("resize", splideSetup, false);
window.addEventListener("blur", splideSetup, false);
window.addEventListener("focus", splideSetup, false);

function splideSetup() {
  let perPage = 4;
  let perPage2 = 2;
  setTimeout(() => {
    if (window.innerWidth <= 992 && window.innerWidth > 500) {
      perPage = 2;
    } else if (window.innerWidth <= 500) {
      perPage = 1;
      perPage2 = 1;
    } else {
      perPage = 4;
      perPage2 = 2;
    }

    let options1 = {
      perPage: perPage,
      rewind: false,
    };
    let splide1 = new Splide("#splide1", options1);

    splide1.mount();

    let options2 = {
      perPage: perPage2,
      rewind: false,
    };
    let splide2 = new Splide("#splide2", options2);
    splide2.mount();
  }, 100);
}
