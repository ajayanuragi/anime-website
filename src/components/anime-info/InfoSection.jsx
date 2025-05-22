import React from "react";
import AnimeGenresTags from "./AnimeGenresTags";

const InfoSection = ({
  image,
  title,
  status,
  type,
  duration,
  totalEpisodes,
  rating,
  animeData,
  genres,
  color,
  episodes,
  currentEpisode,
}) => {
  return (
    <section className="flex flex-col md:flex-row gap-6 mb-10">
      <img
        src={image}
        alt={title?.romaji}
        className="w-full md:w-64 rounded-xl shadow-lg object-cover"
      />
      <div className="flex-1 space-y-2 text-gray-200 text-md">
        {status && (
          <p>
            <span className="font-semibold text-gray-400">Status:</span>{" "}
            {status || "-"}
          </p>
        )}
        {type && (
          <p>
            <span className="font-semibold text-gray-400">Type:</span>{" "}
            {type || "-"}
          </p>
        )}

        {duration && (
          <p>
            <span className="font-semibold text-gray-400">Duration:</span>{" "}
            {duration}
          </p>
        )}
        {currentEpisode && (
          <p>
            <span className="font-semibold text-gray-400">
              Current Episode:
            </span>{" "}
            {currentEpisode || "-"}
          </p>
        )}
        {(totalEpisodes || episodes) && (
          <p>
            <span className="font-semibold text-gray-400">Episodes:</span>{" "}
            {totalEpisodes || episodes || "-"}
          </p>
        )}
        {rating && (
          <p>
            <span className="font-semibold text-gray-400">Rating:</span>{" "}
            {rating || "-"}
          </p>
        )}

        {animeData && (
          <>
            <p>
              <span className="font-semibold text-gray-400">Sub or Dub:</span>{" "}
              {animeData.subOrDub || "-"}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Studios:</span>{" "}
              {animeData.studios || "-"}
            </p>
          </>
        )}
        {genres && <AnimeGenresTags genres={genres} color={color} />}
      </div>
    </section>
  );
};

export default InfoSection;
