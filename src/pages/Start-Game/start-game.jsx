import React from "react";
import "./StartGame.scss";
import Character from "../../assets/character.svg";
import Selectors from "../../components/Custom-selector/Selector";
import Group1 from "../../assets/group.svg";
import { useHistory } from "react-router-dom";

const StartGame = ({ gameState = "default", grid, setGrid }) => {
  const history = useHistory();
  const TobeDisplayed = () => {
    switch (gameState) {
      case "GAMEOVER":
        return (
          <>
            <h1>Game Over!</h1>
            <h4>Total Food: 7/10</h4>
            <h4>Time Spent: 98 Seconds</h4>
          </>
        );
      case "GAMEWON":
        return (
          <>
            <h1>Bravo!</h1>  
            <h4>Time Spent: 98seconds</h4>
          </>
        );
      default:
        return (
          <>
            <h1>Greedy Hunter</h1>
            <h4>The aim is to eat all the food in record time</h4>
            <h4>Configure your game grid below</h4>
          </>
        );
    }
  };
  const handleRouting = () => {
    history.push("/game");
  };
  return (
    <div className="container">
      <img src={Group1} className="img" alt="#" />
      <div>
        <img src={Character} alt="" />

        <TobeDisplayed />
        <Selectors setGrid={setGrid} grid={grid} />
        <div className="animate__animated animate__slideInLeft">
          <button onClick={handleRouting} className="button" to="/game">
            {gameState === "default" ? "Start Game" : "Start Again"}
          </button>
        </div>
      </div>
      <img src={Group1} className="img" alt="#" />
    </div>
  );
};

export default StartGame;
