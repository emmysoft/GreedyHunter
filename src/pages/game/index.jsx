import { useCallback, useRef, useState } from "react";
import "./index.scss";
import Grid from "./Grid";

export const food = (
  <svg
    width="33"
    height="31"
    viewBox="0 0 33 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="16.5" cy="25" rx="8.5" ry="6" fill="#F07CC3" />
    <ellipse cx="16.5" cy="14" rx="16.5" ry="14" fill="#853594" />
    <circle cx="7" cy="11" r="2" fill="#FFC700" />
    <ellipse cx="16" cy="6.5" rx="6" ry="3.5" fill="#FFC700" />
  </svg>
);
export const player = (
  <svg
    width="35"
    height="38"
    viewBox="0 0 35 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 38L11.3981 33H23.5486L26 38H9Z" fill="#F07CC3" />
    <circle cx="17.5" cy="17.5" r="17" fill="#CBCBFF" stroke="#532461" />
    <path
      d="M13.5 9.5C12.5 10.6667 10.4 13.1 10 13.5L5.5 19.5L3.5 25L7 21L11.5 14.5L13.5 9.5Z"
      fill="#EE8D94"
    />
    <path
      d="M6.53923 11.5143C6.06559 11.2303 5.4556 11.3871 5.23211 11.8922C4.53474 13.4681 3.77401 16.0092 4.06291 17.1638C4.41699 18.5789 5.31869 19.7953 6.56966 20.5456C7.82063 21.2958 9.3184 21.5183 10.7335 21.1643C11.8876 20.8755 13.5747 18.8921 14.5648 17.4917C14.8836 17.0407 14.7313 16.4272 14.2576 16.1432L10.3984 13.8288L6.53923 11.5143Z"
      fill="#853594"
    />
    <path
      d="M28.576 11.5143C29.0496 11.2303 29.6596 11.3871 29.8831 11.8922C30.5805 13.4681 31.3412 16.0092 31.0523 17.1638C30.6982 18.5789 29.7965 19.7953 28.5456 20.5456C27.2946 21.2958 25.7968 21.5183 24.3818 21.1643C23.2277 20.8755 21.5405 18.8921 20.5505 17.4917C20.2316 17.0407 20.384 16.4272 20.8576 16.1432L24.7168 13.8288L28.576 11.5143Z"
      fill="#853594"
    />
    <path
      d="M16 20.5H16.25C16.3881 20.5 16.5 20.6119 16.5 20.75C16.5 20.8881 16.6119 21 16.75 21H18H18.25C18.3881 21 18.5 20.8881 18.5 20.75C18.5 20.6119 18.6119 20.5 18.75 20.5H19C19.2761 20.5 19.5 20.2761 19.5 20V18.5C19.5 18.2239 19.2761 18 19 18H18.75C18.6119 18 18.5 17.8881 18.5 17.75C18.5 17.6119 18.3881 17.5 18.25 17.5H16.75C16.6119 17.5 16.5 17.6119 16.5 17.75C16.5 17.8881 16.3881 18 16.25 18H16C15.7239 18 15.5 18.2239 15.5 18.5V20C15.5 20.2761 15.7239 20.5 16 20.5Z"
      fill="#C5418E"
    />
    <path
      d="M27.0002 18.5C26.0002 20 26.0002 21.5 27.5002 21C29.0002 20.5 30.0002 19.5 30.5002 18.5C31.0002 17.5 30.0002 17 30.0002 17C30.0002 17 28.0002 17 27.0002 18.5Z"
      fill="#FFC700"
    />
    <path
      d="M8.7667 18.5C9.7667 20 9.94697 21.649 8.00003 21C6.05309 20.351 5.62672 20 5.12672 19C4.62672 18 5.7667 17 5.7667 17C5.7667 17 7.7667 17 8.7667 18.5Z"
      fill="#FFC700"
    />
    <path
      d="M21 26.5C21 26.7761 19.433 27.5 17.5 27.5C15.567 27.5 14 26.7761 14 26.5C14 26.2239 15.567 26 17.5 26C19.433 26 21 26.2239 21 26.5Z"
      fill="#C5418E"
    />
    <path
      d="M22 24.5C22 24.2923 21.8706 24.0869 21.62 23.8967C21.3694 23.7065 21.003 23.5358 20.5441 23.3953C20.0852 23.2548 19.5438 23.1476 18.9542 23.0805C18.3645 23.0134 17.7394 22.9878 17.1186 23.0054C16.4977 23.023 15.8946 23.0834 15.3474 23.1827C14.8002 23.2821 14.3209 23.4183 13.9398 23.5826C13.5587 23.7469 13.2841 23.9358 13.1335 24.1373C12.9829 24.3389 12.9594 24.5487 13.0647 24.7534L15.0718 24.6387C15.0141 24.5266 15.027 24.4118 15.1095 24.3015C15.1919 24.1911 15.3422 24.0877 15.5509 23.9977C15.7595 23.9078 16.0219 23.8332 16.3215 23.7788C16.6211 23.7244 16.9513 23.6914 17.2912 23.6817C17.6311 23.6721 17.9733 23.6861 18.2961 23.7228C18.6189 23.7596 18.9154 23.8183 19.1666 23.8952C19.4178 23.9721 19.6184 24.0656 19.7556 24.1697C19.8928 24.2738 19.9636 24.3863 19.9636 24.5H22Z"
      fill="#C5418E"
    />
    <path
      d="M21 31.5001C21 33.1569 20.5 36 17.5 36C14 36 14 33.1569 14 31.5001C14 29.8432 15.567 30.0001 17.5 30.0001C19.433 30.0001 21 29.8432 21 31.5001Z"
      fill="#C5418E"
    />
  </svg>
);

