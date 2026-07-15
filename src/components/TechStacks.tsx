import "./TechStacks.css";

type TechStack = {
  category: string;
  items: string[];
};

const techStack: TechStack[] = [
  {
    category: "Development Tools",
    items: ["VS Code", "IntelliJ IDEA", "MySQL Workbench","Expo Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "REST API", "Spring Data"],
  },
  {
    category: "Database",
    items: ["MySQL", "SQL Server", "Oracle SQL", "Relational Design"],
  },
  {
    category: "Testing",
    items: ["JUnit", "Mockito", "Selenium", "Postman"],
  },
  {
    category: "Deployment",
    items: ["Git", "GitHub", "Vercel", "Railway"],
  },
  {
  category: "Creative Tools",
  items: ["Photoshop", "Premiere Pro"],
}
];

function TechStacks() {
  return (
    <section className="tech-stack-section" id="tech-stacks">
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