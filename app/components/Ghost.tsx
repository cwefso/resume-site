"use client";
// Ghost.js
import React, { useState } from "react";
import Image from "next/image";

const Ghost = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Image
      src={"/images/ghost.png"}
      width={100}
      height={100}
      style={{ opacity: hovered ? 0 : 1, transition: "opacity 0.5s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="ghost"
      className="transform"
    />
  );
};

export default Ghost;
