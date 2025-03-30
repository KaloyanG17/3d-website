import {
   mobile,
   backend,
   creator,
   web,
   javascript,
   typescript,
   html,
   css,
   reactjs,
   redux,
   tailwind,
   nodejs,
   mongodb,
   git,
   vue,
   nuxt,
   java,
   c,
   python,
   php,
   haskell,
   prolog,
   docker,
   threejs,
   refactory,
   star,
   gaynes,
   havering,
   exeter,
   twitter,
   spotify,
    website,
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
 
 const services = [
     {
     title: "Computer Science Student",
     icon: mobile,
   },
   {
     title: "Web Developer",
     icon: web,
   },
   {
     title: "Frontend Developer",
     icon: creator,
   },

   {
    title: "Backend Developer",
    icon: backend,
  }
 ];
 
 const technologies = [
   {
     name: "JavaScript",
     icon: javascript,
   },
   {
     name: "TypeScript",
     icon: typescript,
   },
   {
     name: "React JS",
     icon: reactjs,
   },
   {
     name: "Tailwind CSS",
     icon: tailwind,
   },
   {
     name: "Three JS",
     icon: threejs,
   },
   {
     name: "Vue",
     icon: vue,
   },
    {
      name: "Nuxt",
      icon: nuxt,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Haskell",
      icon: haskell,
    },
    {
      name: "Prolog",
      icon: prolog,
    },
 ];
 
 const experiences = [
   {
      title: "SATs",
      company_name: "Star Primary School",
      icon: star,
      iconBg: "#E6DEDD" ,
      date: "September 2010 - July 2014",
      points: [
        "6 in Maths",
        "5 in Science",
        "4 in English",
      ]
   },
   {
    title: "GCSEs" ,
    company_name: "Gaynes Secondary School",
    icon: gaynes,
    iconBg: "#E6DEDD",
    date: "September 2014 - July 2019",
    points: [
      "9 in Maths",
      "77 in Combined Science",
      "7 in Design and Techonolgy",
      "6 in English Literature",
      "6 in English Language",
      "6 in Business",
      "5 in Geography",
      "5 in Religious Education",
      "A in Further Maths",
    ]
  },
  {
    title: "A Levels" ,
    company_name: "Havering Sixth Form College" ,
    icon: havering,
    iconBg: "#E6DEDD",
    date: "September 2019 - July 2021",
    points: [
      "A in Maths",
      "B in Computer Science",
      "C in Further Maths",
    ]
  },
  {
    title: "Bachelor's Degree in Computer Science" ,
    company_name: "University of Exeter" ,
    icon: exeter,
    iconBg: "#E6DEDD",
    date: "September 2021 - July 2024",
    points: [
      "First Year passed with a Upper Second-Class Honour",
      "Second Year passed with a Upper Second-Class Honour",
      "Third Year passed with a Upper Second-Class Honour"
    ]
  },
  {
    title: "Summer Internship",
    company_name: "Refactory BG",
    icon: refactory,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Learned all about Vue2.js and Vue3.js",
      "Learned further about Nuxt2.js and Nuxt3.js",
      "Migrating projects from Vue2 to Vue3 and Nuxt2 to Nuxt3",
      "Migrating old projects from Angular7 and Electron3 to newer versions",
      "Learned about Virtual Machines",
    ],
   },
   {
    title: "Web Developer",
    company_name: "Secure.bg",
    icon: web,
    iconBg: "#E6DEDD",
    date: "January 2025 - Present",
    points: [
      "Working as a full-stack web developer using JavaScript and PHP",
      "Developing and maintaining web applications with jQuery",
      "Working with modern web technologies and frameworks",
    ],
   }
 ];
 
 const testimonials = [
   {
     testimonial:
       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
     name: "Sara Lee",
     designation: "CFO",
     company: "Acme Co",
     image: "https://randomuser.me/api/portraits/women/4.jpg",
   },
   {
     testimonial:
       "I've never met a web developer who truly cares about their clients' success like Rick does.",
     name: "Chris Brown",
     designation: "COO",
     company: "DEF Corp",
     image: "https://randomuser.me/api/portraits/men/5.jpg",
   },
   {
     testimonial:
       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
     name: "Lisa Wang",
     designation: "CTO",
     company: "456 Enterprises",
     image: "https://randomuser.me/api/portraits/women/6.jpg",
   },
 ];
 
 const projects = [
  {
    name: "3D Simulated Motorsport",
    description:
      "A 3D motorsport simulation project that showcases realistic racing physics and environments. Built using Three.js for 3D graphics and JavaScript for game logic. Features include realistic car physics, track rendering, and interactive controls. Additionally an AI agent is implemented to simulate a racing opponent with a ANN used to create the strategy dynamically throught the race.",
    tags: [
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "pink-text-gradient",
      },
    ],
    image: threejs,
    source_code_link: "https://github.com/KaloyanG17/Simulated-Motorsport",
    demo_link: "https://simulated-motorsport.vercel.app",
  },
  {
    name: "Portfolio Website",
    description:
      "My portfolio website which you are on rignt now. It is build using ReactJS, TailwindCSS and ThreeJS. It is deplayed on Vercel.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/KaloyanG17/3d-website",
    demo_link: "https://kaloyan.vercel.app",
  },
   {
    name: "Twitter Clone",
    description:
      "A Twitter clone with many of the same features as Twitter. It includes authentication, posting, commenting and more. It is build using Vue3, Nuxt3, TailwindCSS and Prisma. It is deplayed on Vercel and uses a MongoDB database and Cloudinary for image storage.",
    tags: [
      {
        name: "Vue3",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Nuxt3",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/KaloyanG17/twitter-clone",
    demo_link: "https://twitter-kg.vercel.app",
  },
  {
    name: "Spotify Clone",
    description:
      "A Spotify clone with some of the main features of spotify. It comes with an album which you can listen to with full control over the music. It is built using Vue3, Pinia and TailwindCSS. It is deplayed on Vercel.",
    tags: [
      {
        name: "Vue3",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Pinia",
        color: "green-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/KaloyanG17/spotify-clone",
    demo_link: "https://spotify-clone-kg.vercel.app",
  },
  
 ];
 
 export { services, technologies, experiences, testimonials, projects };