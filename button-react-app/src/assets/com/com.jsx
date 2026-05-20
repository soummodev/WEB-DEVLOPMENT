import Comb from "./comb.jsx";
import React, { useState, createContext } from "react";
import "./com.css";

export const usercontext = createContext();

function Com() {
  const [user, suser] = useState("Soummo");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`hello ${user}`}</h2>

      <usercontext.Provider value={user}>
        <Comb />
      </usercontext.Provider>
    </div>
  );
}

export default Com;
