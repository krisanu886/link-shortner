import React, { useState } from "react";
import db from "./firebase";
const tinyid = require('tiny-unique-id')

const Input = () => {
  const [input, setInput] = useState("");
  const handleDb = async () => {
      const short = tinyid.unique()
      await db.collection('urls').add({
          url: input,
          short: short
      })
  };
  return (
    <>
    <div className="container">
      <input type="url" value={input} onChange={e=>setInput(e.target.value)}/>
      <button onClick={handleDb}>Submit</button>
    </div>
    </>
  );
};
export default Input;
