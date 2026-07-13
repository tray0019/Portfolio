import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Designed and built by Rustom Trayvilla</p>

      <div className="footer-links">

        <a
          href="https://github.com/tray0019"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="mailto:rtrayv@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;