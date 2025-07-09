import React from "react";

const HeaderSeaction = ({ cover }) => {
  if (!cover) return null;

  return (
    <div
      className="h-72 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${cover})` }}
    />
  );
};

export default HeaderSeaction;
