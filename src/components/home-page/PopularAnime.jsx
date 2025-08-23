import { useEffect, useState } from "react";
import api from "../../api/api";
import { SearchAnimeCard } from "../browse/SearchAnimeCard";

const CACHE_KEY = "popularAnimeCache";
const CACHE_EXPIRATION = 60 * 60 * 1000;

export function PopularAnime() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [hasNext, setHasNext] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadCache = () => {
      const cacheStr = localStorage.getItem(CACHE_KEY);
      return cacheStr ? JSON.parse(cacheStr) : {};
    };

    const updateCache = (page, data) => {
      const existingCache = loadCache();
      existingCache[page] = { ...data, timestamp: Date.now() };
      localStorage.setItem(CACHE_KEY, JSON.stringify(existingCache));
    };

    const isCacheValid = (timestamp) => {
      return Date.now() - timestamp < CACHE_EXPIRATION;
    };

    const fetchPopularAnime = async () => {
      setLoading(true);
      const cache = loadCache();
      const cachedPage = cache[page];
      if (cachedPage && isCacheValid(cachedPage.timestamp)) {
        setResults(cachedPage.results);
        setHasNext(cachedPage.hasNextPage);
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(
          `/meta/anilist/popular?page=${page}&perPage=${perPage}`
        );
        const data = {
          results: response.data.results,
          hasNextPage: response.data.hasNextPage,
        };
        updateCache(page, data);
        setResults(data.results);
        setHasNext(data.hasNextPage);
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
    <div className="text-white text-2xl">
      <h1 className="text-3xl text-center font-bold mb-10">Popular Shows 🌟</h1>
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
