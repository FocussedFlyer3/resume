import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chee Kong Wong (CK)",
  initials: "CK",
  location: "Kuala Lumpur, Malaysia",
  locationLink: "https://www.google.com/maps/place/Kuala+Lumpur",
  about:
    "Software Developer with passion on technologies and engrossed on building products with attention to details",
  summary:
    "As a Software Developer, I have successfully taken multiple projects from inception to launch 🚀, leading teams effectively and fostering an environment where people can do their best work. Currently, I work mostly with JavaScript, Vue and Node.js. Eager to expand my leadership and technical skills in a forward-thinking environment that fosters professional growth and innovations.",
  avatarUrl: "https://avatars.githubusercontent.com/u/36317458?v=4",
  personalWebsiteUrl: "",
  contact: {
    tel: "",
    email: "kvnwong0@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/FocussedFlyer3",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cheekong-wong/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/focussedflyer3",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Western Michigan University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Respond.io",
      link: "https://respond.io",
      badges: [],
      title: "Frontend Developer → Lead Frontend Developer",
      start: "2021",
      end: "Present",
      description: [
        "Drive frontend initiatives and lead the development of client applications, ranging from evolving existing products to incubating new business ideas.",
        "Work closely with cross-functional teams to ensure the smooth integration of frontend systems with other products within ecosystems.",
        "Collaborate with product managers, designers, engineers, and other stakeholders to define and prioritize product features and technical requirements.",
        "Provide technical guidance and mentorship to junior developers in the team.",
        "Foster a transparent and dynamic engineering culture as well as promoting an architectural mindset within the team.",
        "Actively promote and integrate cutting-edge frontend technologies and trends to enhance team."
      ]
    },
    {
      company: "Vision Technology Consulting",
      link: "",
      badges: [],
      title: "Platform Developer",
      start: "2020",
      end: "2021",
      description: [
        "Develop and maintain a SPA website and Hybrid Mobile Applications.",
        "Ensure operations of platforms including IOS, Android and Web.",
        "Oversee, Identify and fix issues uncovered from customer feedbacks and testings.",
        "Performed necessary system upgrades and updates to improve system stability.",
        "Further optimised applications for performance.",
        "Proposed technical solutions in solving business problems."
      ]
    },
    {
      company: "Vision Technology Consulting",
      link: "",
      badges: ['Intern'],
      title: "Frontend Developer",
      start: "2019",
      end: "2020",
      description: [
        "Develop and maintain a SPA website with Vue.js and Quasar framework.",
        "Identify and fix issues uncovered by customer feedback and testing.",
        "Performed necessary system upgrades and updates to improve system stability.",
        "Further optimized application for performance.",
      ]
    },
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "Bash",
    "YAML",
    "Vue",
    "Node.js",
    "Firebase",
    "GIT",
    "Quasar",
    "Vuetify",
    "Tailwind CSS",
    "Buildkite",
    "Docker",
    "GitHub Actions",
    "GCP Cloud Functions",
    "AWS Lambda",
  ],
  projects: [
    {
      title: "Respond.io",
      techStack: [
        "Frontend Developer",
        "JavaScript",
        "Vue",
        "Vite",
        "Vuetify",
        "VeeValidate",
        "Vue Query"
      ],
      descriptions: [
        "A hybrid (SPA+SSR) website to manage instant messaging conversations",
        "Implemented product features in collaboration with cross-functional teams.",
        "Managed more than 6.5M messages daily.",
        "Lead Team with structure design of platform modules and RESTful APIs.",
      ],
    },
    {
      title: "PetBacker",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "Vue",
        "Webpack",
        "Cordova",
        "Quasar",
      ],
      descriptions: [
        "A SPA website and Hybrid Mobile Application for pet lovers to find pet sitters and services",
        "Redesigned structure of platform to support high volume traffic",
        "Lead Team with structure design of platform and RESTful APIs"
      ],
    },
    {
      title: "Forwen Tracker",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "Vue",
        "Webpack",
        "Quasar",
      ],
      descriptions: [
        "A contact-tracing webapp in regards with the COVID-19 pandemic",
        "Attracted nearly over 20 thousands signups",
        "Lead Team with initial UI design and platform structure"
      ],
    },
    {
      title: "CRM Telephony Integration",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "Node.js",
        "Express.js",
      ],
      descriptions: [
        "Middleware server to streamline lead management process by integrating Yeastar with Salesforce CRM",
      ],
    },
    {
      title: "Learning Management System",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "PHP",
        "Laravel",
        "Webpack",
        "Bootstrap",
      ],
      descriptions: [
        "A platform to track students’ progress in class",
        "Designed and implemented APIs following RESTful protocols",
        "Lead Team with initial UI design, database and API structure"
      ],
    },
    {
      title: "Flight Carrier Recommender",
      techStack: ["Course Work Project", "JavaScript", "PHP", "Bootstrap"],
      descriptions: ["A website in determining the best flight carrier for travelling to a desired destination"],
    },
    {
      title: "Twitter Clone",
      techStack: ["Course Work Project", "JavaScript", "jQUERY", "Bootstrap"],
      descriptions: ["A website where users are able to post and share short messages"],
    },
    {
      title: "Tic-Tac-Toe",
      techStack: ["Side Project", "IOS", "Swift"],
      descriptions: ["A IOS application of a simple tic-tac-toe game with minimalistic UI"],
    },
    {
      title: "Movie Ticketing System",
      techStack: ["Course Work Project", "Java", "JavaFX", "MySQL"],
      descriptions: ["A Java application in handling a movie ticketing system"],
    },
    {
      title: "Text-based Adventure Game",
      techStack: ["Course Work Project", "Java", "JavaFX"],
      descriptions: ["A Java application of a text-based adventure game with minimalistic UI"],
    },
  ],
} as const;
