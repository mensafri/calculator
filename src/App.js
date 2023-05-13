/* eslint no-eval: 0 */
import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");

  function clear() {
    setNumber("");
  }

  function handleOperators(event) {
    const operators = event.target.textContent;

    const operatorPattern = /[+\-*/]/;
    if (number === "" && operators === "0") {
      return;
    }
    if (operators === ".") {
      const parts = number.split(operatorPattern);
      if (parts[parts.length - 1].includes(".")) {
        return;
      }
    }
    if (operators !== "-" && operatorPattern.test(operators)) {
      const lastChar = number[number.length - 1] || "";
      const secondLastChar = number[number.length - 2] || "";
      if (operatorPattern.test(lastChar)) {
        if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
          setNumber(number.slice(0, -2) + operators);
          return;
        }
        setNumber(number.slice(0, -1) + operators);
        return;
      }
    }

    setNumber(number + operators);
  }

  function handleEquals() {
    setNumber(eval(number).toString());
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display">{number || "0"}</div>
        <button id="clear" onClick={clear}>
          AC
        </button>
        <button id="divide" onClick={handleOperators}>
          /
        </button>
        <button id="seven" onClick={handleOperators}>
          7
        </button>
        <button id="eight" onClick={handleOperators}>
          8
        </button>
        <button id="nine" onClick={handleOperators}>
          9
        </button>
        <button id="multiply" onClick={handleOperators}>
          *
        </button>
        <button id="four" onClick={handleOperators}>
          4
        </button>
        <button id="five" onClick={handleOperators}>
          5
        </button>
        <button id="six" onClick={handleOperators}>
          6
        </button>
        <button id="subtract" onClick={handleOperators}>
          -
        </button>
        <button id="one" onClick={handleOperators}>
          1
        </button>
        <button id="two" onClick={handleOperators}>
          2
        </button>
        <button id="three" onClick={handleOperators}>
          3
        </button>
        <button id="add" onClick={handleOperators}>
          +
        </button>
        <button id="zero" onClick={handleOperators}>
          0
        </button>
        <button id="decimal" onClick={handleOperators}>
          .
        </button>
        <button id="equals" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
