import React from 'react';

import './GameResults.scss';

function GameResults({ results, score }) {
	return (
		<div>
			<h1>{`${
				score > 8
					? 'Congratulations!!'
					: score > 5
					? 'Keep up the good work!'
					: 'Keep Practicing.'
			} You got ${score}/10 correct.`}</h1>
			<table>
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
		</div>
	);
}

export default GameResults;
