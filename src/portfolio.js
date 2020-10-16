
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ali Keser",
  title: "Hi all, I'm Ali Omer Keser",
  subTitle: emoji("a weird computer scientist 🤓 having an experience of understanding and manipulating bits to do cool things."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/aomerk",
  linkedin: "https://www.linkedin.com/in/omerkeser/",
  twitter: "https://www.twitter.com/aliomerkeser/",
  instagram: "https://www.instagram.com/aliomerkeser/",
  gmail: "ali@strixeye.com",
  facebook: "https://www.facebook.com/omerali.keser",
  blog: "https://freethemalloc.com",
  stackoverflow: "https://stackoverflow.com/users/8035711/keser"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "COMPUTER SCIENTIST WITH AN ENGINEER ATTITUDE AND DATA SCIENTIST MATH BUT CASUALLY DEVELOPS FOR LIVING ",
  skills: [
    emoji("⚡ Make better inter-department decisions and manage communications better between Client-Side, Server-Side and Data-Side teams."),
    emoji("⚡ Improve team work and motivation"),
    emoji("⚡ I'll try my best to build sustainable, scalable and profitable projects for my clients")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Microcontrollers, RPI, Arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    ,
    {
      skillName: "chrome extensions",
      fontAwesomeClassname: "fab fa-chrome"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
    ,
    {
      skillName: "and more...",
      fontAwesomeClassname: "fas fa-ellipsis-h"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Technische Universität Berlin",
      logo: require("./assets/images/tub-vector.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "ongoing",
      desc: "Grade: A-, with Scholar. One of the best Computer Science programs in the World",
    },
    {
      schoolName: "Istanbul University",
      logo: require("./assets/images/iu-logo.png"),
      subHeader: "Bachelor of Science in Economics",
      duration: "ongoing",

    },
    {
      schoolName: "Istanbul University",
      logo: require("./assets/images/iu-logo.png"),
      subHeader: "Bachelor of Science in Linguistics",
      duration: "ongoing",
      desc: "Entered first place"

    },
    {
      schoolName: "Istanbul Lisesi",
      logo: require("./assets/images/iel-logo.png"),
      subHeader: "Bachelor of Science in Linguistics",
      duration: "GPA: 90/100",
      desc: "One of the best high schools in Turkey with acceptance rate under 0.1%, a history over 130 years and a german curriculum."
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Project Arhictecture Design and Management",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "60%"
    }
    ,
    {
      Stack: "Design",
      progressPercentage: "6%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Co-Founder of Technology",
      company: "StrixEye",
      companylogo: require("./assets/images/strixeye_icon-purple-bg-white.svg"),
      date: "March 2020 – Present",
      desc: "StrixEye does real-time anomaly detection for web applications with machine learning and generate an alarm when your web applications are under attack..",
      descBullets: [
        "architecting and engineering of distributed real-time cyber security system",
        "Responsible for development of Machine Learning model",
        "Managing research and development teams"
      ]
    },
    {
      role: "Software Engineer",
      company: "Bopshorus Innovations",
      companylogo: require("./assets/images/bs-logo.png"),
      date: "May 2018 – May 2020",
      desc: "For users seeking specialized Water-Methanol Injection kits or electronic products outside of our standard product line, we have a number of custom-design components and manufacturing services.",
      descBullets: [
        "architecting and engineering of embedded high-performance products"
      ]
    },



    {
      role: "Android Developer",
      company: "JokerMenu",
      companylogo: require("./assets/images/jokermenu-logo.png"),
      date: "March 2017 – December 2017"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "aomerk", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://freethemalloc.com/2020/08/09/perceptron",
      title: "What are perceptrons?",
      description: "Do you want to have an intuitive opinion on how Machines really learn?"
    },
    {
      url: "https://freethemalloc.com/2020/08/06/unpaired-image-to-image-translation-using-cycle-consistent-adversial-networks-what-is-cyclehan",
      title: "What is CycleGAN?",
      description: "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3243454077",
  email_address: "aliomerkeser@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "aliomerkeser"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
