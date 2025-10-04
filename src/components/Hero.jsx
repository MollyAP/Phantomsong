export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-wrap">
        <div className="copy">
          <span className="kicker tag">Creative Studio</span>
          <h1>
            We build brands &amp; websites that tell your story clearly. We don’t just create. We connect.
          </h1>
          <p>
            From visual identity to fully-responsive websites and product visuals, we help small teams look
            enterprise-level without the enterprise price tag.
          </p>
          <div className="actions">
            <a href="#contact" className="btn btn-primary">Free 15-minute consultation</a>
            <a href="#work" className="btn btn-ghost">See recent projects</a>
          </div>
        </div>
        <div className="media" aria-hidden="true">
          <img src="https://picsum.photos/960/720?random=12" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
