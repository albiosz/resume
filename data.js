const data = {
  header: {
    name: "Albert",
    surname: "Szulc",
    birthday: "17.02.1999",
    introduction: "I am a software developer focused on developing <b>clean</b>, <b>well-structured</b> and <b>extensible software</b>. Believing in the power of <b>collaboration</b>, I excel in team environments that leverage collective expertise. With a solid knowledge of <b>server-side</b> web development, I am enthusiastic about applying and advancing these skills in my future projects, while adhering to <b>modern standards</b> and <b>best practices</b>.",
  },

  sidebar: {
    email: "szulcalbert@gmail.com",
    github: "github.com/albiosz",
    linkedIn: "linkedin.com/in/a-szulc"
  },

  languages: [
    {
      language: "English",
      level: "Fluent (C1)"
    },
    {
      language: "German",
      level: "Fluent (C1)"
    },
    {
      language: "Polish",
      level: "Native speaker"
    }
  ],

  skills: [
    {
      title: "backend",
      skills: ["Go", "Java"],
    }, {
      title: "database",
      skills: ["SQL", "Relational Databases", "Data Modeling", "PostgreSQL"],
    }, {
      title: "operating systems",
      skills: ["Linux"],
    }, {
      title: "testing",
      skills: ["Unit", "Integration"],
    }, {
      title: "miscellaneous",
      skills: ["Git", "Docker", "REST"],
    }, {
      title: "frontend", 
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "Bootstrap"],
    }
  ],

  experience: [
    {
      position: "Software Developer",
      company: "Adgency",
      location: "Bielefeld, Germany",
      start: "05.2022",
      end: "08.2024",
      responsibilities:
        `<ul>
          <li>Developing a <b>full-stack</b> web application from scratch, involved in <b>project architecture</b> decision making processes. </li>
          <li>Gathered <b>requirements</b> from decision makers and created a structured documentation of these decisions. </li>
          <li>Implemented <b>50+ REST</b> endpoints using Repository, Service, Controller Separation of Concerns design with <b>80%+ test coverage</b> - <b>Go</b> </li>
          <li>Designed (<b>ERP Diagram</b>) and implemented a relational database with <b>30+ tables</b> - <b>PostgreSQL</b> </li>
          <li>Wrote <b>integration tests</b>, thereby ensuring compliance with business requirements. </li>
          <li>Reduced code duplication by creating a separate <b>Go module</b> for code used by all projects in the company</li>
          <li>Prepared Docker containers for development, test and production environments - <b>Docker</b>, <b>Linux</b> </li>
          <li>Suggested and implemented <b>CI</b> action to automatically test code before merging, resulting in significantly fewer bugs in the production code - <b>Github Actions</b> </li> 
          <li>Implemented API plugin to standardize and simplify HTTP requests to the backend - <b>JavaScript</b>, <b>TypeScript</b>, <b>Vue.js</b> </li> 
          <li>Set up <b>database migration</b> tool - Liquibase </li>
        </ul>`
    },
    {
      position: "Programming Intern",
      company: "Capgemini",
      location: "Poznań, Poland",
      start: "08.2021", 
      end: "09.2021",
      responsibilities:
        `<ul>
          <li>Deepened my knowledge of Git by working on a large scale project </li>
          <li>Completed minor tasks in an agile team under experienced developers' supervision</li>
        </ul>
        `
    },
  ],

  education: [
    {
      career: "M.Sc. in Software Design & Engineering",
      university: "FH Campus Wien",
      start: "09.2024",
      end:"Present",
      description:
        `
        <p> <b>Program Focus: </b> Gaining comprehensive expertise in all critical stages of the data development process, from project planning to maintenance.
        <p> <b>Most relevant courses (taken up to now):</b> Advanced Software Development, Software Architectures, Cloud Computing, Requirements Engineering
        `
    },
    {
      career: "B.Eng. in Computer Science",
      university: "Poznań University of Technology",
      start: "10.2018",
      end: "02.2022",
      description:
        `
          <p> <b>Bachelor Thesis</b>: Developed a front-end web application using React that allows users to track the real-time position of their vehicles on an interactive map. </p>
          <p> <b>Most relevant courses:</b> Algorithms and Data Structures, Operating Systems, Object Oriented Programming, Database Systems, Computer Networks, Software Engineering, Advanced Internet Applications. </p>
        `
    },
  ],

  awards: [
    "<b> Scholarship </b> for the top 10% of students at the Faculty of Computer Science | Poznan University of Technology",
  ],
  
  studentExchange: [
    "<b> Bielefeld University </b>",
    "03.2021 - 02.2022",
    "<b>Most relevant courses:</b> Cryptography, Cloud Computing, Data Mining. </p>"
  ]
}


function renderPage(data) {
  let template = document.getElementById('index').innerHTML;
  let rendered = Mustache.render(template, data);
  document.getElementById('index').innerHTML = rendered;
}

renderPage(data)