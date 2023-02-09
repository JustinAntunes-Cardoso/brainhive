import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import GamePage from './pages/Game';
import CustomPage from './pages/Custom';
import ProfilePage from './pages/Profile';
import NotFoundPage from './pages/NotFound';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
	
	return (
		<div className='App'>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/profile'
						element={<ProfilePage />}
					/>
					<Route
						path='/game'
						element={<GamePage />}
					/>
					<Route
						path='/game/:difficulty'
						element={<GamePage />}
					/>
					<Route
						path='/custom'
						element={<CustomPage />}
					/>
					<Route
						path='*'
						element={<NotFoundPage />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
