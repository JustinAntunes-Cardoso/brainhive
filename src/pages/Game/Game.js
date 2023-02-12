import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Game from '../../components/Game';
import GameResults from '../../components/GameResults';
import honey from '../../assets/images/honey_drip_background.png';
import './Game.scss';

const URL = 'http://localhost:8080/';
const PATH = 'words/';

function GamePage() {
	//Checks to see if game is selected
	const { difficulty } = useParams()
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

		if (!done) setGame();
	}, [difficulty, done]);

	return (
		<main className='game-page'>
			<img
				className='game-page__honey'
				src={honey}
				alt='Honey Drip'
			/>
			{done ? (
				<GameResults results={results} score={score} done={done}/>
			) :  words !== undefined ? (
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
