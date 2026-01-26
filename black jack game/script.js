let first = getrandomcard();
let second = getrandomcard();
let cards = [first, second]
let sum =  cards[0] + cards[1]

let blackjack = false
let isalive = true
let message = ""
let messageel = document.getElementById("message-el");
console.log(messageel)
let sumel = document.getElementById("sum-el")
//let sumel = document.querySelector("sum-el"); id =# , class = .
console.log(sumel)
let cardel = document.getElementById("card-el")

function getrandomcard() {
   
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) return 11;
  else if (random >= 11 && random <= 13) return 10;
  else return random


 }
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
            cardel.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function card() {
  let card = getrandomcard();
  sum += card
  cards.push(card)
  start()

    cardel.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++){
      cardel.textContent += cards[i] + " "
  }
}
