import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import api from "../api/api";
import { AnimeDetails } from "../components/anime-info/AnimeDetails";

export default function AnimeInfo() {
  const location = useLocation();
  const { id } = useParams();
  const { anime: initialAnime } = location.state || {};
  const [anime, setAnime] = useState(initialAnime || null);
  const [animeData, setAnimeData] = useState(null);
  useEffect(() => {
    setAnime(initialAnime || null);
    setAnimeData(null);
    const fetchEpisodes = async () => {
      try {
        const response = await api.get(`/meta/anilist/info/${id}`);
        const fetched = response.data;
        setAnimeData(fetched);
        setAnime((prev) => ({ ...prev, ...fetched }));
      } catch (err) {
        console.error(err);
      }
    };

    fetchEpisodes();
  }, [id, initialAnime]);

  if (!anime) {
    return (
      <div className="text-white bg-slate-800 min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <AnimeDetails anime={anime} animeData={animeData} />;
}
