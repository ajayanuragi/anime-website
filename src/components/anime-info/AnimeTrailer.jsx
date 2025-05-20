export const AnimeTrailer = ({ trailer, color }) => {
  if (!trailer || trailer.site.toLowerCase() !== "youtube") return null;

  const trailerUrl = `https://www.youtube.com/embed/${trailer.id}`;

  return (
    <div className="mt-12">
      <h2
        className="text-2xl font-bold mb-4"
        style={{ color: color || "#fff" }}
      >
        Trailer
      </h2>
      <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden border border-slate-700 shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={trailerUrl}
          title="Anime Trailer"
          allowFullScreen
        />
      </div>
    </div>
  );
};
