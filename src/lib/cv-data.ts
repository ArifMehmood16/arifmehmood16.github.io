export const profile = {
  name: "Arif Mehmood",
  title: "AI Engineer · LLM Applications · Backend & Cloud",
  tagline: "Production systems since 2018",
  location: "Redditch, UK",
  rightToWork:
    "Full UK right to work · UK Global Talent visa · no sponsorship required",
  phone: "+44 7361 568025",
  email: "arifmehmood9516@gmail.com",
  linkedin: "https://linkedin.com/in/aarif9516",
  linkedinLabel: "linkedin.com/in/aarif9516",
  github: "https://github.com/",
  summary:
    "In software engineering since 2018, with production systems behind me: a mobile payments app that grew to around 20,000 users, point-of-sale software running in high-volume retail chains, and a data platform live to 10 UK universities that helps academic and mental health practitioners improve student wellbeing. Now the engineer responsible for the AI and backend of a consumer health app, currently in user acceptance testing ahead of a January 2027 launch.",

  summary2:
    "Also the technical point of contact across product, QA, DevOps, brand, marketing and sales: I own the release test plan, set the infrastructure requirements and cost options with DevOps, and run the external supplier evaluations that go to leadership.",
};

export const stats = [
  {
    value: "8 years",
    label: "Software engineering across fintech, healthcare and education",
  },
  {
    value: "5 platforms",
    label: "Delivered and live in production, from first commit to handover",
  },
  {
    value: "Full stack",
    label:
      "Flutter and React front ends through Python APIs to cloud infrastructure",
  },
  {
    value: "Startup experience",
    label: "Small teams and early-stage products, owning delivery end to end",
  },
  {
    value: "AI & backend",
    label: "LLM applications, Python services and cloud infrastructure",
  },

];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "AI & LLM Engineering",
    items: [
      "LLM application design",
      "prompt engineering",
      "structured output validation",
      "grounded generation with deterministic retrieval",
      "graceful degradation and fallback design",
      "prompt-injection mitigation",
      "PII minimisation in prompts",
      "self-hosted inference (Ollama, vLLM)",
      "hosted model APIs (Anthropic)",
      "provider-agnostic model abstraction",
      "token budgeting",
      "LLM logging and latency/cost instrumentation",
    ],
  },
  {
    title: "Machine Learning & Data",
    items: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "classification",
      "feature engineering",
      "model validation",
      "SHAP explainability",
      "dataset suitability and cohort-bias assessment",
      "rules-versus-ML decision design",
      "SQL",
      "ETL pipelines",
    ],
  },
  {
    title: "Backend & Distributed Systems",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Java 17",
      "Spring Boot",
      "Spring Cloud microservices",
      "Node.js",
      "REST API design",
      "API gateway patterns",
      "RS256 JWT authentication",
      "idempotency",
      "PostgreSQL schema design",
      "DynamoDB",
      "OpenSearch",
      "audit logging and trace propagation",
    ],
  },
  {
    title: "Cloud & Delivery",
    items: [
      "AWS (Lambda, API Gateway, Cognito, DynamoDB, OpenSearch, Amplify, EC2, SQS)",
      "Azure container hosting",
      "Docker",
      "Docker Compose",
      "GitHub Actions CI/CD",
      "GitHub Container Registry",
      "SonarQube quality gates",
      "nginx reverse proxy and TLS",
      "ELK centralised logging",
      "Kibana dashboards",
      "Linux",
      "Kubernetes and Terraform (working knowledge)",
    ],
  },
  {
    title: "Cross-functional & Delivery Ownership",
    items: [
      "release test planning and QA sign-off criteria",
      "infrastructure requirements and cost options with DevOps",
      "external supplier evaluation and procurement recommendations",
      "competitor and market review",
      "requirements gathering with product and commercial teams",
      "production support and incident ownership",
      "mentoring and code review",
      "introducing Agile process and Jira",
      "documentation and team handover",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "TanStack Router",
      "MUI",
      "Ant Design",
      "Flutter client integration",
    ],
  },
];

export type Role = {
  title: string;
  company: string;
  dates: string;
  location?: string;
  product: string;
  status: string;
  scope: string;
  technologies: string[];
  bullets: { lead: string; rest: string }[];
};

