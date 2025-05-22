import React from "react";
import RecommendationCard from "./RecommendationCard";

const Recommendations = ({ recommendations, color }) => {
  if (!recommendations || recommendations.length === 0) {
  return <p className="text-white">No recommendations found.</p>;
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recommendations.map((recommendation) => (
        <RecommendationCard
          anime={recommendation}
          key={recommendation.id}
          color={color}
        />
      ))}
    </div>
  );
};

export default Recommendations;
