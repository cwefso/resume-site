"use client";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col items-center p-12 h-screen w-screen">
        <span>
          <Link
            className="start-btn py-1 pl-2 pr-1 w-[50vw] lg:w-[20vw] "
            href="/"
          >
            HOME
          </Link>
        </span>
        <div>
          Congressional Site

          ArtisTry

          Le Central

          HTML Ads
        </div>
    </main>
  );
}
