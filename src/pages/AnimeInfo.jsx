import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import api from "../api/api";
import { AnimeDetails } from "../components/anime-info/AnimeDetails";

export function AnimeInfo() {
  const location = useLocation();
  const { id } = useParams();
  const { anime } = location.state || {};
  const [animeData, setAnimeData] = useState(null);
  const navigate = useNavigate();
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

  if (!anime) {
    navigate("/home");
    return null;
  }
 

  return (
    <AnimeDetails anime={anime} animeData={animeData}/>
  );
}
