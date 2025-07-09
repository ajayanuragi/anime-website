export default function AnimeDescription({ description, color }) {
  if (!description) return null;

  return (
    <section
      aria-label="Anime description"
      className="prose prose-invert max-w-none text-gray-300 mb-10"
    >
      <h2
        className="text-2xl font-bold mb-2"
        style={{ color: color || "#fff" }}
      >
        Description
      </h2>
      <div className="text-justify"
        dangerouslySetInnerHTML={{
          __html: description.replace(/<br\s*\/?>/g, "<br />"),
        }}
      />
    </section>
  );
}
