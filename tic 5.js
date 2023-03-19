document.write("<h1>TIC TAC TOE 5</h1>");
document.write(
  '<p id="ins">First Player starts as <b>Player X</b><br>and<br>Second Player as <b>Player O</b></p>'
);

size = 4;
while (size < 5 || size > 10) {
  size = parseInt(prompt("Size (5-10):"));
}

for (let i = 0; i < size; i++) {
  document.write("<br><br>");
  for (let j = 0; j < size; j++) {
    document.write(
      '<input type="text" onclick="f(' +
        (i * size + j).toString() +
        '); check()" readonly>'
    );
  }
}

document.write("<br><br><br>");
document.write('<button onclick="reset()">RESET</button>');
document.write("<br><br>");
document.write('<p id="print"></p>');

box = document.getElementsByTagName("input");

function print(data) {
  document.getElementById("print").innerHTML = data;
}

function tie() {
  // there is no way to win
  sum = 0;
  for (let i = 0; i < size * size; i++) {
    sum += box[i].value.length;
  }
  if (sum == size * size) {
    return true;
  }
  return false;
}

function win(p) {
  var w = (a, b, c, d, e) => {
    a = box[a[0] * size + a[1]].value;
    b = box[b[0] * size + b[1]].value;
    c = box[c[0] * size + c[1]].value;
    d = box[d[0] * size + d[1]].value;
    e = box[e[0] * size + e[1]].value;
    return a + b + c + d + e == p + p + p + p + p;
  };
  // check horizontal lines
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 4; j++) {
      if (w([i, j], [i, j + 1], [i, j + 2], [i, j + 3], [i, j + 4])) {
        return true;
      }
    }
  }
  // check vertical lines
  for (let i = 0; i < size - 4; i++) {
    for (let j = 0; j < size; j++) {
      if (w([i, j], [i + 1, j], [i + 2, j], [i + 3, j], [i + 4, j])) {
        return true;
      }
    }
  }
  // check diagonal lines
  for (let i = 0; i < size - 4; i++) {
    for (let j = 0; j < size - 4; j++) {
      if (
        w(
          [i, j],
          [i + 1, j + 1],
          [i + 2, j + 2],
          [i + 3, j + 3],
          [i + 4, j + 4]
        )
      ) {
        return true;
      }
    }
  }
  for (let i = 0; i < size - 4; i++) {
    for (let j = 4; j < size; j++) {
      if (
        w(
          [i, j],
          [i + 1, j - 1],
          [i + 2, j - 2],
          [i + 3, j - 3],
          [i + 4, j - 4]
        )
      ) {
        return true;
      }
    }
  }
}

function disable() {
  for (let i in box) {
    box[i].disabled = true;
  }
}

function check() {
  if (win("X")) {
    disable();
    print("Player X won");
    window.alert("Player X won");
  } else if (win("O")) {
    disable();
    print("Player O won");
    window.alert("Player O won");
  } else if (tie()) {
    disable();
    print("Match tie");
    window.alert("Match tie");
  } else {
    if (turn == "X") {
      print("Player X Turn");
    } else {
      print("Player O Turn");
    }
  }
}

// play operation
turn = "X";
function f(n) {
  if (turn == "X") {
    box[n].value = "X";
    box[n].disabled = true;
    turn = "O";
  } else {
    box[n].value = "O";
    box[n].disabled = true;
    turn = "X";
  }
}

function reset() {
  location.reload();
  for (let val of box) {
    val = "";
  }
}
