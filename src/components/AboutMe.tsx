import "./AboutMe.css";

type SkillCard = {
  title: string;
  items: string[];
};

type FlowSectionProps = {
  title: string;
  cards: SkillCard[];
};

const sections: FlowSectionProps[] = [
  {
    title: "Build Apps",
    cards: [
      {
        title: "Database",
        items: ["MySQL", "SQL Server", "Oracle"],
      },
      {
        title: "Backend",
        items: ["Java", "Spring Boot", "Spring Data", "REST API"],
      },
      {
        title: "Frontend",
        items: ["React", "React Native", "Next.js", "TypeScript"],
      },
    ],
  },
  {
    title: "Test Apps",
    cards: [
      {
        title: "Unit Testing",
        items: ["JUnit", "Mockito"],
      },
      {
        title: "Automation",
        items: ["Selenium WebDriver", "Regression Tests"],
      },
      {
        title: "Platforms",
        items: ["Web", "Mobile", "Desktop"],
      },
    ],
  },
  {
    title: "Deploy Apps",
    cards: [
      {
        title: "Version Control",
        items: ["Git", "GitHub"],
      },
      {
        title: "Hosting",
        items: ["Vercel", "Railway"],
      },
      {
        title: "Workflow",
        items: ["Build", "Deploy", "Document"],
      },
    ],
  },
];

function FlowSection({ title, cards }: FlowSectionProps) {
  return (
    <article className="about-section">
      <h2>{title}</h2>

      <div className="skill-flow">
        {cards.map((card, index) => (
          <div className="flow-item" key={card.title}>
            <div className="skill-card">
              <h3>{card.title}</h3>

              {card.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {index < cards.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </article>
  );
}

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <p className="project-kicker">About Me</p>

        {sections.map((section) => (
          <FlowSection
            key={section.title}
            title={section.title}
            cards={section.cards}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutMe;