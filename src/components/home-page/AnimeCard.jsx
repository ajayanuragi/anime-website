import { useNavigate } from "react-router";

export function AnimeCard({ anime, setVisible }) {
  const navigate = useNavigate();
  const imageUrl = anime?.image;

  return (
    <div
      className="shadow-2xs gap-2 w-full p-2 rounded-sm cursor-pointer bg-slate-800 text-white hover:text-slate-300 hover:bg-slate-700 flex"
      onClick={() => {
        setVisible?.(false);
        navigate(`/anime/${anime?.id}`, {
          state: {
            anime: anime,
          },
        });
      }}
    >
      <div className="flex items-center w-full">
        <div
          className="h-16 w-20 bg-cover bg-center rounded mr-2 flex-shrink-0"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className="flex flex-col max-w-full overflow-hidden">
          <div className="truncate text-ellipsis overflow-hidden whitespace-nowrap font-semibold max-w-full">
            {anime?.title?.english || anime?.title?.romaji}
          </div>
          <div className="flex gap-2 text-sm text-slate-300">
            <div>{anime?.totalEpisodes}</div>
            <div>{anime?.releaseDate || "Not available"} </div>
            <div>{anime?.type}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
