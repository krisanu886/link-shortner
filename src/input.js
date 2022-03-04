import React, { useState } from "react";
import db from "./firebase";
const tinyid = require("tiny-unique-id");

const Input = () => {
  const [input, setInput] = useState("");
  const [shorten, setShorten] = useState("");
  const handleDb = async () => {
    const short = tinyid.unique();
    await db.collection("urls").add({
      url: input,
      short: short,
    });
    setShorten(`${window.location.origin}/${short}`);
  };
  return (
    <>
      <div className="container ">
        <h1 className=" mt-5">URL Shortener </h1>
        <center>
          <div className="mt-4">
            <input
              placeholder="Enter Your URL Here"
              type="url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control"
            />
            <button onClick={handleDb} className="btn btn-success mt-3">
              Shorten URL
            </button>
          </div>
          <div className="">
            <input
              type="text"
              disabled
              className="form-control mt-3"
              value={shorten}
            />
          </div>
        </center>
      </div>
    </>
  );
};
export default Input;
