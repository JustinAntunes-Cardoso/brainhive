// import { useState } from "react";
// import Login from "../Login";
// import Signup from "../Signup"
// import Profile from "../Profile";
import Hero from '../../components/Hero';

import './Home.scss';

function HomePage() {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!sessionStorage.bearerToken);
  // const [mode,setMode] = useState("signup"); 

  // function onLogin(token) {
  //   sessionStorage.setItem("bearerToken", token);
  //   setIsUserLoggedIn(true);
  // }

  // function onLogout() {
  //   sessionStorage.removeItem("bearerToken");
  //   setIsUserLoggedIn(false);
  // }

  return (
		<main className='home'>
      {/* <img className="home__image" src={honey} alt="Honey Drip" /> */}
      {/* {isUserLoggedIn ? <Profile onLogout={onLogout} /> : mode==="login" ? <Login onLogin={onLogin} setMode={setMode}/> : <Signup onLogin={onLogin} setMode={setMode}/>} */}
			<Hero />
		</main>
	);
}

export default HomePage;
