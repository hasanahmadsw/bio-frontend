import {
  IBiography,
  ICertificate,
  IEducation,
  IExperience,
  IService,
  ISocialMedia,
} from "../types";

export const bioData: IBiography = {
  summary:
    " I'm a Software Engineer with over 4 years of experience. I'm from Syria. I design and create web services for amazing people around the world. I like work with new people. New people are new experiences.",
  name: "Hasan Ahmad",
  title: "Entrepreneur | Software Engineer",
  birthday: "1th Jan 2001",
  nationality: "Syrian",
  address: "Dubai",
  phone: "(+971) 50 883 8637",
  email: "hasanahmadsw@gmail.com",
};

export const socialData: ISocialMedia = {
  facebook: "https://facebook.com/hasanahmadsw",
  instagram: "https://instagram.com/hasanahmadsw",
  linkedin: "https://linkedin.com/in/hasan-ahmadl/",
  github: "https://github.com/hasanahmadsw",
  telegtam: "https://t.me/hasanahmadsw",
};

export const experiencesData: IExperience[] = [
  {
    title: "Software Development Engineer",
    breif:
      "Design, programming and management of the websites of our company's affiliates, developing a software project plan and managing its deliverables.",
    company: "MAP Events & Art Production",
    date: "Jan 2022 - Present",
    location: "Dubai",
  },
  {
    title: "Founder & Backend Developer",
    breif:
      "Leading and managing the software project team, Ensuring responsiveness of applications, Designing and developing APIs and writing their technical documentation",
    company: "Yallawin",
    date: "Jan 2021 - Dec 2021",
    location: "Damascuse - Syria",
  },
  {
    title: "Web Developer",
    breif:
      "Developing frontend and backend website architecture and applications, creating servers and databases for functionality, ensuring responsiveness of applications.",
    company: "Freelance",
    date: "Jan 2019 - Present",
    location: "Remotely",
  },
];

export const educationsData: IEducation[] = [
  {
    title: "Bachelor's of Information Technology",
    date: "2022 - Present",
    university: "Syrian Virtual University",
    breif:
      "Studying the information technology major in the virtual university enables me to study and work at the same time, and this was the main reason for my transfer",
  },
  {
    title: "Bachelor's degree in Software Engineering",
    date: "2018 - 2021 Paused",
    university: "Yarmouk Private University",
    breif:
      "I completed four years of study in software engineering and programming and stopped and enrolled in a second university",
  },
];

export const certificatesData: ICertificate[] = [
  {
    title: "ICPC Syrian University Contestant",
    date: "2021",
    source: "ICPC",
    breif: "The 2021 Syrian Universities Collegiate Programming Contest",
  },
  {
    title: "ICPC Syrian Private University Contestant",
    date: "2020",
    source: "ICPC",
    breif:
      "The 2020 Syrian Private Universities Collegiate Programming Contest",
  },
];

export const servicesData: IService[] = [
  {
    title: "Web Services Development",
    breif:
      "I help you to build effective web services for small and large business",
  },
  {
    title: "Web Design",
    breif:
      "Design direction for business. Get your business on the next level. I help to create great experiences.",
  },
  {
    title: "UI UX Solutions",
    breif: "Design clear and effective user interfaces.",
  },
  {
    title: "Socila Media Solution",
    breif:
      "Business development by customizing its social media and contributing to its growth.",
  },
];

export const skillsData = {
  programming: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Nest.js",
  ],
  database: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Cassandra",
    "AWS DynamoDB",
    "AWS RDS",
  ],
  devops: [
    "Git",
    "GitLab",
    "GitHub",
    "Docker",
    "kubernets",
    "Nginx",
    "AWS CodeCommit",
    "AWS CodePipline",
  ],
  cloud: [
    "AWS",
    "AWS EC2",
    "AWS S3",
    "AWS EBS",
    "AWS CloudWatch",
    "AWS ELB",
    "AWS Lambda",
  ],
  tools: [
    "Visual Studio",
    "VS Code",
    "Eclipse",
    "NetBeans",
    "Android Studio",
    "PyCharm",
  ],
};
