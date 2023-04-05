import { useEffect, useRef, useState } from "react";
import headsImg from "../images/1.png";
import tailsImg from "../images/2.png";
import "./Coinflip.css";

const Coinflip = () => {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const coin = useRef(null);

    useEffect(() => {

    }, [coin])
    
 
const reset = () => {
    setHeads(0);
    setTails(0);
}

  const flipCoin = () => {    
    let i = Math.random();
    coin.current.style.animation = "none";
    if (i<0.5) {
      setTimeout(function () {
        coin.current.style.animation = "spin-heads 3s forwards";
      }, 100);
      setTimeout(() => setTails(tails + 1), 3000);
    } else {
      setTimeout(function () {
        coin.current.style.animation = "spin-tails 3s forwards";
      }, 100);
      setTimeout(() => setHeads(heads + 1), 3000);
    }
  };



  return (
    <div class="container">
      <div class="stats">
        <p>Heads: {heads}</p>
        <p>Tails: {tails}</p>
      </div>
      <div class="coin" ref={coin}>
        <div class="heads">
          <img alt="heads" src={headsImg} />
        </div>
        <div class="tails">
          <img alt="tails" src={tailsImg} />
        </div>
      </div>
      <div class="buttons">
        <button id="flip-button" onClick={flipCoin}>
          Flip Coin
        </button>
        <button id="reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Coinflip;
