import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/'
						element={<HomePage />}
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
