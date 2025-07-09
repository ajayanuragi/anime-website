import { useEffect, useState } from "react";
import api from "../../api/api";
import { SearchAnimeCard } from "../browse/SearchAnimeCard";

export function TrendingAnime() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [hasNext, setHasNext] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTrendingAnime = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `/meta/anilist/trending?page=${page}&perPage=${perPage}`
        );
        const data = {
          results: response.data.results,
          hasNextPage: response.data.hasNextPage,
          page: response.data.currentPage,
        };
        setPage(data.page);
        setResults(data.results);
        setHasNext(data.hasNextPage);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingAnime();
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
      <h1 className="text-3xl text-center font-bold mb-10">
        Trending Shows 🔥
      </h1>
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
