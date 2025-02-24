import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.png";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Moulyasree Madamanchi",
  role: "Full Stack Developer",
  subheading:
    "Software Engineer with 2+ years of experience in full-stack Java development, specializing in Spring Boot, ReactJS,Microservices, and AWS Cloud. Skilled in building scalable, high-performance applications and integrating modern webtechnologies to enhance user experience and system efficiency.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Pharmacy Retail Inventory Management System",
    description:
      "A web-based inventory management system built with React and Spring Boot to streamline pharmacy operations. Automated inventory tracking reduced stock errors by 50% and improved stock transfer efficiency by 30%.",
    techStack: ["React", "Spring Boot", "MariaDB", "AWS", "Docker", "Kubernetes"],
    imgSrc: project1,
    link: "https://example-pharmacy-inventory.com",
  },
  {
    id: 2,
    title: "Personal Budget Web Application",
    description:
      "An interactive project metrics dashboard built with React and JavaScript, reducing report generation time by 40%. Deployed on AWS Cloud using EC2, S3, and Lambda for high availability. Integrated CI/CD pipeline using Jenkins and Docker.",
    techStack: ["React", "JavaScript", "AWS EC2", "S3", "Lambda", "Jenkins", "Docker"],
    imgSrc: project2,
    link: "https://example-budgetapp.com",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website with React, Spring Boot, and MongoDB. Includes user authentication, product management, RESTful APIs, and payment gateway integration.",
    techStack: ["React", "Spring Boot", "Express", "MongoDB", "RESTful API", "Jenkins"],
    imgSrc: project3,
    link: "https://example-ecommerce.com",
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "A real-time social media platform with chat, notifications, and customizable profiles. Built using React, Firebase, and Redux for state management. Hosted on Kubernetes for scalability.",
    techStack: ["React", "Firebase", "Redux", "Kubernetes", "Docker"],
    imgSrc: project4,
    link: "https://example-socialapp.com",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A content management system for blogging with authentication and an intuitive editor. Built with Spring Boot, PostgreSQL, and deployed using Kubernetes and Jenkins for automated deployments.",
    techStack: ["ReactJS", "PostgreSQL", "Spring Boot", "Tailwind CSS", "Kubernetes", "Jenkins"],
    imgSrc: project5,
    link: "https://example-blogplatform.com",
  },
  {
    id: 6,
    title: "Task Management App",
    description:
      "A collaborative task management tool with user authentication, reminders, and role-based access control. Uses J2EE with RESTful APIs for backend communication.",
    techStack: ["Angular", "Firebase", "Material UI", "Spring Boot", "J2EE", "RESTful API"],
    imgSrc: project6,
    link: "https://example-taskapp.com",
  },
  {
    id: 7,
    title: "Real-Time Analytics Dashboard",
    description:
      "A real-time analytics platform developed using ReactJS and JavaScript. Reduced data retrieval time by 35% and improved visualization speed. Deployed using Docker and Kubernetes.",
    techStack: ["ReactJS", "JavaScript", "GraphQL", "Node.js", "Express", "Docker", "Kubernetes"],
    imgSrc: project6,
    link: "https://example-analytics.com",
  }
];


