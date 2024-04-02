"use client";

import Link from "next/link";
import Modal from "./components/Modal";
import { useState } from "react";
import GhostContainer from "./components/Ghost-Container";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [ghostFound, setGhostFound] = useState(false);
  const [ghosts, setGhosts] = useState(0);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <main className="flex flex-col items-center p-24 h-screen">
      <div className="grid"></div>
      <div className="lines"></div>
      <h1 className="text-auto">
        <span>Charles Wefso</span>
        <span>Charles Wefso</span>
      </h1>
      <h2>Code Person</h2>

      <div className="relative flex flex-row gap-8 place-items-center z-[1] mt-20">
        <span className="start-btn pl-2 pr-1 py-1">
          <Link
            href="./resume/Charles Wefso Resume 2024.pdf"
            download="Charles Wefso Resume"
            target="_blank"
          >
            RESUME
          </Link>
        </span>
        <span>
          <button
            className="start-btn py-1 pl-2 pr-1"
            onClick={handleOpenModal}
          >
            ABOUT
          </button>
        </span>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* <div className="flex flex-col justify-center align-center text-center w-full ">
        <div className="w-full flex flex-row justify-center mb-2">
          {!isOpen && (
            <GhostContainer
              setGhostFound={setGhostFound}
              setGhosts={setGhosts}
              ghosts={ghosts}
            />
          )}
        </div>
        {ghostFound && (
          <>
            <p className="haunted mt-12">Oh no! This page is haunted!</p>
            <p className="haunted mt-12">Ghosts found: {ghosts}</p>
          </>
        )}
      </div> */}
    </main>
  );
}
