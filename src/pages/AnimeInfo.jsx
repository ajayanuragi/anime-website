import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router";
import api from "../api/api";
import { AnimeDetails } from "../components/anime-info/AnimeDetails";
import { SearchResults } from "../components/home-page/SearchResults";

const CACHE_KEY = "animeInfoCache";
const CACHE_EXPIRATION = 60 * 60 * 1000;
export default function AnimeInfo() {
  const location = useLocation();
  const { id } = useParams();
  const { anime: initialAnime } = location.state || {};
  const [anime, setAnime] = useState(initialAnime || null);
  const [animeData, setAnimeData] = useState(null);
  const { search, results } = useOutletContext();

  useEffect(() => {
    setAnime(initialAnime || null);
    setAnimeData(null);

    const loadCache = () => {
      const cacheStr = localStorage.getItem(CACHE_KEY);
      return cacheStr ? JSON.parse(cacheStr) : {};
    };
    const updateCache = (id, data) => {
      const existingCache = loadCache();
      existingCache[id] = { ...data, timestamp: Date.now() };
      localStorage.setItem(CACHE_KEY, JSON.stringify(existingCache));
    };

    const isCacheValid = (timestamp) => {
      return Date.now() - timestamp < CACHE_EXPIRATION;
    };

    const fetchEpisodes = async () => {
      const cache = loadCache();
      const cachedEntry = cache[id];
      if (cachedEntry && isCacheValid(cachedEntry.timestamp)) {
        const fetched = cachedEntry.data;
        setAnimeData(fetched);
        setAnime((prev) => ({ ...prev, ...fetched }));
        return;
      }
      try {
        const response = await api.get(`/meta/anilist/info/${id}`);
        const fetched = response.data;

        updateCache(id, { data: fetched });

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

  return (
    <div className="min-h-screen">
      {results && <SearchResults results={results} search={search} />}
      <AnimeDetails anime={anime} animeData={animeData} />
    </div>
  );
}
