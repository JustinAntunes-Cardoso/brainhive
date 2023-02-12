import React from 'react';
import hero from '../../assets/images/BrainHiveHero.png'
import GameSelect from '../../components/GameSelect';
import './Hero.scss';

function Hero() {
	return (
		<section className='hero'>
			<article className='hero__image-container'>
				<img
					className='hero__image-logo'
					src={hero}
					alt='BrainHive Hero'
				/>
				<GameSelect />
			</article>
		</section>
	);
}

export default Hero;
