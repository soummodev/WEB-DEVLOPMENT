let hcount = 0;
let gcount = 0;
let hout = document.getElementById("f");
let gout = document.getElementById("s");
console.log(hout);
console.log(gout);

function hoi() {
  hcount++;
  hout.innerText = hcount;
}
function hti() {
  hcount += 2;
  hout.innerText = hcount;
}
function hthi() {
  hcount += 3;
  hout.innerText = hcount;
}
function goi() {
  gcount++;
  gout.innerText = gcount;
}
function gti() {
  gcount += 2;
  gout.innerText = gcount;
}
function gthi() {
  gcount += 3;
  gout.innerText = gcount;
}