import {
   mobile,
   backend,
   creator,
   web,
   javascript,
   typescript,
   reactjs,
   tailwind,
   nodejs,
   git,
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
    website,
    shiplog,
    simulatedMotorsport,
 } from "../assets";
 
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
     id: "contact",
     title: "Contact",
   },
 ];
 
 // Projects are loaded from GitHub (see src/hooks/useGithubProjects.js):
 // tag a public repo with this topic to show it on the site.
 export const GITHUB_USER = "KaloyanG17";
 export const PORTFOLIO_TOPIC = "portfolio";

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

 const technologies = [
   { name: "JavaScript", icon: javascript },
   { name: "TypeScript", icon: typescript },
   { name: "React JS", icon: reactjs },
   { name: "Node.js", icon: nodejs },
   { name: "Tailwind CSS", icon: tailwind },
   { name: "Three JS", icon: threejs },
   { name: "Vue", icon: vue },
   { name: "Nuxt", icon: nuxt },
   { name: "PHP", icon: php },
   { name: "Git", icon: git },
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

 // Curated details for repos shown from GitHub: a better name, description,
 // tags or a screenshot. Repos without an entry use their GitHub details.
 export const projectOverrides = {
   shiplog: {
     name: "Shiplog",
     description:
       "A dev board that keeps itself in sync with GitHub: issues become kanban cards, pull requests move them, and moving a card updates the issue. An AI journal writes up each day, and projects get a public roadmap and changelog.",
     tags: ["Next.js", "TypeScript", "PostgreSQL"],
     image: shiplog,
   },
   "Simulated-Motorsport": {
     name: "3D Simulated Motorsport",
     description:
       "My dissertation: a 3D race in the browser where AI controls both driving and strategy. YUKA steering drives the cars, and a Brain.js neural network decides tyres and pit stops.",
     tags: ["Three.js", "JavaScript", "Neural Networks"],
     image: simulatedMotorsport,
   },
   "3d-website": {
     name: "Portfolio Website",
     description:
       "This site: an interactive 3D portfolio built with React, Three.js and Tailwind CSS, with projects loaded live from GitHub. Deployed on Vercel.",
     tags: ["React", "Three.js", "TailwindCSS"],
     image: website,
   },
   "twitter-clone": {
     name: "Twitter Clone",
     description:
       "A Twitter clone with authentication, posting and commenting, built with Vue 3, Nuxt 3, Tailwind CSS and Prisma, with MongoDB and Cloudinary for storage.",
     tags: ["Vue3", "Nuxt3", "Prisma"],
     image: twitter,
   },
   "spotify-clone": {
     name: "Spotify Clone",
     description:
       "A Spotify-style music player with an album you can play with full playback controls, built with Vue 3, Pinia and Tailwind CSS.",
     tags: ["Vue3", "Pinia", "TailwindCSS"],
     image: spotify,
   },
 };

 // Shown while GitHub loads, or if it can't be reached.
 const TAG_COLORS = ["blue-text-gradient", "green-text-gradient", "pink-text-gradient"];
 const fallback = (repo, links) => {
   const { tags, ...rest } = projectOverrides[repo];
   return {
     ...rest,
     tags: tags.map((name, i) => ({ name, color: TAG_COLORS[i % TAG_COLORS.length] })),
     source_code_link: `https://github.com/${GITHUB_USER}/${repo}`,
     demo_link: links,
   };
 };
 const projects = [
   fallback("shiplog", "https://shiplog-silk.vercel.app"),
   fallback("Simulated-Motorsport", "https://simulated-motorsport.vercel.app"),
   fallback("3d-website", "https://kaloyan.vercel.app"),
   fallback("twitter-clone", "https://twitter-clone-kaloyang17.vercel.app"),
   fallback("spotify-clone", "https://spotify-clone-kaloyang17.vercel.app"),
 ];

 export { services, technologies, experiences, projects };
