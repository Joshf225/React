import React from "react";
import "./App.css";
import { quizData } from "./data";
import { useEffect, useState } from "react";

const Quiz = () => {
  const quiz = document.getElementById("quiz");
  const [score, setScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuizData, setCurrentQuizData] = useState([]);
  const [question, setQuestion] = useState("");
  const [a_text, setA_text] = useState("");
  const [b_text, setB_text] = useState("");
  const [c_text, setC_text] = useState("");
  const [d_text, setD_text] = useState("");
  const [answer, setAnswer] = useState(undefined);
  const answerEls = document.querySelectorAll(".answer");
  // console.log(quiz);

  useEffect(() => {
    loadQuiz();
  });

  // console.log(getSelected());

  function loadQuiz() {
    deselectAns();
    setCurrentQuizData(quizData[currentQuiz]);

    setQuestion(currentQuizData.question);

    setA_text(currentQuizData.a);
    setB_text(currentQuizData.b);
    setC_text(currentQuizData.c);
    setD_text(currentQuizData.d);
  }

  function getSelected() {
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        setAnswer(answerEl.id);
      }
    });

    return answer;
  }

  function deselectAns() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }

  const handleSubmit = () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        setScore(score + 1);
      }

      setCurrentQuiz(currentQuiz + 1);
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        // alert(`Completed, you got ${score}/${quizData.length}`);
        alert("nice job!");
        // quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly!</h2> <button onclick="location.reload()">Reload</button`;
      }
    } else {
      alert("Please give an answer!");
    }
  };
  return (
    <>
      <div className="quiz-container" id="quiz">
        <div className="quiz-header">
          <h2 id="question">{question}</h2>
          <ul>
            <li>
              <input className="answer" type="radio" id="a" name="answer" />
              <label id="a_text" htmlFor="a">
                {a_text}
              </label>
            </li>
            <li>
              <input className="answer" type="radio" id="b" name="answer" />
              <label id="b_text" htmlFor="b">
                {b_text}
              </label>
            </li>
            <li>
              <input className="answer" type="radio" id="c" name="answer" />
              <label id="c_text" htmlFor="c">
                {c_text}
              </label>
            </li>
            <li>
              <input className="answer" type="radio" id="d" name="answer" />
              <label id="d_text" htmlFor="d">
                {d_text}
              </label>
            </li>
          </ul>
        </div>
        <button id="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Quiz;
