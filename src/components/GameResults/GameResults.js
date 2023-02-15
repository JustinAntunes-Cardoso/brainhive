import axios from 'axios';
import './GameResults.scss';

const USER = process.env.REACT_APP_USER || '1';
const apiBaseUrl =
	process.env.REACT_APP_API_BASE_URL || 'https://brainhive.herokuapp.com';
const apiGameEndpoint = process.env.REACT_APP_GAME_PATH || '/games';
const apiQuestionEndpoint = process.env.REACT_APP_QUESTION_PATH || '/questions';

function GameResults({ results, score }) {
	const saveGame = async () => {
		try {
			//post game data
			const { data } = await axios.post(`${apiBaseUrl}${apiGameEndpoint}`, {
				user_id: USER,
				level: results[0].level,
			});
			//post questions data
			for (let result of results) {
				await axios.post(`${apiBaseUrl}${apiQuestionEndpoint}`, {
					game_id: data.game_id,
					word_id: result.word_id,
					answer: result.input,
					correct: result.bool,
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	saveGame();

	return (
		<section className='game-results'>
			<h1 className='game-results__title'>{`${
				score > 8
					? 'Congratulations!!'
					: score > 5
					? 'Keep up the good work!'
					: 'Keep Practicing.'
			} You got ${score}/10 correct.`}</h1>
			<aside className='game-results__table-container'>
				<table className='game-results__table'>
					<thead>
						<tr>
							<th colSpan='4'>Game Results</th>
						</tr>
						<tr>
							<th>Question</th>
							<th>Response</th>
							<th>Correct</th>
							<th>Answer</th>
						</tr>
					</thead>
					<tbody>
						{results.map((result) => {
							return (
								<tr key={result.id}>
									<td>{result.id}</td>
									<td>{result.input}</td>
									<td>{result.correct}</td>
									<td>{result.answer}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</aside>
		</section>
	);
}

export default GameResults;
