import React, { useState } from "react"
function Object() {
    const [car, set] = useState({
        year: 2025,
        make: "ford",
        model:"mustang"
        
    })
    const cy = (event) => {
        set(c => ({...c,year:event.target.value}))
    }
        
      const cm = (event) => {
        set(c => ({...c,make:event.target.value}))
    }
      const cod = (event) => {
        set(c => ({...c,model:event.target.value}))
    }
    return (
        <div>
            <p>Your favourite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={cy} />
            <input type="text" value={car.make} onChange={ cm} />
            <input type="text" value={car.model} onChange={cod } />
        </div>
    )
    

}
export default Object