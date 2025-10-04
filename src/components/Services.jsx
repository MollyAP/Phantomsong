export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="tag">What we do</span>
            <h2>Design that moves people... and metrics.</h2>
            <p>A compact, high-impact set of services for founders and small teams.</p>
          </div>
          <a href="#contact" className="btn btn-ghost">Get a quote</a>
        </div>

        <div className="grid" style={{ marginTop: 24 }}>
          <article className="card">
            <span className="tag">Web</span>
            <h3>Responsive Websites</h3>
            <p>Fast, accessible, SEO-ready sites with an easy CMS we configure for you—no coding required.</p>
          </article>
          <article className="card">
            <span className="tag">Brand</span>
            <h3>Identity &amp; Logo</h3>
            <p>Distinctive logos, color systems, and brand kits for every touchpoint.</p>
          </article>
          <article className="card">
            <span className="tag">Visual</span>
            <h3>Product &amp; Promo</h3>
            <p>Mockups, packaging, and social visuals that look crisp on any screen.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
