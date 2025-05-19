import AnimeEpisodeCard from "./AnimeEpisodeCard";
import AnimeEpisode from "./AnimeEpisodeCard";
import AnimeEpisodes from "./AnimeEpisodeCard";

export function AnimeDetails({ anime }) {
  if (!anime) return null;
  const { image, title, description, status, cover, color, episodes } = anime;
  return (
    <div className="px-8 space-y-6 bg-slate-950 text-white">
      {/* Title Banner */}
      <div
        className="text-6xl mb-8 rounded-xl w-full text-white flex items-center justify-center font-bold bg-cover bg-center h-48"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cover})`,
        }}
      >
        {title?.romaji}
      </div>

      {/* Image + Description */}
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={image}
          alt={title?.romaji || "Anime"}
          className="w-full max-w-sm rounded-xl shadow-md"
        />
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="prose max-w-none"
          />
        </div>
      </div>

      {/* Status */}
      <div
        className="text-sm text-white w-fit px-4 py-2 rounded"
        style={{ backgroundColor: color || "black" }}
      >
        Status: {status}
      </div>
      <div className="my-10 text-center text-3xl">
        <div className="text-4xl font-bold my-10">Episodes</div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {episodes.map((episode) => (
            <AnimeEpisodeCard episode={episode} key={episode.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
