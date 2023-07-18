import React from "react";
import { useState, useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { Questions } from "../../Helpers/QuestionsBank";
import { QuizContext } from "../../Helpers/Context";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timerStyle.css";

//first we define an empty array, and we randomly pushing it question from our questionBank
const questions1 = [];
for (let i = 0; i < 20; i++) {
  let quesh = Questions[Math.floor(Math.random() * Questions.length)];
  if (questions1.includes(quesh)) {
    i--;
  } else {
    questions1.push(quesh);
  }
}
//This is the QUIZ game state, we are taking the values we need from our Context file, and defining the variables we are
//going to need here
const Quiz = () => {
  const { strikes, setStrikes, score, setScore, setGameState } =
    useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);

  //Function that will be used on the answer buttons with onClick
  const nextQuestion = (val) => {
    if (strikes >= 3) {
      setGameState("EndScreen");
    }
    if (strikes < 3) {
      if (questions1[currQuestion].answer == val) {
        setScore(score + 1);
        setCurrQuestion(currQuestion + 1);
        console.log(score);
      } else {
        setStrikes(strikes + 1);
        setCurrQuestion(currQuestion + 1);
        console.log(strikes);
      }
    } else {
      setGameState("EndScreen");
    }
  };

  //function that finish the quiz automaticly when the questions are over
  const finishQuiz = () => {
    if (currQuestion == questions1.length - 1) {
      setGameState("EndScreen");
    }
  };
  //Function thats make the answer order change randomly
  let innerArry = questions1[currQuestion].options;
  innerArry.sort(() => Math.random() - 0.5);
  console.log(innerArry);
  const answers = innerArry.map((val) => {
    return (
      <Button key={innerArry.indexOf(val)} onClick={() => nextQuestion(val)}>
        {val}
      </Button>
    );
  });
  //clock function using NPM extention
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      nextQuestion(0);
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  //the body of the Quiz Game state
  return (
    <div id="Quiz" className="Quiz">
      <h2>{questions1[currQuestion].prompt}</h2>
      <div id="Options" className="Options">
        {answers}
      </div>
      <br></br>
      <br></br>
      {finishQuiz()}
      <span className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[30, 20, 5, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </span>
    </div>
  );
};

export default Quiz;
