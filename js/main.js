// ---------- Hamburge Menu ----------
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("nav>ul");
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

// ------ PROJECT INFO ANIMATION ------

const projects = document.querySelectorAll(".hover-overlay");

// hover (mouseenter) イベントでアニメーション開始
projects.forEach(project => {
  project.addEventListener("mouseenter", e => {
    e.preventDefault();
    e.target.children[1].classList.add("hovered");
    console.log(e.target.children[1].className);
  });

  // mouselease イベントで元にもどす
  project.addEventListener("mouseleave", e => {
    e.preventDefault();
    e.target.children[1].classList.remove("hovered");
    console.log(e.target.children[1].className);
  });
});
