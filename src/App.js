import Header from "./components/Header";
import GamesList from "./components/GamesList";
import { Route, Switch } from "react-router-dom";
import Coinflip from "./pages/Coinflip";
import RockPaperScissors from "./pages/RockPaperScissors";
import Sudoku from "./pages/Sudoku";
import Mahjong from "./pages/Mahjong";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {

  const [user, setUser] = useState(auth.currentUser);   // Rekisteröityneen käyttäjän tiedot, null jos ei rekistsröitynyt

  // Aseteteaan kirjautumisen kuuntelija ensimmäisellä renderöinnillä. 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    }, []);
  })

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header title="Pick a game!" loggedIn={user ? true : false}/>
          <GamesList/>          
        </Route>
        <Route path="/Coinflip">
          <Header title="Heads or tails?"  loggedIn={user ? true : false}/>
          <Coinflip />
        </Route>
        <Route path="/Rps">
          <Header title="Rock, paper, scissors"  loggedIn={user ? true : false}/>
          <RockPaperScissors user={user}/>
        </Route>
        <Route path="/Sudoku">
          <Header title="Sudoku"  loggedIn={user ? true : false}/>
          <Sudoku />
        </Route>
        <Route path="/Mahjong">
          <Header title="Mahjong"  loggedIn={user ? true : false}/>
          <Mahjong />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
