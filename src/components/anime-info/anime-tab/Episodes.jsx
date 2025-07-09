import React, { useState } from "react";
import AnimeEpisodeCard from "../../anime-info/AnimeEpisodeCard";

const Episodes = ({ episodes, color }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (!episodes || episodes.length === 0) {
    return <p className="text-white"> No episodes found</p>;
  }
  console.log(episodes);
  const searchedEpisode = episodes.filter((episode) =>
    episode?.number?.toString().includes(search)
  );

  const totalPages = Math.ceil(searchedEpisode.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentEpisodes = searchedEpisode.slice(start, end);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setCurrentPage((next) => Math.min(next + 1, totalPages));
  };
  return (
    <div>
      <div className="flex flex-col md:items-center mb-2 md:justify-between md:gap-8 md:flex-row">
        <input
          type="text"
          className="border px-2 py-2 my-2 text-slate-50 rounded-md md:px-4 md:w-1/2"
          placeholder="Episode Number"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        <div className="flex gap-2 items-center justify-center">
          <button
            className="border px-2 py-1 m-1 rounded-md disabled:opacity-50 md:px-4 md:py-2 md:my-2"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="border px-2 py-1 m-1 rounded-md disabled:opacity-50 md:px-4 md:py-2 md:my-2"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      {currentEpisodes.length === 0 ? (
        <p className="text-slate-400 text-center mt-10 text-xl">
          No episodes match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentEpisodes.map((episode) => (
            <AnimeEpisodeCard
              episode={episode}
              key={episode.id}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Episodes;
