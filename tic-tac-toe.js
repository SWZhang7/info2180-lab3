document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  if (!board) return;

  const cells = board.querySelectorAll("div"); 
  cells.forEach((cell) => {
    cell.classList.add("square");
  });

  
});