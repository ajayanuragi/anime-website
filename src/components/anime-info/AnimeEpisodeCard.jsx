import React from "react";

const AnimeEpisodeCard = ({ episode }) => {
  console.log(episode);
  const { number, image, title} = episode

  return (
    <div className="rounded-xl p-4 h-fit w-80 bg-slate-900 hover:bg-slate-800">
      <div className="text-lg text-left my-2">Episode: {number}</div>
      <div className="bg-cover shadow-lg rounded-xl bg-center bg-origin-border bg-no-repeat w-full h-64" style={{backgroundImage: `url(${image})`}}></div>

      <div className="text-lg my-2 max-w-full overflow-hidden truncate text-left">{title}</div>
    </div>
  );
};

export default AnimeEpisodeCard;
