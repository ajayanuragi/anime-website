import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Home } from "./pages/Home";
import { AnimeInfo } from "./pages/AnimeInfo";
import { Browse } from "./pages/Browse";
import AnimeEpisodes from "./pages/AnimeEpisodes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/browse"} element={<Browse />} />
        <Route path={"/anime/:id"} element={<AnimeInfo />} />
        <Route path={"/anime/episodes"} element={<AnimeEpisodes />} />
      </Routes>
    </div>
  );
}

export default App;
