//document.getElementById("count").innerText = 5
let count = 0
let countEl = document.getElementById("count-el")

let p = document.getElementById("p")
function increment() {
   
    count = count + 1
    countEl.innerText = count;
    console.log(count)
}


function save() {
    let c = count + "-";
    p.innerText += c
    //p.textContent +=c
    countEl.innerText = 0
    count = 0
  console.log(c)
}