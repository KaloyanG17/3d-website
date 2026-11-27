import {
   mobile,
   backend,
   creator,
   web,
   javascript,
   typescript,
   reactjs,
   tailwind,
   vue,
   nuxt,
   java,
   c,
   python,
   php,
   haskell,
   prolog,
   threejs,
   refactory,
   havering,
   exeter,
   twitter,
   spotify,
   shiplog,
   simulatedMotorsport,
   hexbound,
   kokolina,
   pdfStudio,
   grandPrix,
   ipadDashboard,
   labCover,
 } from "../assets";

 // Kaloyan's Lab lives on this same site: kaloyan.vercel.app/lab is
 // rewritten to the kaloyans-lab project (see vercel.json).
 export const LAB_URL = "/lab";
 
 export const navLinks = [
   {
     id: "about",
     title: "About",
   },
   {
     id: "work",
     title: "Work",
   },
   {
     id: "projects",
     title: "Projects",
   },
   {
     id: "contact",
     title: "Contact",
   },
   {
     id: "lab",
     title: "Lab",
     href: "/lab",
   },
 ];
 
 // The projects section shows these GitHub repos, in this order, with their
 // live details from GitHub (see src/hooks/useGithubProjects.js). The first
 // one is shown as the large featured card. To change what's on the site,
 // edit this list: add a repo name, remove one, reorder.
 export const GITHUB_USER = "KaloyanG17";
 export const PORTFOLIO_REPOS = [
   "hexbound",
   "kokolina",
   "pdf-studio",
   "shiplog",
   "iphonePorfolio",
   "ipad-dashboard",
   "Simulated-Motorsport",
 ];

 // Older work, shown as a compact list under the main projects.
 export const earlierProjects = [
   { name: "Twitter Clone", stack: "Vue 3 · Nuxt 3 · Prisma", repo: "twitter-clone", demo: "https://twitter-clone-kaloyang17.vercel.app", image: twitter },
   { name: "Spotify Clone", stack: "Vue 3 · Pinia · Tailwind", repo: "spotify-clone", demo: "https://spotify-clone-kaloyang17.vercel.app", image: spotify },
   { name: "This portfolio", stack: "React · Three.js · Tailwind", repo: "3d-website", demo: null, image: null },
 ];

 const services = [
   {
     title: "Full-Stack Developer",
     icon: web,
   },
   {
     title: "Frontend: React, Vue, Next.js",
     icon: creator,
   },
   {
     title: "Backend: PHP, Node.js, SQL",
     icon: backend,
   },
   {
     title: "3D on the Web: Three.js",
     icon: mobile,
   },
 ];

 // Each icon is its own 3D canvas. Browsers allow about 16 at once, and the
 // hero PC, globe and stars use 3 of them: more than 13 icons here makes the
 // browser drop the hero and globe (they render white).
 const technologies = [
   { name: "JavaScript", icon: javascript },
   { name: "TypeScript", icon: typescript },
   { name: "React JS", icon: reactjs },
   { name: "Tailwind CSS", icon: tailwind },
   { name: "Three JS", icon: threejs },
   { name: "Vue", icon: vue },
   { name: "Nuxt", icon: nuxt },
   { name: "PHP", icon: php },
   { name: "Java", icon: java },
   { name: "C", icon: c },
   { name: "Python", icon: python },
   { name: "Haskell", icon: haskell },
   { name: "Prolog", icon: prolog },
 ];

 // Newest first.
 const experiences = [
   {
     title: "Web Developer",
     company_name: "Secure.bg",
     icon: web,
     iconBg: "#E6DEDD",
     date: "January 2025 - Present",
     points: [
       "Full-stack web development with JavaScript and PHP",
       "Building and maintaining web applications with jQuery, AJAX and MySQL",
       "Working with REST APIs, WebSockets and legacy system maintenance",
     ],
   },
   {
     title: "BSc Computer Science",
     company_name: "University of Exeter",
     icon: exeter,
     iconBg: "#E6DEDD",
     date: "September 2021 - July 2024",
     points: [
       "Every year completed with Upper Second-Class (2:1) results",
       "Dissertation: an AI-driven 3D motorsport race simulation (Three.js, neural networks)",
       "Modules across software engineering, AI, databases and functional and logic programming",
     ],
   },
   {
     title: "Summer Internship",
     company_name: "Refactory BG",
     icon: refactory,
     iconBg: "#E6DEDD",
     date: "May 2023 - August 2023",
     points: [
       "Migrated projects from Vue 2 to Vue 3 and Nuxt 2 to Nuxt 3",
       "Upgraded older Angular 7 and Electron 3 projects to newer versions",
       "Worked with Vue, Nuxt and virtual machines in a production team",
     ],
   },
   {
     title: "A Levels",
     company_name: "Havering Sixth Form College",
     icon: havering,
     iconBg: "#E6DEDD",
     date: "September 2019 - July 2021",
     points: ["A in Maths", "B in Computer Science", "C in Further Maths"],
   },
 ];

 // (Kaloyan's Lab has its own section, src/components/Lab.jsx.)

 // Curated details for repos shown from GitHub: a better name, description,
 // tags or a cover image. Repos without an entry use their GitHub details.
 export const projectOverrides = {
   hexbound: {
     name: "Hexbound",
     kind: "Game",
     description:
       "An auto-battler with an original cast of 30 characters: buy units, place them on a hex board and watch them fight. The whole game runs on one deterministic TypeScript core, tested with Vitest, so it can move to a PvP server next.",
     tags: ["TypeScript", "Three.js", "Next.js", "Vitest"],
     image: hexbound,
     demo_link: "https://hexbound-six.vercel.app",
   },
   kokolina: {
     name: "Kokolina",
     kind: "E-commerce",
     description:
       "A bilingual (Bulgarian / English) denim shop I designed and built end to end: Stripe checkout with signed, idempotent webhooks, per-size stock, refunds, order emails and an admin dashboard.",
     tags: ["Next.js", "Supabase", "Stripe"],
     image: kokolina,
   },
   "pdf-studio": {
     name: "PDF Studio",
     kind: "Tool",
     description:
       "Edit and translate invoice PDFs between Bulgarian and English without breaking the layout: retype lines in the original font, keep tables aligned, redact for real and OCR scans.",
     tags: ["React", "NestJS", "OCR"],
     image: pdfStudio,
   },
   shiplog: {
     name: "Shiplog",
     kind: "Dev tool",
     description:
       "A dev board that keeps itself in sync with GitHub: issues become kanban cards, pull requests move them, and an AI journal writes up each day. Projects get a public roadmap and changelog.",
     tags: ["Next.js", "TypeScript", "PostgreSQL"],
     image: shiplog,
   },
   iphonePorfolio: {
     name: "KG Grand Prix",
     kind: "3D",
     description:
       "A portfolio you play: a 3D phone modelled entirely in code that you can spin, unlock and use, with a racing game inside that drives one lap of my career.",
     tags: ["Three.js", "Next.js", "TypeScript"],
     image: grandPrix,
     demo_link: "https://iphoneporfolio.vercel.app",
   },
   "ipad-dashboard": {
     name: "iPad Dashboard",
     kind: "Smart home",
     description:
       "A smart-home wall panel for a 2013 iPad stuck on iOS 12: Govee lights that pulse to Spotify, weather and uptime, all in plain ES5 with Vercel Functions and Supabase.",
     tags: ["JavaScript", "Vercel", "Supabase"],
     image: ipadDashboard,
   },
   "Simulated-Motorsport": {
     name: "Simulated Motorsport",
     kind: "Dissertation",
     description:
       "My BSc dissertation: a 3D race in the browser where 20 AI cars steer themselves with YUKA and a Brain.js neural network decides tyres and pit stops.",
     tags: ["Three.js", "JavaScript", "Neural Networks"],
     image: simulatedMotorsport,
   },
   "kaloyans-lab": {
     name: "Kaloyan's Lab",
     kind: "Playground",
     description:
       "My playground for small, polished games and interactive studies, in a Swiss ink style of its own. First up: an honest 3D shell game.",
     tags: ["Next.js", "React Three Fiber", "TypeScript"],
     image: labCover,
     demo_link: LAB_URL,
   },
 };

 // Shown while GitHub loads, or if it can't be reached.
 const TAG_COLORS = ["blue-text-gradient", "green-text-gradient", "pink-text-gradient"];
 const DEMOS = {
   kokolina: "https://kokolina.vercel.app",
   "pdf-studio": "https://pdf-studio-liart-two.vercel.app",
   shiplog: "https://shiplog-silk.vercel.app",
   "ipad-dashboard": "https://kaloyan-ipad.vercel.app/?demo",
   "Simulated-Motorsport": "https://simulated-motorsport.vercel.app",
 };
 const projects = PORTFOLIO_REPOS.map((repo) => {
   const { tags, demo_link, ...rest } = projectOverrides[repo];
   return {
     ...rest,
     tags: tags.map((name, i) => ({ name, color: TAG_COLORS[i % TAG_COLORS.length] })),
     source_code_link: `https://github.com/${GITHUB_USER}/${repo}`,
     demo_link: demo_link ?? DEMOS[repo] ?? null,
   };
 });

 export { services, technologies, experiences, projects };
