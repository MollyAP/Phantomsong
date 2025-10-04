export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container grid">
        <div>
          <div className="brand" style={{ marginBottom: 6 }}>
            <div className="brand-logo">Ps</div> Phantomsong
          </div>
          <div style={{ color: "var(--muted)" }}>Millington, Tennessee</div>
        </div>
        <div>
          <strong>Navigate</strong><br />
          <a href="#work">Portfolio</a> · <a href="#services">Services</a> · <a href="#testimonials">Testimonials</a> · <a href="#about">About</a>
        </div>
        <div>
          <strong>Contact</strong><br />
          <a href="mailto:contact@phantomsong.net">contact@phantomsong.net</a>
        </div>
      </div>
    </footer>
  );
}
