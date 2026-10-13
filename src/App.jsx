import "./App.css";
import DailyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        <DailyNav></DailyNav>
      </header>
      <main></main>
    </div>
  );
}

export default App;
