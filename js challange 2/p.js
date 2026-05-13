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
