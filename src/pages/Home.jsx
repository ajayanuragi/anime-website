import { Navbar } from "../components/home-page/Navbar";
import { SearchResults } from "../components/home-page/SearchResults";
import { useState } from "react";

export function Home() {
  const [results, setResults] = useState(null);

  return (
    <div className="m-0 p-0">
      <div
        className="min-h-screen bg-center bg-cover "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)) ,url(/images/one-piece.jpeg)`,
        }}
      >
        <div className="pt-4">
          <Navbar setResults={setResults} />
        </div>
        <SearchResults results={results} />
      </div>
      <div className="min-h-screen bg-red-300"></div>
    </div>
  );
}
