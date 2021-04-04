import React from "react";
import "./start-game.css";
import Character from "../../../assets/character.svg";
import CustomButton from "../../Custom-button/CustomButton";
import Selectors from "../../Custom-selector/Selector";
import Group1 from "../../../assets/group.svg";

const StartGame = ({ gameState = "GAMEOVER" }) => {
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

  return (
    <div className="container">
      <img src={Group1} Name="img" alt="#" />
      <div>
        <img src={Character} alt="" />

        <TobeDisplayed />
        <Selectors />
        <CustomButton gameState={gameState} />
      </div>
      <img src={Group1} className="img" alt="#" />
    </div>
  );
};

export default StartGame;
