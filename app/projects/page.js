"use client";
import Link from "next/link";

export default function Projects() {
  return (
    <>
    <main className="flex flex-col items-center p-12 w-screen h-screen overflow-y-scroll">
        <span>
          <Link
            className="start-btn py-1 pl-2 pr-1 w-[50vw] lg:w-[20vw] "
            href="/"
          >
            HOME
          </Link>
        </span>

        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="/images/congress.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">Campaign Website</h1>

        <p className="mt-4 text-white">
        This is a fictional Congressional Campaign site! This project showcases a blend of modern design and user-friendly functionality, ideal for a political campaign.
        </p>

        <a
          href="https://congress-site.vercel.app/"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Check it out!
        </a>
      </div>
    </div>
  </div>
</section>






<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
        <img
          alt=""
          src="/images/discord.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">Discord/Spotify Bot</h1>

        <p className="mt-4 text-white">
        I built a bot that would use Pipedream to scrape songs shared in our channel and upload it to a Spotify playlist
        </p>

        <a
          href="https://congress-site.vercel.app/"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Check it out!
        </a>
      </div>
    </div>
  </div>
</section>



<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="/images/congress.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">ArtisTry</h1>

        <p className="mt-4 text-white">
       Discover classic artists and create your own gallery. This app uses an Express backend and was bootstrapped with Create React App.
        </p>

        <a
          href="https://artis-try.vercel.app/"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Check it out!
        </a>
      </div>
    </div>
  </div>
</section>
        
        



        


    </main>
    </>
  );
}
