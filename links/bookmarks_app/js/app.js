$(document).ready(() => {
  const addBtn = $("#submit-btn");

  addBtn.click(e => {
    e.preventDefault();
    const nameInput = $("#site-name");
    const urlInput = $("#site-url");
    const description = $("#site-descr");

    addBookmark(nameInput, urlInput, description);
    checkDescrInput(description);
    clearForm(nameInput, urlInput, description);
  });

  const validateUrl = urlInput => {
    // URL正規表現チェック
    const urlValidation = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (urlValidation.test(urlInput.val())) {
      return true;
    } else {
      return false;
    }
  };

  // リストに新ブックバークを追加
  const addBookmark = (nameInput, urlInput, description) => {
    $(".latest").removeClass("latest");

    if (nameInput.val() !== "" && urlInput.val() !== "") {
      validateUrl(urlInput);

      if (validateUrl(urlInput)) {
        $("#items").append(`
        <div class="item">
            <div>
                <h3 class="item-name">${nameInput.val()}</h3>
                <a href="${urlInput.val()}" class="visit-btn" target="_blank">Visit</a>
                <button class="delete-btn">Delete</button>
            </div>
            <p class="item-descr latest">
                <span>【<span class="standout">About</span> the site】: ${description.val()}</span>
            </p>
        </div>
    `);
      } else {
        alertMsg("Enter a valid URL!");
      }
    } else {
      alertMsg("Fill in both『Site Name』and『Site URL』!");
    }
  };

  //   『DESCRIPTION』の入力有無をチェックし無しであればそれに応じてリストへの出力表記を変更
  const checkDescrInput = function(description) {
    if (description.val() === "") {
      $(".latest").css("display", "none");
    } else {
    }
  };

  //   ボタンクリックと同時にフォームをクリアする
  const clearForm = (nameInput, urlInput, description) => {
    nameInput.val("");
    urlInput.val("");
    description.val("");
  };

  //   『DELETE BUTTON』アクション。押されたボタンの親の親要素を削除。
  $(window).click(e => {
    if ($(e.target).hasClass("delete-btn")) {
      $(e.target)
        .parent()
        .parent()
        .remove();
    }
  });

  //   アラートメッセージ
  const alertMsg = message => {
    const msg = $("#msg");
    msg.html(`${message}`);
    msg.css("opacity", "1");

    setTimeout(() => {
      msg.css("opacity", "0");
    }, 3000);
  };
});
