import { useState } from "react";
import { Navbar } from "../components/homepage/Navbar";
import { AnimeResults } from "../components/homepage/AnimeResults";


export function Home() {
    const [ results, setResults] = useState('')
  return (
    <div>
      <Navbar setResults={setResults}/>
      <AnimeResults results={results} />
    </div>
  );
}
