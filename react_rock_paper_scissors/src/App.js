import React, { Component } from "react";
import Rock from "./img/rock.png";
import Paper from "./img/paper.png";
import Scissors from "./img/scissors.png";

const weapons = [
  { name: "Rock", img: Rock },
  { name: "Paper", img: Paper },
  { name: "Scissors", img: Scissors }
];

function Info({ myChoice }) {
  return (
    <div>
      <p id="info">
        {myChoice ? "My choice was " + myChoice : "Make your move!"}
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
      computerChoiceIndex: 0,
      myScore: 0,
      computerScore: 0,
      winner: ""
    };
  }

  hideRestSigns = choice => {
    const signs = document.querySelectorAll(".sign-box");
    signs.forEach(sign => {
      // console.log(sign.id);
      if (sign.id !== choice) {
        sign.style.visibility = "hidden";
      } else {
        sign.style.top="-80px"
      }
    });
  };

  revealSigns = () => {
    const signs = document.querySelectorAll(".sign-box");
    signs.forEach(sign => (sign.style.cssText = "visibility: visible; top: 0;"));
  };
  
  game = choice => {
    this.hideRestSigns(choice);
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
    setTimeout(() => this.revealSigns(), 1800);
  };

  setComputerChoice = () => {
    const computerChoiceIndex = Math.floor(Math.random() * weapons.length);
    this.setState({
      computerChoiceIndex: computerChoiceIndex,
      computerChoice: weapons[computerChoiceIndex].name
    });
  };

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
            <p id="computerStatus">
              {this.state.myChoice ? (
                <img id="computerStatusImgTag"
                  src={weapons[this.state.computerChoiceIndex].img}
                  alt={
                    weapons[this.state.computerChoiceIndex].name +
                    " for the game"
                  }
                />
              ) : null}
            </p>
            <hr />
            <p id="myStatus">
              {/* {this.state.winner ? this.state.winner : "Make your move!"} */}
              {/* {this.state.winner ? null : "Make your move!"} */}
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
