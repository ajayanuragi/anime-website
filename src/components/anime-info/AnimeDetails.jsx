import AnimeDescription from "./AnimeDescription";
import AnimeGenresTags from "./AnimeGenresTags";
import { AnimeTrailer } from "./AnimeTrailer";

export function AnimeDetails({ anime, animeData }) {
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
  console.log(anime);
  console.log(animeData);
  return (
    <div className="bg-slate-800 text-white min-h-screen">
      {cover && (
        <div
          className="h-64 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6 py-10">
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
      </div>
    </div>
  );
}
