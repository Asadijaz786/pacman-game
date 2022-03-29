// 1 => <div class='wall'></div>
// 2 => <div class='coin'></div>
// 3 => <div class='ground'></div>
// 4 => <div class='ghost'></div>
// 5 => <div class='pacman'></div>
// map = [ 1, 2, 3 ]
// map = [ [1,2,3], [1,2,3], [1,2,3] ];

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
  [1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function drawWorld() {
  for (let y = 0; y < map.length; y++) {
    // console.log(map[y]);
    for (let x = 0; x < map[y].length; x++) {
      console.log(map[y][x]);
      if (map[y][x] === 1) {
        document.getElementById("world").innerHTML +=
          "<div class='wall'></div>";
      } else if (map[y][x] === 2) {
        document.getElementById("world").innerHTML +=
          "<div class='coin'></div>";
      } else if (map[y][x] === 3) {
        document.getElementById("world").innerHTML +=
          "<div class='ground'></div>";
      } else if (map[y][x] === 5) {
        document.getElementById("world").innerHTML +=
          "<div class='pacman'></div>";
      }
    }
    document.getElementById("world").innerHTML += "<br>";
  }
}
drawWorld();
