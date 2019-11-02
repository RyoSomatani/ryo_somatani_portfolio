//=======================================
//===== HAMBURGER MENU アニメーション =====
//=======================================
const hamburger = document.querySelector(".hamburger-menu");
const hamburgerBar = document.querySelectorAll(".hamburger-bar");
const navBar = document.querySelector(".navbar");
const main = document.querySelector("main");
let hamburgerChecked = false;

hamburger.addEventListener("click", hamburgerAnimation);

// hamburger クリックイベントでnavbarとmainをスライド
function hamburgerAnimation() {
  if (!hamburgerChecked) {
    hamburger.classList.add("show");
    navBar.classList.add("show");
    main.classList.add("shift-right");
    hamburgerChecked = true;
  } else {
    hamburger.classList.remove("show");
    navBar.classList.remove("show");
    main.classList.remove("shift-right");
    hamburgerChecked = false;
  }

  hamburgerColorControl();
}

// hamburger アイコンの色をshowcaseセクション以下で変更
main.addEventListener("scroll", () => {
  const showcasePosition = document
    .querySelector("#showcase")
    .getBoundingClientRect().bottom;

  hamburgerColorControl();
});

// hamburger アイコンの色をコントロール
function hamburgerColorControl() {
  const showcasePosition = document
    .querySelector("#showcase")
    .getBoundingClientRect().bottom;

  // showcase内にアイコンがある時
  if (showcasePosition >= window.innerHeight * 0.02) {
    // hamburger menuが閉じている時
    if (hamburgerChecked === false) {
      hamburgerBar.forEach(bar => {
        bar.classList.remove("change-color");
      });
    }
    // hamburger menuが開いている時
    else {
      hamburgerBar.forEach(bar => {
        bar.classList.add("change-color");
      });
    }
  }
  // showcase外にアイコンがある時
  else if (showcasePosition < window.innerHeight * 0.02) {
    hamburgerBar.forEach(bar => {
      if (showcasePosition < window.innerHeight * 0.02) {
        bar.classList.add("change-color");
      } else {
      }
    });
  }
}

//===============================
//====== SHOWCASE ANIMATION =====
//===============================

const showCaseText1 = "Intuitive is How Give We the User New Superpowers";
const showCaseText2 = "We are Happy to Create Newest Modern Websites";
const currentShowcaseText = document.querySelector("#showcase-text");

// ページがロードされるとともにshowcaseのh1にテキストを挿入
window.addEventListener("DOMContentLoaded", insertText);

function insertText() {
  currentShowcaseText.innerHTML = showCaseText1;

  setTimeout(showContent, 600);
}

// 一定時間でテキストを入れ替える
function replaceText() {
  if (currentShowcaseText.innerHTML === showCaseText1) {
    currentShowcaseText.innerHTML = showCaseText2;
  } else if (currentShowcaseText.innerHTML === showCaseText2) {
    currentShowcaseText.innerHTML = showCaseText1;
  }

  setTimeout(showContent, 600);
}

// 実際にクラス名を追加してアニメーションを開始
function showContent() {
  document
    .querySelector(".showcase__animation-container")
    .classList.add("show");
  setTimeout(hideContent, 5000);
}

// 一定時間でコンテントを引っ込める
function hideContent() {
  document
    .querySelector(".showcase__animation-container")
    .classList.remove("show");

  setTimeout(replaceText, 600);
}

// SERVICES CARDS ANIMATION
const servicesSection = document.querySelector("#services");
const servicesCards = document.querySelectorAll(".services__cards__card");

// ページのスクロールをトリガーに、位置情報を確保
main.addEventListener("scroll", getPosition);

function getPosition() {
  const contentTop = servicesSection.getBoundingClientRect().top;

  if (contentTop < window.innerHeight * 0.7) {
    cardsSlideAnimation();
  }
}

// 時間差でそれぞれクラス名を追加してアニメーション
function cardsSlideAnimation() {
  servicesCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 150);
  });
}

//======== CONTACT SECTION アニメーション ========
// =============================================
main.addEventListener("scroll", () => {
  const contactSection = document.querySelector("#contact");
  const contactPosition = document
    .querySelector("#contact")
    .getBoundingClientRect().top;

  if (contactPosition < window.innerHeight * 0.6) {
    contactSection.classList.add("show");
  }
});
