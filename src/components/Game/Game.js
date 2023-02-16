import { useEffect, useRef, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import progressBee from '../../assets/images/progress_bee.png';
import playButton from '../../assets/images/play-button.svg';
import playGrayButton from '../../assets/images/play-gray-button.svg';
import pauseButton from '../../assets/images/pause.svg';
import pauseGrayButton from '../../assets/images/pause-gray.svg';
import honeyButton from '../../assets/images/Honey_Button.png';
import './Game.scss';

//Initializa values
const intialValues = {
	word: '',
	phonetics: '',
	audio: '',
	definition: '',
	etymology: '',
};

//save results in
const score = [];
let numOfCorrectAnswers = 0;

function Game({ words, setResults, isDone, setScore }) {
	//Sets Question
	const [question, setQuestion] = useState(intialValues);
	const [index, setIndex] = useState(0);
	//Sets progress bar
	const [progress, setProgress] = useState(0);
	//Sets button usability
	const [disabled, setDisabled] = useState(false);
	//Sets error state
	const [inputError, setInputError] = useState(false);
	//Refreshes the timer
	const [key, setKey] = useState(0);
	//Plays audio
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		//Edits the etymology to not to have the same word
		const pattern = new RegExp(words[index].word, 'g');
		words[index].etymology = words[index].etymology.replace(pattern, '🏵️🏵️🏵️');
		//First letter to be Captialized
		words[index].etymology =
			words[index].etymology.charAt(0).toUpperCase() +
			words[index].etymology.slice(1);
		words[index].definition =
			words[index].definition.charAt(0).toUpperCase() +
			words[index].definition.slice(1);

		//sets the question
		setQuestion(words[index]);

		//resets the score array for the next game
		if (score.length >= 10) {
			//numOfCorrectAnswers = 0;
			while (score.length) {
				score.pop();
			}
		}
	}, [words, index]);

	//When game is completed show the results
	const completeGame = () => {
		setDisabled(!disabled);
		setResults(score);
		setTimeout(() => {
			isDone(true);
		}, 1000);
	};

	//Send whatever the user wrote in the input field to the score array if time runs out
	const timerExpired = () => {
		setTimeout(() => {
			//Cleans up the string
			const response = inputRef.current.value.trim().toLowerCase();

			setKey(key + 1);

			question.word.toLowerCase() === response
				? score.push({
						id: index + 1,
						word_id: question.id,
						input: response,
						correct: '✅',
						answer: question.word,
						bool: true,
				  })
				: score.push({
						id: index + 1,
						word_id: question.id,
						input: response,
						correct: '❌',
						answer: question.word,
						bool: false,
				  });

			//Checks to see if the spelling matches the dictionary word
			if (question.word.toLowerCase() === response) {
				numOfCorrectAnswers++;
				setScore(numOfCorrectAnswers);
			}

			//Sets the progress bar progress
			setProgress(progress + 10);

			//either goes through the useEffect for another render or goes to the results table depending on game state
			index < words.length - 1 ? setIndex(index + 1) : completeGame();

			//resets the input field
			inputRef.current.value = '';
		}, 1000);
	};

	//Saves results to an array and displays a new word
	const getNewWord = (e) => {
		e.preventDefault();
		const response = e.target.word.value.trim().toLowerCase();

		//Can't submit when input a blank string 
		if (!response) {
			setInputError(true);
			inputRef.current.value = '';
		} else {
			setInputError(false);
			setKey(key + 1);

			//Checks to see if response matches the answer
			question.word.toLowerCase() === response
				? score.push({
						id: index + 1,
						word_id: question.id,
						input: response,
						correct: '✅',
						answer: question.word,
						bool: true,
				  })
				: score.push({
						id: index + 1,
						word_id: question.id,
						input: response,
						correct: '❌',
						answer: question.word,
						bool: false,
				  });

			if (question.word.toLowerCase() === response) {
				numOfCorrectAnswers++;
				setScore(numOfCorrectAnswers);
			}

			//updates progress bar 
			setProgress(progress + 10);

			//triggers useEffect
			index < words.length - 1 ? setIndex(index + 1) : completeGame();

			e.target.reset();
		}
	};

	//Displays buttons on the screen depending on play or pause and if time expires
	const renderTime = ({ remainingTime }) => {
		if (remainingTime === 0) {
			return (
				<div className='game__timer'>
					<img
						src={playGrayButton}
						className={
							!isPlaying
								? 'game__controls game__controls--disabled'
								: 'game__hide'
						}
						alt='Play Button'
					/>
					<img
						src={pauseGrayButton}
						className={
							isPlaying
								? 'game__controls game__controls--disabled'
								: 'game__hide'
						}
						alt='Pause Button'
					/>
				</div>
			);
		}

		return (
			<div className='game__timer'>
				<img
					src={playButton}
					className={!isPlaying ? 'game__controls' : 'game__hide'}
					alt='Play Button'
					onClick={() => audioRef.current.play()}
				/>
				<img
					src={pauseButton}
					className={isPlaying ? 'game__controls' : 'game__hide'}
					alt='Pause Button'
					onClick={() => audioRef.current.pause()}
				/>
			</div>
		);
	};

	return question === undefined ? (
		<></>
	) : (
		<section className='game'>
			<article className='game__info-container'>
				<div className='game__progress-container'>
					<div
						className='game__progress-bar'
						style={{ width: progress + '%' }}>
						<img
							src={progressBee}
							className='game__bee'
							alt='Progress Bee'
						/>
					</div>
				</div>
				<div className='game__clue-container'>
					<h2 className='game__description'>{question.definition}</h2>
					<div style={{ textAlign: 'center' }}>
						<audio
							autoPlay
							ref={audioRef}
							onPlay={() => setIsPlaying(true)}
							onEnded={() => setIsPlaying(false)}
							onPause={() => setIsPlaying(false)}
							src={question.audio}>
							<a href={question.audio}> Download audio </a>
						</audio>
						<CountdownCircleTimer
							key={key}
							isPlaying
							duration={20}
							size={100}
							colors={['#30fc34', '#fcd730', '#f59b06', '#fa3705']}
							colorsTime={[20, 13, 6, 0]}
							onComplete={timerExpired}>
							{renderTime}
						</CountdownCircleTimer>
					</div>
					<h2 className='game__phonetics'>{question.phonetics}</h2>
					<h2 className='game__etymology'>{question.etymology}</h2>
				</div>
			</article>
			<form
				className='game__form'
				onSubmit={getNewWord}>
				<div className='game__input-container'>
					<div className={inputError ? 'game__error-container' : ''}>
						<input
							id='word'
							className={
								inputError ? 'game__input game__input--error' : 'game__input'
							}
							ref={inputRef}
							onClick={() => setInputError(false)}
							autoCorrect='off'
							spellCheck={false}
						/>
						<h3 className={inputError ? 'game__error-message' : 'game__hide'}>
							Please enter your response!
						</h3>
					</div>
					<button
						disabled={disabled}
						className='game__button'>
						<img
							className='game__bee-button'
							src={honeyButton}
							alt='Next Button'
						/>
					</button>
				</div>
			</form>
		</section>
	);
}

export default Game;
