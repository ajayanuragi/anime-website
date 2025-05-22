import React from "react";

const TitleSection = ({title, color}) => {
  return (
    <div>
      <h1
        className="text-6xl font-bold mb-2"
        style={{ color: color || "#fff" }}
      >
        {title?.romaji || "Untitled"}
      </h1>
      {title?.english !== title?.romaji && (
        <p className="text-gray-400 mb-4 text-sm italic">{title.english}</p>
      )}
    </div>
  );
};

export default TitleSection;
