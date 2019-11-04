// =================================
// =========ハンバーガーメニュー========
// =================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");
let hamburgerChecked = false;

hamburger.addEventListener("click", hamburgerAnimation);

function hamburgerAnimation() {
  if (!hamburgerChecked) {
    navMenu.classList.add("show");
    hamburgerChecked = true;
  } else {
    navMenu.classList.remove("show");

    hamburgerChecked = false;
  }
}

// =================================
// =====タイプライターアニメーション=====
// =================================
const showcaseHeading = document.querySelector("#auto-type");
const text = "sass and javaScript";
let index = 0;

function autoType() {
  if (index < text.length) {
    showcaseHeading.innerHTML += text[index];

    index++;
  } else {
    index = 0;
    showcaseHeading.innerHTML = "";
  }

  setTimeout(autoType, 400);
}

// =================================
// ========帯グラフアニメーション=======
// =================================
const barCharts = document.querySelectorAll(".barchart__value");
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  barCharts.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    if (barPosition < window.innerHeight * 0.7) {
      bar.classList.add("show");
    } else {
      bar.classList.remove("show");
    }
  });
});

// Function 呼び出し
autoType();
