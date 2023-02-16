import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Game from '../../components/Game';
import GameResults from '../../components/GameResults';
import honey from '../../assets/images/honey_drip_background.png';
import './Game.scss';

//API connection
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const apiEndpoint = process.env.REACT_APP_WORDS_PATH;

function GamePage() {
	//Sets the game difficulty and word
	const { difficulty } = useParams()
	const [words, setWords] = useState(undefined);
	//checks to see if the game is completed
	const [done, isDone] = useState(false);
	//sets the results and score to a game result component
	const [results, setResults] = useState(undefined);
	const [score, setScore] = useState(0);

	useEffect(() => {
		//Pulls 10 random words from an API
		const setGame = async () => {
			try {
				const { data } = await axios.get(`${apiBaseUrl}${apiEndpoint}/${difficulty}`);
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
			{/* If the game is done show the results */}
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
