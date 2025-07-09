const AnimeTabButtons = ({ animeData, color, activeTab, setActiveTab }) => {
  const tabs = [
    {
      key: "recommendations",
      label: "Recommendations",
      condition: animeData?.recommendations,
    },
    {
      key: "relations",
      label: "Relations",
      condition: animeData?.relations,
    },
    {
      key: "episodes",
      label: "Episodes",
      condition: animeData?.episodes,
    },
  ];

  return (
    <div className="flex gap-1 my-5 md:gap-4">
      {tabs.map(
        (tab) =>
          tab.condition && (
            <button
              key={tab.key}
              className={`text-sm md:text-2xl px-1 md:px-4 py-2 transition-all duration-200 border-b-2 cursor-pointer ${
                activeTab === tab.key
                  ? "font-semibold"
                  : "border-transparent text-gray-50"
              }`}
              style={
                activeTab === tab.key
                  ? { borderColor: color, color: color }
                  : {}
              }
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.color = color;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.color = "";
                }
              }}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          )
      )}
    </div>
  );
};

export default AnimeTabButtons;
