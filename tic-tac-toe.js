document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");

  squares.forEach((square) => {
    square.classList.add("square");
  });

  const state = Array(9).fill(null);
  let currentPlayer = "X";

  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (state[index] !== null) return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      state[index] = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });

    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  });
});
