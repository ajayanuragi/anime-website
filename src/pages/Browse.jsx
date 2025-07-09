import { useLocation } from "react-router";
import { SearchAnimeCard } from "../components/browse/SearchAnimeCard";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Browse() {
  const location = useLocation();
  const initialResults = location.state?.results;
  const initialSearch = location.state?.search;
  const [search, setSearch] = useState(initialSearch || "");
  const [results, setResults] = useState(initialResults || null);
  const [page, setPage] = useState(1);
  console.log(results);
  const fetchResults = async (query, pageNum) => {
    try {
      const response = await api.get(
        `/meta/anilist/advanced-search?query=${query}&page=${pageNum}&perPage=12`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Failed to fetch results:", error);
    }
  };
  const handleFilter = () => {
    setPage(1);
    fetchResults(search, 1);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchResults(search, newPage);
  };
  useEffect(() => {
    if (!initialResults && search) {
      fetchResults(search, 1);
    }
  }, [initialResults, search]);
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
    <div className="min-h-screen bg-slate-800 p-8 pt-30">
      <div className="flex justify-between items-center text-slate-200">
        <h1 className="text-3xl font-bold text-slate-200 mb-8">Browse Anime</h1>
        {results.totalResults && (
          <div className="text-slate-500">
            Results:{" "}
            <span className="text-slate-100">{results.totalResults}</span>
          </div>
        )}
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 text-slate-50 rounded-xl"
        />
        <button
          onClick={handleFilter}
          disabled={search === initialSearch}
          className="px-4 py-2 rounded-md border text-slate-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Filter
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {results.results.map((result) => (
          <SearchAnimeCard anime={result} key={result.id} />
        ))}
      </div>
      <div className="flex items-center justify-center text-slate-200 gap-6 mt-6">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-slate-700 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!results?.hasNextPage}
          className="px-4 py-2 bg-slate-700 cursor-pointer rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
