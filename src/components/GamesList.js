import { Link } from "react-router-dom";
import "./GamesList.css";
import imgCoinflip from "../images/2.png";
import imgRPS from "../images/3.png";
import imgSudoku from "../images/4.png";
import imgMahjong from "../images/5.png";

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
          <img className="game_image" alt="rock, paper, scissors" src={imgRPS}></img>
          Rock, paper, scissors
        </Link></li>
      <li> <Link to="/Sudoku">
          <img className="game_image" alt="sudoku" src={imgSudoku}></img>
          Sudoku
        </Link></li>
      <li> <Link to="/Mahjong">
          <img className="game_image" alt="mahjong" src={imgMahjong}></img>
          Mahjong
        </Link></li>
    </ul>
    </div>
  );
};

export default GamesList;
