import { useLocation } from "react-router";

export function AnimeInfo() {
  const location = useLocation();
  const { anime } = location.state || {};
  const { image, title, description, status, cover, color, trailer } = anime;
  console.log(anime);

  return (
    <div className="px-8 py-10 bg-slate-800 text-white">
      <div
        className="text-6xl mb-8 rounded-xl text-center w-full text-white flex items-center justify-center font-bold bg-cover bg-center h-80"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cover})`,
        }}
      >
        {title?.english || title?.romaji}
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-4">
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

      <div>
        {trailer?.id && (
          <>
            <div className="text-3xl text-center my-5">Trailer</div>
            <div className="flex items-center justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg w-9/12 aspect-video"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
