import { useState } from "react";
import { Navbar } from "../components/home-page/Navbar";
import { AnimeResults } from "../components/home-page/AnimeResults";

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
