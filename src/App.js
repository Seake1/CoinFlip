import Header from "./components/Header";
import GamesList from "./components/GamesList";
import { Route, Switch } from "react-router-dom";
import Coinflip from "./pages/Coinflip";
import RockPaperScissors from "./pages/RockPaperScissors";
import Sudoku from "./pages/Sudoku";
import Mahjong from "./pages/Mahjong";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header title="Pick a game!" />
          <GamesList />          
        </Route>
        <Route path="/Coinflip">
          <Header title="Heads or tails?" />
          <Coinflip />
        </Route>
        <Route path="/Rps">
          <Header title="Rock, paper, scissors" />
          <RockPaperScissors />
        </Route>
        <Route path="/Sudoku">
          <Header title="Sudoku" />
          <Sudoku />
        </Route>
        <Route path="/Mahjong">
          <Header title="Mahjong" />
          <Mahjong />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
