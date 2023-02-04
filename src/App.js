import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cedar Rapids" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://whimsical-strudel-6a6040.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olive Phan
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/yazziewonphon/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced.
        </a>
      </footer>
    </div>
  );
}

export default App;
