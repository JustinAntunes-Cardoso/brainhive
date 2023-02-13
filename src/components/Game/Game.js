import { useEffect, useRef, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import progressBee from '../../assets/images/progress_bee.png';
import playButton from '../../assets/images/play-button.svg';
import playGrayButton from '../../assets/images/play-gray-button.svg';
import pauseButton from '../../assets/images/pause.svg';
import pauseGrayButton from '../../assets/images/pause-gray.svg';
import honeyButton from '../../assets/images/Honey_Button.png';
import './Game.scss';

const intialValues = {
	word: '',
	phonetics: '',
	audio: '',
	definition: '',
	etymology: '',
};

const score = [];
let numOfCorrectAnswers = 0;

function Game({ words, setResults, isDone, setScore }) {
	const [question, setQuestion] = useState(intialValues);
	const [index, setIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const [disabled, setDisabled] = useState(false);
	const [inputError, setInputError] = useState(false);
	const [key, setKey] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		const pattern = new RegExp(words[index].word, 'g');
		words[index].etymology = words[index].etymology.replace(pattern, '🏵️🏵️🏵️');
		words[index].etymology =
			words[index].etymology.charAt(0).toUpperCase() +
			words[index].etymology.slice(1);
		words[index].definition =
			words[index].definition.charAt(0).toUpperCase() +
			words[index].definition.slice(1);

		setQuestion(words[index]);

		if (score.length >= 10) {
			while (score.length) {
				score.pop();
			}
		}
	}, [words, index]);

	const handleChange = () => {
		setInputError(false);
	};

	const handleAudioEnded = () => {
		setIsPlaying(false);
	};

	const handleAudioPlay = () => {
		setIsPlaying(true);
	};

	const handleAudioPause = () => {
		setIsPlaying(false);
	};

	const completeGame = () => {
		setDisabled(!disabled);
		setResults(score);
		setTimeout(() => {
			isDone(true);
		}, 1000);
	};

	const timerExpired = () => {
		setTimeout(() => {
			const response = inputRef.current.value.trim().toLowerCase();

			setKey(key + 1);

			question.word.toLowerCase() === response
				? score.push({
						id: index + 1,
						input: response,
						correct: '✅',
						answer: question.word,
				  })
				: score.push({
						id: index + 1,
						input: response,
						correct: '❌',
						answer: question.word,
				  });

			if (question.word.toLowerCase() === response) {
				numOfCorrectAnswers++;
				setScore(numOfCorrectAnswers);
			}

			setProgress(progress + 10);

			index < words.length - 1 ? setIndex(index + 1) : completeGame();

			inputRef.current.value = '';
		}, 1000);
	};

	const getNewWord = (e) => {
		e.preventDefault();
		const response = e.target.word.value.trim().toLowerCase();

		if (!response) {
			setInputError(true);
		} else {
			setInputError(false);
			setKey(key + 1);

			question.word.toLowerCase() === response
				? score.push({
						id: index + 1,
						input: response,
						correct: '✅',
						answer: question.word,
				  })
				: score.push({
						id: index + 1,
						input: response,
						correct: '❌',
						answer: question.word,
				  });

			if (question.word.toLowerCase() === response) {
				numOfCorrectAnswers++;
				setScore(numOfCorrectAnswers);
			}

			setProgress(progress + 10);

			console.log(score);
			index < words.length - 1 ? setIndex(index + 1) : completeGame();

			e.target.reset();
		}
	};

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
							onPlay={handleAudioPlay}
							onEnded={handleAudioEnded}
							onPause={handleAudioPause}
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
							onChange={handleChange}
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
