import React from "react";
import RelationCard from "./RelationCard";

const Relations = ({ relations, color }) => {
  if (!relations || relations.length === 0) {
    return <p className="text-white"> No related content found</p>;
  }

  const filtered = relations.filter(
    (x) => x.type !== "MANGA" && x.type !== "NOVEL"
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filtered.length === 0 ? (
        <div className="text-white text-center">
          No related content found
        </div>
      ) : (
        filtered.map((relation) => (
          <RelationCard relation={relation} key={relation.id} color={color} />
        ))
      )}
    </div>
  );
};

export default Relations;
