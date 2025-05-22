import React from "react";
import RelationCard from "./RelationCard";

const Relations = ({ relations, color }) => {
  const filtered = relations.filter((x) => x.type !== "MANGA");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filtered.length === 0 ? (
        <div className="min-h-screen flex justify-center items-center">
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
