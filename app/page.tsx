import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Text.module.scss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24  ">
      <div className="grid"></div>
      <div className="lines"></div>
      <h1>
        <span>Charles Wefso</span>
        <span>Charles Wefso</span>
      </h1>
      <h2>Code Person</h2>

      <div className="relative flex flex-row gap-8 place-items-center z-[1] mt-[20vh]">
        <span className="start-btn">RESUME</span>
        <span className="start-btn">
          {" "}
          <Link href="/about">ABOUT</Link>
        </span>
      </div>

      <div className="mt-32 grid text-center w-full mt-[20vh]">
        <p>Oh no! This page is haunted!</p>
      </div>
    </main>
  );
}
