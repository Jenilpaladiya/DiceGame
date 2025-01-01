import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [error, setError] = useState("");

  function randomNumber(min, max) {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const newDiceValue = Math.floor(Math.random() * (max - min + 1) + min);
    SetCurrentDice(newDiceValue);

    if (selectedNumber === newDiceValue) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
    setSelectedNumber(undefined);
  }

  function resetScore() {
    setScore(0);
  }

  function showRules() {
    alert("Rules:\n1. Select a number.\n2. Roll the dice.\n3. Match the number to win a point!");
  }

  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} setScore={setScore} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice randomNumber={randomNumber} currentDice={currentDice} />
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Buttons Section */}
      <ButtonsContainer>
        <ResetScoreButton onClick={resetScore}>Reset Score</ResetScoreButton>
        <ShowRulesButton onClick={showRules}>Show Rules</ShowRulesButton>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .topSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const ResetScoreButton = styled.button`
  padding: 10px 20px;
  border: 2px solid black;
  background: transparent;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: black;
    color: white;
  }
`;

const ShowRulesButton = styled.button`
  padding: 10px 20px;
  border: 2px solid black;
  background: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: black;
  }
`;
