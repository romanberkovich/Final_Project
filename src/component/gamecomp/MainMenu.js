import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../Helpers/Context";
import Button from "react-bootstrap/esm/Button";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <div className="MenuText">
        <h4>
          Hello and Welcome the Quiz-Game<br></br>
          The game is Simple, You have <h3>60 seconds</h3> to answer 20 Trivia
          Questions and beat the clock!<br></br>
          Click the "StartQuiz" button to start!🔝<br></br>
        </h4>
        <h2>Good Luck!</h2>
      </div>

      <Button
        variant="primary"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        StartQuiz
      </Button>
    </div>
  );
};

export default MainMenu;
