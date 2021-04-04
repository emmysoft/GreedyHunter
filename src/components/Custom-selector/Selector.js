import React from "react";
import "./Selector.scss";

const Selectors = ({ grid, setGrid }) => (
  <>
    <div className="Selected-game">
      <span>Game Grid</span>
      <div className="select">
        <select
          onChange={(e) => setGrid(Number(e.target.value))}
          defaultValue={grid}
          name="slct"
          id="slct"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
        <div className="after">
          <i className="fas fa-chevron-up "></i>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  </>
);

export default Selectors;
