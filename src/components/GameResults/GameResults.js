import axios from 'axios';
import './GameResults.scss';

const USER = process.env.REACT_APP_USER;
const apiBaseUrl =
	process.env.REACT_APP_API_BASE_URL;
const apiGameEndpoint = process.env.REACT_APP_GAME_PATH;
const apiQuestionEndpoint = process.env.REACT_APP_QUESTION_PATH;

function GameResults({ results, score }) {

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
