import { useState } from "react";
import AnimeDescription from "./AnimeDescription";
import AnimeGenresTags from "./AnimeGenresTags";
import { AnimeTrailer } from "./AnimeTrailer";
import AnimeTabButtons from "./anime-tab/AnimeTabButtons";
import Recommendations from "./anime-tab/Recommendations";
import Relations from "./anime-tab/Relations";
import Episodes from "./anime-tab/Episodes";

export function AnimeDetails({ anime, animeData }) {
  const [activeTab, setActiveTab] = useState("recommendations");
  const {
    image,
    title,
    description,
    status,
    cover,
    color,
    trailer,
    type,
    duration,
    rating,
    totalEpisodes,
    genres,
  } = anime;

  return (
    <div className="bg-slate-800 text-white min-h-screen">
      {cover && (
        <div
          className="h-64 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
        />
      )}

      <div className="max-w-6xl mx-auto px-2 py-10 md:px-5 ">
        <h1
          className="text-6xl font-bold mb-2"
          style={{ color: color || "#fff" }}
        >
          {title?.romaji || "Untitled"}
        </h1>
        <p
          className="text-gray-400 mb-4 text-sm italic"
          aria-label="English title"
        >
          {title?.english !== title?.romaji ? title?.english : ""}
        </p>
        <section
          className="flex flex-col md:flex-row gap-6 mb-10"
          aria-label="Anime main information and image"
        >
          <img
            src={image}
            alt={title?.romaji}
            className="w-full md:w-64 rounded-xl shadow-lg object-cover"
          />
          <div className="flex-1 space-y-2 text-gray-200 text-md">
            <p>
              <span className="font-semibold text-gray-400">Status:</span>{" "}
              {status || "-"}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Type:</span>{" "}
              {type || "-"}
            </p>
            {duration && (
              <p>
                <span className="font-semibold text-gray-400">Duration:</span>{" "}
                {duration || "-"}
              </p>
            )}

            <p>
              <span className="font-semibold text-gray-400">Episodes:</span>{" "}
              {totalEpisodes || "-"}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Rating:</span>{" "}
              {rating || "-"}
            </p>
            {animeData && (
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-400">
                    Sub or Dub:
                  </span>{" "}
                  {animeData.subOrDub || "-"}
                </p>

                <p>
                  <span className="font-semibold text-gray-400">Studios:</span>{" "}
                  {animeData.studios || "-"}
                </p>
              </div>
            )}

            <AnimeGenresTags genres={genres} color={color} />
          </div>
        </section>
        <AnimeDescription description={description} color={color} />
        {trailer?.site && <AnimeTrailer trailer={trailer} color={color} />}
        {animeData && (
          <div>
            <AnimeTabButtons
              animeData={animeData}
              color={color}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="p-4 rounded-md shadow-xs">
              {activeTab === "recommendations" && (
                <Recommendations
                  recommendations={animeData?.recommendations}
                  color={color}
                />
              )}
              {activeTab === "relations" && (
                <Relations relations={animeData?.relations} color={color} />
              )}
              {activeTab === "episodes" && (
                <Episodes episodes={animeData?.episodes} color={color} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
