import axios from 'axios';
import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

import './SignupForm.scss';

function SignupForm() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorUsername, setUsernameError] = useState(null);
	const [errorEmail, setEmailError] = useState(null);
	const [errorPassword, setPasswordError] = useState(null);
	const [error, setError] = useState(null);
	//const history = useHistory();

	const handleSignUp = () => {
		//Check to see if Username is long enough
		username.length < 5
			? setUsernameError('Username must be at least 5 characters long')
			: setUsernameError(null);

		// Check if email is in the correct format
		const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		!regexEmail.test(email)
			? setEmailError('Invalid email address')
			: setEmailError(null);

		// Check if password is at least 8 characters long, includes a lowercase letter, an uppercase letter, and a number
		const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
		!regexPassword.test(password)
			? setPasswordError(
					'Password must be at least 8 characters long, include a lowercase letter, an uppercase letter, and a number'
			  )
			: setPasswordError(null);

		if (!errorUsername && !errorEmail && !errorPassword) {
			const createAccount = async () => {
				try {
					const { data } = await axios.post('/user/signup', {
						username,
						email,
					});

					if (data.error.includes('Username')) {
						setUsernameError(data.error);
					} else if (data.error.includes('Email')) {
						setEmailError(data.error);
					} else {
						setUsernameError(null);
						setEmailError(null);
						// Code to submit the sign up form goes here
						console.log(data)
						//history.push(`/profile/${data.id}`);
					}
				} catch (error) {
					console.error(error);
					setError('An error occurred, please try again later');
				}
			};

			createAccount();
		}
	};

	return (
		<form
			className='signup-form'
			onSubmit={handleSignUp}>
			<h1>Sign Up</h1>
			<div>
				<label htmlFor='username'>Username:</label>
				<input
					type='text'
					id='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				{errorUsername && (
					<div className='signup-form__error'>{errorUsername}</div>
				)}
			</div>
			<div>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{errorEmail && <div className='signup-form__error'>{errorEmail}</div>}
			</div>
			<div>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{errorPassword && (
					<div className='signup-form__error'>{errorPassword}</div>
				)}
			</div>
			<button>Sign Up</button>
			{error && <div className='signup-form__error'>{error}</div>}
		</form>
	);
}

export default SignupForm;
