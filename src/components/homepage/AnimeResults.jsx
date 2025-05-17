import { useEffect, useRef, useState } from "react";
import { AnimeCard } from "./AnimeCard";

export function AnimeResults({ results }) {
  const resultsRef = useRef(null)
  const [visible, setVisible] = useState(false)
   useEffect(() => {
    if (results?.results?.length > 0) {
      setVisible(true);
    }
  }, [results]);

  useEffect(()=>{
    function handleClickOutside(event){
      if(resultsRef.current && !resultsRef.current.contains(event.target)){
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return()=>{
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  if (!results || !visible) {
    return null;
  }
  return (
    <div className="flex items-center justify-center">
      <div className="shadow-sm rounded-sm w-1/3 ml-20 bg-slate-950" ref={resultsRef}>
        {results?.results.slice(0, 5).map((result) => (
          <AnimeCard anime={result} key={result.id} />
        ))}
        <div className="p-4 text-center cursor-pointer bg-slate-800 text-slate-300 hover:text-slate-400">view all </div>
      </div>
    </div>
  );
}
