const FPS = 30 // ゲーム速度
const JUMP_HEIGHT = 100 // ジャンプの高さ
let score = 0
let isJumping = false

const character = document.getElementById('character')
const obstacle = document.getElementById('obstacle')

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space' && !isJumping) {
    jump()
  }
})

// ジャンプする
function jump() {
  if (!isJumping) {
    isJumping = true
    let jumpCount = 0

    const jumpInterval = setInterval(function () {
      const characterTop = parseInt(
        getComputedStyle(character).getPropertyValue('bottom')
      )

      if (characterTop < JUMP_HEIGHT && jumpCount < 15) {
        // ジャンプの処理
        character.style.bottom = characterTop + 20 + 'px'
      } else {
        clearInterval(jumpInterval)

        // 落下処理
        let fallCount = 0
        const fallInterval = setInterval(function () {
          const characterTop = parseInt(
            getComputedStyle(character).getPropertyValue('bottom')
          )
          if (characterTop > 0 && fallCount < 15) {
            character.style.bottom = characterTop - 20 + 'px'
          } else {
            clearInterval(fallInterval)
            isJumping = false
          }
          fallCount++
        }, 1000 / FPS)
      }
      jumpCount++
    }, 1000 / FPS)
  }
}

function updateScore() {
  score += 1
  document.getElementById('score').innerHTML = `スコア: ${score}`
}

// 障害物を移動する
function moveObstacle() {

  /* この下の行に、障害物（くま）が移動するプログラムを貼り付けてください */



}

moveObstacle()
