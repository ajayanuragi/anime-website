import { useState } from "react";
import api from "../api/api";

export const Search = ({setResults}) => {
  const [search, setSearch] = useState("");
  async function handleSearch() {
    if (!search.trim()) return;
    const res = await api.get("/meta/anilist/" + search);
    setResults(res.data);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex items-center justify-between gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="search anime..."
        className="border p-2 flex-grow"
      />
      <button onClick={handleSearch} className="bg-black p-2 text-white">
        Search
      </button>
    </div>
  );
};
