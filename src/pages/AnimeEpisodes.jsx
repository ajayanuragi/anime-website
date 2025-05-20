import React from "react";
import { useLocation } from "react-router";
import AnimeEpisodeCard from "../components/anime-info/AnimeEpisodeCard";

const AnimeEpisodes = () => {
  const location = useLocation();

  const { animeData } = location.state;
  console.log(animeData)
  const {episodes} = animeData
  return (
    <div className="bg-slate-800 text-white px-8">
      <div>
        {animeData.title?.romaji}
        <div className="pb-10 text-center text-3xl">
          <div className="text-4xl font-bold my-10">Episodes</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {episodes.map((episode) => (
              <AnimeEpisodeCard episode={episode} key={episode.id} />
            ))}
          </div>
          {/* <div className="mt-10 flex justify-center gap-4 text-base">
            {page > 0 && (
              <button
                onClick={() => setPage((prev) => prev - 1)}
                className="px-6 py-2 border rounded hover:bg-gray-800"
              >
                Previous
              </button>
            )}
            {hasNextPage && (
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-6 py-2 border rounded hover:bg-gray-800"
              >
                Next
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AnimeEpisodes;
