"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

// Strong typing for project data
interface ProjectData {
  id: string; // Adding unique ID for better key management
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  imageAlt: string;
  imagePosition?: "first" | "last";
}

// Extracted as a separate component for better reusability
const ProjectSection: FC<ProjectData> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  imageAlt,
  imagePosition = "last",
}) => (
  <section
    className="w-full"
    aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, "-")}`}
  >
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
            priority={imagePosition === "first"} // Only prioritize first visible image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={imagePosition === "first" ? "eager" : "lazy"} // Optimize loading strategy
          />
        </div>

        {/* Project Description */}
        <div className="lg:py-24">
          <h2
            id={`project-${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-3xl font-bold sm:text-4xl py-8"
          >
            {title}
          </h2>

          <p className="mt-4 text-white">{description}</p>

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 inline-block rounded bg-indigo-600 
              px-12 py-3 text-sm font-medium text-white 
              transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400
            "
            aria-label={`View ${title} project`}
          >
            Check it out!
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Projects data separated into a constant for better maintainability
const PROJECTS_DATA: ProjectData[] = [
  {
    id: "artistry",
    title: "ArtisTry",
    description:
      "Discover classic artists and create your own gallery. This app uses an Express backend and was bootstrapped with Create React App.",
    imageUrl: "/images/artist-try.png",
    projectUrl: "https://artistry.wefsocodes.com/",
    imageAlt:
      "ArtisTry Project Screenshot - A web app for exploring classic artists and creating personal galleries",
    imagePosition: "last",
  },
  {
    id: "catchy",
    title: "Catchy",
    description:
      "This app allows users to add songs from their environment to their Spotify playlist with one click.",
    imageUrl: "/images/catchy.png",
    projectUrl: "https://catchy.wefsocodes.com/",
    imageAlt:
      "Catchy App Screenshot - A Spotify integration that lets users quickly add songs to playlists",
    imagePosition: "first",
  },
  {
    id: "discord-bot",
    title: "Discord/Spotify Bot",
    description:
      "I built a bot that would use Pipedream to scrape songs shared in our channel and upload it to a Spotify playlist.",
    imageUrl: "/images/discord.png",
    projectUrl:
      "https://www.linkedin.com/pulse/i-built-discordspotify-playlist-bot-pipedream-charles-wefso-cmage/",
    imageAlt:
      "Discord Spotify Bot Project - A bot that automatically adds shared songs to Spotify playlists",
    imagePosition: "last",
  },
];

export default function Projects() {
  return (
    <main
      className="
        flex flex-col items-center 
        p-6 md:p-12 text-white
      "
    >
      {/* Home Navigation */}
      <nav
        className="w-full flex justify-center mb-8"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="
            start-btn py-2 px-4
            w-auto md:w-[10vw]
            text-center hover:opacity-90 transition-opacity
          "
          aria-label="Return to Home Page"
        >
          HOME
        </Link>
      </nav>

      {/* Projects Sections */}
      <div>
        {PROJECTS_DATA.map((project) => (
          <ProjectSection key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
