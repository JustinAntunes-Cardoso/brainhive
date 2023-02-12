import { Link } from 'react-router-dom';
import larva from '../../assets/images/larva_icon.png';
import bee from '../../assets/images/bee_icon.svg';
import wasp from '../../assets/images/wasp_icon.png';
import './GameSelect.scss';

function GameSelect() {

	return (
		<section className='game-selected'>
			<article className='game-selected__button-container'>
				<Link to='/game/easy'>
					<button
						id='easy'
						className='game-selected__button game-selected__button--easy'>
						<img
							src={larva}
							className='game-selected__bug'
							alt='Larva Icon'
						/>
						Easy
					</button>
				</Link>
				<Link to='/game/medium'>
					<button
						id='medium'
						className='game-selected__button'>
						<img
							src={bee}
							className='game-selected__bug'
							alt='Bee Icon'
						/>
						Medium
					</button>
				</Link>
				<Link to='/game/hard'>
					<button
						id='hard'
						className='game-selected__button'>
						<img
							src={wasp}
							className='game-selected__bug'
							alt='Wasp Icon'
						/>
						Hard
					</button>
				</Link>
			</article>
		</section>
	);
}

export default GameSelect;
