import { useEffect, useState } from "react";
import { SearchAnimeCard } from "../browse/SearchAnimeCard";
import api from "../../api/api";

export function RecentAnime() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [hasNext, setHasNext] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/meta/anilist/recent-episodes`);
        setHasNext(response.data.hasNextPage);
        setPage(response.data.currentPage);
        setResults(response.data.results);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularAnime();
  }, [page, perPage]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        {error.message}
      </div>
    );
  }
  return (
    <div className="text-white text-3xl">
      <h1 className="text-3xl text-center font-bold mb-10">Recent Anime 🔄</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((result) => (
          <SearchAnimeCard anime={result} key={result.id} />
        ))}
      </div>
      <div className="flex gap-8 my-10 items-center justify-center">
        {page > 1 && (
          <button
            className="cursor-pointer px-4 py-2 border rounded-lg text-sm"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
        )}
        {hasNext && (
          <button
            className="cursor-pointer px-4 py-2 border rounded-lg text-sm"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
