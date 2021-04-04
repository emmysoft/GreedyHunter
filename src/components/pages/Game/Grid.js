import { memo, useEffect, useState } from "react";
import { food, player } from ".";

const Grid = ({ grid, containerRef, handleClick, setPlayerAndFood }) => {
  const [renderedGrid, setRenderedGrid] = useState(null);
  const getPositionsOfItems = (n) => {
    var arr = [];
    while (arr.length < n + 1) {
      var r = Math.floor(Math.random() * Math.pow(n, 2) + 1);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  };

  useEffect(() => {
    if (!containerRef.current) {
      return [];
    }
    const container = containerRef.current;

    container.style.setProperty("--grid-rows", grid);
    container.style.setProperty("--grid-cols", grid);

    const toBeFilled = getPositionsOfItems(grid);

    const gridArr = [];
    for (let c = 1; c <= grid * grid; c++) {
      let cell;

      if (toBeFilled.includes(c)) {
        if (c === toBeFilled[grid]) {
          cell = (
            <div
              key={c}
              id={`${c}`}
              onClick={() => handleClick(c)}
              className="grid-item"
            >
              {player}
            </div>
          );
        } else {
          cell = (
            <div
              key={c}
              id={`${c}`}
              onClick={() => handleClick(c)}
              className="grid-item food"
            >
              {food}
            </div>
          );
        }
      } else {
        cell = (
          <div
            key={c}
            id={`${c}`}
            onClick={() => handleClick(c)}
            className="grid-item"
          ></div>
        );
      }
      gridArr.push(cell);
    }

    setPlayerAndFood(toBeFilled[grid], toBeFilled.slice(0, grid));
    setRenderedGrid([...gridArr]);
  }, [containerRef, grid, handleClick, setPlayerAndFood]);

  return <>{renderedGrid}</>;
};

export default memo(Grid);
