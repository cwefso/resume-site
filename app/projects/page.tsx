"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

// Define interface for project data
interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  imageAlt: string;
  imagePosition?: "first" | "last";
}

// Project component to reduce repetition
const ProjectSection: FC<ProjectData> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  imageAlt,
  imagePosition = "last",
}) => (
  <section className="w-full">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Image Container */}
        <div
          className={`
            relative h-64 overflow-hidden rounded-lg 
            sm:h-80 lg:h-full
            ${imagePosition === "last" ? "lg:order-last" : "lg:order-first"}
          `}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="absolute inset-0 h-full w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Project Description */}
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>

          <p className="mt-4 text-white">{description}</p>

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 inline-block rounded bg-indigo-600 
              px-12 py-3 text-sm font-medium text-white 
              transition hover:bg-indigo-700 
              focus:outline-none focus:ring focus:ring-yellow-400
            "
          >
            Check it out!
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Projects() {
  // Project data centralized for easy management
  const projects: ProjectData[] = [
    {
      title: "ArtisTry",
      description:
        "Discover classic artists and create your own gallery. This app uses an Express backend and was bootstrapped with Create React App.",
      imageUrl: "/images/artist-try.png",
      projectUrl: "https://artisty.wefsocodes.com/",
      imageAlt: "ArtisTry Project Screenshot",
      imagePosition: "last",
    },
    {
      title: "Catchy",
      description:
        "This app allows users to add songs from their environment to their spotify playlist with one click.",
      imageUrl: "/images/catchy.png",
      projectUrl: "https://catchy.wefsocodes.com/",
      imageAlt: "Campaign Website Screenshot",
      imagePosition: "last",
    },
    {
      title: "Discord/Spotify Bot",
      description:
        "I built a bot that would use Pipedream to scrape songs shared in our channel and upload it to a Spotify playlist.",
      imageUrl: "/images/discord.png",
      projectUrl:
        "https://www.linkedin.com/pulse/i-built-discordspotify-playlist-bot-pipedream-charles-wefso-cmage/",
      imageAlt: "Discord Spotify Bot Project",
      imagePosition: "first",
    },
  ];

  return (
    <main
      className="
        flex flex-col items-center 
        p-12 w-screen min-h-screen 
        overflow-y-auto text-white
      "
    >
      {/* Home Navigation */}
      <nav className="w-full flex justify-start mb-8">
        <Link
          href="/"
          className="
            start-btn py-1 pl-2 pr-1 
            w-[50vw] lg:w-[20vw]
          "
          aria-label="Return to Home Page"
        >
          HOME
        </Link>
      </nav>

      {/* Projects Sections */}
      {projects.map((project, index) => (
        <ProjectSection key={index} {...project} />
      ))}
    </main>
  );
}
