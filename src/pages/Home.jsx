import { Navbar } from "../components/home-page/Navbar";
import { SearchResults } from "../components/home-page/SearchResults";
import { useState } from "react";
import { TrendingAnime } from "../components/home-page/TrendingAnime";
import { PopularAnime } from "../components/home-page/PopularAnime";
import { RecentAnime } from "../components/home-page/RecentAnime";

export function Home() {
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState("popular");

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
      <div className="min-h-screen bg-slate-900 text-white px-8 py-10">
        <div className="flex gap-8 jusify-center mb-8 px-4">
          <button
            className="cursor-pointer border px-4 py-2 rounded-lg"
            onClick={() => {
              setActiveTab("trending");
            }}
          >
            Trending
          </button>
          <button
            className="cursor-pointer border px-4 py-2 rounded-lg"
            onClick={() => {
              setActiveTab("popular");
            }}
          >
            Popular
          </button>
          <button className="cursor-pointer border px-4 py-2 rounded-lg" onClick={()=>{
            setActiveTab('recent')
          }}>Recent</button>
        </div>
        {activeTab === "trending" && <TrendingAnime />}
        {activeTab === "popular" && <PopularAnime />}
        {activeTab === 'recent' && <RecentAnime />}

      </div>
    </div>
  );
}
