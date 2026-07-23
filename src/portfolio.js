/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hassan Hayat",
  title: "Hi all, I'm Hassan",
  subTitle: emoji(
    "Motivated Frontend & Full-Stack MERN Developer with a strong command of JavaScript and modern web technologies. Experienced in building interactive, responsive interfaces and scalable web applications using HTML5, CSS3, Bootstrap 5, ES6, React.js, Node.js, MongoDB, and Git workflows."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VTCxOe5qRyXkFTdYcA2ssFDvwudvpLVY/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hasanhayat",
  linkedin: "https://www.linkedin.com/in/hassan-hayat-4a4619398",
  gmail: "hassanhayat0012@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/100072923311863",
  instagram: "https://www.instagram.com/h_hassan.hayat/",
  // medium: "https://medium.com/@",
  stackoverflow: "https://stackoverflow.com/users/29532743/hassan-hayat",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "Tailwind", fontAwesomeClassname: "fas fa-wind"},
    {skillName: "Bootstrap 5", fontAwesomeClassname: "fab fa-bootstrap"},
    {skillName: "JavaScript (ES6)", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "React.js", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-forward"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"},
    {skillName: "Express.js", fontAwesomeClassname: "fas fa-server"}, // added
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"}, // added
    {skillName: "npm", fontAwesomeClassname: "fab fa-npm"},
    {skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Firebase", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "Material-UI (MUI)", fontAwesomeClassname: "fas fa-palette"},
    {skillName: "Responsive Design", fontAwesomeClassname: "fas fa-mobile-alt"},
    {skillName: "TanStack Query", fontAwesomeClassname: "fas fa-database"}
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SMIT (Saylani Mass IT Training)",
      logo: require("./assets/images/smitLogo.png"), // Replace with SMIT logo if available
      subHeader: "Full-Stack Development Certification",
      duration: "September 2023 - March 2024",
      desc: "Successfully completed intensive training in modern frontend technologies including HTML, CSS, JavaScript, React.js, Firebase, and UI frameworks like MUI, Chakra UI, and Ant Design.",
      descBullets: [
        "Ranked among top performers",
        "Built multiple real-world responsive web applications"
      ]
    },
    {
      schoolName: "Ghazali Model School",
      logo: require("./assets/images/ghazaliLogo.png"), // Replace this with your actual school logo if available
      subHeader: "Matriculation - Science Group",
      duration: "April 2021 - April 2023",
      desc: "Completed matriculation with a strong foundation in science and mathematics. Achieved 76% marks and developed an early interest in computer science and technology.",
      descBullets: [
        "Focused on Physics, Chemistry and Computer",
        "Participated in school tech fairs and science exhibitions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Frontend Developer",
      company: "Self-Employed",
      companylogo: require("./assets/images/freelancerLogo.png"), // Replace with actual logo if available
      date: "December 2023 – July 2025",
      desc: "Completed intensive project-based training in modern frontend development. Built real-world responsive web applications using React.js, Firebase, and various UI libraries.",
      descBullets: [
        "Developed single-page applications using React.js and Firebase",
        "Worked on authentication, real-time data handling, and responsive UI with Tailwind CSS and MUI",
        "Followed modern development workflows with Git & GitHub"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "3PL Dynaimcs",
      companylogo: require("./assets/images/3pl.png"), // Replace with relevant image
      date: "August 2025 – Present",
      desc: "Working as a Full Stack Developer at 3PL Dynamics, contributing to the development and maintenance of web applications that streamline logistics and supply chain operations. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      descBullets: [
        "Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
        "Integrated third-party services and APIs to enhance application functionality",
        "Collaborated with team members using Git workflows for version control"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND PROJECTS THAT I HELPED TO CREATE WITH TECH",
  projects: [
    {
      image: require("./assets/images/connectFissionLogo.png"), // Replace with actual image path
      projectName: "ConnectFission - Social Blogging Site",
      projectDesc:
        "A modern social media platform built using React.js and Firebase. Users can create/edit posts, real-time updates, with responsive UI and user profiles.",
      footerLink: [
        {
          name: "Live Website",
          url: "https://connectfission.web.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Hasanhayat/connect-fission-social-app-firebase"
        }
      ]
    },
    {
      image: require("./assets/images/msgnestLogo.png"), // Replace with actual image path
      projectName: "MsgNest - Real-time Chat App",
      projectDesc:
        "A sleek chat application with real-time messaging, user authentication, and responsive UI using React.js and Firebase.",
      footerLink: [
        {
          name: "Live ChatApp",
          url: "https://msgnest.web.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Hasanhayat/MsgNest-chat-app"
        }
      ]
    },
    {
      image: require("./assets/images/ecomStoreLogo.png"), // Replace with actual image path
      projectName: "Khattak Store - E-Commerce with Admin Panel",
      projectDesc:
        "A full-featured e-commerce store with a secure and functional admin panel. Built using React.js, Tailwind CSS, and Firebase.",
      footerLink: [
        {
          name: "Live Store",
          url: "https://khattak-store.web.app/"
        },
        {
          name: "Admin Panel Access",
          url: "https://khattak-store.web.app/",
          note: "Login as admin: hassan@hayat.com / Password: hassanhayat"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Hasanhayat/E-com-with-Tailwind"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "10Pearls Advanced OOP Certification",
      subtitle:
        "Completed advanced OOP analysis certification from 10Pearls, demonstrating proficiency in object-oriented programming concepts and design patterns.",
      image: require("./assets/images/10pearls.png"),
      imageAlt: "10Pearls Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1WllnHLnhum3Sa7cqtNckezpqAMmCWchm/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "IBM Frontend Developer Certificate",
      subtitle:
        "Completed IBM Frontend Developer Certificate, demonstrating proficiency in frontend development technologies.",
      image: require("./assets/images/ibm.jpg"),
      imageAlt: "IBM Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1AM0V6F2l4QSWNd_sA1vs43WJqEctzZkh/view?usp=sharing"
        },
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com//why-react-is-the-best-",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/",
      event_url: "https://www.facebook.com/events"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/"],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3395001230",
  email_address: "hassanhayat0012@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
