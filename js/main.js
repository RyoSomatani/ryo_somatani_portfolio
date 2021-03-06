//===========================================
//==== ハンバーガーメニューアニメーション ===
//===========================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");
let hamburgerChecked = false;

hamburger.addEventListener("click", hamburgerAnimation);

function hamburgerAnimation() {
  if (!hamburgerChecked) {
    hamburger.classList.add("show");
    navMenu.classList.add("show");

    hamburgerChecked = true;
  } else {
    hamburger.classList.remove("show");
    navMenu.classList.remove("show");

    hamburgerChecked = false;
  }
}

const title = document.querySelector(".title");

window.addEventListener("scroll", () => {
  const titlePosition = title.getBoundingClientRect().top;
  if (titlePosition < -20) {
    hamburger.classList.add("move");
  } else {
    hamburger.classList.remove("move");
  }
});

//===========================================
//==== PROJECT INFO ANIMATIONアニメーション ===
//===========================================
const projects = document.querySelectorAll(".hover-overlay");

// hover (mouseenter) イベントでアニメーション開始
projects.forEach(project => {
  project.addEventListener("mouseenter", e => {
    e.preventDefault();
    e.target.children[1].classList.add("hovered");
  });

  // mouselease イベントで元にもどす
  project.addEventListener("mouseleave", e => {
    e.preventDefault();
    e.target.children[1].classList.remove("hovered");
  });
});

//===========================================
//===== ページタイトル下のバー用アニメーション ====
//===========================================
window.addEventListener("load", () => {
  const pageTitle = document.querySelector(".page-title__title");
  pageTitle.classList.add("show");
});
