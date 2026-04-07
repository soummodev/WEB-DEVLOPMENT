const em = 34
let maassage = ""
em < 35 ? maassage = "soummo" : maassage = ""
console.log(maassage)
function price(item) {
    let price = 0;
    switch (item) {
      case "coffe":
        price = 2;
        break;
      case "cake":
        price = 4;
            break;
        default : return `sorry we dont sell ${item}`
    }
    return `you selected coffe and its price is ${price}`
}
console.log(price("cakeo"))
const favouriteflim = {
    title: "top gun",
    year: "1986",
    genre: "action",
    star: "tom cruse"
    
}
const { title, year, genre, star } = favouriteflim
console.log(`my favourite flim is ${title}`)
function print(light) {
  console.log(light);
}

setTimeout(() => print("soummo"), 2000);
print("soummo");

function la(answer, points) {
    console.log(`the capital is $`)
}
setTimeout(la, 3000, "lima", 10)
export const ipd =[ {
  address: "ashulia",
  distance: 2,
  travel: "kormu na",
  price : 1000,
}

]
export const spd = [
  {
    description:"hii it is soummo",
    name: "soummo",
    age: 22,
    job: "student",
  }
]
//we dont need to write export before const
//we can do this by writting export
//export {spd,ipd}
 