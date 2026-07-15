import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Designed and built by Rustom Trayvilla</p>

      <div className="footer-right">
        <a
          href="https://github.com/tray0019"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="mailto:rtrayv@gmail.com">Email</a>

        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#tech-stacks">Tech Stacks</a>
      </div>
    </footer>
  );
}

export default Footer;