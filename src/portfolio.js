/* Professional Portfolio Configuration - Waqar Ahmed */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "Waqar Ahmed",
  title: "Hi, I'm Waqar Ahmed",
  subTitle: emoji(
    "TEFL/TESOL Certified English Language Instructor, IELTS Trainer, and Language Proficiency Assessor with over 6 years of experience teaching students from diverse academic and professional backgrounds. Specialized in General English, Business English, IELTS preparation, O Level English, PTE, TOEFL, and English communication skills."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "waqarahmed4th@gmail.com",
  facebook: "",
  instagram: "",
  display: false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Experienced English language instructor specializing in IELTS, Business English, O Level English, and communication-focused teaching methodologies.",

  skills: [
    emoji(
      "⚡ Teach General English for children, teenagers, and adults using interactive and communication-based methods"
    ),
    emoji(
      "⚡ Prepare students for IELTS, PTE, and TOEFL examinations with structured speaking, writing, reading, and listening strategies"
    ),
    emoji(
      "⚡ Deliver Business English training including business writing, customer service communication, and workplace interaction skills"
    ),
    emoji(
      "⚡ Assess English language proficiency and provide personalized feedback for academic and professional improvement"
    )
  ],

  softwareSkills: [
    { skillName: "IELTS Instruction", fontAwesomeClassname: "fas fa-graduation-cap" },
    { skillName: "Business English", fontAwesomeClassname: "fas fa-briefcase" },
    { skillName: "O Level English", fontAwesomeClassname: "fas fa-school" },
    { skillName: "PTE Preparation", fontAwesomeClassname: "fas fa-book" },
    { skillName: "TOEFL Preparation", fontAwesomeClassname: "fas fa-language" },
    { skillName: "Public Speaking", fontAwesomeClassname: "fas fa-microphone" },
    { skillName: "Classroom Management", fontAwesomeClassname: "fas fa-users" },
    { skillName: "Student Assessment", fontAwesomeClassname: "fas fa-check-circle" },
    { skillName: "Curriculum Planning", fontAwesomeClassname: "fas fa-book-open" },
    { skillName: "Microsoft Office", fontAwesomeClassname: "fas fa-desktop" }
  ],

  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Federal Urdu University of Arts, Science & Technology (FUUAST)",
      logo: require("./assets/images/fuuast.png"),
      subHeader: "BS English Literature",
      duration: "March 2021 - June 2025",
      desc:
        "Completed undergraduate studies in English Literature with a strong academic focus on language, literature, communication, and critical analysis.",
      descBullets: [
        "Developed expertise in English language and literature",
        "Strengthened analytical, writing, and communication skills"
      ]
    },
    {
      schoolName: "Dux TEFL",
      logo: require("./assets/images/tefl.jpg"),
      subHeader:
        "TEFL/TESOL Certification - Teaching English as a Second or Foreign Language",
      duration: "September 2024 - November 2024",
      desc:
        "Completed professional TEFL/TESOL training focused on modern ESL teaching methodologies, classroom management, lesson planning, and communication-based instruction.",
      descBullets: [
        "Certified in TEFL/TESOL teaching methodologies",
        "Trained in learner-centered and natural approach instruction"
      ]
    }
  ]
};

