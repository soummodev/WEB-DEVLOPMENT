let nums = [1, 2, 3, 4];
const double = nums.map((n) => n * 2);
console.log(double);
nums = [1, 2, 3, 4, 5, 6];
const filter = nums.filter((n) => n % 2 == 0);
console.log(filter);

let letter = ["a", "b", "c"];
const each = letter.forEach((n) => {
  console.log(n);
});
//higher order function
const greet = (name) => {
  return `hello ${name}`;
};
const p = (k) => {
  console.log(greet("sanjay"));
};
p(greet);
const add = (a, b) => {
  return a + b;
};
const mul = (a) => {
  console.log(add(3, 5) * 2);
};
mul(add);
const sum = nums.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(sum);
const f = nums.find((n) => n > 3);
console.log(f);
const m = nums.some((n) => n > 3);
console.log(m);
nums.sort();
console.log(nums);
const arr = [1, 45, 2, 3, 7, 1, 34, 23, 56, 43];
arr.sort((a, b) => b - a);
console.log(arr);

const user = {
  name: "soummo",
};
const { name } = user;
console.log(name);
const { age = 17 } = user;
console.log(age);
const a = [1, 2, 3, 4];
const b = [6, 7, 8, 9];
const result = [...a, ...b];
console.log(result);

//same vabe object copy kora jai
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const res = { ...obj1, ...obj2 };

console.log(res);
const key = "email";
const z = {
  name: "soummo",
  [key]: "soummo@gmail.com",
};
console.log(z);
//object reference copy
const obj5 = {
  name: "soummo",
};
const obj6 = obj1;

//object real copy
const obj3 = {
  name: "soummo",
};
const obj4 = { ...obj3 };
obj4.name = "sanjay";
console.log(obj4.name);
/////////////////////
// const btn = document.getElementById("btn")
// btn.addEventListener("keydown", (e)=> {
//     if(e.key=== "Enter") hendlesend()
// })
// btn.addEventListener("click",(e)=>{
//     if(e.target.id === "btn") handlesend
// })
// const list = document.getElementById("list")
// const newlist = document.createElement("li")
// newlist.innerText = "banana";
// list.appendChild(newlist)

const { createElement } = require("react")

//local storaage item set keywise
localStorage.setItem("name","soummo")
//get the item
const data =localStorage.getItem("name")
console.log(data)
//remove the item
localStorage.removeItem("name")
//remove all element
localStorage.clear()
//object ana
const data1 = localStorage.getItem("user")
//object ke readable l=kora
const parse = JSON.parse(data1)
console.log(parse)
const obj1 = {
 name:"soummo",
 age : 20,
    
}
//localstorage sudu string store kore tai strigify use kora lagei
localStorage.setItem("obj1",JSON.stringify(user))
//sessionstorage o same kintu temporary ,,tab close holei delet
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
  //way in using html list
const users = document.getElementById("users")
fetch("url")
    .then((response) => response.json())
   .then((data)=> {
   data.forEach( (user)=> {
    const li = document.createElement("li")
    li.innerText = user.name;
    users.appendChild(li)
   });
   }
   )
   //modern way by async await die
   async function getuser(){
    const respons = await fetch("url")
    const data = await response.json()
    console.log(data)
   }
   //promises
   const p = new Promise((resolve,reject)=>{
    resolve("success")
   })
   console.log(p)

// .then() use hoi resolve er data dhore rakhar jonno
const a = new Promise((resolve,reject)=>{
    resolve("succesful")
})
 a.then((data)=> {
    console.log(data)
 })
 //kaj fail hole reject hoi
 const myPromise = new Promise((resolve, reject) => {

  reject("Something went wrong");

});
//.catch() error dhore rakhe
 const myPromise = new Promise((resolve, reject) => {

  reject("Something went wrong");

});
myPromise.catch((error)=>{
    console.log(error)
})
//eksathe
let is = true
const b = new Promise((resolve,reject)=>{
if(is) resolve("succesful")
else reject("rejected")
})
b.then((data)=>{
    console.log(data)
})
b.catch((error)=>{
    console.log(error)

})
// async example
const p1 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("done"),2000
     })
})
console.log("...loading")
p1.then((data)=>{
    console.log(data)
})


//json trict for deep copy
const user1 = {
  name: "Sanjay",

  address: {
    city: "Khulna"
  }
};
const user2 = JSON.parse(JSON.stringify(user1))
user2.address.city = "DHAKA"
console.log(user1.address.city )//khulna
console.log(user2.address.city )//DHAKA