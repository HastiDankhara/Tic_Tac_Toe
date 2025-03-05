let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");

let turn0 = true;

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// for reset game
const resetbtnf = () => {
  turn0 = true;
  enableboxes();
};
// for click boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turn0) {
        box.innerText = "O";
        turn0 = false;
      } else {
        box.innerText = "x";
        turn0 = true;
      }
    }
    box.disabled = true;
    winner();
  });
});
// after winning other boxes are disable
const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
// for reset game
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = ""; //for empty boxes
  }
};
// for get winner
const winner = () => {
  for (let pattern of win) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        alert("Winner: " + pos1val);
        disabledboxes();
        return;
      }
    }
  }
};
resetbtn.addEventListener("click", resetbtnf);
