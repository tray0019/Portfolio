import { useState } from "react";
import "./Project.css";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectPreview = {
  title: string;
  description: string;
  images: ProjectImage[];
};


const projectPreviews: ProjectPreview[] = [
  {
    title: "Dashboard / Home",
    description:
      "Main screen where users can view their goals, progress, and activity overview.",
    images: [
      {
        src: "/images/dashboard-preview.png",
        alt: "Goal Progress App dashboard",
      },
    ],
  },
  {
    title: "Goal Management",
    description:
      "Users can create, edit, delete, and manage personal goals.",
    images: [
      {
        src: "/images/goal-details-preview.png",
        alt: "Goal details page",
      },
    ],
  },
  {
    title: "Progress Entries",
    description:
      "Users can add progress updates, validate entry limits, and track completion history.",
    images: [
      {
        src: "/images/progress-update-preview.png",
        alt: "Progress update screen",
      },
    ],
  },
  {
    title: "Mobile Version",
    description:
      "The app is being expanded with React Native for iOS and Android support.",
    images: [
      {
        src: "/images/react-native-preview.png",
        alt: "React Native mobile preview",
      },
    ],
  },
];


function Project() {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const activePreview = projectPreviews[activePreviewIndex];

  function handleNextPreview() {
    setActivePreviewIndex((prevIndex) =>
      prevIndex === projectPreviews.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePreviousPreview() {
    setActivePreviewIndex((prevIndex) =>
      prevIndex === 0 ? projectPreviews.length - 1 : prevIndex - 1
    );
  }

  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        <div className="project-heading">
          <p className="project-kicker">Projects</p>
          <h1>Goal Progress App</h1>
           <p className="project-date">November 2025 – Present</p>
          <p className="project-description">
            A full-stack goal tracking application built to show that I can
            build, test, and deploy real applications.
          </p>

          <div className="project-links">
  <a
    href="https://globallegends.app/recruiters"
    target="_blank"
    rel="noreferrer"
    className="project-primary-link"
  >
    View Case Study
  </a>

  <a
    href="https://globallegends.app"
    target="_blank"
    rel="noreferrer"
    className="project-secondary-link"
  >
    View Live App
  </a>
</div>
        </div>
        

        <div className="project-layout">
          <div className="project-preview-card">
            <div className="project-image-scroll">
              {activePreview.images.map((image) => (
                <div className="project-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} className="project-image" />
                </div>
              ))}
            </div>
          </div>

          <div className="project-content">
            <p className="project-counter">
              {activePreviewIndex + 1} / {projectPreviews.length}
            </p>

            <h2>{activePreview.title}</h2>
            <p>{activePreview.description}</p>
            

            <div className="project-controls">
              <button type="button" onClick={handlePreviousPreview}>
                Previous
              </button>

              <button type="button" onClick={handleNextPreview}>
                Next
              </button>
            </div>

            <div className="project-dots">
              {projectPreviews.map((preview, index) => (
                <button
                  key={preview.title}
                  type="button"
                  className={index === activePreviewIndex ? "active" : ""}
                  onClick={() => setActivePreviewIndex(index)}
                  aria-label={`Show ${preview.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Project;