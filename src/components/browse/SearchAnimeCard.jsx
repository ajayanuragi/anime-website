export function SearchAnimeCard({ anime }) {
  const { image, title, color } = anime;
  return (
    <div
      className="shadow-slate-800 rounded-xl text-white
    "
    >
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-96 rounded-xl shadow-slate-800 shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="mt-4 text-lg overflow-hidden truncate">
        {title.romaji}
      </div>
      <div className="flex justify-between items-center text-xs mt-2">
        <div
          className="p-1 rounded-lg w-fit px-4 text-slate-950"
          style={{ background: `${color || "white"}` }}
        >
          {anime.totalEpisodes || "Preview"}
        </div>
        <div>{anime.type}</div>
      </div>
    </div>
  );
}
