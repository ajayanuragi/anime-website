import React from "react";
import { useNavigate } from "react-router";

const RelationCard = ({ relation, color }) => {
  const navigate = useNavigate();
  const { id, image, rating, relationType, status, title, type } = relation;
  return (
    <div
      className="shadow-slate-800 rounded-xl text-white py-2 hover:scale-[1.01] hover:text-slate-200 cursor-pointer
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
        <div className="flex items-center gap-1 hover:text-slate-300">
          <div
            className="rounded-lg w-fit px-2 py-1 md:px-4 md:py-2 text-slate-950"
            style={{ background: `${color || "white"}` }}
          >
            {relationType || "Preview"}
          </div>
          <div className="p-1 border rounded-lg w-fit text-xs md:px-4 md:py-2">
            Rating: {rating}
          </div>
          <div className="p-1 border rounded-lg w-fit text-xs md:px-4 md:py-2">
            {status || "not available"}
          </div>
        </div>

        <div>{type || "Unknown"}</div>
      </div>
    </div>
  );
};

export default RelationCard;
