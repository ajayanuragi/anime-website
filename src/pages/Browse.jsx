import { useLocation } from "react-router";
import { SearchAnimeCard } from "../components/browse/SearchAnimeCard";

export function Browse() {
  const location = useLocation();
  const results = location.state?.results;
  const search = location.state?.search;

console.log(results)
console.log(search)
  if (!results || !results.results || results.results.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-800">
        <div className="text-slate-200 text-xl">
          No results found. Try a different search.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <h1 className="text-3xl font-bold text-slate-200 mb-8">Browse Anime</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {results.results.map((result) => (
          <SearchAnimeCard anime={result} key={result.id} />
        ))}
      </div>
    </div>
  );
}
