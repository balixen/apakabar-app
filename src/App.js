import logo from "./logo.svg";
import "./App.css";

//component - properties
function Greeting(props) {
  return (
    <h1>
      Halo {props.name} - umurnya {props.age}
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Greeting name="Bee Bee" age="25" />

        <p>
          Apa kabar - Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
