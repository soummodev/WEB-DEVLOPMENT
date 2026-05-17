//object and prototype
const student = {
    fullname: "soummo",
    marks: 94.3,
    printmarks: function () {
        console.log(this.marks)
    },
    printmarks1() {
        console.log("hiii")
    }
};
const obj2 = {
    salary :4000000,
}
obj2.__proto__ = student;
obj2.printmarks1()
//if object and prototype has the same function object er tai call hobe
//class
class CarBasic {
  brand;
  constructor() {
    console.log("default constructor called");
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  set(brand) {
    this.brand = brand;
  }
  view() {
    console.log(this.brand);
  }
}
let basicCar1 = new CarBasic();
let basicCar2 = new CarBasic();
basicCar2.set("soummo");
basicCar2.view();

class car {
    brand;
    constructor(brand) {
        console.log("default constructor called")
        this.brand = brand;
    }
    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }
    
    view() {
        console.log(this.brand)
    }
}
let obj4 = new car("soummo");

let obj5= new car("sanjay")

obj5.view()

// inheritence
class pen{
    hello() {
        console.log("hello")
    }
}
class pencil extends pen{
    hi() {
        console.log("hii ")
    }
}
const obj1 = new pencil();
obj1.hello()
class rubber extends pencil{
    bye() {
        console.log("bye")
    }
}
const rubberObj = new rubber();
rubberObj.hello();
rubberObj.hi();
//if parent class and child class has function of same name then the function of child will be invock
//if we use constractor in parent and child then we should use super() kewword
class person{
    constructor() {
        this.species = "hoii"
    }
}
class eng extends person{
    constructor(brand) {
        super()//to invoke parent constructor
        this.brand = brand
    }
}
const a = new eng("computer")
//if we want to pass the value of parameter of child constructor to parent constructor we just simply write the parameter in super  like  super(perameter)
//if we want to invoke a function of parent class before executing a function of a child class we just need to write super.parentfunction() right before the description of child function
// work(){
// super.eat()//parent function
//console.log("hello")
//}
//polymorphism nai super() die kaj hoi
// normal variable declare korlei seta public
// private korar jonno variable er namer  surute # use hoi like #name = "soummo" ekhane name private veriable
