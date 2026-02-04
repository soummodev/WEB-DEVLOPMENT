
// let info = {
//     name: "soummo",
//     age: 23,
//     country:"Bangladesh"
// }
// let formate = info.name + " is " + info.age + " years old and lives in " + info.country
// function logdata() {
    
// console.log(formate)
// }
// logdata()
// let con = ["bangladesh", "india", "pakistan"]
// con.push("aus")
// console.log(con)
// con.pop();
// console.log(con);
// con.shift();
// console.log(con);
// con.unshift("zim");
// console.log(con);
let hands = ["rock", "paper", "scissor"]
function game() {
    let point = Math.floor(Math.random() * 3)
    return hands[point]
}
console.log(game())
let hi = "4"
let pi = "9"
let sum = Number(hi) + Number(pi)
console.log(sum)
console.log(Boolean(""))//false
console.log(Boolean("0"))//true
console.log(Boolean(100))//true
console.log(Boolean(null))//false
console.log(Boolean([0]))//true
console.log(Boolean(-0))//false
const totalprice = 439.09373737773737
console.log(totalprice.toFixed(2))
const totalprice2 = "439.09373737773737";
console.log(Number(totalprice.toFixed(2)));