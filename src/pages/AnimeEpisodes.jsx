import { useLocation } from "react-router";
import AnimeEpisodeCard from "../components/anime-info/AnimeEpisodeCard";
import { useState } from "react";

const AnimeEpisodes = () => {
  const location = useLocation();
  const { animeData } = location.state;
  const { episodes } = animeData;
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const startIndex = (page - 1) * perPage;
  const currentEpisodes = episodes.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(episodes.length / perPage);
  console.log(animeData);
  return (
    <div className="bg-slate-800 text-white px-8">
      <div>
        <h1 className="text-7xl py-5 text-center">{animeData.title?.romaji}</h1>
        
        <div className="pb-10 text-center text-3xl">
          <div className="text-4xl font-bold my-5">Episodes</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentEpisodes.map((episode) => (
              <AnimeEpisodeCard episode={episode} key={episode.id} />
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-4 text-base">
            {page > 1 && (
              <button
                onClick={() => setPage((prev) => prev - 1)}
                className="px-6 py-2 border rounded hover:bg-gray-800"
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-6 py-2 border rounded hover:bg-gray-800"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeEpisodes;
