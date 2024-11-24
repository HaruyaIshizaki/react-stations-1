import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Threads } from "./components/Threads";
import { CreateThread } from "./components/CreateThread";
import { Thread } from "./components/Thread";

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
          {/* TODO: 各スレッドの投稿一覧へのルーティング */}
          <Route
            path="/threads/:thread_id"
            element={
              <>
                <Header />
                <Thread />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
