let first = 10
let second = 6
let sum = first + second
let blackjack = false
let isalive = true
let message = ""
let messageel = document.getElementById("message-el");
console.log(messageel)
let sumel = document.getElementById("sum-el")
//let sumel = document.querySelector("sum-el"); id =# , class = .
console.log(sumel)
let cardel = document.getElementById("card-el")

 
function start() {
    if (sum < 20) {
      message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
      message = "you have got blackjack";
      blackjack = true;
    } else {
      message = "you are out of the game";
      isalive = false;
    }
    messageel.textContent = message
    sumel.textContent = "Sum: " + sum

}
function card() {
        cardel.textContent = "Cards: " + first + " , " + second;
}
