"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_countdown_circle_timer_1 = require("react-countdown-circle-timer");
var progress_bee_png_1 = __importDefault(require("../../assets/images/progress_bee.png"));
var play_button_svg_1 = __importDefault(require("../../assets/images/play-button.svg"));
var play_gray_button_svg_1 = __importDefault(require("../../assets/images/play-gray-button.svg"));
var pause_svg_1 = __importDefault(require("../../assets/images/pause.svg"));
var pause_gray_svg_1 = __importDefault(require("../../assets/images/pause-gray.svg"));
var Honey_Button_png_1 = __importDefault(require("../../assets/images/Honey_Button.png"));
require("./Game.scss");
//Initializa values
var intialValues = {
    word: '',
    phonetics: '',
    audio: '',
    definition: '',
    etymology: '',
};
//save results in
var score = [];
var numOfCorrectAnswers = 0;
function Game(_a) {
    var words = _a.words, setResults = _a.setResults, isDone = _a.isDone, setScore = _a.setScore;
    //Sets Question
    var _b = (0, react_1.useState)(intialValues), question = _b[0], setQuestion = _b[1];
    var _c = (0, react_1.useState)(0), index = _c[0], setIndex = _c[1];
    //Sets progress bar
    var _d = (0, react_1.useState)(0), progress = _d[0], setProgress = _d[1];
    //Sets button usability
    var _e = (0, react_1.useState)(false), disabled = _e[0], setDisabled = _e[1];
    //Sets error state
    var _f = (0, react_1.useState)(false), inputError = _f[0], setInputError = _f[1];
    //Refreshes the timer
    var _g = (0, react_1.useState)(0), key = _g[0], setKey = _g[1];
    //Plays audio
    var _h = (0, react_1.useState)(false), isPlaying = _h[0], setIsPlaying = _h[1];
    var audioRef = (0, react_1.useRef)(null);
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        //Edits the etymology to not to have the same word
        var pattern = new RegExp(words[index].word, 'g');
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
            numOfCorrectAnswers = 0;
            while (score.length) {
                score.pop();
            }
        }
    }, [words, index]);
    //When game is completed show the results
    var completeGame = function () {
        setDisabled(!disabled);
        setResults(score);
        setTimeout(function () {
            isDone(true);
        }, 1000);
    };
    //Send whatever the user wrote in the input field to the score array if time runs out
    var timerExpired = function () {
        setTimeout(function () {
            //Cleans up the string
            var response = inputRef.current.value.trim().toLowerCase();
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
    var getNewWord = function (e) {
        e.preventDefault();
        var response = e.target.word.value.trim().toLowerCase();
        //Can't submit when input a blank string 
        if (!response) {
            setInputError(true);
            inputRef.current.value = '';
        }
        else {
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
    var renderTime = function (_a) {
        var remainingTime = _a.remainingTime;
        if (remainingTime === 0) {
            return (React.createElement("div", { className: 'game__timer' },
                React.createElement("img", { src: play_gray_button_svg_1.default, className: !isPlaying
                        ? 'game__controls game__controls--disabled'
                        : 'game__hide', alt: 'Play Button' }),
                React.createElement("img", { src: pause_gray_svg_1.default, className: isPlaying
                        ? 'game__controls game__controls--disabled'
                        : 'game__hide', alt: 'Pause Button' })));
        }
        return (React.createElement("div", { className: 'game__timer' },
            React.createElement("img", { src: play_button_svg_1.default, className: !isPlaying ? 'game__controls' : 'game__hide', alt: 'Play Button', onClick: function () { return audioRef.current.play(); } }),
            React.createElement("img", { src: pause_svg_1.default, className: isPlaying ? 'game__controls' : 'game__hide', alt: 'Pause Button', onClick: function () { return audioRef.current.pause(); } })));
    };
    return question === undefined ? (React.createElement(React.Fragment, null)) : (React.createElement("section", { className: 'game' },
        React.createElement("article", { className: 'game__info-container' },
            React.createElement("div", { className: 'game__progress-container' },
                React.createElement("div", { className: 'game__progress-bar', style: { width: progress + '%' } },
                    React.createElement("img", { src: progress_bee_png_1.default, className: 'game__bee', alt: 'Progress Bee' }))),
            React.createElement("div", { className: 'game__clue-container' },
                React.createElement("h2", { className: 'game__description' }, question.definition),
                React.createElement("div", { style: { textAlign: 'center' } },
                    React.createElement("audio", { autoPlay: true, ref: audioRef, onPlay: function () { return setIsPlaying(true); }, onEnded: function () { return setIsPlaying(false); }, onPause: function () { return setIsPlaying(false); }, src: question.audio },
                        React.createElement("a", { href: question.audio }, " Download audio ")),
                    React.createElement(react_countdown_circle_timer_1.CountdownCircleTimer, { key: key, isPlaying: true, duration: 20, size: 100, colors: ['#30fc34', '#fcd730', '#f59b06', '#fa3705'], colorsTime: [20, 13, 6, 0], onComplete: timerExpired }, renderTime)),
                React.createElement("h2", { className: 'game__phonetics' }, question.phonetics),
                React.createElement("h2", { className: 'game__etymology' }, question.etymology))),
        React.createElement("form", { className: 'game__form', onSubmit: getNewWord },
            React.createElement("div", { className: 'game__input-container' },
                React.createElement("div", { className: inputError ? 'game__error-container' : '' },
                    React.createElement("input", { id: 'word', className: inputError ? 'game__input game__input--error' : 'game__input', ref: inputRef, onClick: function () { return setInputError(false); }, autoCorrect: 'off', spellCheck: false }),
                    React.createElement("h3", { className: inputError ? 'game__error-message' : 'game__hide' }, "Please enter your response!")),
                React.createElement("button", { disabled: disabled, className: 'game__button' },
                    React.createElement("img", { className: 'game__bee-button', src: Honey_Button_png_1.default, alt: 'Next Button' }))))));
}
exports.default = Game;
//# sourceMappingURL=Game.js.map