export const roles: Role[] = [
  {
    title: "AI Engineer",
    company: "BioCare Ltd",
    dates: "Jan 2026 – Present",
    location: "Redditch, UK",
    product:
      "A consumer health app. Someone answers a health questionnaire and gets back a personalised report scoring nine areas of their health, with nutrition and lifestyle guidance written for their own answers. iOS, Android and web, on a Python backend.",
    status: "In user acceptance testing; launch targeted January 2027",
    scope:
      "The engineer responsible for the AI and backend of the product, and the technical point of contact across product, QA, DevOps, brand, marketing and sales.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Anthropic API",
      "Ollama",
      "vLLM",
      "scikit-learn",
      "pandas",
      "SHAP",
      "React",
      "TypeScript",
      "GitHub Actions",
      "GHCR",
      "Azure container hosting",
      "nginx",
    ],
    bullets: [
      {
        lead: "Built the part of the app that explains a person's results.",
        rest: "Guidance is chosen by rules from a library written by the company's clinical nutrition team, and only then does a language model reword it for the individual: the model can change how something is said, never what is recommended. Each section is generated and checked on its own, so if a model call fails the section falls back to the original expert wording and the person still gets a complete report.",
      },
      {
        lead: "Built the scoring engine at the centre of the product.",
        rest: "It turns a 300-question assessment into ranked scores across nine areas of health, using about 1,250 weighted question-to-area mappings taken from the company's expert model. The same answers always produce the same result, every version is kept, and automated tests check the code against the nutritionists' reference spreadsheet.",
      },
      {
        lead: "Set the privacy rules for anything that touches the model.",
        rest: "No name or email address ever goes into a prompt, free text is cleaned and length-limited, anything a user typed is handled as data rather than as instructions to the model, and every outgoing request is logged for audit with credentials stripped.",
      },
      {
        lead: "Made the AI faster and cheaper to run.",
        rest: "Split one large model call into several small parallel ones with a hard concurrency cap, and released the database connection before calling the model so a slow provider no longer ties up the pool. Moved expert-copy correction into a one-off batch job with automatic checks that reject any change to a dose, quantity or timing. Built the model layer so self-hosted and hosted models are interchangeable, with self-hosted as the default.",
      },
      {
        lead: "Steered the product away from a machine-learning-first approach.",
        rest: "I built a prototype that proved the available data had gaps for UK users, recommended an expert-rules product that could still adopt ML later, and reframed the outputs so the app scores wellbeing rather than implying diagnoses.",
      },
      {
        lead: "Act as the technical point of contact across the business.",
        rest: "Wrote the release test plan and agreed with QA what counts as working for each part of the app; set out what the platform needs from DevOps and worked through hosting and release options with them on cost; briefed product on what was feasible each cycle; and translated the app's health scores into terms brand, marketing and sales could sell against.",
      },
      {
        lead: "Run supplier evaluations and market research for the business.",
        rest: "Assessed a design agency shortlist on scope, cost and delivery risk, around £7,600 fixed against £18,000 to £31,500 modular, for a leadership procurement decision. Reviewed 12 competing products, and built the pricing-monitoring tool the sales team uses to check resellers against company pricing rules.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Cardiff University",
    dates: "Dec 2023 – Jan 2026",
    location: "Cardiff, UK",
    product:
      "Four delivered systems for government and education customers. The largest is a shared data and reporting platform that 10 universities across Wales use to submit, transform and report on shared datasets.",
    status:
      "Live in production; supporting academic and mental health practitioners across 10 universities",

    scope:
      "Architecture and delivery owner on the university platform, and developer on three further systems. Ran the handover: trained the colleagues who now support and demonstrate the platform to the universities.",
    technologies: [
      "Python",
      "FastAPI",
      "Django",
      "Java 17",
      "Spring Boot",
      "React",
      "Node.js",
      "AWS Lambda",
      "AWS Cognito",
      "OpenSearch",
      "DynamoDB",
      "AWS Amplify",
      "PostgreSQL",
      "Kibana",
      "Docker",
      "GitLab CI",
      "GitHub Actions",
      "Jira",
    ],
    bullets: [
      {
        lead: "Owned the university data platform end to end.",
        rest: "Designed the architecture, built it on AWS with event-driven processing, role-based access, and search and dashboards for reporting, released it to 10 institutions and then handed it over. My decisions, my releases, my problems to fix.",
      },
      {
        lead: "Released fortnightly for two years without taking the service down.",
        rest: "Ran two versions side by side and signalled connected clients to reload after each release, so fixes and new features shipped in working hours instead of in a maintenance window.",
      },
      {
        lead: "Chose the hosting model on evidence rather than preference.",
        rest: "Compared running it in-house against cloud on cost, growth, support effort and UK data-protection obligations, wrote up the comparison, and made the case for the option that fitted a service shared between institutions.",
      },
      {
        lead: "Introduced a way of delivering to a project that had none.",
        rest: "Brought in Jira and a working sprint and release process, documented the architecture, and trained colleagues to run, demonstrate and support the platform for external institutions.",
      },
      {
        lead: "Delivered three more systems for government and education customers.",
        rest: "A transport analytics platform for Welsh Government transport stakeholders, a data-sharing platform used by university linguistics teams that featured in a NAACL 2025 demonstration, and extensions to a cybersecurity training platform.",
      },
      {
        lead: "Wrote and taught the department's Generative AI course",
        rest: "and set up a hands-on lab so colleagues could try new tooling against real problems. Set the engineering standards across projects: test-driven development, SOLID, peer review, CI/CD and security-first design.",
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Confiz Pvt Ltd",
    dates: "Mar 2021 – Sep 2022",
    product:
      "A mobile payments app for consumers, covering top-ups, transfers and bill payments, with a back-office portal the support team used to run it.",
    status: "Live in production; grew from 2,000 beta users to around 20,000",
    scope:
      "Senior backend engineer on the payments platform. Led the production support team, led back-office delivery, and mentored two junior engineers.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "service discovery",
      "API gateway",
      "React",
      "PostgreSQL",
      "NoSQL",
      "ELK",
      "AWS EC2",
      "Docker",
      "Maven",
      "SonarQube",
      "GitHub Actions",
      "Linux",
    ],
    bullets: [
      {
        lead: "Built the backend services and APIs behind a payments app in production.",
        rest: "Improved system performance by 15% through query and service-level optimisation while the user base grew tenfold.",
      },
      {
        lead: "Split the monolith into seven services.",
        rest: "Separated telecom-operator integrations, identity verification and login, with service discovery, a single API entry point, central configuration and load balancing, which let each operator integration be released on its own.",
      },
      {
        lead: "Led the production support team,",
        rest: "chosen for it because I knew the platform best. Worked across development, QA and the customer support desk to diagnose live issues, produced the root-cause findings and designed the fixes other teams then implemented. Typical resolution went from three or four days to inside 24 hours.",
      },
      {
        lead: "Rebuilt the support team's back-office portal in React,",
        rest: "which drew 87% positive feedback from daily users. Then turned its hard-coded adverts and offers into a configurable module with its own API so support staff could run campaigns themselves.",
      },
      {
        lead: "Made code quality a gate rather than a report nobody read.",
        rest: "Put SonarQube into the build pipeline: code hotspots to zero, deployment failures down 60%. Applied OWASP and SOLID across the services, reaching 99.99% uptime.",
      },
      {
        lead: "Mentored two junior engineers",
        rest: "through their first production work, and led back-office delivery with Agile practices.",
      },
    ],
  },
  {
    title: "Software Engineer (SDET)",
    company: "Afiniti",
    dates: "Apr 2020 – Mar 2021",
    product:
      "AI software that decides how incoming customer calls are paired with contact-centre agents, sold to large enterprises.",
    status: "Live in production at enterprise customers",
    scope:
      "Test and release automation for the AI products, working alongside the QA and data teams.",
    technologies: [
      "Python",
      "JavaScript",
      "synthetic data generation",
      "Docker",
      "Linux",
      "performance testing",
      "Scrum and Kanban",
    ],
    bullets: [
      {
        lead: "Generated synthetic test data so the AI could be tested on cases the real data did not contain.",
        rest: "Wrote Python to take available volume up tenfold with controlled variation, which is how edge-case behaviour got exercised before release rather than after.",
      },
      {
        lead: "Built the automation that tested the AI products.",
        rest: "Python and JavaScript tooling that raised test coverage by 25% and cut manual testing effort by 30%.",
      },
      {
        lead: "Automated verification of the release process itself,",
        rest: "improving deployment reliability by 40% and reducing release cycle time by 20%.",
      },
      {
        lead: "Ran code reviews, wrote the team documentation and onboarded new joiners,",
        rest: "lifting code quality by 20% and halving the time a new engineer took to become productive.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Flooid UK",
    dates: "Jun 2019 – Apr 2020",
    location: "Coventry",
    product: "Point-of-sale and stock management software for retailers.",
    status: "Live in production in high-volume retail chains",
    scope:
      "Developer on till and inventory features, and on the tests and build pipeline that shipped them. Stood in as Scrum Master when the team needed unblocking.",
    technologies: [
      "Java 8",
      "Spring Boot",
      "JUnit",
      "Mockito",
      "Selenium",
      "Maven",
      "ANT",
      "Jenkins",
      "SonarQube",
      "Mercurial",
      "IBM DB2",
      "SQL",
    ],
    bullets: [
      {
        lead: "Built and extended till and inventory features",
        rest: "on a Java and Spring platform running in high-volume retail chains, delivering backlog stories inside two-week sprints.",
      },
      {
        lead: "Wrote REST APIs into the existing service architecture",
        rest: "after completing the platform's architecture onboarding, and gave story sizing and effort estimates in planning.",
      },
      {
        lead: "Wrote the unit and integration tests",
        rest: "with JUnit, Mockito and Selenium, widening regression coverage and catching defects before they reached acceptance testing.",
      },
      {
        lead: "Cleared SonarQube code smells and vulnerability blockers,",
        rest: "lifting the maintainability rating, and kept the build pipeline green across ANT, Maven and Jenkins.",
      },
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Grid Systems / Global Rescue LLC",
    dates: "Sep 2018 – Jun 2019",
    product:
      "Membership and emergency-response systems for a travel risk and medical assistance business.",
    status: "Live in production",
    scope:
      "Java developer on reporting, mapping and integration features. Reviewed code and QA test cases.",
    technologies: [
      "Java EE",
      "EJB",
      "Hibernate",
      "JSF",
      "RichFaces",
      "MySQL",
      "Maven",
      "SOAP",
      "REST",
    ],
    bullets: [
      {
        lead: "Built and maintained the Java EE, EJB and Hibernate functionality",
        rest: "behind a live membership and emergency-response platform.",
      },
      {
        lead: "Turned business and data requirements into the reports the operations team used daily,",
        rest: "writing and optimising the underlying MySQL queries.",
      },
      {
        lead: "Built the mapping and geolocation features and the web service integrations,",
        rest: "and reviewed peers' code and QA's test cases before sign-off.",
      },
    ],
  },
];

export const projects = [
  {
    name: "UniqueMe personalised health platform",
    org: "BioCare (UK) Ltd",
    status: "In user acceptance testing; launch targeted January 2027",
    link: "https://www.biocare.co.uk/",
    linkLabel: "biocare.co.uk",
    description:
      "A consumer health product delivered as Flutter apps on iOS and Android with a web companion, on a Python backend. Someone answers a wellbeing assessment and gets back a personalised report across nine health areas with nutrition and lifestyle guidance written for their own answers. The versioned, rule-based scoring engine (300 questions, ~1,250 weighted question-to-area mappings) and the AI-generated guidance are services inside it.",
    outcome:
      "The AI and backend behind a consumer health product launching January 2027.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Flutter",
      "LLM application design",
      "pytest",
    ],
  },
  {
    name: "MetaphorShare",
    org: "Cardiff University · open source",
    status: "Live; open source; NAACL 2025 demonstration",
    link: "https://www.metaphorshare.com/",
    linkLabel: "metaphorshare.com",
    extraLinks: [
      {
        href: "https://arxiv.org/abs/2411.18260",
        label: "Research paper (arXiv:2411.18260) ↗",
      },
    ],
    description:
      "An open-source community platform for the NLP research community, used by university linguistics teams to publish, share and search metaphor datasets. Built on AWS with search and role-based access.",
    outcome:
      "Published as a research paper and featured in a NAACL 2025 demonstration.",
    tech: ["Python", "React", "AWS Lambda", "OpenSearch", "DynamoDB"],
  },

  {
    name: "SevRes shared data platform",
    org: "Cardiff University",
    status: "Live in production; 10 universities",
    link: "https://sevres.co.uk/authentication/sign-in",
    linkLabel: "sevres.co.uk",
    description:
      "The shared data and reporting platform 10 universities across Wales use to submit, transform and report on shared datasets. Event-driven processing on AWS with role-based access, search and dashboards.",
    outcome:
      "Used by academic and mental health practitioners across 10 universities to understand student wellbeing data and act on it, improving support for students.",

    tech: [
      "Python",
      "FastAPI",
      "React",
      "AWS Lambda",
      "Cognito",
      "OpenSearch",
      "Kibana",
    ],
  },
  {
    name: "Trafred",
    org: "Cardiff University · Welsh Government",
    status: "Live in production",
    link: "https://trafred.cardiff.ac.uk/",
    linkLabel: "trafred.cardiff.ac.uk",
    description:
      "A transport analytics platform for Welsh Government transport stakeholders, turning collected datasets into reporting and visualisations decision-makers can use.",
    outcome: "In use by Welsh Government transport stakeholders.",
    tech: ["Python", "Django", "React", "PostgreSQL", "Docker"],
  },
  {
    name: "SecMoF",
    org: "Cardiff University",
    status: "Open source",
    link: "https://github.com/CardiffUniCOMSC/SecMoF",
    linkLabel: "github.com/CardiffUniCOMSC/SecMoF",
    description:
      "A cybersecurity training and modelling framework. I built extensions to the platform used to run security exercises and teaching scenarios.",
    outcome: "Published on GitHub under Cardiff University COMSC.",
    tech: ["Python", "Docker", "Linux"],
  },
];


export const education = [
  {
    title: "MSc Data Science and Analytics, Distinction",
    org: "Cardiff University",
    dates: "Sep 2022 – Sep 2023",
    detail:
      "Machine learning, statistical analysis, neural networks, data wrangling, text processing, databases, visualisation. Python, R.",
  },
  {
    title: "BEng Computer Engineering",
    org: "National University of Sciences and Technology (NUST)",
    dates: "Sep 2014 – Jun 2018",
    detail: "",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    dates: "June 2022",
    detail: "",
  },
];
