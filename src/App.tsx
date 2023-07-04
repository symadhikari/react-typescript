import React from 'react';
import { Profile, Gender } from './Misc/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        name="Sanjeev Subedi"
        gender= {Gender.M}
        email='sanjeev.sbd@gmail.com'
        age={25}
        isMarried={false}
        friends={["Sakshyam", "Samik", "Sabin", "Ronish"]}
      />
    </div>
  );
}

export default App;
