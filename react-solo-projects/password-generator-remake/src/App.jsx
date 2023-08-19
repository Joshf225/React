import { createElement, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [password, setPassword] = useState("");
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const [isSymbols, setisSymbols] = useState(false);

  const lenEl = document.getElementById("len");
  const pwEl = document.getElementById("pw");
  const copyEl = document.getElementById("copy");
  const upperEl = document.getElementById("upper");
  const lowerEl = document.getElementById("lower");
  const numberEl = document.getElementById("number");
  const symbolEl = document.getElementById("symbol");
  const generateEl = document.getElementById("generate");
  const upperLetters = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";

  const lowerLetters = "abcdefghigklmnopqrstuvwxwz";

  const numbers = "0123456789";

  const symbols = "!@£$%^&*()-_+=";

  function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }
  function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }
  function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function generatePassword() {
    const len = value;

    let temp = "";

    if (isUpperCase) {
      temp + getUpperCase();
    }
    if (isLowerCase) {
      temp + getLowerCase();
    }
    if (isNum) {
      temp + getNumber();
    }
    if (isSymbols) {
      temp + getSymbol();
    }

    for (let i = temp.length; i < len; i++) {
      const x = generateX();
      temp += x;
      setPassword(temp);
    }
  }

  function generateX() {
    const xs = [];
    if (isUpperCase) {
      xs.push(getUpperCase());
    }
    if (isLowerCase) {
      xs.push(getLowerCase());
    }
    if (isNum) {
      xs.push(getNumber());
    }
    if (isSymbols) {
      xs.push(getSymbol());
    }
    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
  }

  // const textarea = () => {
  //   const value = createElement("textarea", { className: "textarea" }, "Hello");
  //   return value;
  // };

  const handleGenerate = () => {
    generatePassword();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleUpperCase = () => setIsUpperCase(!isUpperCase);
  const handleLowerCase = () => setIsLowerCase(!isLowerCase);
  const handleNumber = () => setIsNum(!isNum);
  const handleSymbol = () => setisSymbols(!isSymbols);

  const handleCopy = () => {
    if (!password) {
      return;
    }
    alert("Password copied to clipboard");
  };

  // copyEl.addEventListener("click", () => {
  //   const textarea = document.createElement("textarea");
  //   const password = pwEl.innerText;

  //   if (!password) {
  //     return;
  //   }

  //   textarea.value = password;
  //   document.body.appendChild(textarea);
  //   textarea.select();
  //   document.execCommand("copy");
  //   textarea.remove();
  //   alert("Password copied to clipboard");
  // });

  return (
    <>
      <div className="pw-container">
        <div className="pw-header">
          <div className="pw">
            <span id="pw">{password}</span>

            <CopyToClipboard text={password} onCopy={handleCopy}>
              <button id="copy">Copy</button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="pw-body">
          <div className="form-control">
            <label htmlFor="len">Password Length</label>
            <input
              id="len"
              type="number"
              minLength={8}
              maxLength={30}
              onChange={handleChange}
              value={value}
            />
          </div>
          <div className="form-control">
            <label htmlFor="upper">Contain Uppercase Letters</label>
            <input type="checkbox" id="upper" onClick={handleUpperCase} />
          </div>
          <div className="form-control">
            <label htmlFor="lower">Contain Lowercase letters</label>
            <input type="checkbox" id="lower" onClick={handleLowerCase} />
          </div>
          <div className="form-control">
            <label htmlFor="number">Contain Numbers</label>
            <input type="checkbox" id="number" onClick={handleNumber} />
          </div>
          <div className="form-control">
            <label htmlFor="symbol">Contain Symbols</label>
            <input type="checkbox" id="symbol" onClick={handleSymbol} />
          </div>
          <button className="generate" id="generate" onClick={handleGenerate}>
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
