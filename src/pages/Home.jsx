import { Navbar } from "../components/home-page/Navbar";
import {
  SearchResults,
} from "../components/home-page/SearchResults";
import { useState } from "react";

export function Home() {
  const [results, setResults] = useState(null);

  return (
    <div className="m-0 p-0">
      <div className="min-h-screen bg-center bg-cover bg-amber-100">
        <div className="pt-4">
          <Navbar setResults={setResults} />
        </div>
        <SearchResults results={results} />
        <div className="absolute bottom-0 right-2 text-white">next</div>
      </div>
      <div className="min-h-screen bg-red-300"></div>
    </div>
  );
}
