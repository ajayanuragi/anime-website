const AnimeEpisodeCard = ({ episode }) => {
  const { number, image, title } = episode;

  return (
    <div className="rounded-xl h-fit hover:text-slate-200 hover:scale-[1.01] cursor-pointer">
      <div className="text-lg text-left my-2">Episode: {number}</div>
      <div
        className="bg-cover shadow-lg rounded-xl bg-center bg-origin-border bg-no-repeat w-full h-96"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="text-lg my-2 max-w-full overflow-hidden truncate text-left">
        {title}
      </div>
    </div>
  );
};

export default AnimeEpisodeCard;