const Player = `<svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 38L11.3981 33H23.5486L26 38H9Z" fill="#F07CC3" />
		<circle cx="17.5" cy="17.5" r="17" fill="#CBCBFF" stroke="#532461" />
		<path d="M13.5 9.5C12.5 10.6667 10.4 13.1 10 13.5L5.5 19.5L3.5 25L7 21L11.5 14.5L13.5 9.5Z" fill="#EE8D94" />
		<path
			d="M6.53923 11.5143C6.06559 11.2303 5.4556 11.3871 5.23211 11.8922C4.53474 13.4681 3.77401 16.0092 4.06291 17.1638C4.41699 18.5789 5.31869 19.7953 6.56966 20.5456C7.82063 21.2958 9.3184 21.5183 10.7335 21.1643C11.8876 20.8755 13.5747 18.8921 14.5648 17.4917C14.8836 17.0407 14.7313 16.4272 14.2576 16.1432L10.3984 13.8288L6.53923 11.5143Z"
			fill="#853594"
		/>
		<path
			d="M28.576 11.5143C29.0496 11.2303 29.6596 11.3871 29.8831 11.8922C30.5805 13.4681 31.3412 16.0092 31.0523 17.1638C30.6982 18.5789 29.7965 19.7953 28.5456 20.5456C27.2946 21.2958 25.7968 21.5183 24.3818 21.1643C23.2277 20.8755 21.5405 18.8921 20.5505 17.4917C20.2316 17.0407 20.384 16.4272 20.8576 16.1432L24.7168 13.8288L28.576 11.5143Z"
			fill="#853594"
		/>
		<path
			d="M16 20.5H16.25C16.3881 20.5 16.5 20.6119 16.5 20.75C16.5 20.8881 16.6119 21 16.75 21H18H18.25C18.3881 21 18.5 20.8881 18.5 20.75C18.5 20.6119 18.6119 20.5 18.75 20.5H19C19.2761 20.5 19.5 20.2761 19.5 20V18.5C19.5 18.2239 19.2761 18 19 18H18.75C18.6119 18 18.5 17.8881 18.5 17.75C18.5 17.6119 18.3881 17.5 18.25 17.5H16.75C16.6119 17.5 16.5 17.6119 16.5 17.75C16.5 17.8881 16.3881 18 16.25 18H16C15.7239 18 15.5 18.2239 15.5 18.5V20C15.5 20.2761 15.7239 20.5 16 20.5Z"
			fill="#C5418E"
		/>
		<path
			d="M27.0002 18.5C26.0002 20 26.0002 21.5 27.5002 21C29.0002 20.5 30.0002 19.5 30.5002 18.5C31.0002 17.5 30.0002 17 30.0002 17C30.0002 17 28.0002 17 27.0002 18.5Z"
			fill="#FFC700"
		/>
		<path
			d="M8.7667 18.5C9.7667 20 9.94697 21.649 8.00003 21C6.05309 20.351 5.62672 20 5.12672 19C4.62672 18 5.7667 17 5.7667 17C5.7667 17 7.7667 17 8.7667 18.5Z"
			fill="#FFC700"
		/>
		<path
			d="M21 26.5C21 26.7761 19.433 27.5 17.5 27.5C15.567 27.5 14 26.7761 14 26.5C14 26.2239 15.567 26 17.5 26C19.433 26 21 26.2239 21 26.5Z"
			fill="#C5418E"
		/>
		<path
			d="M22 24.5C22 24.2923 21.8706 24.0869 21.62 23.8967C21.3694 23.7065 21.003 23.5358 20.5441 23.3953C20.0852 23.2548 19.5438 23.1476 18.9542 23.0805C18.3645 23.0134 17.7394 22.9878 17.1186 23.0054C16.4977 23.023 15.8946 23.0834 15.3474 23.1827C14.8002 23.2821 14.3209 23.4183 13.9398 23.5826C13.5587 23.7469 13.2841 23.9358 13.1335 24.1373C12.9829 24.3389 12.9594 24.5487 13.0647 24.7534L15.0718 24.6387C15.0141 24.5266 15.027 24.4118 15.1095 24.3015C15.1919 24.1911 15.3422 24.0877 15.5509 23.9977C15.7595 23.9078 16.0219 23.8332 16.3215 23.7788C16.6211 23.7244 16.9513 23.6914 17.2912 23.6817C17.6311 23.6721 17.9733 23.6861 18.2961 23.7228C18.6189 23.7596 18.9154 23.8183 19.1666 23.8952C19.4178 23.9721 19.6184 24.0656 19.7556 24.1697C19.8928 24.2738 19.9636 24.3863 19.9636 24.5H22Z"
			fill="#C5418E"
		/>
		<path
			d="M21 31.5001C21 33.1569 20.5 36 17.5 36C14 36 14 33.1569 14 31.5001C14 29.8432 15.567 30.0001 17.5 30.0001C19.433 30.0001 21 29.8432 21 31.5001Z"
			fill="#C5418E"
		/>
	</svg>`;
  
