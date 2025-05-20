import { useCallback, useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router";

export const Search = ({ setResults }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = useCallback(
    async (query) => {
      if (!query.trim()) return;
      try {
        const queryTerm = encodeURIComponent(query);
        const res = await api.get(`/meta/anilist/${queryTerm}?perPage=16`);
        setResults(res.data);
      } catch (err) {
        console.error("Search error:", err);
      }
    },
    [setResults]
  );

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.replace(/\s/g, "").length >= 3) {
        handleSearch(search);
      }
    }, 300);
    return () => {
      clearTimeout(delayDebounce);
    };
  }, [search, handleSearch]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!search.trim()) return;

      navigate("/browse", {
        state: {
          search,
        },
      });
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
        className="shadow-2xl p-2 px-4 flex-grow rounded-xl outline-none bg-slate-700"
      />
    </div>
  );
};
