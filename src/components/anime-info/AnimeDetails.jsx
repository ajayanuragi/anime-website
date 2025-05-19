import AnimeEpisodeCard from "./AnimeEpisodeCard";

export function AnimeDetails({ anime }) {
  if (!anime) return null;
  const { image, title, description, status, cover, color, episodes, trailer } =
    anime;
  return (
    <div className="px-8 space-y-6 bg-slate-950 text-white">
      <div
        className="text-6xl mb-8 rounded-xl w-full text-white flex items-center justify-center font-bold bg-cover bg-center h-48"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cover})`,
        }}
      >
        {title?.romaji || title?.english}
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <img
          src={image}
          alt={title?.romaji || "Anime"}
          className="w-full max-w-sm rounded-xl shadow-md"
        />
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="prose max-w-none text-base md:text-xl"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="text-sm text-black w-fit px-4 py-2 rounded"
          style={{ backgroundColor: color || "white" }}
        >
          Status: {status}
        </div>
        <div className="border px-4 rounded w-fit py-2 text-sm">
          Rating: {anime.rating}
        </div>
        <div className="border px-4 rounded w-fit py-2 text-sm">
          Type: {anime.type}
        </div>
      </div>
      <div className="flex">
        <div>
          {trailer?.id && (
            <>
              <div className="text-3xl my-5">Trailer</div>
              <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer.id}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="pb-10 text-center text-3xl">
        <div className="text-4xl font-bold my-10">Episodes</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {episodes.slice(0, 12).map((episode) => (
            <AnimeEpisodeCard episode={episode} key={episode.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
