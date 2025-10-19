document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");
  const status = document.getElementById("status");

  squares.forEach((square) => {
    square.classList.add("square");
  });

  const state = Array(9).fill(null);
  let currentPlayer = "X";
  let gameOver = false;

  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  function checkWinner() {
    for (const [a,b,c] of wins) {
      if (state[a] && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return null;
  }

  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (gameOver) return;
      if (state[index] !== null) return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      state[index] = currentPlayer;

      const winner = checkWinner();
      if (winner) {
        status.textContent = `Congratulations! ${winner} is the Winner!`;
        status.classList.add("you-won");
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });

    square.addEventListener("mouseover", () => {
      if (!gameOver && state[index] === null) square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  });
});
