import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/BrainHive_Logo.png'
import './Header.scss';

function Header() {
	return <header className='header'>
	<div className='header__logo-container'>
		{/* <Link to='/'> */}
			<img
				src={logo}
				className='header__logo'
				alt='logo'
			/>
		{/* </Link> */}
		<h1 className='header__logo-text'>BrainHive</h1>
	</div>
	<nav className='header__nav'>
		<div className='header__user-search-container'>
			{/* <div className='header__search-bar'>
				<img
					className='header__search-icon'
					src={search}
					alt='search icon'
				/>
				<input
					type='text'
					className='header__search'
					name='title'
					id='title'
					placeholder='Search'
				/>
			</div>  */}

			<img
				className='header__avatar header__avatar--mobile'
				alt='profile pic'
			/>
		</div>
		<img
			className='header__avatar header__avatar--desktop'
			alt='profile pic'
		/>
	</nav>
</header>;
}

export default Header;
