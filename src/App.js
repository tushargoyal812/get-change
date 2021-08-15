import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [cash, setCash] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [Input, setInput] = useState();
  const [Input2, setInput2] = useState();
  const [selectedcheck, setForcheck] = useState("");
  const [nextButton, setNextButton] = useState(true);
  const [selectedNext, setFornext] = useState();
  const [show, setshow] = useState(false);
  const [output, setOutput] = useState("");
  function nextHandler() {
    setNextButton(true);
    if (Input <= 0 || Input === undefined) {
      setshow(true);
      // setFornext(false);
    } else {
      setNextButton(false);
      setshow(false);
      setFornext(true);
    }
  }

  function something(keepChange) {
    if (Input2 <= 0 || Input2 === undefined) {
      setForcheck("enter a valid input");
      setOutput(false);
    } else if (keepChange === 0) {
      setForcheck("No amount should be returned");
      setOutput(false);
    } else if (keepChange < 0) {
      setForcheck("Cash is less than bill, please enter right amount");
      setOutput(false);
    } else {
      setForcheck("");
      setOutput(true);
    }
    let currency = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

    var perNote = new Array(9).fill(0);

    for (let i = 0; i < 9; i++) {
      if (keepChange >= currency[i]) {
        perNote[i] = Math.floor(keepChange / currency[i]);
        keepChange = keepChange - perNote[i] * currency[i];
      }
    }

    setCash(perNote);
  }

  return (
    <div className="App">
      <h1>💵cashBook</h1>
      <h2>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </h2>
      <div style={{ fontSize: "1.5rem" }}>Bill Amount</div>
      <input type="number" onChange={(e) => setInput(e.target.value)} />
      <div>
        {nextButton ? (
          <div>
            <button className="btn" onClick={nextHandler}>
              Next
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>{show ? <div>{"enter a valid number"}</div> : ""}</div>
      <div>
        {selectedNext ? (
          <div>
            <div style={{ fontSize: "1.5rem", paddingTop: "2rem" }}>
              Cash Given
            </div>
            <input type="number" onChange={(e) => setInput2(e.target.value)} />
            <div>
              <button className="btn" onClick={() => something(Input2 - Input)}>
                check
              </button>
              <div>{selectedcheck}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {output ? (
          <div>
            <div style={{ padding: "1rem", fontSize: "2rem" }}>
              return change:
            </div>
            <div className="no-of-notes">
              <div className="change">No.of notes</div>
              <div className="change">{cash[0]}</div>
              <div className="change">{cash[1]}</div>
              <div className="change">{cash[2]}</div>
              <div className="change">{cash[3]}</div>
              <div className="change">{cash[4]}</div>
              <div className="change">{cash[5]}</div>
              <div className="change">{cash[6]}</div>
              <div className="change">{cash[7]}</div>
              <div className="change">{cash[8]}</div>
            </div>
            <div className="no-of-notes">
              <div className="notes">note</div>
              <div className="notes">2000</div>
              <div className="notes">500</div>
              <div className="notes">200</div>
              <div className="notes">100</div>
              <div className="notes">50</div>
              <div className="notes">20</div>
              <div className="notes">10</div>
              <div className="notes">5</div>
              <div className="notes">1</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
