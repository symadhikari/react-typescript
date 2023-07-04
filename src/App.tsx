import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import { Profile, Gender } from './Misc/Profile';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Provider } from "react-redux";
import { store } from "./store"
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Home</Link>
          <Routes>
            <Route path='/profile' element={<Profile
                name="Sanjeev Subedi"
                gender= {Gender.O}
                email='sanjeev.sbd@gmail.com'
                age={25}
                isMarried={true}
                friends={["Sakshyam", "Samik", "Sabin", "Ronish"]}
              />} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
