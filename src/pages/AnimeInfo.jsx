import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import api from "../api/api";
import { AnimeDetails } from "../components/anime-info/AnimeDetails";

export default function AnimeInfo() {
  const location = useLocation();
  const { id } = useParams();
  const { anime } = location.state || {};
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await api.get(`/meta/anilist/info/${id}`);
        setAnimeData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEpisodes();
  }, [id]);

  if (!anime && !animeData) {
    return (
      <div className="text-white bg-slate-800 min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <AnimeDetails anime={anime || animeData} animeData={animeData} />;
}
