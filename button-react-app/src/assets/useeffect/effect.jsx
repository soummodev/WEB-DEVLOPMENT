import React, { useState, useEffect } from "react"
function Effect() {
    const [count, setcount] = useState(0)
    const [color, scolor] = useState("green")
    const addc = () => {
        setcount(c => c+1)
    }
      const subc = () => {
        setcount((c) => c - 1);
    };
    const cc = () => {
        scolor(c => c ==="green" ? "red" : "green")
    }
    useEffect(() => {
        document.title = `count: ${count} ${color}`
    },[count])
    return (
      <div>
        <p style>count : {count}</p>
        <button onClick={addc}>Add</button>
        <button onClick={subc}>Subtract</button>
        <button onClick={cc}>Change Color</button>
      </div>
    );
}
export default Effect
// useEffect(function, [dependencies])

// 1. useEffect(() => {})         // Runs after every re-render
// 2. useEffect(() => {}, [])     // Runs only on mount
// 3. useEffect(() => {}, [value])// Runs on mount + when value changes