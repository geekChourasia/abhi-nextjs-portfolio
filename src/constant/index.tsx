import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux
} from "react-icons/si";

import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
} from "react-icons/fa";

import { SiMui } from "react-icons/si";

import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "About Me", route: "/about" },
  { name: "Github", route: "/github" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  // { name: "Articles", route: "/article" },
  // { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Abhishek Chourasia. All Rights Reserved.`,
  author: {
    name: "Abhishek Chourasia",
    accounts: [
      {
        url: "https://github.com/geekChourasia",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/abhichourasia/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://stackoverflow.com/users/15727667/abhishek-chourasia",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "mailto:abhiraun333888@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1zZI8fOfrCbf20amk3D4ldnTfVXopVu1q/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const mobileTechStacks = [
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "Kotlin",
    icon: <SiKotlin fontSize="20px" />,
    url: "https://kotlinlang.org/",
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/en/",
  },
];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://react.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Redux & Redux Saga",
    icon: <SiRedux fontSize="20px" />,
    url: "https://redux.js.org/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign fontSize="20px" />,
    url: "https://ant.design/",
  },
  {
    name: "SASS",
    icon: <FaSass fontSize="20px" />,
    url: "https://sass-lang.com/",
  },
  {
    name: "MUI",
    icon: <SiMui fontSize="20px" />,
    url: "https://mui.com/",
  },
  {
    name: "Node JS",
    icon: <SiMui fontSize="20px" />,
    url: "https://nodejs.org/en",
  },
];

const otherTechStacks = [
  {
    name: "CI/CD - Fastlane",
    icon: <SiFastlane fontSize="20px" />,
    url: "https://fastlane.tools/",
  },
  {
    name: "Jira",
    icon: <SiFastlane fontSize="20px" />,
    url: "",
  },
  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
  },
];

const companies = [
  {
    title: "Designing Solutions",
    alt: "Designing Solutions image",
    url: "https://designingsolutions.co.in/",
    role: "UI Engineer",
    skills: ["React","TypeScript", "MUI", "Redux Toolkit", "Javascript","Story Book","Jira"],
    period: "Nov 2023 - Present",
    logo: "/DS-logo.png",
  },
  {
    title: "Logichive Solutions",
    alt: "logichive image",
    url: "https://logichive.in/",
    role: "Assiociate Software Engineer",
    skills: ["React","TypeScript", "MUI", "Redux", "Redux Saga", "Javascript","BootStrap"],
    period: "July 2021 - Jan 2023",
    logo: "/logichive.png",
  },
  {
    title: "Newton School",
    alt: "newton school image",
    url: "https://www.newtonschool.co/",
    role: "Software Engineer Intern",
    skills: [
      "JavaScript",
      "Java",
      "HTML",
      "CSS",
      "Jira",
      "CI/CD",
    ],
    period: "Jan 2021 - July 2021",
    logo: "/newton.png",
  },
];

const educations = [
  {
    title: "Malout Institute of Management and Information Technology",
    alt: "mimit image",
    url: "https://mimitmalout.ac.in/",
    role: "Bachelor's of Technology(B tech) in Computer Science",
    skills: ["CGPA - 7.0", "OOPs", "DSA", "Software Engineering","Etc"],
    period: "Aug 2017 - Jul 2021",
    logo: "/mimit.png",
  },
  {
    title: "Scaler",
    alt: "scaler image",
    url: "https://www.scaler.com/",
    role: "Fullstack Development",
    skills: ["Java", "Data Structure", "Web Development", "Database","LLD"],
    period: "Aug 2022 - Aug 2023",
    logo: "/scaler.png",
  },
];

const sideProjects = [
  {
    name: "Einston Lab",
    imageUrl: "/einston.png",
    alt: "einston",
    summary:
      "A virtual environment where students can engage in various forms of learning, such as courses, lectures, quizzes, and interactive materials. Elearning platforms often offer features like video lectures, discussion forums, progress tracking, and assessments. ",
    link: "https://einstonlabs.com/",
    tech: [
      "TypeScript",
      'MUI',
      "Ant Design",
      "Redux",
      "BootStrap"
    ]
  },
  {
    name: "Weather App",
    imageUrl: "/weather.png",
    alt: "klusterx",
    summary: "Weather applications featuring Celsius and Fahrenheit temperature conversion, highlighting high/low temps, humidity, andwind flow for comprehensive user experiencesStrong understanding of API integration for real-time weather data",
    link:"https://bright-raindrop-a6c1ca.netlify.app/",
    tech: [
      "TailwindCSS",
      "React Js",
      "CSS",
      "Realtime Weather Details"
    ]
  },
  {
    name: "Lancer Link",
    imageUrl: "/lancerlink.png",
    alt: "lancerlink",
    summary: "It serves as a dispenser machine interface, allowing users to monitor the quantity of cold drink and syrup available and check for anymachine faults and managing inventory.",
    link:"https://lancerapp-qa.azurewebsites.net/",
    tech: [
      'TypeScript',
      "TailwindCSS",
      "MUI",
      "Ant Design",
      "Redux Saga"
    ]
  },

  {
    name: "School Days 365",
    imageUrl: "/schooldays365.png",
    alt: "schooldays365",
    summary: "Students craft their own yearbook pages using facial recognition technology, ensuring personalization and uniqueness. Each edition celebrates individuality, capturing memories and milestones while fostering a sense of ownership within the school community.",
    link:"https://school.schooldays365.com/sign-in",
    tech: [
      'TypeScript',
      "TailwindCSS",
      "MUI",
      "Ant Design",
      "Redux Toolkit",
      "Node JS",
      "AWS S3(Bucket)"
    ]
  },

  {
    name: "Skill Lab",
    imageUrl: "/skill-lab.png",
    alt: "skill-lab",
    summary: "A skill-lab platform where students serve MSMEs, earning rewards based on their contributions to the sector's growth and development.",
    link:"https://school.schooldays365.com/sign-in",
    tech: [
      "React",
      'TypeScript',
      "TailwindCSS",
      "MUI",
      "Ant Design",
      "Redux Toolkit",
      "Node JS",
    ]
  },

 
];

export {
  menuLinks,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
