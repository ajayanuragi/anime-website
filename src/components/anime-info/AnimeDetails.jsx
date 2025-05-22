import { Suspense, lazy, useState } from "react";
import AnimeDescription from "./AnimeDescription";
import { AnimeTrailer } from "./AnimeTrailer";
import HeaderSeaction from "./HeaderSeaction";
import TitleSection from "./TitleSection";
import InfoSection from "./InfoSection";
import AnimeTabButtons from "./anime-tab/AnimeTabButtons";
const Recommendations = lazy(() => import("./anime-tab/Recommendations"));
const Relations = lazy(() => import("./anime-tab/Relations"));
const Episodes = lazy(() => import("./anime-tab/Episodes"));

export function AnimeDetails({ anime, animeData }) {
  const [activeTab, setActiveTab] = useState("recommendations");
  const {
    image,
    title,
    description,
    status,
    cover,
    color,
    trailer,
    type,
    duration,
    rating,
    totalEpisodes,
    episodes,
    genres,
  } = anime;

  return (
    <div className="bg-slate-800 text-white min-h-screen">
      {cover && <HeaderSeaction cover={cover} />}

      <div className="max-w-6xl mx-auto px-2 py-10 md:px-5 ">
        {title && <TitleSection title={title} color={color} />}
        <InfoSection
          image={image}
          title={title}
          status={status}
          type={type}
          duration={duration}
          totalEpisodes={totalEpisodes}
          rating={rating}
          animeData={animeData}
          genres={genres}
          color={color}
          episodes={episodes}
          currentEpisode={animeData?.currentEpisode}
        />
        {description && (
          <AnimeDescription description={description} color={color} />
        )}
        {trailer?.site && <AnimeTrailer trailer={trailer} color={color} />}
        {animeData && (
          <div>
            <AnimeTabButtons
              animeData={animeData}
              color={color}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="p-4 rounded-md shadow-xs">
              <Suspense fallback={<div>Loading...</div>}>
                {activeTab === "recommendations" && (
                  <Recommendations
                    recommendations={animeData?.recommendations}
                    color={color}
                  />
                )}
                {activeTab === "relations" && (
                  <Relations relations={animeData?.relations} color={color} />
                )}
                {activeTab === "episodes" && (
                  <Episodes episodes={animeData?.episodes} color={color} />
                )}
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
