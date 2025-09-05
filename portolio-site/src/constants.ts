import { Profile, Experience, Education, Project } from './types/types';

export const PROFILE_DATA: Profile = {
  name: "Kimi Andersson",
  title: "Full Stack Developer",
  summary: "A versatile and innovative fullstack developer with a passion for continuous learning. I specialize in building scalable, high-quality solutions using a diverse tech stack that includes React, TypeScript, .NET, and Azure cloud, while also leveraging unique expertise in IBM mainframe technologies.",
  summary2: `
My name is Kimi and I am described as a determined, self-motivated, and ambitious developer by my peers.
I have several hobbies that keep me busy while I'm not programming, these include: music production and noodling with synthesizers. I'm always looking for new passions and hobbies to explore and learn about. I completed my education in Dubai and attended university where I specialized in Engineering and Physics, then promptly moved back to Sweden in 2021,
A great piece of software is never finished, it is only improved upon continually. Coding is an art form and a science all at once.
I strive to take any project I work on to new heights, striving to create the most useful and well executed solutions I can.`,
  contact: {
    phone: "+46 72 020 8268",
    email: "kimianderssonmusic@gmail.com",
    location: "Uppsala, Sweden",
  },
  social: {
      github: "https://github.com/kimi12311",
      linkedin: "https://www.linkedin.com/in/kimi-andersson-bb1118263/"
  }
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Full Stack + Mainframe Developer",
    company: "Trygg Hansa",
    period: "2023 - Present",
    description: [
      "Played a key role in the development of a new policy system from initial planning to implementation using Mainframe, .NET and REST APIs.",
      "Coordinated stakeholder meetings to gather and refine project requirements.",
      "Developed and maintained COBOL programs for core business logic, including DB2 and IMS data transactions.",
      "Actively engaged in continuous learning through internal training on Mainframe and Cloud development.",
    ],
  },
  {
    role: "Full Stack Developer Consultant",
    company: "School of Applied Technology <Salt>",
    period: "2022 - 2023",
    description: [
      "Completed a three-month intensive Full Stack development program focused on Agile methodologies.",
      "Developed web applications using React and TypeScript based on provided specifications.",
      "Implemented CI/CD pipelines to automate deployments on Azure Cloud.",
      "Delivered completed projects on time, built both with React and .NET web frameworks.",
    ],
  }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "Virtual Proposals",
        description: "A modern, and cute website for proposing to your loved ones digitally, making use of SSR for secure encryption / decryption of request tokens and PDF generation",
        tags: ["NextJs", "TypeScript", "Vercel", "REST API", "CI/CD", "Entra ID", "Github Actions"],
        imageUrl: "/image.png",
        liveUrl: "https://www.virtualproposals.com/",
    },
    {
        title: "Interlude Piano",
        description: "Piano sampler instrument with creative effects and algorithmic sound stretching. Included are 3 different pianos with a physically modelled electric piano",
        tags: ["C++", "Juce", "VST"],
        imageUrl: "/Intelude.webp",
        liveUrl: "https://soittasoundworks.gumroad.com/l/InterludePiano",
    },
    {
        title: "Soitta Soundworks",
        description: "An E-Commerce store dedicated to selling music instruments and sample packs.",
        tags: ["React", "Typescript", "TailwindCSS", "RestAPIs", "Azure"],
        imageUrl: "/Soitta.png",
        liveUrl: "https://soitta.com",
    }
];

export const TECHNOLOGIES: string[] = [
  ".NET", "React", "Next.js", "TypeScript", "JavaScript", "ASP.Net Core", "Rest APIs", "Azure",
  "IBM Mainframe", "COBOL", "IBM DB2", "SQL Server", "JCL", "SQL",
  "HTML/CSS", "Tailwind CSS", "Git", "Linux", "C++", "Docker", "xUnit/nUnit"
];

export const CORE_SKILLS: string[] = [
  "Agile Methodologies", "DevOps & DevSecOps", "CI/CD",
  "Excellent collaboration skills", "Database design & Query optimization",
  "Test Driven Development", "Azure Devops"
];

export const LANGUAGES: string[] = ["Swedish: Native", "Finnish: Native", "English: Fluent"];
