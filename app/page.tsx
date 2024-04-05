"use client";

import Link from "next/link";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import GhostContainer from "./components/Ghost-Container";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGhost, setShowGhost] = useState(false);
  const [ghostFound, setGhostFound] = useState(false);
  const [ghosts, setGhosts] = useState(0);
  const [XAxis, setXAxis] = useState(0);
  const [YAxis, setYAxis] = useState(0);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowGhost(true);
      console.log("Timeout finished!");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  // useEffect(() => {

  // },[ghostFound])

  return (
    <main className="flex flex-col items-center p-24 h-screen">
      <div className="grid"></div>

      <h1 className="text-auto">
        <span>Charles Wefso</span>
        <span>Charles Wefso</span>
      </h1>
      <h2>Code Person</h2>

      <div className="relative flex flex-col w-full lg:flex-row lg:justify-center gap-8 place-items-center z-[1] h-full mt-[30vh] md:mt-20">
        <span>
          <Link
            className="start-btn py-1 pl-2 pr-1 w-[50vw] lg:w-[20vw] "
            href="./resume/Charles Wefso Resume 2024.pdf"
            download="Charles Wefso Resume"
            target="_blank"
          >
            RESUME
          </Link>
        </span>
        <span>
          <button
            className="start-btn py-1 pl-2 pr-1 w-[50vw] lg:w-[20vw] "
            onClick={handleOpenModal}
          >
            ABOUT
          </button>
        </span>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      {showGhost && (
        <div className="flex flex-col justify-center align-center text-center w-full ">
          <div className="w-full flex flex-row justify-center ">
            {!isOpen && (
              <div
                className={`absolute inset-0 overflow-visible left-[${XAxis}] top-[${YAxis}]`}
              >
                <GhostContainer
                  setGhostFound={setGhostFound}
                  setGhosts={setGhosts}
                  ghosts={ghosts}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* 
          {ghostFound && (
            <>
              <p className="haunted mt-12">Oh no! This page is haunted!</p>
              <p className="haunted mt-12">Ghosts found: {ghosts}</p>
            </>
          )}
          </div>
        )} */}
    </main>
  );
}
