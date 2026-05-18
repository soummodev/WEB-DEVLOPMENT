import React, { useState } from "react"
function Counter() {
    const [name, setname] = useState("geust");//useState()
    const [age, setage] = useState(18);
    const [isStudent,setStudent] = useState(false)
    const uname = () => {
setname("soummo")
      
    }
    const sage = () => {
        setage(age+1)
    }
    const set = () => {
        setStudent(!isStudent);
    }
    return (
      <div>
        <h2>Name : {name}</h2>
        <button onClick={uname}>change</button>

        <h2>Age : {age}</h2>
        <button onClick={sage}>Increment age</button>

        <h2>isStudent : {isStudent ? "yes": "no" }</h2>
        <button onClick={set}>Toggle</button>
      </div>
    );
}
export default Counter