import { useState } from "react";
import { Navbar } from "../components/homepage/Navbar";
import { AnimeResults } from "../components/homepage/AnimeResults";

export function Home() {
  const [results, setResults] = useState("");
  return (
    <div className="m-0 p-0">
      <div className="min-h-screen bg-amber-400">
        <div className="pt-4">
           <Navbar setResults={setResults} />

        </div>
       
        <AnimeResults results={results} />
       <div className="absolute bottom-0 right-2">hellohdkjk</div>
      </div>
    </div>
  );
}
