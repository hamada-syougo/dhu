
## 衝突回避ゲームを作ってみよう

プログラムでアニメーションを実現するには、タイマー処理を使用します。
タイマー処理とは、1秒間に決められた回数、繰り返し呼び出される処理のことです。
この繰り返しの処理の中で、少しずつ表示位置を変化させることで、
移動しているように見えます。

下のプログラムを、script.js の障害物を移動させるロジックの部分に
貼り付けて、動作を確認してみましょう。

```
  // 障害の出現位置
  const OBSTACLE_START = 600
  let obstacleLeft = OBSTACLE_START
  const obstacleInterval = setInterval(function () {
    if (obstacleLeft < -60) {
      obstacleLeft = OBSTACLE_START
      updateScore()
    } else {
      obstacleLeft -= 10
      obstacle.style.left = obstacleLeft + 'px'
    }

  }, 1000 / FPS)
```

くまが左に移動するようになりましたか？
setInterval という処理が、タイマー処理部分になります。
この処理は、決められた時間（ミリ秒）ごとに呼び出される処理で、
「1000 / FPS 」で計算されるミリ秒ごとに呼びされるように設定しています。

FPS は変数で、script.js の最初のほうで宣言されています。
FPS の値が30の場合、1000 / 30 => 33.3333 になり、
約33ミリ秒ごとに setInterval の処理が呼び出されるようになります。

setInterval の処理の中では、 obstacleLeft -= 10 の処理で、
最初の出現位置から 10px ずつ左に移動（左端が0px、右端が600px）するようにしています。
-60px の位置まできたら、最初の出現位置にもどるようにしています。



## やってみよう

下の moveObstacle の処理を、script.js の moveObstacle の処理と置き換えることで、
障害物に衝突するとゲームオーバーになるようになります。
プログラムを置き換えてゲームを実行してみましょう。

script.js の中で使われている数字が何を意味するかを考えながら、
数字を色々変更して、プログラムがどう変化するかを見てみましょう。


```

function moveObstacle() {
  // 障害の出現位置
  const OBSTACLE_START = 600
  let obstacleLeft = OBSTACLE_START
  const obstacleInterval = setInterval(function () {
    if (obstacleLeft < -60) {
      obstacleLeft = OBSTACLE_START
      updateScore()
    } else {
      obstacleLeft -= 10
      obstacle.style.left = obstacleLeft + 'px'
    }

    if (obstacleLeft < 60 && obstacleLeft > 20) {
      const characterBottom = parseInt(
        getComputedStyle(character).getPropertyValue('bottom')
      )
      if (characterBottom < 60) {
        obstacleLeft = OBSTACLE_START
        document.getElementById("game-status").innerHTML = "ゲームオーバー"
        clearInterval(obstacleInterval)
      }
    }
  }, 1000 / FPS)
}

```
