import React, { useContext } from "react";
import { usercontext } from "./Com.jsx";

function Comb() {
  const user = useContext(usercontext);

  return (
    <div className="box2">
      <h2>{`bye ${user}`}</h2>
    </div>
  );
}

export default Comb;
