import "./styles/App.css";
import Board from "./components/Board";
import ClickCounter from "./components/ClickCounter";

function App(props) {
  return (
    <div className="App">
      <h1>Career Potato</h1>
      <ClickCounter />
      <Board />
    </div>
  );
}

export default App;
