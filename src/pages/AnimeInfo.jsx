import { useParams } from "react-router";

export function AnimeInfo() {
  const { animeId } = useParams();
  return (
    <div>
      <div>{animeId}</div>
    </div>
  );
}
