"use client";

import Link from "next/link";
import Ghost from "./components/Ghost";
import Modal from "./components/Modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <main className="flex flex-col items-center p-24">
      <div className="grid"></div>
      <div className="lines"></div>
      <h1>
        <span>Charles Wefso</span>
        <span>Charles Wefso</span>
      </h1>
      <h2>Code Person</h2>

      <div className="relative flex flex-row gap-8 place-items-center z-[1] mt-[20vh]">
        <span className="start-btn pl-2 pr-1 py-1">
          <Link
            href="./resume/Charles Resume.pdf"
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

      <div className="mt-32 flex flex-col justify-center align-center text-center w-full mt-[20vh]">
        <div className="w-full flex flex-row justify-center mb-2">
          <div className="ghost x">
            <div className="ghost y">
              <Ghost />
            </div>
          </div>
          <Ghost />
          <Ghost />
        </div>
        <p className="haunted">Oh no! This page is haunted!</p>
      </div>
    </main>
  );
}
