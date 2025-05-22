let boxes = document.querySelectorAll(".btn");
let win = document.querySelector(".win");
let resetGame = document.querySelector(".resetGame");
let newGame = document.querySelector(".newGame");
let count = 0;
winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnX = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click occured");
        if (turnX) {
            box.innerHTML = "X";
            turnX = false;
        } else {
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;
         let isWinner = checkWinner();
         count++;
    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
});

const gameDraw = () => {
   win.innerHTML = `Game is Draw`;
    win.style.display = "inherit";
    disableButton();

};

resetGame.addEventListener("click", () => {
     count = 0;
    boxes.forEach((box) => {
        enableButton();
        turnX = true;
        win.style.display = "none";
    });
});

newGame.addEventListener("click", () => {
     count = 0;
    boxes.forEach((box) => {
        enableButton();
        turnX = true;
        win.style.display = "none";
    });
});
const enableButton = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
    });
};

const disableButton = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showWinner = (x) => {
    win.innerHTML = `The Winner is ${x}`;
    win.style.display = "inherit";
    disableButton();
};

const checkWinner = () => {
    for (let pattern of winnerPatterns) {
        //console.log(boxes[pattern[0]].innerHTML,boxes[pattern[1]].innerHTML,boxes[pattern[2]].innerHTML);
        if (
            boxes[pattern[0]].innerHTML != "" &&
            boxes[pattern[1]].innerHTML != "" &&
            boxes[pattern[2]].innerHTML != ""
        ) {
            if (
                boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML &&
                boxes[pattern[1]].innerHTML === boxes[pattern[2]].innerHTML
            ) {
                console.log("Winner", boxes[pattern[0]].innerHTML);
                showWinner(boxes[pattern[0]].innerHTML);
            }
        }
    }
};
