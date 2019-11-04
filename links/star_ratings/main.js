const rankingTable = document.getElementById("ranking-body");
const updateBtn = document.querySelector("#update-btn");

// 初期評価
const ratings = {
  sony: 5.0,
  samsung: 4.5,
  panasonic: 4.0,
  lg: 3.5
};

document.addEventListener("DOMContentLoaded", putStars);

//評価の値をパーセントに変換しその値を"width"として使用し黄色の星で埋める。
function putStars() {
  for (let rating in ratings) {
    const percentages = Math.round((ratings[rating] / 5) * 100);

    const brand = document.querySelector(`.${rating} .stars-inner`);
    brand.style.width = `${percentages}%`;

    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}

// ブランドが選択された時にinput[type="number"]のdiabledを解除し評価の値を変更可能に。
const selectBrand = document.querySelector("#select-brand");
selectBrand.addEventListener("change", () => {
  document.querySelector("#change-rating").disabled = false;

  // 評価を変更しボタンが押された時のアクション
  const newRating = document.querySelector("#change-rating");
  updateBtn.addEventListener("click", e => {
    e.preventDefault();

    if ((newRating.value <= 5) & (newRating.value.length <= 3)) {
      ratings[selectBrand.value] = newRating.value;

      putStars();
      getRanking();
    } else {
      alert("Enter 1 to 5 (no more than 1 decimal place)");
      return;
    }
  });
});

function getRanking() {
  let arrySort = [];
  for (let brand in ratings) {
    arrySort.push([brand, ratings[brand]]);
    arrySort.sort((a, b) => {
      return b[1] - a[1];
    });
  }

  rankingTable.innerHTML = `
  <tr>
    <td>1</td>
    <td>${arrySort[0][0]}</td>
    <td>${arrySort[0][1]}</td>
  </tr>

  <tr>
    <td>2</td>
    <td>${arrySort[1][0]}</td>
    <td>${arrySort[1][1]}</td>
  </tr>

  <tr>
    <td>3</td>
    <td>${arrySort[2][0]}</td>
    <td>${arrySort[2][1]}</td>
  </tr>

  <tr>
    <td>4</td>
    <td>${arrySort[3][0]}</td>
    <td>${arrySort[3][1]}</td>
  </tr>
 `;
}

getRanking();
