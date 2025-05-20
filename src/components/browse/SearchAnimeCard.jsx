import { useNavigate } from "react-router";

export function SearchAnimeCard({ anime }) {
  const { image, title, color, id } = anime;
  const navigate = useNavigate();
  return (
    <div
      className="shadow-slate-800 rounded-xl text-white cursor-pointer hover:scale-[1.01] hover:text-slate-200
    "
      onClick={() => {
        navigate(`/anime/${id}`);
      }}
    >
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-96 rounded-xl shadow-slate-800 shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="mt-4 text-lg overflow-hidden truncate">
        {title?.english || title?.romaji}
      </div>
      <div className="flex justify-between items-center text-xs mt-2">
        <div className="flex items-center gap-2 hover:text-slate-300">
           <div
          className="p-2 rounded-lg w-fit px-4 text-slate-950"
          style={{ background: `${color || "white"}` }}
        >
          CC: {anime.totalEpisodes || "Preview"}
        </div>
        <div className="p-2 border rounded-lg w-fit text-xs">Rating: {anime.rating}</div>
        <div className="p-2 border rounded-lg w-fit text-xs">{anime.releaseDate || "not available"}</div>

        </div>
       
        <div>{anime.type}</div>
      </div>
    </div>
  );
}
