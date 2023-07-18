import React, { useContext } from "react";
import { QuizContext } from "../../Helpers/Context";
import Button from "react-bootstrap/esm/Button";

const EndScreen = () => {
  const { score } = useContext(QuizContext);

  //function that give you a diffrent comment depend on your score
  const ScoreGrade = () => {
    let comment;
    if (score <= 10) {
      comment = " You can get better!";
    }
    if (score <= 15 && score > 10) {
      comment = " Not Bad!";
    }

    if (score < 20 && score > 15) {
      comment = " Thats Awasome!";
    }

    if (score == 20) {
      comment = " Perfect score!!!";
    }
    return comment;
  };

  //using it to refresh the page and reset the values
  const resetvalues = () => {
    {
      window.location.reload();
    }
  };
  return (
    <div className="Endscreen">
      <div className="gameover">
        <span className="gameover">
          <img
            className="gameover"
            src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-game-over-screen-pixel-text-effect-png-image_5985122.jpg"
          />
        </span>
      </div>
      <h2>
        You Scored {score}/20
        {<br></br>}
        {<br></br>}
        {ScoreGrade()}
      </h2>
      <br></br>
      <Button onClick={resetvalues}>Start Over</Button>
    </div>
  );
};

export default EndScreen;
