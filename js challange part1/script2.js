let num1 = 7;
let num2 = 5;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let ad = document.getElementById("aa");
console.log(ad);
let sb = document.getElementById("bb");
console.log(sb);
let ml = document.getElementById("cc")
console.log(ml)
let db = document.getElementById("dd")
console.log(db)

function add() {
  ad.textContent = num1 + num2;
}
function sub() {
  sb.textContent = num1 - num2;
}
function mul() {
  ml.textContent = num1 * num2;
}
function div() {
  db.textContent = num1 / num2;
}