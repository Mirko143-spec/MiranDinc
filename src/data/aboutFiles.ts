import type { FileEntry } from "./types";

export const aboutFiles: FileEntry[] = [
  {
    id: "bio",
    fileName: "bio.txt",
    content: `Your name here

Write a short introduction about yourself: who you are, what you do,
and what you're interested in.

(Fill this in!)`,
  },
  {
    id: "resume",
    fileName: "resume.txt",
    content: `RESUME

Experience:
- (Add your work experience here)

Education:
- (Add your education here)

(Fill this in!)`,
  },
  {
    id: "skills",
    fileName: "skills.txt",
    content: `SKILLS

- (Add a skill)
- (Add a skill)
- (Add a skill)

(Fill this in!)`,
  },
  {
    id: "contact",
    fileName: "contact.txt",
    content: `CONTACT

Email: (your email)
GitHub: (your GitHub)
LinkedIn: (your LinkedIn)

(Fill this in!)`,
  },
];
