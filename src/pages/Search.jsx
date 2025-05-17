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
    <div className="flex items-center justify-between w-1/3">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="search anime..."
        className="shadow-2xl p-2 px-4 flex-grow rounded-xl outline-none bg-slate-800"
      />
    </div>
  );
};
