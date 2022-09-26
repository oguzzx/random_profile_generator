import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileAge, setProfileAge] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      console.log(res);
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(res.data.results[0].name.first);
      setProfileAge(res.data.results[0].dob.age);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="profileContainer">
        <button onClick={profileData}>click for new profile</button>
        <img src={profileImage} />
        <h1>{profileName}  {profileAge}</h1>
        <p>{profileCell}</p>
        <p>{profileEmail}</p>
      </div>
    </div>
  );
}

export default App;
