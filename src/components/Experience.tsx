import "./Experience.css";

type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  tags: string[];
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Quality Control Tester (Co-op)",
    company: "Government of Canada - RCMP",
    date: "May 2024 - April 2025",
    tags: ["QA Testing", "Azure DevOps", "Regression Testing", "Defect Tracking"],
    bullets: [
      "Executed manual, smoke, regression, and functional test cases for a government platform.",
      "Logged, tracked, and verified software defects using Azure DevOps.",
      "Documented test steps, defect reproduction details, expected results, and actual results.",
      "Collaborated with developers and QA team members during release testing and defect validation.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Grateful Living Care Services",
    date: "2026 - Present",
    tags: ["Next.js", "Vercel", "Responsive Design", "Client Work"],
    bullets: [
      "Redeveloped a WordPress website into a custom Next.js application.",
      "Built responsive layouts, interactive UI components, forms, and client-requested updates.",
      "Deployed staging versions through Vercel for client review and feedback.",
      "Troubleshot layout, responsiveness, performance, and deployment issues using browser developer tools.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience">
      <div className="experience-content">
        <h1>Experience</h1>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.role}>
              <div className="experience-header">
                <div>
                  <h2>{experience.role}</h2>
                  <p>{experience.company}</p>
                </div>

                <span className="experience-date">{experience.date}</span>
              </div>

              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;