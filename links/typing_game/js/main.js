const jpWords = [
  "わかもの",
  "でんしたばこ",
  "じゅけんせい",
  "しゅどうけん",
  "せいきゅうしょ",
  "あわただしい",
  "はいめんとび",
  "グリーンサラダ",
  "かんそくじょ",
  "りょきゃくゆうそう",
  "きんきゅうけいこく",
  "しまはんとう",
  "ないあがらのたき",
  "うどん",
  "おちゃかい",
  "たんさんがす",
  "でんしじしょ",
  "しょうどく",
  "にっこうよく",
  "こめんと"
];

const engWords = [
  "rightful",
  "want",
  "alcoholic",
  "provide",
  "whimsical",
  "intelligent",
  "selection",
  "minute",
  "berry",
  "wealthy",
  "political",
  "tangible",
  "absorbing",
  "arrive",
  "rough",
  "amazing",
  "opposite",
  "peaceful",
  "thankful",
  "competition"
];

const setTime = 5;
let time = setTime;
let score = 0;
const wordDisplay = document.querySelector("#random-word");
const timeDisplay = document.querySelector("#time-left");
const scoreDisplay = document.querySelector("#score");
const userInput = document.querySelector("#user-input");
const scoreTable = document.querySelector("#score-table");
const scoreTableBody = document.querySelector("#scores");
const msg = document.querySelector("#message");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const pageBackBtn = document.querySelector("#page-back__btn");
let threeSeconds = 3 + 1;

let selectedLanguage;

// 単語の言語選択
const langBtns = document.querySelectorAll(".lang-options__btn");

langBtns.forEach(langBtn => {
  langBtn.addEventListener("click", e => {
    eval(`selectedLanguage=${e.target.id}`);
    document.querySelector(".lang-options").style.display = "none";
    scoreTableBody.style.display = "table-row-group";
  });
});

// ”戻る” ボタンが押された時のイベント
pageBackBtn.addEventListener("click", () => {
  location.reload();
});

// ページがロードし終わったと時の処理
window.addEventListener("load", initGame);

function initGame() {
  timeDisplay.innerHTML = time;
  scoreDisplay.innerHTML = score;
}

// startボタンイベント
startBtn.addEventListener("click", () => {
  pageBackBtn.style.display = "none";
  countThree();
});

// startボタンを押すと３秒カウントダウン
function countThree() {
  const startCountdownInterval = setInterval(() => {
    if (threeSeconds > 1) {
      threeSeconds--;
      wordDisplay.innerHTML = threeSeconds;
    } else if (threeSeconds === 1) {
      clearInterval(startCountdownInterval);
      threeSeconds = 3 + 1;
      startGame();
    }
  }, 1000);
}

// 3秒後にゲーム開始
function startGame() {
  startBtn.classList.remove("show");
  userInput.disabled = false;
  userInput.classList.remove("disabled");
  userInput.focus();

  generateWord();
  countDown();
}

// タイムリミット（カウントダウン）
function countDown() {
  const mainInterval = setInterval(() => {
    if (time > 1) {
      time--;
      timeDisplay.innerHTML = time;
    } else if (time === 1) {
      timeDisplay.innerHTML = 0;

      msg.innerHTML = "GAME OVER...";
      userInput.setAttribute("disabled", true);
      userInput.classList.add("disabled");
      restartBtn.classList.add("show");
      pageBackBtn.style.display = "block";
      scoreTable.style.display = "table";

      addScore();
      clearInterval(mainInterval);
    }
  }, 1000);
}

// restartボタンイベント（もう一度プレイ）

restartBtn.addEventListener("click", () => {
  time = setTime;
  score = 0;
  initGame();
  restartBtn.classList.remove("show");
  startBtn.classList.add("show");
  msg.innerHTML = "";
  userInput.value = "";
});

// ランダム単語の生成
function generateWord() {
  const genNum = Math.floor(Math.random() * selectedLanguage.length);
  const genWord = selectedLanguage[genNum];
  wordDisplay.innerHTML = genWord;
}

// 入力された文字のチェック
userInput.addEventListener("input", checkWord);
function checkWord() {
  if (userInput.value === wordDisplay.innerHTML) {
    score++;
    scoreDisplay.innerHTML = score;
    userInput.value = "";
    time = setTime;
    generateWord();
  }
}

// タイムアップと同時にスコア履歴に追加
function addScore() {
  const newScore = scoreDisplay.innerHTML;

  const newtr = document.createElement("tr");
  newtr.innerHTML = `<td>${newScore} pt</td>`;
  scoreTableBody.append(newtr);
}
