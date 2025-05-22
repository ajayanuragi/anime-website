import React from "react";
import { useNavigate } from "react-router";
const RecommendationCard = ({ anime, color }) => {
  const navigate = useNavigate();
  const { id, image, title, episodes, rating, status, type } = anime;

  return (
    <div
      className="shadow-slate-800 rounded-xl text-white py-2 cursor-pointer hover:scale-[1.01] hover:text-slate-200
    "
      onClick={() => {
        navigate(`/anime/${id}`);
      }}
    >
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-96 rounded-xl shadow-slate-800 shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        className="mt-4 text-lg overflow-hidden truncate"
        style={{ color: color }}
      >
        {title?.english || title?.romaji}
      </div>
      <div
        className="flex justify-between items-center text-xs mt-2"
        style={{ color: color }}
      >
        <div className="flex items-center gap-2 hover:text-slate-300">
          <div
            className="p-2 rounded-lg w-fit px-4 text-slate-950"
            style={{ background: `${color || "white"}` }}
          >
            CC: {episodes || "Preview"}
          </div>
          <div className="p-2 border rounded-lg w-fit text-xs">
            Rating: {rating}
          </div>
          <div className="p-2 border rounded-lg w-fit text-xs">
            {status || "not available"}
          </div>
        </div>

        <div>{type || "Unknown"}</div>
      </div>
    </div>
  );
};

export default React.memo(RecommendationCard);
