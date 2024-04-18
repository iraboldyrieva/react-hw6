import "./App.css";
import ReactMemoComponent from "./components/ReactMemoComponent";
import UseMemoComponent from "./components/UseMemoComponent";
import WindowWidthComponent from "./components/WindowWidthComponent";

function App() {
  return (
    <div className="App">
      <UseMemoComponent />
      <ReactMemoComponent />
      <WindowWidthComponent />
    </div>
  );
}

export default App;
