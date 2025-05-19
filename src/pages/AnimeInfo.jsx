import api from "../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AnimeDetails } from "../components/anime-info/AnimeDetails";

export function AnimeInfo() {
  const { animeId } = useParams();
  const [animeInfo, setAnimeInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const cacheKey = `anime-info-${animeId}`;
    const fetchAnimeInfo = async () => {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setAnimeInfo(JSON.parse(cached));
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/meta/anilist/info/${animeId}`);
        if (isMounted) {
          setAnimeInfo(response.data);
          localStorage.setItem(cacheKey, JSON.stringify(response.data));
        }
      } catch (e) {
        if (isMounted) {
          console.error("Error fetching anime info", e);

          setError("Failed to fetch anime info");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAnimeInfo();
  }, [animeId]);

  console.log(animeInfo);
  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return <AnimeDetails anime={animeInfo} />;
}
