import { AnimeCard } from "./AnimeCard";

export function AnimeResults({ results }) {
  console.log(results?.results);
  if (!results) {
    return <div>No Anime Founds</div>;
  }
  return (
    <div>
      {results?.results.map((result) => (
        <AnimeCard anime={result} key={result.id}/>
      ))}
    </div>
  );
}
