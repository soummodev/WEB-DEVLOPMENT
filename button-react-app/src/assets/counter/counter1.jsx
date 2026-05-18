import React, { useState } from "react"
import "./counter1.css"
function C() {
    const [count , set] = useState(0)
    const increment = () => {
        set(count + 1);
    }
      const decrement = () => {
        set(count - 1);
    };
      const reset = () => {
        set(0);
    };
    return (
        <div className="cc">
            <p className="cd ">number : {count}</p>
        <button className="cb"  onClick={increment}>increment</button>
        <button className="cb" onClick={decrement}>decrement</button>
        <button className="cb" onClick={reset}>reset</button>
      </div>
    );
}
export default C
//if ewe want to incremnet 3  or more
// set(count => count + 1);
// set(count => + 1);
// set(count => + 1);