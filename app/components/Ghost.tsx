"use client";
// Ghost.js
import React, { useState } from "react";
import Image from "next/image";

const Ghost = ({ setGhostFound, setGhosts, ghosts }: any) => {
  const [hovered, setHovered] = useState(false);

  const handleGhostFound = () => {
    setHovered(true);
    setGhostFound(true);
    setGhosts(ghosts + 1);
  };

  return (
    <Image
      src={"/images/ghost.png"}
      width={100}
      height={100}
      style={{ opacity: hovered ? 0 : 1, transition: "opacity 0.5s" }}
      onMouseEnter={handleGhostFound}
      onMouseLeave={() => setHovered(false)}
      alt="ghost"
      className="transform"
    />
  );
};

export default Ghost;
