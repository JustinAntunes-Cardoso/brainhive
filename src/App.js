import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import GamePage from './pages/Game';
import CustomPage from './pages/Custom';
import ProfilePage from './pages/Profile';
import NotFoundPage from './pages/NotFound';
import Footer from './components/Footer/Footer';
// import LoginPage from './pages/Login/Login';
// import SignupPage from './pages/Signup/Signup';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					{/* <Route
						path='/login'
						element={<LoginPage />}
					/>
					<Route
						path='/signup'
						element={<SignupPage />}
					/> */}
					<Route
						path='/profile/:userId'
						element={<ProfilePage />}
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
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
