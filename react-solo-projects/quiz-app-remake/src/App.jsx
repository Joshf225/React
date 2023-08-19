import { useState } from "react";
import "./App.css";
import Questions from "./Questions";
import data from "./data";

function App() {
  const [currentQuizData, setCurrentQuizData] = useState(0);
  const [score, setScore] = useState(0);
  const quiz = data[currentQuizData];

  function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;

    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });

    return answer;
  }

  function deselectAns() {
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }

  const handleSubmit = () => {
    const answer = getSelected();

    if (answer) {
      if (answer === quiz.correct) {
        setScore(score + 1);
      }
      setCurrentQuizData(currentQuizData + 1);
      deselectAns();
    } else {
      alert("Please give an answer");
    }
  };

  const restart = () => {
    setCurrentQuizData(0);
    setScore(0);
  };

  if (currentQuizData < data.length) {
    return (
      <>
        <div className="quiz-container" id="quiz">
          <div className="quiz-header">
            <h2 id="question">{quiz.question}</h2>
            <ul>
              <li>
                <input className="answer" type="radio" id="a" name="answer" />
                <label id="a_text" htmlFor="a">
                  {quiz.a}
                </label>
              </li>
              <li>
                <input className="answer" type="radio" id="b" name="answer" />
                <label id="b_text" htmlFor="b">
                  {quiz.b}
                </label>
              </li>
              <li>
                <input className="answer" type="radio" id="c" name="answer" />
                <label id="c_text" htmlFor="c">
                  {quiz.c}
                </label>
              </li>
              <li>
                <input className="answer" type="radio" id="d" name="answer" />
                <label id="d_text" htmlFor="d">
                  {quiz.d}
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={handleSubmit}>
          <button id="submit">Submit</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="quiz-container" id="quiz">
          <h2>
            You answered {score}/{data.length} correctly!
          </h2>
          <button onClick={restart}>Restart?</button>
        </div>
      </>
    );
  }
}

export default App;
