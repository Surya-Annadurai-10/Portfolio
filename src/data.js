import html from "./assets/html.jpg";
import css from "./assets/css.jpg";
import js from "./assets/javascript.jpg";
import react from "./assets/react.svg";
import firebase from "./assets/firebase.png";
import nodejs from "./assets/nodejs.svg";
import mongodb from "./assets/mongodb.svg";
import expressjs from "./assets/expressjs.svg";
import tailwindcss from "./assets/Tailwind_CSS.png";
import typescript from "./assets/typescript.png";
import redux from "./assets/redux.svg";
import java from "./assets/java.svg";
import git from "./assets/git.png";
import github from "./assets/Github.png";
import expense from "./assets/projectsImg/expense.png";
import codepen from "./assets/projectsImg/codepen.png";
import googleDrive from "./assets/projectsImg/googleDrive.png";
import Trelloimg from "./assets/projectsImg/trello.png";
import exercise from "./assets/projectsImg/exercise.png";
import sunEstates from "./assets/projectsImg/sunEstates.png";

export const about =
  "I’m Surya Annadurai, an aspiring Full Stack Developer passionate about crafting seamless, high-impact digital solutions. With a deep drive for innovation and creativity, I blend intuitive design with robust functionality to build immersive user experiences. I thrive on solving complex challenges, optimizing performance, and pushing the boundaries of modern development. Committed to excellence, I believe in transforming ideas into reality through clean, efficient, and scalable code. Let’s build the future, one innovation at a time.🚀";

export const skills = [
  {
    img: html,
    heading: "HTML",
  },
  {
    img: css,
    heading: "CSS",
  },
  {
    img: tailwindcss,
    heading: "TAILWIND CSS",
  },
  {
    img: js,
    heading: "JAVASCRIPT",
  },
  {
    img: typescript,
    heading: "TYPESCRIPT",
  },
  {
    img: java,
    heading: "JAVA",
  },
  {
    img: react,
    heading: "REACT JS",
  },
  {
    img: redux,
    heading: "REDUX",
  },
  
  {
    img: nodejs,
    heading: "NODE JS",
  },
  {
    img: expressjs,
    heading: "EXPRESS JS",
  },
  {
    img: mongodb,
    heading: "MONGO DB",
  },
  {
    img: firebase,
    heading: "FIREBASE",
  },
  {
    img: expressjs,
    heading: "EXPRESS JS",
  },
  {
    img: github,
    heading: "GITHUB",
  },
];

export const projectsData = [

  
    {
       img: sunEstates,
       name: "Sun Estates",
       tech: [react, tailwindcss, nodejs , mongodb , expressjs],
       description: `Sun Estates is a modern, full-featured real estate platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse and view property listings, locate them via interactive maps, and securely connect with landlords or make purchases. It’s responsive across mobile, tablet, and desktop screens.`,
       hostLink: "https://real-estate-broker-app-mern.onrender.com/",
       githubLink: "https://github.com/Surya-Annadurai-10/Real_Estate_Broker_App_MERN",
     }
   ,
     {
        img: codepen,
        name: "CodePen AI",
        tech: [react, tailwindcss, firebase],
        description: `CodePen AI is an innovative web-based coding environment designed for practicing and experimenting with HTML, CSS, and JavaScript in real time. Built using React.js and styled with TailwindCSS, it features an interactive workspace with adjustable panels and live previews, making it easy for developers to visualize their code in action.
    
    The platform is powered by Firebase Authentication, allowing secure sign-ins via email/password, Google, and GitHub. It also integrates Firestore for seamless data storage, enabling users to save and manage their projects effortlessly.
    
    To enhance the user experience, Redux Toolkit is used for efficient state management, ensuring smooth interactions across the app. Additionally, AI-powered assistance provides intelligent suggestions and pre-built templates to accelerate development.
    
    With full mobile responsiveness and planned GSAP animations, CodePen AI is a dynamic coding playground that fosters creativity and innovation for developers of all levels. 🚀`,
        hostLink: "https://react-code-pen-clone-nine.vercel.app/home/trending",
        githubLink: "https://github.com/Surya-Annadurai-10/React_CodePen_Clone",
      }
    ,
    {
        img: googleDrive,
        name: "Google Drive Clone",
        tech: [react ,tailwindcss, firebase ],
        description:
          "Google Drive Clone is a cloud storage web application that allows users to store and manage any type of files with full CRUD (Create, Read, Update, Delete) operations. The application also features Gemini AI-powered Google Notes, MyTasks for task management, and Google Calendar integration. It is built using Firebase for database and storage, Redux for state management, and follows a responsive design approach with minor usage of Tailwind CSS and modular CSS for styling.",
        hostLink:
          "https://react-geekathon-google-drive-clone.vercel.app",
        githubLink:
          "https://github.com/Surya-Annadurai-10/React_Geekathon_GoogleDrive_Clone",
      },
        {
    img: exercise,
    name: "Physical Health Website",
    tech: [react],
    description:
      "Your Physical Health website is a React-based platform that provides valuable health-related insights and resources. It leverages RapidAPI for real-time data fetching, ensuring users get up-to-date information. The site features pagination for smooth navigation and an organized browsing experience. Designed for accessibility and responsiveness, it caters to users across all devices. This platform empowers individuals to make informed health decisions with ease. 🚀",
    hostLink:
      "https://react-day9-cw-physical-health-website.vercel.app/",
    githubLink:
      "https://github.com/Surya-Annadurai-10/React_Day9_CW_Physical_Health_Website",
  },
 

  {
    img: Trelloimg,
    name: "Trello Clone",
    tech: [react],
    description:
      "My Trello Clone is a task management app with drag-and-drop functionality for seamless task organization. It supports CRUD operations, allowing users to create, update, delete, and reorder tasks effortlessly. Built with React.js, it ensures a smooth and responsive user experience. Firestore handles real-time data storage, keeping tasks synchronized across devices. This intuitive and efficient tool helps streamline workflows for personal and team productivity. 🚀",
    hostLink:
      "https://react-trello-clone-alpha.vercel.app/",
    githubLink:
      "https://github.com/Surya-Annadurai-10/React_Trello_Clone",
  },
   {
    img: expense,
    name: "Expense Tracker",
    tech: [html, css, js],
    description:
      "Smart Expense Tracker is an AI-powered finance management app built with HTML, CSS, and JavaScript. It helps you track expenses, set budgets, and analyze spending patterns effortlessly. With AI-driven insights and interactive charts, you can make smarter financial decisions. Stay on top of your expenses with a clean, user-friendly interface!",
    hostLink:
      "https://surya-annadurai-10.github.io/JS_Geekathon_Expense_Tracker_App/landingPage/landing.html",
    githubLink:
      "https://github.com/Surya-Annadurai-10/JS_Geekathon_Expense_Tracker_App",
  },

 
  
];
