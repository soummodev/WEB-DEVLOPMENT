let list = ["check out my netflix clone", "hii i am there ", "share the portfolio"]
let marks = [10, 76, 78]
let experience = ["school boy", "engineer"]
console.log(marks.length)
let per = ["soummo", 35, true]
let cards = [6, 7]
cards.push(9)
console.log(cards)
cards.pop()
console.log(cards);
for (let i = 10; i <= 100; i += 10){
    console.log(i);
    
}
for (let i = 0; i < list.length; i++){
    console.log(list[i])
}
let random = Math.random()// genarates number between 0 to 1(0 - 0.999)
let floorednum = Math.floor(5.8773)
let mix = Math.floor(Math.random()*6)
console.log(floorednum)
// make a ludo function
function ludo() {
    let random = Math.floor(Math.random() * 6) + 1
    return random
}
let r = ludo()
console.log(r)
//objects
let course = {
    title: "learn csss",
    creator: "soummo",
    length: 63,
    level: 2,
    tags:["html","css"]
    


}
console.log(course.level)