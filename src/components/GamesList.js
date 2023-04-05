import { Link } from "react-router-dom";
import "./GamesList.css";
import imgCoinflip from "../images/2.png";

const GamesList = (props) => {
  return (
    <div className="list_container">
    <ul>
      <li>
        <Link to="/Coinflip">
          <img className="game_image" alt="coinflip" src={imgCoinflip}></img>
          Coinflip
        </Link>
      </li>
      <li> <Link to="/Rps">
          <img className="game_image" alt="rock, paper, scissors" src={imgCoinflip}></img>
          Rock, paper, scissors
        </Link></li>
      <li> <Link to="/Sudoku">
          <img className="game_image" alt="sudoku" src={imgCoinflip}></img>
          Sudoku
        </Link></li>
      <li> <Link to="/Mahjong">
          <img className="game_image" alt="mahjong" src={imgCoinflip}></img>
          Mahjong
        </Link></li>
    </ul>
    </div>
  );
};

export default GamesList;
