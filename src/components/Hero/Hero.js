import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/images/BrainHiveHero.png'
import './Hero.scss';

function Hero() {
	return (
		<section className='hero'>
			<article className='hero__image-container'>
				<img
					className='hero__image'
					src=''
					alt='Honey Drip'
				/>
				<img
					className='hero__image-logo'
					src={hero}
					alt='BrainHive Hero Image'
				/>
				<p className='hero__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec
					ac odio tempor orci dapibus ultrices in. Blandit turpis cursus in hac
					habitasse platea dictumst quisque sagittis. Orci nulla pellentesque
					dignissim enim sit amet venenatis. Id aliquet lectus proin nibh nisl
					condimentum id venenatis. In fermentum posuere urna nec tincidunt
					praesent semper feugiat. Risus feugiat in ante metus dictum.
				</p>
			</article>
			<article>
				<div className='hero__game-button-container'>
					<Link
						to='/game'
						className='hero__button'>
						GAME
					</Link>
					<Link
						to='/custom'
						className='hero__button'>
						CUSTOM GAME
					</Link>
				</div>
				<div className='hero__login-button-container'>
					<Link
						to='/profile'
						className='hero__button'>
						Sign Up
					</Link>
				</div>
			</article>
		</section>
	);
}

export default Hero;
