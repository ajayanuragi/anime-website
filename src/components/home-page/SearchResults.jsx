import { useEffect, useRef, useState } from "react";
import { AnimeCard } from "./AnimeCard";
import { useLocation, useNavigate } from "react-router";

export function SearchResults({search, results}) {

  const resultsRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (results?.results?.length > 0) {
      setVisible(true);
    }
  }, [results]);

  useEffect(() => {
    setVisible(false);
  }, [location]);

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
    <div
      ref={resultsRef}
      className="absolute top-full left-1/2 ml-5 transform -translate-x-1/2 mt-18 w-[28rem] bg-slate-950 rounded-sm shadow-sm z-50"
    >
      {results.results.slice(0, 5).map((result) => (
        <AnimeCard anime={result} key={result.id} setVisible={setVisible} />
      ))}
      <div
        className="p-5 text-center cursor-pointer bg-slate-800 text-slate-200 hover:text-slate-300 hover:bg-slate-700"
        onClick={() => {
          setVisible(false);
          navigate("/browse", {
            state: { results, search },
          });
        }}
      >
        view all
      </div>
    </div>
  );
}
