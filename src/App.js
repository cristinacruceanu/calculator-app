import React from "react";
import "./App.css";
import Confetti from "./assets/images/confetti.png";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [displayImage, setDisplayImage] = useState(false);
  const onClickHandler = () => {
    setDisplayImage(true);
  };

  const addition = (num) => {
    num.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const subtraction = (num) => {
    num.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const multiplication = (num) => {
    num.preventDefault();
    if (result === 0) {
      return alert("Invalid operation. The total is 0.");
    }
    setResult((result) => result * Number(inputRef.current.value));
  };

  const division = (num) => {
    num.preventDefault();

    if (result === 0) {
      return alert("Invalid operation. The total is 0.");
    }
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (num) => {
    num.preventDefault();
    inputRef.current.value = 0;
    alert("Input has been reset.");
  };

  const resetResult = (num) => {
    num.preventDefault();
    setResult((result) => result * 0);
    alert("Result has been reset.");
  };

  return (
    <>
      {displayImage && (
        <div className="confetti">
          <img src={Confetti} alt="Confetti" className="image" />
        </div>
      )}
      <div className="app">
        <div className="app-child">
          <div>
            <h1>Calculator app</h1>
          </div>
          <form>
            <p ref={resultRef}>Total: {result} </p>
            <input
              ref={inputRef}
              placeholder="Type a number"
              type="number"
              pattern="[0-9]"
            />
            <button onClick={addition}>add</button>
            <button onClick={subtraction}>subtract</button>
            <button onClick={multiplication}>multiply</button>
            <button onClick={division}>divide</button>
            <button onClick={resetInput} className="reset">
              reset input
            </button>
            <button onClick={resetResult} className="reset">
              reset result
            </button>
          </form>
          <div>
            <br></br>
            <p>Congratulations, you completed React Basics!</p>
            <button onClick={onClickHandler}>Click me!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
