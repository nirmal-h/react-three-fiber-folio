import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  angular,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project,
  allianz,
  firmusoft,
  ust,
  keralauniversity
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Angular",
    icon: angular,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Firmusoft solutions",
    icon: firmusoft,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      'Worked on data visualization and health awareness projects.',
      'Worked with client on requirement gathering and comprehensive demonstrations.',
      'Software design and development while remaining concentrated on client needs.',
      'Cooperated diligently with other IT team members to plan, design, and develop smart solutions.',
      'Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality.',
      'Discussed project progress with customers, collected feedback on different stages and directly addressed concerns.',
    ],
  },
  {
    title: "Software Developer",
    company_name: "UST Global",
    icon: ust,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      'Design implementation and development of feature-rich web portals using various web technologies.',
      'Got opportunity to fly to client site, closely gather requirements and deliver them on time (Andhra Pradesh - APSSDC).',
      'Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.',
      'Planned and developed interfaces that simplified overall management and offered ease of use.',
      'Documented technical workflows and knowledge in private wiki for education of newly hired employees.',
      'Translated verbal customer requirements into written use cases and testable development stories.',
      'Trained and managed team of developers and discussed issues in order to provide resolution and apply best practices.',
      'Participated in software field testing to verify in-situ performance of developed projects.',
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Allianz",
    icon: allianz,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      'Worked closely with business analysts, development teams and infrastructure specialists to deliver high availability solutions for mission-critical applications.',
      'Adjusted design parameters to boost performance and incorporate new features.',
      'Designed frontend architecture for current revamping project.',
      'Developed style metadata and architecture for AVALIS enterprise projects that spans across multiple countries.',
      'Developed custom Angular NPM library that can be published and consumed by a lot of projects/micro frontends.',
      'Leading frontend development for our current application.',
      'Working closely with international clients and architects as part of frontend initiative.',
      'Conducted sessions for upcoming junior developers and senior developers as part of learning initiation purpose.',
    ],
  },
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
    name: "Job Training Portal",
    description:
      "A fully fledged portal for managing and assisting officials and training partners for conducting job oriented training programs for Non-Engg and Engg students across the state of AP. Accessibility for candidate to register manage his course online, make payment, enroll to the currently running eligible batches and download certificate. Enables Program coordinators to define eligibility criteria, register colleges and more.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    role: 'UI, Frontend developer',
    client: 'Andhra Pradesh Govt',
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Registration",
    description:
      "A web system wherein the candidates are able to register for attending the examinations and make payments on the go. This registration system was made simple so that the candidates are not required to spend much time on this.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    role: 'UI, Frontend developer',
    client: 'Maharashtra Govt',
    source_code_link: "https://github.com/",
  },
  {
    name: "LookyLoopz",
    description:
      "LookyLoopz is a Complete Extended Reality Platform! It's a platform where multiple stakeholders can collaborate to create an ecosystem which promotes business as well as efficiency of Extended reality applications. Lookyloopz helps XR content creators to create, publish, manage and analyze to grow the business. Content creators can publish their content through infinitely scalable secure cloud to their customers and manage their business.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    role: 'UI, Frontend developer',
    client: 'N/A',
    source_code_link: "https://github.com/",
  },
  {
    name: "AVALIS",
    description:
      "The project offers a wide range of bonding, guarantees and collections services for the management of business-to-business trade receivables. Because the future is not always as expected, we predict trade and credit risk today, to protect cash flow tomorrow. So clients around the globe trust us to manage their trade-related insurance.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "microfrontend",
        color: "pink-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    role: 'Senior Software Engineer',
    client: 'Euler Hermes',
    source_code_link: "https://github.com/",
  },
  {
    name: "Kerala University",
    description:
      "UI development for the new upcoming/ongoing official Kerala university web portal.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    role: 'UI developer',
    client: 'Kerala University',
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };