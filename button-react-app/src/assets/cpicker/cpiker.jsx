import React, { useState } from "react"
import "./cpiker.css"

function Cpicker() {
    const [color, set] = useState("#FFFFFF")
    
    const cc = (event) => {
     set(event.target.value)
}

    return (
        <div className="cpc">
            <h2>Color Picker</h2>
            <div className="colord" style={{backgroundColor:color}}>
                <p>select color :{color}</p>
            </div>
            <label >Select a color</label>
            <input type="color" value={color}  onChange={cc} />
        </div>
    )
}
export default Cpicker