let p1score = 1;
let p2score = 1;
let p3score = 1;

const player1score = document.querySelector('#player_1');
const player2score = document.querySelector("#player_2");
const player3score = document.querySelector("#player_3");

player1score.innerText = new String(p1score);
player2score.innerText = new String(p2score);
player3score.innerText = new String(p3score);

document.querySelector('#p1').addEventListener('click', () => {
  p1score++;
  if (p1score == 10) alert('P1 WINS!');
  player1score.innerText = new String(p1score);
});

document.querySelector("#p2").addEventListener("click", () => {
  p2score++;
  if (p2score == 10) alert("P2 WINS!");
  player2score.innerText = new String(p2score);
});

document.querySelector("#p3").addEventListener("click", () => {
  p3score++;
  if (p3score == 10) alert("P3 WINS!");
  player3score.innerText = new String(p3score);
});

document.querySelector("#m1").addEventListener("click", () => {
  if (p1score == 1) return;
  p1score--;
  player1score.innerText = new String(p1score);
});

document.querySelector("#m2").addEventListener("click", () => {
  if (p2score == 1) return;
  p2score--;
  player2score.innerText = new String(p2score);
});

document.querySelector("#m3").addEventListener("click", () => {
  if (p3score == 1) return;
  p3score--;
  player3score.innerText = new String(p3score);
});
