const inputField = document.getElementById('guess')
const checkButton = document.getElementById('checkButton')
const message = document.getElementById('message')

// 正解の数をランダムに生成
// Math.random() は0以上1未満の値をランダムに生成する
// Math.floor() は指定された数値以下の最大の整数を生成する
const answer = Math.floor(Math.random() * 10) + 1
// 試行回数
let attempts = 0

// ボタンがクリックされたときの処理を登録
checkButton.addEventListener('click', function () {
  // 入力フィールドの値を数値に変換
  const guess = parseInt(inputField.value)

  if (isNaN(guess) || guess < 1 || 10 < guess) {
    message.innerHTML = '1から10の数を入力してね。'
  } else {
    attempts += 1

    /* この下の行に判定ロジックを入れてください */



  }
  inputField.focus()
})
