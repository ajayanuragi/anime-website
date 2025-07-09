export default function AnimeGenresTags({ genres, color }) {
  if (!genres?.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-400">Genres</h2>
      <div className="flex flex-wrap gap-3">
        {genres?.map((genre) => (
          <span
            key={genre}
            className="text-sm text-white px-4 py-2 rounded-xl border"
            style={{ borderColor: color || "gray", color: color }}
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}
