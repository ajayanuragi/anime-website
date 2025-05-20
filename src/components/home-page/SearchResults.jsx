import { useEffect, useRef, useState } from "react";
import { AnimeCard } from "./AnimeCard";
import { useNavigate } from "react-router";

export function SearchResults({ results }) {
  const resultsRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (results?.results?.length > 0) {
      setVisible(true);
    }
  }, [results]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (!results || !visible) {
    return null;
  }
  return (
    <div className="flex items-center justify-center pt-5 mt-10 z-50">
      <div
        className="shadow-sm rounded-sm w-1/3 ml-20 bg-slate-950"
        ref={resultsRef}
      >
        {results?.results.slice(0, 5).map((result) => (
          <AnimeCard anime={result} key={result.id} />
        ))}
        <div
          className="p-5 text-center cursor-pointer bg-slate-800 text-slate-200 hover:text-slate-300 hover:bg-slate-700"
          onClick={() => {
            navigate("/browse", {
              state: {
                results,
              },
            });
          }}
        >
          view all{" "}
        </div>
      </div>
    </div>
  );
}
