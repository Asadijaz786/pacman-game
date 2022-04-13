// 1 => <div class='wall'></div>
// 2 => <div class='coin'></div>
// 3 => <div class='ground'></div>
// 4 => <div class='ghost'></div>
// 5 => <div class='pacman'></div>
// map = [ 1, 2, 3 ]
// map = [ [1,2,3], [1,2,3], [1,2,3] ];

const score = document.getElementById("score");

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1],
  [1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
  [1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let pacman = {
  x: 8,
  y: 4,
};

function drawWorld() {
  document.getElementById("gameCanvas").innerHTML = "";
  for (let y = 0; y < map.length; y++) {
    // console.log(map[y]);
    for (let x = 0; x < map[y].length; x++) {
      console.log(map[y][x]);
      if (map[y][x] === 1) {
        document.getElementById("gameCanvas").innerHTML +=
          "<div class='wall'></div>";
      } else if (map[y][x] === 2) {
        document.getElementById("gameCanvas").innerHTML +=
          "<div class='coin'></div>";
      } else if (map[y][x] === 3) {
        document.getElementById("gameCanvas").innerHTML +=
          "<div class='ground'></div>";
      } else if (map[y][x] === 5) {
        document.getElementById("gameCanvas").innerHTML +=
          "<div class='pacman'></div>";
      }
    }
    document.getElementById("gameCanvas").innerHTML += "<br>";
  }
}

document.onkeydown = function (e) {
  console.log(e.keyCode);

  if (e.keyCode === 37) {
    // left
    if (map[pacman.y][pacman.x - 1] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x - 1;
      map[pacman.y][pacman.x] = 5;
      currentScore = currentScore + 1;
      drawWorld();
    }
  } else if (e.keyCode === 38) {
    // up
    if (map[pacman.y - 1][pacman.x] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y - 1;
      map[pacman.y][pacman.x] = 5;
      drawWorld();
    }
  } else if (e.keyCode === 39) {
    // right
    if (map[pacman.y][pacman.x + 1] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x + 1;
      map[pacman.y][pacman.x] = 5;
      drawWorld();
    }
  } else if (e.keyCode === 40) {
    // down
    if (map[pacman.y + 1][pacman.x] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y + 1;
      map[pacman.y][pacman.x] = 5;
      drawWorld();
    }
  }
};
drawWorld();

let currentScore = 0;

function addScores() {
  for (let i = 0; i < map[y].length; i++) {
    document.onkeydown += currentScore;
    score.textContent = currentScore;
  }
}
addScores();
