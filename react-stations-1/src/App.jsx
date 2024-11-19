import "./App.css";
import { Threads } from "./Threads";

function App() {
  return (
    <>
      <div>
        <header class="header">
          <h2 class="message">掲示板</h2>
        </header>
        <div>
          <Threads />
        </div>
      </div>
    </>
  );
}

export default App;
