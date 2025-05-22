import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Home } from "./pages/Home";
import { Suspense, lazy } from "react";

const AnimeInfo = lazy(() => import("./pages/AnimeInfo"));
const Browse = lazy(() => import("./pages/Browse"));
const AnimeEpisodes = lazy(() => import("./pages/AnimeEpisodes"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="text-white bg-slate-800 min-h-screen flex justify-center items-center">
          <div className="text-lg">Loading...</div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/browse"} element={<Browse />} />
        <Route path={"/anime/:id"} element={<AnimeInfo />} />
        <Route path={"/anime/episodes"} element={<AnimeEpisodes />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
