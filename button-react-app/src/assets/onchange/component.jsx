import React, {useState} from "react"
import { use } from "react";
function Component() {
    const [name, set] = useState("geust")
    const [quantity, setq] = useState(1)
    const [comment, type] = useState()
    const [payment,setp] = useState("select")
    const change = (event) => {
        set(event.target.value);
    }
    const changeq = (event) => {
        setq(event.target.value)
    }
    const c = (event) => {
        type(event.target.value)
    }
    const p = (event) => {
        setp(event.target.value);
      };
    return (
      <div>
        <input value={name} onChange={change} />
        <p>Name : {name}</p>
        <input value={quantity} onChange={changeq} />
        <p>Quantity : {quantity}</p>
        <textarea
          value={comment}
          onChange={c}
          placeholder="Enter delivery instruction"
        ></textarea>
        <p>comment :{comment}</p>
        <select value={payment} onChange={p}>
          <option value="">Select an option</option>
          <option value="visa">Visa</option>
          <option value="mastercard">Master card</option>
        </select>
      </div>
    );
}
export default Component