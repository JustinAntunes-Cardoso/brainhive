import './GameResults.scss';

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
