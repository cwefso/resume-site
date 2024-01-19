import Image from "next/image";
import Link from "next/link";

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

      <div className="mt-32 flex flex-col justify-center align-center text-center w-full mt-[20vh]">
        <div className="w-full flex flex-row justify-center mb-2">
          <Image
            src={"/images/ghost.png"}
            width={100}
            height={100}
            alt="ghost"
          />
          <Image
            src={"/images/ghost.png"}
            width={100}
            height={100}
            alt="ghost"
            className="transform -scale-x-100"
          />
          <Image
            src={"/images/ghost.png"}
            width={100}
            height={100}
            alt="ghost"
          />
        </div>
        <p className="haunted">Oh no! This page is haunted!</p>
      </div>
    </main>
  );
}
