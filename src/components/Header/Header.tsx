import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/BrainHive_Logo_Transparent.png';
import avatar from '../../assets/images/justin_avatar.jpg';
import './Header.scss';

function Header() {
	return (
		<header className='header'>
			<section className='header__container'>
				<div className='header__logo-container'>
					<Link to='/'>
						<img
							src={logo}
							className='header__logo'
							alt='logo'
						/>
					</Link>
					<Link to='/'>
						<h1 className='header__logo-text'>BrainHive</h1>
					</Link>
				</div>
				<nav className='header__nav'>
					<img
						src={avatar}
						className='header__avatar'
						alt='user profile'
					/>
				</nav>
			</section>
		</header>
	);
}

export default Header;
