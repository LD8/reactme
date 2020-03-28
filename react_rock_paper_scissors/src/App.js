import React, { Component } from "react";
import Rock_img from "./img/rock.png";
import Paper_img from "./img/paper.png";
import Scissors_img from "./img/scissors.png";

const weapons = [
  { name: "Rock", img: Rock_img },
  { name: "Paper", img: Paper_img },
  { name: "Scissors", img: Scissors_img }
];

function Info({ myChoice }) {
  return (
    <div>
      <p id="info">
        {myChoice ? "My choice was " + myChoice : "Choose to start the game!"}
      </p>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myChoice: "",
      computerChoice: "",
      myScore: 0,
      computerScore: 0,
      winner: ""
    };
  }

  game = choice => {
    this.setState({ myChoice: choice });
    let counter = 0;
    const id = setInterval(() => {
      counter++;
      this.setComputerChoice();
      if (counter > 4) {
        clearInterval(id);

        const winner = this.evaluate(
          this.state.myChoice,
          this.state.computerChoice
        );
        this.setState({
          winner: winner
        });
      }
    }, 100);
  };

  // game = choice => {
  //   this.setState({ myChoice: choice });
  //   this.setComputerChoice();

  //   const winner = this.evaluate(
  //     this.state.myChoice,
  //     this.state.computerChoice
  //   );
  //   this.setState({
  //     winner: winner
  //   });
  // };

  // game = choice => {
  //   this.setState({ myChoice: choice });
  //   this.setComputerChoice();

  //   setTimeout(
  //     () => this.evaluate(this.state.myChoice, this.state.computerChoice),
  //     5
  //   );
  // };

  // evaluate = (myChoice, computerChoice) => {
  //   if (myChoice === computerChoice) {
  //     console.log(this.state);
  //     this.setState({
  //       winner: "DRAW!"
  //     });
  //     this.glow(myChoice, "draw-glow");
  //   } else if (
  //     (myChoice === "Rock" && computerChoice === "Scissors") ||
  //     (myChoice === "Scissors" && computerChoice === "Paper") ||
  //     (myChoice === "Paper" && computerChoice === "Rock")
  //   ) {
  //     this.setState({ myScore: this.state.myScore + 1 });
  //     console.log(this.state);
  //     this.setState({
  //       winner: "I WON!!"
  //     });
  //     this.glow(myChoice, "win-glow");
  //   } else {
  //     this.setState({ computerScore: this.state.computerScore + 1 });
  //     console.log(this.state);
  //     this.setState({
  //       winner: "I LOST..."
  //     });
  //     this.glow(myChoice, "lose-glow");
  //   }
  // };

  setComputerChoice = () =>
    this.setState({
      computerChoice: weapons[Math.floor(Math.random() * weapons.length)].name
    });

  evaluate = (myChoice, computerChoice) => {
    if (myChoice === computerChoice) {
      console.log(this.state);
      this.glow(myChoice, "draw-glow");
      return "DRAW!";
    } else if (
      (myChoice === "Rock" && computerChoice === "Scissors") ||
      (myChoice === "Scissors" && computerChoice === "Paper") ||
      (myChoice === "Paper" && computerChoice === "Rock")
    ) {
      this.setState({ myScore: this.state.myScore + 1 });
      console.log(this.state);
      this.glow(myChoice, "win-glow");
      return "I WIN!";
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 });
      console.log(this.state);
      this.glow(myChoice, "lose-glow");
      return "I LOST...";
    }
  };

  glow = (myChoice, glow) => {
    const elem = document.getElementById(myChoice);
    elem.classList.add(glow);
    setTimeout(() => elem.classList.remove(glow), 500);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div id="scoreBoard">
            <p className="badge-left">
              <span>My Score</span>{" "}
              <span id="myScore">{this.state.myScore}</span>
            </p>
            <p className="badge-right">
              <span id="computerScore">{this.state.computerScore}</span>{" "}
              <span>Mac Score</span>
            </p>
          </div>

          <div>
            <p id="status">
              {this.state.winner ? this.state.winner : "Who wins?"}
            </p>
            <p id="tellStatus">
              {this.state.myChoice
                ? this.state.myChoice + " VS " + this.state.computerChoice
                : null}
            </p>
          </div>

          <div className="sign-boxes">
            {weapons.map(weapon => {
              return (
                <div
                  key={weapon.name}
                  id={weapon.name}
                  onClick={() => this.game(weapon.name)}
                  className="sign-box"
                >
                  <img src={weapon.img} alt={weapon.name + " for the game"} />
                </div>
              );
            })}
          </div>

          <Info myChoice={this.state.myChoice} />
        </main>
        <Footer />
      </div>
    );
  }
}

function Header() {
  return (
    <header>
      <h1>Rock Paper Scissors</h1>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/LD8"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <div>
        <span>By </span>
        <a
          href="https://DonLee.online"
          rel="noopener noreferrer"
          target="_blank"
        >
          Don Lee
        </a>
      </div>
    </footer>
  );
}
export default App;