const Game = ({ grid }) => {
  const initialState = {
    grid,
    totalNumberOfMoves: Math.floor(Math.pow(grid, 2) / 2),
    currentMoves: 0,
    totalFoodPiece: grid,
    totalFoodPieceLeft: grid,
    playerPosition: undefined,
  };
  const [state, setState] = useState(initialState);
  const playerRef = useRef(0);
  const clickedRef = useRef(false);
  const foodRef = useRef([]);
  const activeGridRef = useRef([]);
  const foodPiece = useRef({
    totalFoodPiece: grid,
    totalFoodPieceLeft: grid,
  });

  const ref = useRef();

  const getActiveGrids = useCallback(
    (index) => {
      const top = index - state.grid >= 1 ? index - state.grid : 0;
      const bottom =
        index + state.grid < Math.pow(state.grid, 2) ? index + state.grid : 0;
      const middle = index;

      const middleLeft =
        middle !== 0 && middle % state.grid !== 1 ? middle - 1 : 0;
      const middleRight =
        middle !== 0 && middle % state.grid > 0 ? middle + 1 : 0;

      const topLeft = top !== 0 && top % state.grid !== 1 ? top - 1 : 0;
      const topRight = top !== 0 && top % state.grid > 0 ? top + 1 : 0;

      const bottomLeft =
        bottom !== 0 && bottom % state.grid !== 1 ? bottom - 1 : 0;
      const bottomRight =
        bottom !== 0 && bottom % state.grid > 0 ? bottom + 1 : 0;

      activeGridRef.current = [
        top,
        bottom,
        middle,
        middleLeft,
        middleRight,
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
      ];
    },
    [state.grid]
  );

  const setPlayerAndFood = useCallback(
    (num, arr) => {
      playerRef.current = num;
      foodRef.current = arr;
      getActiveGrids(num);
    },
    [getActiveGrids]
  );
  const handleMovePlayer = useCallback(
    (indexToMove) => {
      const nextBox = document.getElementById(`${indexToMove}`);
      const currentBox = document.getElementById(`${playerRef.current}`);
      nextBox.innerHTML = "";
      nextBox.innerHTML = Player;
      currentBox.innerHTML = "";
      clickedRef.current = false;
      activeGridRef.current.forEach((active) => {
        if (active !== 0) {
          const box = document.getElementById(String(active));
          box.style.borderColor = "#853594";
        }
      });
      playerRef.current = indexToMove;
      getActiveGrids(indexToMove);
      if (foodRef.current.includes(indexToMove)) {
        foodPiece.current = {
          ...foodPiece.current,
          totalFoodPieceLeft: foodPiece.current.totalFoodPiece - 1,
        };

        const bar = document.getElementById("progress-bar");

        bar.style = {
          width: `${
            Math.floor(
              foodPiece.current.totalFoodPieceLeft /
                foodPiece.current.totalFoodPiece
            ) * 100
          }%`,
        };

        return;
      }
      // setState({ ...state, currentMoves: state.currentMoves + 1 });
    },
    [getActiveGrids]
  );

  const handleClick = useCallback(
    (index) => {
      const clickedBox = Number(index);

      if (clickedBox !== playerRef.current && !clickedRef.current) {
        return;
      }

      if (clickedBox === playerRef.current && !clickedRef.current) {
        clickedRef.current = true;

        activeGridRef.current.forEach((active) => {
          if (active !== 0) {
            const box = document.getElementById(String(active));
            box.style.borderColor = "yellow";
          }
        });
        return;
      }
      if (clickedBox === playerRef.current && clickedRef.current) {
        clickedRef.current = false;
        activeGridRef.current.forEach((active) => {
          if (active !== 0) {
            const box = document.getElementById(String(active));
            box.style.borderColor = "#853594";
          }
        });
        return;
      }
      if (clickedBox !== playerRef && clickedRef.current) {
        if (activeGridRef.current.includes(clickedBox)) {
          handleMovePlayer(clickedBox);
        }
      }
    },
    [handleMovePlayer]
  );

  return (
    <div className="game-container">
      <div className="game-board">
        <div className="board-header">
          <div style={{ marginRight: "20px" }}>
            <p>
              {state.grid} x {state.grid}
            </p>
          </div>

          <div className="life-container">
            <svg
              className="heart"
              width="53"
              height="47"
              viewBox="0 0 53 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.8238 13.3213C43.4729 -9.03737 27.0688 6.58687 27.0688 6.58687C27.0688 6.58687 9.52649 -8.76792 1.98383 13.3214C-1.51815 29.4845 26.7712 45.1086 26.7712 45.1086C26.7712 45.1086 55.3258 29.4844 51.8238 13.3213Z"
                fill="#CE4557"
                stroke="#EE8D94"
                strokeWidth="1.6163"
              />
              <path
                d="M13.029 9.27065C11.0292 10.8191 10.1408 12.0215 9.13881 10.7275C8.13685 9.43356 8.94573 7.1293 10.9455 5.58081C12.9453 4.03233 16.6065 4.28686 17.6084 5.58082C18.6104 6.87478 15.0288 7.72217 13.029 9.27065Z"
                fill="white"
              />
              <path
                d="M7.64138 12.9675C7.64138 13.5626 6.58914 14.3144 5.99404 14.3144C5.39893 14.3144 4.9165 13.832 4.9165 13.2369C4.9165 12.6418 6.47647 11.0818 7.07157 11.0818C7.66668 11.0818 7.64138 12.3724 7.64138 12.9675Z"
                fill="white"
              />
            </svg>

            <div className="animated-progress progress-red">
              <span id="progress-bar"></span>
            </div>
          </div>

          <div>Time spent: 00:48 secs</div>
        </div>

        <div ref={ref} id="grid-container" className="grid-container">
          <Grid
            containerRef={ref}
            grid={state.grid}
            setPlayerAndFood={setPlayerAndFood}
            handleClick={handleClick}
          />
        </div>

        <div className="board-footer">
          <p>Maximum moves: {state.totalNumberOfMoves}</p>

          <p>Total moves: {state.currentMoves}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
