import electionThumbnail from '/src/assets/img/projects/elections/thumbnail.png'
import gameWebshopThumbnail from '/src/assets/img/projects/game-webshop/thumbnail.png'
import gameThumbnail from '/src/assets/img/projects/game/thumbnail.png'
import forumThumbnail from '/src/assets/img/projects/forum/thumbnail.png'
import dokkieThumbnail from '/src/assets/img/projects/dokkie/thumbnail.png'
import gazetteThumbnail from '/src/assets/img/projects/gazette/thumbnail.png'

export const projects = [
    {
        id: 1,
        title: "Elections",
        date: "September 2025 - Present",
        description: "A web application where you can view the Dutch elections from across multiple years.",
        fullDescription: `I am working on a full-stack team project about Dutch elections. The web application shows election results for 2021, 2023, and 2025, using real official XML datasets. 
        
        I was responsible for the party comparison page, letting users compare parties across multiple years, as well as for showing vote results by municipality and polling station, and developing the forum overview and home page. 
        I parsed the XML data using transformers and converted it into Java entity models with JPA/Hibernate. 
        
        On the backend, I worked with Java Spring Boot to build RESTful APIs, and on the frontend I created responsive Vue.js components with TypeScript, gaining experience in both frontend and backend development with real datasets.`,
        technologies: ["Java", "Spring Boot", "Vue.js", "TypeScript", "JPA/Hibernate", "HTML", "CSS", "Tailwind CSS", "Figma", "IntelliJ IDEA", "Git"],
        thumbnail: electionThumbnail,
    },
    {
        id: 2,
        title: "The GazettE",
        date: "April 2024",
        description: "A recreation of the official website of the Japanese rock band The GazettE.",
        fullDescription: `This is a small frontend project I created during my first year, built entirely with HTML, CSS, and TypeScript. It’s a personal remake of the website of one of my favorite bands, the GazettE. 
        
        I’ve always admired the original site for its design, animations, and visuals, so I decided to recreate it as a personal challenge. The project allowed me to deepen my understanding of frontend development while experimenting with interactive elements and styling, making it both a fun and valuable learning experience.`,
        technologies: ["TypeScript", "HTML", "CSS", "VSCode", "Git"],
        thumbnail: gazetteThumbnail,
    },
    {
        id: 3,
        title: "Game Webshop",
        date: "April 2025 - July 2025",
        description: "A web shop featuring all the games from our third project.",
        fullDescription: `In my first year, my fourth project was to create a webshop that featured all the games from our third project. This was the final project of the year and combined all the skills I had built up across the previous projects.
        
        For this project, I worked with Express.js and MySQL, and I learned more about HTTPS, API endpoints and calls, UI design, ERDs, databases, diagrams, and using external APIs. 
        
        I was responsible for developing the home page, profile page, login and register pages, the wishlist, the license page, and product reviews. I also set up a price API and deployed it using Docker.`,
        technologies: ["TypeScript", "Express.js", "MySQL", "HTML", "CSS", "Docker", "Node.js", "Tailwind CSS", "Figma", "VSCode", "Git"],
        thumbnail: gameWebshopThumbnail,
    },
    {
        id: 4,
        title: "Game",
        date: "February 2025 - April 2025",
        description: "A web-based text adventure game where players attempt to escape from prison.",
        fullDescription: `In my first year, my third project was a team project where we created a text-based adventure game. It was my first experience with game development, and it was one of the most enjoyable projects of the year because it was very different from the previous two projects. Our game was even nominated for Game of the Year in my class. 
        
        During this project, I learned how to work with pre-existing code, use a game engine, and work with API endpoints and calls. The project was mainly backend-focused using HTTPS, but I also gained experience with web components in TypeScript. 
        
        I was responsible for the entire UI, as well as the login and register system, notebook components, the cafeteria level, and the escape alleyway level. I also worked with flowcharts to design and plan the game flow.`,
        technologies: ["TypeScript", "Express.js", "MySQL", "HTML", "CSS", "Node.js", "Figma", "VSCode", "Git"],
        thumbnail: gameThumbnail,
    },
    {
        id: 5,
        title: "Code Exchange",
        date: "November 2024 - January 2025",
        description: "A platform where students can exchange code snippets and discuss programming topics.",
        fullDescription: `In my first year, my second project was a duo project called Code Exchange, a platform/forum where users can ask programming questions similar to Stack Overflow. 
        
        This project was my first time working with object-oriented programming (OOP) and using classes, as well as my first experience with databases. I learned about SQL, table relationships, ERDs, and how to design a structured data model. 
        
        The main focus of the project was to understand OOP principles, build simple backend logic, work with SQL databases, and apply the MVC architecture in a real application.`,
        technologies: ["TypeScript", "HTML", "CSS", "mySQL", "Figma", "VSCode", "Git"],
        thumbnail: forumThumbnail,
    },
    {
        id: 6,
        title: "Dokkie",
        date: "September 2024 - October 2024",
        description: "A web app for saving outings, managing participants, and splitting costs.",
        fullDescription: `In my first year, my first project was Dokkie, a web app for saving outings, managing participants, and splitting costs.
         
         During this project, I learned the fundamentals of TypeScript, such as loops, conditionals, and basic logic. I also gained experience with Git, learning how to commit, push, and collaborate using version control. 
         
         Even though design was not the main focus of the project, I still created a clean and user-friendly interface because I really enjoyed working on the visual side. 
        
         This project gave me a strong foundation in programming, version control, and thinking about user experience.`,
        technologies: ["TypeScript", "HTML", "CSS", "VSCode", "Git"],
        thumbnail: dokkieThumbnail,
    },

]