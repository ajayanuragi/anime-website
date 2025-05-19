import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Home } from "./pages/Home";
import { AnimeInfo } from "./pages/AnimeInfo";
import { Browse } from "./pages/Browse";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/browse"} element={<Browse />} />
        <Route path={"/anime/:animeId"} element={<AnimeInfo />} />
      </Routes>
    </div>
  );
}

export default App;
