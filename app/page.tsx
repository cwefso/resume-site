"use client";

import Link from "next/link";
import Modal from "./components/Modal";
import GhostContainer from "./components/Ghost-Container";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

// Configure font with swap strategy to mitigate FOIT
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [isClientSide, setIsClientSide] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showGhost, setShowGhost] = useState(false);
  const [ghostFound, setGhostFound] = useState(false);
  const [ghosts, setGhosts] = useState(0);
  const [XAxis, setXAxis] = useState(0);
  const [YAxis, setYAxis] = useState(0);

  // Ensure components only render client-side
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowGhost(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  // Prevent hydration mismatch
  if (!isClientSide) {
    return null;
  }

  return (
    <main
      className={`
        ${inter.className} 
        flex flex-col items-center p-24 h-screen w-screen
      `}
    >
      <div className="grid" aria-hidden="true"></div>

      <h1
        className="text-auto"
        style={{
          opacity: isClientSide ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <span>Charles Wefso</span>
        <span>Charles Wefso</span>
      </h1>
      <h2>Code Person</h2>

      <div
        className="
          relative flex flex-col w-full 
          lg:flex-row lg:justify-center 
          gap-8 place-items-center 
          z-[1] h-20 md:mt-[30vh] md:mt-20
        "
      >
        {/* Use Next.js Link for client-side navigation and prefetching */}
        <span>
          <Link
            className="start-btn py-1 pl-2 pr-1 w-[50vw] lg:w-[20vw]"
            href="./resume/CharlesWefsoResume.pdf"
            download="Charles Wefso Resume"
            target="_blank"
            prefetch={false}
          >
            RESUME
          </Link>
        </span>
        <span>
          <button
            className="start-btn py-1 pl-2 pr-1 w-[50vw] lg:w-[20vw]"
            onClick={handleOpenModal}
            aria-label="Open About Modal"
          >
            ABOUT
          </button>
        </span>
        <span>
          <Link
            className="start-btn py-1 pl-2 pr-1 w-[50vw] lg:w-[20vw]"
            href="/projects"
            prefetch={true}
          >
            PROJECTS
          </Link>
        </span>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      {showGhost && !isOpen && (
        <div className="flex flex-col justify-center align-center text-center w-full">
          <div className="w-full flex flex-row justify-center">
            <div
              className="absolute inset-0 overflow-visible"
              style={{
                left: `${XAxis}px`,
                top: `${YAxis}px`,
              }}
            >
              <GhostContainer
                setGhostFound={setGhostFound}
                setGhosts={setGhosts}
                ghosts={ghosts}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
