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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    ecg,
    bismuth,
    threejs,
    techathon,
    nubsuenr,
    urc,
    urc_learning_hub,
    solartaxi,
    angular,
    bootstrap,
    nextjs,
    passenger,
    flutter,
    firebase
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer (Flutter)",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "Angular",
      icon: angular,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Next",
      icon: nextjs,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Developer ",
      company_name: "Solar Taxi",
      icon: solartaxi,
      iconBg: "#ffff",
      date: "October 2023 - Present",
      points: [
        "Developing and maintaining web applications using Angular.js and Bootstrap.",
        "Worked in conjunction with diverse teams, encompassing designers, product managers, and backend developers, to collect specifications and guarantee the successful launch of their application.",
        "Executed UI/UX designs in order to craft aesthetically pleasing and intuitive user interfaces.",
        "Engaged in code evaluations and offered valuable input to fellow developers during the review process.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Bismuth",
      icon: bismuth,
      iconBg: "#ffff",
      date: "September 2022 - January 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility using chrome dev tools.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer (Remote)",
      company_name: "Techathon",
      icon: techathon,
      iconBg: "#E6DEDD",
      date: "October 2022 - December 2022",
      points: [
        "Developedand maintained web applications using Next.ts, Chakra UI and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility using chrome dev tools.",
      ],
    },
    {
      title: "IT Support Engineer (Intern)",
      company_name: "Electricity Company of Ghana (ECG)",
      icon: ecg,
      iconBg: "#E6DEDD",
      date: "October 2021 - November 2021",
      points: [
        "Reduced rerouting of network hubs to computer, optimized software applications and operating systems to increase computer throughput for increased productivity",
        "Troubleshooted networking devices to ensure its optimum efficient use.",
        "Installed and Updated their system security softwares for their offices and warehouses.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Henry proved me wrong.",
      name: "Dennis Adonai",
      designation: "CEO",
      company: "Bismuth",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Henry does.",
      name: "Chris Brown",
      designation: "COO",
      company: "Techathon",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Henry optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Bawa Daniel",
      designation: "President",
      company: "URC",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Solar Taxi Passenger App",
      web_link:"",
      description:
        "This is an android and ios app built using flutter for passengers to book their seats on their buses and also pay their fares through the app. This app is currently in development",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: passenger,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce App",
      web_link:"",
      description:
        "This is a prototype of an ecommerce app built using flutter",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
      ],
      image: passenger,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce App 2",
      web_link:"",
      description:
        "This is a prototype of an ecommerce app built using flutter with light and darkmode feature",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
      ],
      image: passenger,
      source_code_link: "https://github.com/",
    },
    {
      name: "Nubs Uenr",
      web_link:"https://nubs-uenr.com",
      description:
        "Web application that enables users to know more about nubs uenr, it vision and missions. Users can get access to books on their e-library platform. Users can get access to previous biblestudies materials and sermons preached on Sundays",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
      ],
      image: nubsuenr,
      source_code_link: "https://github.com/",
    },
    {
      name: "Uenr Robotics Club (urc)",
      web_link:"https://urc.onrender.com",
      description:
        "Web application that allows users to know more about urc; its members, executives and patron. Users can get access to completed projects on the projects page",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
      ],
      image: urc,
      source_code_link: "https://github.com/",
    },
    {
      name: "URC Learning Hub",
      web_link:"https://urc-codes.github.io/learning_hub_frontend/",
      description:
        "A web application where users can get access to free books and videos on some skills such as graphic designing, web development, mobile development, ai and machine learning and general programming",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name:"nodejs",
          color:"orange-text-gradient"
        }
      ],
      image: urc_learning_hub,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  