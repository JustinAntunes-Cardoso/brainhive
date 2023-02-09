import axios from 'axios';
import { useEffect, useState } from 'react';
import Game from '../../components/Game';
import GameResults from '../../components/GameResults';
import GameSelect from '../../components/GameSelect';
import './Game.scss';

const URL = 'http://localhost:8080/';
const PATH = 'words/';

function GamePage() {
	//Checks to see if game is selected
	const [game, isGameSelected] = useState(false);
	const [difficulty, setDifficulty] = useState('');
	const [words, setWords] = useState(undefined);
	const [done, isDone] = useState(false);
	const [results, setResults] = useState(undefined);
	const [score, setScore] = useState(0);

	useEffect(() => {
		const setGame = async () => {
			try {
				const { data } = await axios.get(`${URL}${PATH}${difficulty}`);
				setWords(data);
			} catch (error) {
				console.error(error);
			}
		};

		if (game && !done) setGame();
	}, [game, done]);

	return (
		<main className='game-page'>
			{done ? (
				<GameResults results={results} score={score}/>
			) : !game ? (
				<GameSelect
					isGameSelected={isGameSelected}
					setDifficulty={setDifficulty}
				/>
			) : words !== undefined ? (
				<Game
					words={words}
					setResults={setResults}
					isDone={isDone}
					setScore={setScore}
				/>
			) : (
				<></>
			)}
		</main>
	);
}

export default GamePage;
