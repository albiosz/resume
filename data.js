const data = {
  header: {
    name: "Albert",
    surname: "Szulc",
    birthday: "17.02.1999",
    introduction: "Software developer focused on developing <b>clean</b>, <b>well-structured</b> and <b>extensible software</b>. Believing in the power of <b>collaboration</b>, I excel in team environments that leverage collective expertise. With a solid knowledge of <b>server-side</b> web development, I am enthusiastic about applying and advancing these skills in my future projects, while adhering to <b>modern standards</b> and <b>best practices</b>.",
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
      skills: ["Go", "Java", "Spring"],
    }, {
      title: "database",
      skills: ["SQL", "Relational Databases", "Data Modeling", "PostgreSQL"],
    }, {
      title: "operating systems",
      skills: ["Linux"],
    }, {
      title: "Containerization",
      skills: ["Docker", "Kubernetes"]
    }, {
      title: "testing",
      skills: ["Unit", "Integration"],
    }, {
      title: "miscellaneous",
      skills: ["Git", "REST"],
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
          <li>Played a key role in deciding the architecture of a <b>full-stack</b> web application with a three-tier structure, resulting in an easily maintainable and extensible system. </li>
          <li>Collaborated with stakeholders to gather requirements; initiated <b>structured documentation</b> of those decisions, ensuring clear communication and better teamwork. </li>
          <li>Developed <b>50+ REST</b> endpoints in <b>Go</b> using controller-service-repository pattern, ensuring easily modifiable and maintainable code. </li>
          <li>Created <b>unit</b> and <b>integration tests</b> concurrently with production code for backend services, achieving <b>80%+ test coverage</b> and significantly improving system reliability. </li>
          <li>Designed (<b>ERP Diagram</b>) and implemented a relational database with <b>30+ tables</b> - <b>PostgreSQL</b> </li>
          <li>Reduced code duplication by creating a separate <b>Go module</b> for code used by all projects in the company. </li>
          <li>Prepared <b>Docker</b> containers for development, test and production environments, creating a unified setup across all developers and reducing environment configuration issues. </li>
          <li>Managed <b>Git</b> repositories and served as the go-to person for resolving complex merge conflicts, ensuring smooth collaboration. </li>
          <li>Introduced stacked diffs, allowing developers to work on changes independently of PR merges into the main branch, resulting in <b>faster development cycles</b>.</li>
          <li>Suggested and implemented <b>CI pipeline</b> to automate execution of tests before merging, resulting in significantly fewer bugs in the production code - <b>Github Actions</b> </li> 
          <li>Implemented API plugin to standardize and simplify HTTP requests to the backend - <b>TypeScript</b>, <b>Vue.js</b> </li> 
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
          <li>Enhanced <b>Git</b> proficiency by working on a large scale project. </li>
          <li>Completed minor tasks in an agile team under experienced developers' supervision. </li>
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
          <p> <b>Most relevant courses:</b> Algorithms and Data Structures, Operating Systems, Object Oriented Programming, Database Systems, Computer Networks, Software Engineering, Advanced Internet Applications, Cloud Computing, Cryptography. </p>
        `
    },
  ],

  sideProjects: [
    '<a href="https://github.com/albiosz/honeycombs" target="_blank"> honeycombs </a> (<b>REST, Java, Spring, Docker</b>, JWT, JUnit)',
    '<a href="https://github.com/albiosz/go-rest-reference" target="_blank">go-rest </a> (<b>REST, Go</b>)',
  ],

  awards: [
    "<b> Scholarship </b> for the top 10% of students at the Faculty of Computer Science | Poznan University of Technology",
  ],
  
  studentExchange: [
    "<b> Bielefeld University </b>",
    "03.2021 - 02.2022"
  ]
}


function renderPage(data) {
  let template = document.getElementById('index').innerHTML;
  let rendered = Mustache.render(template, data);
  document.getElementById('index').innerHTML = rendered;
}

renderPage(data)