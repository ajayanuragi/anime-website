import { useLocation, useNavigate } from "react-router";

export function AnimeInfo() {
  const location = useLocation();
  const { anime } = location.state || {};
  const navigate = useNavigate();

  console.log(anime);
  if (!anime) {
    navigate("/home");
    return null;
  }
  const { image, title, description, status, cover, color, trailer } = anime;

  return (
    <div className="px-2 py-2 bg-slate-800 text-white w-full md:px-8 md:py-10">
      <div
        className="text-xl mb-2 rounded-xl w-full text-white flex items-center justify-center font-bold bg-cover bg-center h-80 md:text-6xl md:mb-8"
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
            className="prose max-w-none text-sm md:text-xl text-justify"
          />
        </div>
      </div>
      <div className="flex items-center justify-between flex-col gap-4 py-2  md:flex-row">
        <div className="flex items-center gap-0.5 md:gap-2">
          <div
            className="text-xs text-black px-4 py-2 rounded md:text-sm"
            style={{ backgroundColor: color || "white" }}
          >
            Status: {status}
          </div>
          <div className="border px-4 py-2 rounded w-fit text-xs md:text-sm">
            Rating: {anime.rating}
          </div>
          <div className="border text-xs rounded w-fit px-4 py-2 md:text-sm">
            Type: {anime.type}
          </div>
        </div>
        <button
          className="text-black rounded w-full px-4 py-4 text-xs md:text-sm md:px-4 md:py-4 md:w-1/4  cursor-pointer"
          style={{ background: `${color}` }}
        >
          Episodes
        </button>
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
                className="rounded-lg w-full aspect-video md:w-10/12"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
