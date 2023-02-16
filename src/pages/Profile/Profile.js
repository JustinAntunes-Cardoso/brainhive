import axios from 'axios';
import { useEffect, useState } from 'react';
import './Profile.scss';

const USER = process.env.REACT_APP_USER;
const apiBaseUrl =
	process.env.REACT_APP_API_BASE_URL;
const apiEndpoint = process.env.REACT_APP_GAME_PATH;

function ProfilePage() {
	const [games, setGames] = useState([]);
	//Display user games
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
