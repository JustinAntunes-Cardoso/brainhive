import React from 'react';

function GameSelect({ isGameSelected, setDifficulty }) {

    const setGame = e => {
        isGameSelected(true)
        setDifficulty(e.target.id)
    }

	return (
		<section className='game-selected'>
			<button id='easy' className='game-selected__button' onClick={setGame}>Easy</button>
            <button id='medium' className='game-selected__button' onClick={setGame}>Medium</button>
            <button id='hard' className='game-selected__button' onClick={setGame}>Hard</button>
        </section>
	);
}

export default GameSelect;