export const SKILLS = [
  // Programming Languages
  { name: "Java", icon: <RiCodeSSlashLine className="text-orange-600" /> },
  { name: "J2EE", icon: <RiCodeSSlashLine className="text-purple-600" /> },
  { name: "JavaScript", icon: <RiJavascriptLine className="text-yellow-500" /> },
  { name: "Python", icon: <RiCodeSSlashLine className="text-blue-500" /> },
  { name: "C", icon: <RiCodeSSlashLine className="text-gray-500" /> },
  { name: "C++", icon: <RiCodeSSlashLine className="text-gray-600" /> },
  { name: "Dart", icon: <RiCodeSSlashLine className="text-cyan-500" /> },
  { name: "HTML5", icon: <RiHtml5Line className="text-orange-600" /> },
  { name: "CSS", icon: <RiCss3Line className="text-blue-500" /> },
  { name: "XML", icon: <RiCodeSSlashLine className="text-gray-400" /> },

  // Database Management
  { name: "SQL", icon: <RiDatabaseLine className="text-blue-600" /> },
  { name: "NoSQL", icon: <RiDatabaseLine className="text-green-600" /> },
  { name: "R", icon: <RiDatabaseLine className="text-purple-600" /> },
  { name: "MongoDB", icon: <RiDatabaseLine className="text-green-500" /> },

  // Developer Tools and Methodologies
  { name: "Jenkins", icon: <RiGitBranchLine className="text-gray-600" /> },
  { name: "Agile SDLC", icon: <RiGitBranchLine className="text-yellow-500" /> },
  { name: "VS Code", icon: <RiCodeSSlashLine className="text-blue-400" /> },
  { name: "Linux", icon: <RiGitBranchLine className="text-gray-700" /> },

  // Cloud Platforms
  { name: "AWS (EC2, S3, Lambda)", icon: <RiDatabaseLine className="text-teal-500" /> },
  { name: "Docker", icon: <RiGitBranchLine className="text-blue-500" /> },
  { name: "Kubernetes", icon: <RiGitBranchLine className="text-purple-500" /> },

  // Testing Tools
  { name: "JUnit", icon: <RiCodeSSlashLine className="text-red-500" /> },
  { name: "Mockito", icon: <RiCodeSSlashLine className="text-blue-500" /> },
  { name: "Unit Testing", icon: <RiCodeSSlashLine className="text-green-600" /> },

  // Technologies & Frameworks
  { name: "Spring", icon: <RiCodeSSlashLine className="text-green-700" /> },
  { name: "Spring Boot", icon: <RiCodeSSlashLine className="text-green-600" /> },
  { name: "Hibernate", icon: <RiCodeSSlashLine className="text-blue-700" /> },
  { name: "Maven", icon: <RiCodeSSlashLine className="text-gray-500" /> },
  { name: "ReactJS", icon: <RiReactjsLine className="text-blue-400" /> },
  { name: "React Native", icon: <RiReactjsLine className="text-blue-500" /> },
  { name: "Redux", icon: <RiReactjsLine className="text-purple-400" /> },
  { name: "Node.js", icon: <RiNodeTree className="text-green-500" /> },
  { name: "ExpressJS", icon: <RiCodeSSlashLine className="text-gray-600" /> },
  { name: "Microservices", icon: <RiGitBranchLine className="text-blue-500" /> },
  { name: "RESTful APIs", icon: <RiGitBranchLine className="text-yellow-500" /> },
  { name: "Mule", icon: <RiGitBranchLine className="text-gray-400" /> },
  { name: "Apache Kafka", icon: <RiGitBranchLine className="text-red-600" /> },
  { name: "Flutter", icon: <RiCodeSSlashLine className="text-cyan-600" /> },
  { name: "Tailwind CSS", icon: <RiCodeSSlashLine className="text-teal-400" /> }
];

export const EXPERIENCES = [
  {
    yearRange: "Aug 2024 – Dec 2024",
    role: "Graduate Assistant",
    company: "University of North Carolina at Charlotte",
    description:
      "Designed and delivered 15+ lectures on database design, SQL, joins, and normalization, increasing students’ comprehension scores by 35%. Mentored 20+ students in SQL queries and performance tuning, leading to a 40% improvement in assignment scores.",
    techStack: ["SQL", "Database Design", "Mentoring", "Performance Tuning"],
  },
  {
    yearRange: "Jun 2021 – Jul 2023",
    role: "Software Engineer",
    company: "HCL Technologies",
    description:
      "Developed reusable ReactJS and Redux UI components, reducing page load time by 30%. Created a modal window with radio button-based file downloads, improving efficiency by 30% and minimizing user errors by 25%. Engineered backend services with Java EE, Spring Boot, and MongoDB to handle 100,000+ datasets.",
    techStack: [
      "ReactJS",
      "Redux",
      "Java EE",
      "Spring Boot",
      "MongoDB",
      "GraphQL",
      "Node.js",
      "Express.js",
      "Jenkins",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    yearRange: "Jan 2021 – May 2021",
    role: "Intern",
    company: "HCL Technologies",
    description:
      "Integrated front-end and back-end modules using ReactJS and Spring Boot, optimizing API response time by 20%. Engineered a real-time analytics platform using ReactJS and JavaScript, driving actionable insights that accelerated project completion timelines by 25%.",
    techStack: ["ReactJS", "JavaScript", "Spring Boot", "Data Analytics"],
  },
];


export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Sri Krishna College of Technology",
    duration: "2018 - 2022",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Master of Science in Computer Science",
    institution: "University Of North Carolina Cahrlotte",
    duration: "2023 - 2024",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
  {
    id: 3,
    degree: "Certified Full Stack Java Developer",
    institution: "Simplilearn",
    duration: "2024",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
