import type { FileEntry } from "./types";

export const projectsFiles: FileEntry[] = [
  {
    id: "this-website",
    fileName: "this-website.txt",
    content: `MiranDinc — This Website

A retro-styled personal portfolio that mimics a desktop operating
system interface, complete with a login screen, draggable/resizable
windows, a start menu, and a desktop full of icons and folders —
including the one you're reading this from right now.

Tech stack:
- React 19 + TypeScript
- Vite
- Tailwind CSS
- nes.css ("Press Start 2P" 8-bit aesthetic)

Deployed behind Traefik ingress with TLS.

Source: this repo (MiranDinc)`,
  },
  {
    id: "project-1",
    fileName: "project-1.txt",
    content: `PROJECT 1

Name: (project name)
Description: (what it does)
Tech stack: (languages/frameworks used)
Link: (repo or live link)

(Fill this in!)`,
  },
  {
    id: "project-2",
    fileName: "project-2.txt",
    content: `PROJECT 2

Name: (project name)
Description: (what it does)
Tech stack: (languages/frameworks used)
Link: (repo or live link)

(Fill this in!)`,
  },
  {
    id: "project-3",
    fileName: "project-3.txt",
    content: `PROJECT 3

Name: (project name)
Description: (what it does)
Tech stack: (languages/frameworks used)
Link: (repo or live link)

(Fill this in!)`,
  },
];
