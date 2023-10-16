import { CssBaseline } from "@mui/material";
import "./App.css";
import campImage from "./assets/campsite.png";
import cardImageTwo from "./assets/PerfectDry.png";
import cardImageThree from "./assets/thecrew.png";
import cardFourImage from "./assets/livesearch.png";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="cards">
        <div className="cardOne">
          <a href="https://campsite-mym1.onrender.com" target="_blank">
            <img className="cardImage" src={campImage} alt="campImage" />
          </a>
        </div>
        <div className="cardTwo">
          <a href="https://rad-strudel-251366.netlify.app" target="_blank">
            <img
              className="cardImage"
              src={cardImageTwo}
              alt="Card Two Image"
            />
          </a>
        </div>
        <div className="cardThree">
          <a href="https://mellow-dodol-8c8c4d.netlify.app" target="_blank">
            <img
              className="cardImage"
              src={cardImageThree}
              alt="Card Three Image"
            />
          </a>
        </div>
        <div className="cardFour">
          <a href="https://deluxe-froyo-e9d9c8.netlify.app" target="_blank">
            <img
              className="cardImage"
              src={cardFourImage}
              alt="Card Four Image"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
