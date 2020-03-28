import React, { Component } from "react";
import rock from "./img/rock.png"
import paper from "./img/paper.png"
import scissors from "./img/scissors.png"
import "./index.css";

function ScoreBoard() {
  return (
    <div id="scoreBoard">
      <p className="badge-left">
        <span>My Score</span> <span id="myScore">0</span>
      </p>
      <p className="badge-right">
        <span id="computerScore">0</span> <span>Mac Score</span>
      </p>
    </div>
  );
}

function Status() {
  return (
    <div>
      <p id="status">Who wins?</p>
      <p id="tellStatus"></p>
    </div>
  );
}

function SignBoxes() {
  return (
    <div className="sign-boxes">
      <div id="rock" className="sign-box">
        <img src={rock} alt="rock for the game" />
      </div>
      <div id="paper" className="sign-box">
        <img src={paper} alt="paper for the game" />
      </div>
      <div id="scissors" className="sign-box">
        <img
          src={scissors}
          alt="scissors for the game"
        />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div>
      <p id="info">Choose to start the game!</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        <a href="https://github.com/LD8" rel="noopener noreferrer" target="_blank">
          GitHub
        </a>
      </p>
      <p>
        <span>By </span>
        <a href="https://DonLee.online" rel="noopener noreferrer" target="_blank">
          Don Lee
        </a>
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <main>
        <ScoreBoard />
        <Status />
        <SignBoxes />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