// Professional Expertise Section
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "IELTS & English Language Instruction",
      progressPercentage: "95%"
    },
    {
      Stack: "Business English & Communication Skills",
      progressPercentage: "90%"
    },
    {
      Stack: "Student Assessment & Academic Training",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "IELTS Instructor",
      company: "Berlitz Pakistan",
      companylogo: require("./assets/images/berlitz.png"),
      date: "August 2024 - Present",
      desc:
        "Provide professional IELTS preparation for students aiming for academic and immigration goals, with a focus on speaking, writing, reading, and listening strategies aligned with official IELTS assessment criteria.",
      descBullets: [
        "Train students in all four IELTS modules",
        "Use band-descriptor-based feedback for speaking and writing improvement",
        "Conduct mock tests and performance evaluations"
      ]
    },
    {
      role: "English Language Instructor",
      company: "Berlitz Pakistan",
      companylogo: require("./assets/images/berlitz.png"),
      date: "May 2022 - Present",
      desc:
        "Teach General English and Business English to learners from diverse educational and professional backgrounds, including educators, healthcare professionals, legal professionals, entrepreneurs, and government personnel.",
      descBullets: [
        "Deliver communication-focused English lessons",
        "Teach Business English for workplace communication",
        "Apply the Direct Method/Natural Approach for faster language acquisition"
      ]
    },
    {
      role: "Language Proficiency Assessor",
      company: "Berlitz Pakistan",
      companylogo: require("./assets/images/berlitz.png"),
      date: "May 2022 - Present",
      desc:
        "Assess learners' English proficiency levels and recommend appropriate training programs based on speaking, listening, reading, and writing performance.",
      descBullets: [
        "Evaluate language proficiency across multiple levels",
        "Provide detailed performance feedback",
        "Support placement and academic progression decisions"
      ]
    },
    {
      role: "O Level English Teacher",
      company: "Stanmore School (Cambridge Stream)",
      companylogo: require("./assets/images/stan.jpg"),
      date: "September 2021 - June 2022",
      desc:
        "Taught Cambridge O Level English with emphasis on comprehension, composition, grammar, vocabulary development, and examination techniques.",
      descBullets: [
        "Prepared students for Cambridge examinations",
        "Developed structured lesson plans and assessments",
        "Improved students' writing and analytical skills"
      ]
    },
    {
      role: "Founder & Director",
      company: "Angraizi Language Camp",
      companylogo: require("./assets/images/camp.jpg"),
      date: "June 2020 - November 2021",
      desc:
        "Founded and managed an independent English language training initiative focused on practical communication, confidence building, and learner engagement.",
      descBullets: [
        "Designed English communication courses",
        "Conducted online and in-person classes",
        "Managed student enrollment and academic planning"
      ]
    },
    {
      role: "English Teacher",
      company: "Metropolitan Academy School",
      companylogo: require("./assets/images/metro.png"),
      date: "October 2020 - July 2021",
      desc:
        "Taught English language and literature at the school level, focusing on grammar, reading comprehension, vocabulary, and spoken English development.",
      descBullets: [
        "Delivered engaging classroom instruction",
        "Prepared quizzes, assignments, and examinations",
        "Supported students' academic improvement"
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: false,
  display: false
};

// Projects Section
const bigProjects = {
  title: "Professional Expertise",
  subtitle:
    "Areas of specialization and language training services provided to students and professionals.",
  projects: [],
  display: false
};

// Achievements Section
const achievementSection = {
  title: emoji("Certifications & Achievements 🏆"),
  subtitle:
    "Professional certifications and teacher training programs completed in English language instruction and IELTS assessment.",

  achievementsCards: [
    {
      title: "TEFL/TESOL Certification",
      subtitle:
        "Completed internationally recognized TEFL/TESOL training in Teaching English as a Second or Foreign Language.",
      image: require("./assets/images/tefl.jpg"),
      imageAlt: "TEFL/TESOL Logo",
      footerLink: []
    },
    {
      title: "IELTS Speaking Teacher Training Program",
      subtitle:
        "Completed specialized training focused on understanding and applying official IELTS speaking assessment criteria.",
      image: require("./assets/images/ielts.png"),
      imageAlt: "IELTS Training Logo",
      footerLink: []
    }
  ],

  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "Insights and articles related to English learning, IELTS preparation, communication skills, and language teaching.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

// Talks Section
const talkSection = {
  title: "Talks & Workshops",
  subtitle:
    "Public speaking sessions, workshops, and educational events related to English language learning and IELTS preparation.",
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "English learning and communication discussions.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my professional resume.",
  display: false
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss English language training, IELTS preparation, Business English, or academic tutoring opportunities.",
  number: "",
  email_address: "waqarahmed4th@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

// Availability
const isHireable = true;

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