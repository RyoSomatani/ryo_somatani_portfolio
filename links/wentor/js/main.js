//==============================
//== HAMBURGER MENU ANIMATION ==
//==============================
const toggler = document.querySelector(".hamburger__toggler");
const navMenu = document.querySelector("nav");

toggler.addEventListener("click", () => {
  if (toggler.checked === true) {
    navMenu.classList.add("show");
  } else {
    navMenu.classList.remove("show");
  }
});

//スクリーンサイズが769px以上の時、navを隠し、ハンバーガーアイコンを初期状態に戻す。
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    toggler.checked = false;
    navMenu.classList.remove("show");
  } else {
  }
});

//===================================================
//==== コンテンツアニメーション （transform, opacity)====
//===================================================
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  const sectionTitles = document.querySelectorAll(".section-header h1");
  const feedbackComments = document.querySelectorAll(".feedback__example");

  sectionTitles.forEach(title => {
    const titlePosition = title.getBoundingClientRect().top;

    if (titlePosition < window.innerHeight * 0.9) {
      title.classList.add("show");
    }
  });

  feedbackComments.forEach(comment => {
    const commentPosition = comment.getBoundingClientRect().top;

    if (commentPosition < window.innerHeight * 0.7) {
      comment.classList.add("show");
    }
  });
});
