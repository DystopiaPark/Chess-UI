let board = document.getElementById("bb");

for (i = 1; i <= 64; i++) {
  if (i < 9 || (i > 16 && i < 25) || (i > 32 && i < 41) || (i > 48 && i < 57)) {
    if (i % 2 != 0) {
      let white = document.createElement("span");
      white.style.backgroundColor = "rgb(50, 48, 48)";
      white.textContent = "\u00A0";
      board.append(white);
    } else {
      let black = document.createElement("span");
      black.style.backgroundColor = "lightgray";
      black.textContent = "\u00A0";
      board.append(black);
      if (i % 8 == 0) {
        board.append(document.createElement("br"));
      }
    }
  } else {
    if (i % 2 == 0) {
      let white = document.createElement("span");
      white.style.backgroundColor = "rgb(50, 48, 48)";
      white.textContent = "\u00A0";
      board.append(white);
      if (i % 8 == 0) {
        board.append(document.createElement("br"));
      }
    } else {
      let black = document.createElement("span");
      black.style.backgroundColor = "lightgray";
      black.textContent = "\u00A0";
      board.append(black);
      if (i % 8 == 0) {
        board.append(document.createElement("br"));
      }
    }
  }
}

// board.addEventListener("resize", (e) => {
//   board.style.height = e.style.width;
// });
// console.log(board.offsetWidth);
