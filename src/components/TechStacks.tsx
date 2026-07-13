import "./TechStacks.css";

type TechStack = {
  category: string;
  items: string[];
};

const techStack: TechStack[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "REST API", "Spring Data"],
  },
  {
    category: "Database",
    items: ["MySQL", "SQL Server", "Relational Design"],
  },
  {
    category: "Testing",
    items: ["JUnit", "Mockito", "Selenium", "Postman"],
  },
  {
    category: "Deployment",
    items: ["Git", "GitHub", "Vercel", "Railway"],
  },
];

function TechStacks() {
  return (
    <section className="tech-stack-section">
      <div className="tech-stack-content">
        <p className="project-kicker">Tech Stack</p>

        <div className="tech-stack-grid">
          {techStack.map((stack) => (
            <article className="tech-card" key={stack.category}>
              <h3>{stack.category}</h3>

              <div className="tech-tags">
                {stack.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStacks;