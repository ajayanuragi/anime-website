import React, { useState } from "react";
import AnimeEpisodeCard from "../../anime-info/AnimeEpisodeCard";

const Episodes = ({ episodes, color }) => {
  const [search, setSearch] = useState("");

  if (!episodes || episodes.length === 0) {
    return <p className="text-white"> No episodes found</p>;
  }
  console.log(episodes);
  const filteredEpisodes = episodes.filter((episode) =>
    episode?.number?.toString().includes(search)
  );

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="border px-4 py-2 my-2 mb-10 text-slate-50 rounded-md"
          style={{ color: color }}
          placeholder="Episode Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredEpisodes.length === 0 ? (
        <p className="text-slate-400 text-center mt-10 text-xl">
          No episodes match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredEpisodes.map((episode) => (
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
