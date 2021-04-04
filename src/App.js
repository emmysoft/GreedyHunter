import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import StartGame from './pages/Start-Game/start-game';
import Game from './pages/game';
import { useState } from 'react';

function App() {
	const [grid, setGrid] = useState(5);
	function mapStyles(styles) {
		return {
			transform: `translateY(${styles.transform}%)`,
			opacity: styles.opacity
		};
	}
	return (
		<Router>
			<Switch
				atEnter={{ opacity: 0, transform: 0 }}
				atLeave={{ opacity: 0, transform: -100 }}
				atActive={{ opacity: 1, transform: 0 }}
				mapStyles={mapStyles}
				className="route-wrapper"
			>
				{/*  */}
				<Route path="/game" render={() => <Game grid={grid} />} />
				<Route path="/" render={() => <StartGame setGrid={setGrid} grid={grid} />} />
			</Switch>
		</Router>
	);
}

export default App;
