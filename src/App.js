import React from "react";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

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
  };

  const resetResult = (num) => {
    num.preventDefault();
    setResult((result) => result * 0);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
