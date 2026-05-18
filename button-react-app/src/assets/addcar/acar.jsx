import React, { useState } from "react"
function Car() {
    const [cars, setcar] = useState([])
    const [caryear, sety] = useState(new Date().getFullYear())
    const [carmake, setm] = useState("");
    const [carmodel, setmod] = useState("");
    const ac = () => {
        const newcar = {
            year: caryear,
            make: carmake,
            model: carmodel
        }
        setcar(cars => [...cars ,newcar])
    };
    const rc = (index) => {
        setcar(c => c.filter((_,i)=> i !==index))
    }
    const acy = (event) => {
        sety(event.target.value)
    };
    const acm = (event) => {
setm(event.target.value)
    };
    const acmod = (event) => {
        setmod(event.target.value);
    };



    return (
      <div>
            <h1>List of car object</h1>
            <ul>
                {cars.map((car, index) => {
                    return(
                    <li key={index} onClick={()=>rc(index)}>
                        {car.year} {car.make} {car.model}
                        </li>
                    )
                })}
            </ul>
        <input type="number" value={caryear} onChange={acy} />
        <input type="text" value={carmake} onChange={acm} placeholder="enter make"/>
            <input type="text" value={carmodel} onChange={acmod} placeholder="enter model" />
            <button onClick={ac}>Add car</button>
            
      </div>
    );
} 




export default  Car