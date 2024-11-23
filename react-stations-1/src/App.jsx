import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Threads } from "./components/Threads";
import { CreateThread } from "./components/CreateThread";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Link to="/">Threads</Link> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Threads />
              </>
            }
          />
          <Route
            path="/threads/new"
            element={
              <>
                <Header />
                <CreateThread />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
