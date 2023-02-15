import axios from 'axios';
import { useEffect, useState } from 'react';
import './Profile.scss';

const USER = process.env.USER || '1';
const apiBaseUrl =
	process.env.API_BASE_URL || 'https://brainhive.herokuapp.com';
const apiEndpoint = process.env.GAME_PATH || '/games';

function ProfilePage() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		const displayGames = async () => {
			try {
				const { data } = await axios.get(`${apiBaseUrl}${apiEndpoint}/${USER}`);

				setGames(data);
			} catch (error) {
				console.error(error);
			}
		};

		displayGames();
	}, []);

	return (
		<main className='profile'>
			<h1> Welcome! {USER}</h1>
      <h2>{games}</h2>
		</main>
	);
}

export default ProfilePage;
