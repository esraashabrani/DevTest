//console.log("hi");
window.drawFlag = true;
window.count = 0;
window.cells = []; // hold non-empty cells
window.random = 1;
window.win = false;
/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////

                                      FUNCTIONS TO Alternate between X and O         

///////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
function AddX(id) {
  // human Turn
  //debugger
  document.getElementById(id).value = "X";
  document.getElementById(id).disabled = true;
  cells.push(id);
  count++;
  check();
  draw();
  if (win === false) {  // to avoid infinte loop if last move was for x 
    AddO(id);
  }
}

function AddO(id) {
  // computer Turn
  do {
    random = Math.ceil(Math.random() * 9);
    console.log(cells);
  } while (cells.includes(random.toString()));
  console.log(random);

  document.getElementById(random).value = "O";
  document.getElementById(random).disabled = true;
  cells.push(random.toString());

  count++;
  check();
  draw();
}

/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////

                                      FUNCTIONS TO CHECK THE WINNER        

///////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

var winnerCases = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function check() {
  // case 1 row 1
  if (
    document.getElementById("1").value !== " " &&
    document.getElementById("1").value === document.getElementById("2").value &&
    document.getElementById("1").value === document.getElementById("3").value
  ) {
    for (var i = 1; i <= 3; i++) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("1").value);
  }
  //case 2 row 2
  if (
    document.getElementById("4").value !== " " &&
    document.getElementById("4").value === document.getElementById("5").value &&
    document.getElementById("4").value === document.getElementById("6").value
  ) {
    for (var i = 4; i <= 6; i++) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("4").value);
  }
  //case 3 row 3
  if (
    document.getElementById("7").value !== " " &&
    document.getElementById("7").value === document.getElementById("8").value &&
    document.getElementById("7").value === document.getElementById("9").value
  ) {
    for (var i = 7; i <= 9; i++) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("7").value);
  }

  //case 4 col1
  if (
    document.getElementById("1").value !== " " &&
    document.getElementById("1").value === document.getElementById("4").value &&
    document.getElementById("1").value === document.getElementById("7").value
  ) {
    for (var i = 1; i <= 7; i = i + 3) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("1").value);
  }
  //case 5 col2
  if (
    document.getElementById("2").value !== " " &&
    document.getElementById("2").value === document.getElementById("5").value &&
    document.getElementById("2").value === document.getElementById("8").value
  ) {
    for (var i = 2; i <= 8; i = i + 3) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("2").value);
  }
  //case 6 col3
  if (
    document.getElementById("3").value !== " " &&
    document.getElementById("3").value === document.getElementById("6").value &&
    document.getElementById("3").value === document.getElementById("9").value
  ) {
    for (var i = 3; i <= 9; i = i + 3) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("3").value);
  }
  //case 7 diagonal 1

  if (
    document.getElementById("1").value !== " " &&
    document.getElementById("1").value === document.getElementById("5").value &&
    document.getElementById("1").value === document.getElementById("9").value
  ) {
    for (var i = 1; i <= 9; i = i + 4) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("1").value);
  }
  //case 8 diagonal 2

  if (
    document.getElementById("3").value !== " " &&
    document.getElementById("3").value === document.getElementById("5").value &&
    document.getElementById("3").value === document.getElementById("7").value
  ) {
    for (var i = 3; i <= 7; i = i + 2) {
      var id = "" + i;
      document.getElementById(id).style.backgroundColor = "red";
    }
    drawFlag = false;
    win = true;
    alert("the winner is " + document.getElementById("3").value);
  }
}
/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////

                                      FUNCTION for DRAW case       

///////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
function draw() {
  //console.log(drawFlag);
  if (count === 9 && drawFlag === true) {
    alert("DRAW");
    reset();
  }
}
/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////

                                      FUNCTION TO RESET        

///////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
function reset() {
  for (var i = 1; i <= 9; i++) {
    var id = "" + i;
    document.getElementById(id).value = " ";
    document.getElementById(id).style.backgroundColor = "#81be1e";
    document.getElementById(id).disabled = false;
  }
  count = 0;
  drawFlag = true;
  cells = [];
  win = false;
}
