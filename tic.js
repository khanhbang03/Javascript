box = document.getElementsByTagName("input");

function print(data) {
  document.getElementById("print").innerHTML = data;
}

// print result
function result(player) {
  for (let i in box) {
    box[i].disabled = true;
  }
  if (player == "XO") {
    print("Match tie");
    window.alert("Match tie");
  } else {
    print("Player " + player + " won");
    window.alert("Player " + player + " won");
  }
}

function win(player) {
  var w = (a, b, c) => {
    a = box[a - 1].value;
    b = box[b - 1].value;
    c = box[c - 1].value;
    return [a, b, c].filter((val) => val == player).length == 3;
  };
  if (
    w(1, 2, 3) ||
    w(4, 5, 6) ||
    w(7, 8, 9) ||
    w(1, 4, 7) ||
    w(2, 5, 8) ||
    w(3, 6, 9) ||
    w(1, 5, 9) ||
    w(3, 5, 7)
  ) {
    return true;
  }
  return false;
}

function check() {
  b1 = box[0].value;
  b2 = box[1].value;
  b3 = box[2].value;
  b4 = box[3].value;
  b5 = box[4].value;
  b6 = box[5].value;
  b7 = box[6].value;
  b8 = box[7].value;
  b9 = box[8].value;

  if (win("X")) {
    result("X");
  } else if (win("O")) {
    result("O");
  } else if ((b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9).length == 9) {
    result("XO");
  } else {
    // if not win or tie then continue playing
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
    box[n - 1].value = "X";
    box[n - 1].disabled = true;
    turn = "O";
  } else {
    box[n - 1].value = "O";
    box[n - 1].disabled = true;
    turn = "X";
  }
}

function reset() {
  location.reload();
  for (let val of box) {
    val = "";
  }
}