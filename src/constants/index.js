import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HOME_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React.js, React-Native and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React.js, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Junior Associate",
    company: "Western Union",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and React-Native. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "React-Native"],
  },
  {
    year: "July 2023 - Aug 2024",
    role: "Senior Trainee Associate",
    company: "Western Union",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "React-Native"],
  },
  {
    year: "July 2022 - July 2023",
    role: "Junior Trainee Associate",
    company: "Western Union",
    description: `Developed and maintained web applications using JavaScript, React.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React.js", "Next.js", "Node.js", "GraphQL"],
  },
  {
    year: "Feb 2022 - July 2022",
    role: "Trainee Associate",
    company: "Western Union",
    description: `Contributed to the development of web applications using JavaScript, React.js. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["HTML", "CSS", "React.js", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce App",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication, integrate with payment gateway like Razorpay",
    technologies: ["HTML", "CSS", "React-Native", "Node.js", "MongoDB"],
    url:'https://drive.google.com/file/d/1rZNCTDghE02srlpOvsiozq8BkCduE-3Z/view?usp=sharing'
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap"],
    url:'https://lakhanshanker.netlify.app/'
  },
  {
    title: "GiftMe Web app",
    image: project4,
    description:
      "A platform for suggesting gifts to user based on the user's selection of the relation and other factors",
    technologies: ["HTML", "CSS", "Next.js", "React.js"],
    url:'https://bestuphaar.netlify.app/'
  },
];

export const CONTACT = {
  address: "304 Patole Niwas, Wadgaon Sheri, Pune, MH 411014 ",
  phoneNo: "+91 8899219809",
  email: "lakhanshanker1998@gmail.com",
};
