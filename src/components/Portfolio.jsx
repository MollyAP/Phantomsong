"use client";
import { useEffect, useRef, useState } from "react";

const sites = [
  { title: "Example: My Project A", url: "https://mollyap.github.io/voidbox/" },
  { title: "A Local Demo", url: "https://mollyap.github.io/NKArt/" },
  { title: "Another Site", url: "https://mollyap.github.io/calderkitchen/" },
];

const logos = [
  { title: "Byte Sized Courses", client: "For CodeCrew", icon: "https://i.imgur.com/wm9eTdR.png", images: ["https://i.imgur.com/GCkSiUk.png"] },
  { title: "Beta Studio", client: "For Beta Studio", icon: "https://imgur.com/Yng6d3Z.png", images: ["https://i.imgur.com/GCkSiUk.png"] },
];

export default function Portfolio() {
  // Website preview
  const [previewUrl, setPreviewUrl] = useState(null);

  // Logo preview
  const [logoOpen, setLogoOpen] = useState(false);
  const [activeLogo, setActiveLogo] = useState(null);
  const [activeLogoImg, setActiveLogoImg] = useState(null);

  // Carousel refs/state
  const caroRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  function updateArrows() {
    const el = caroRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 1;
    setHasOverflow(el.scrollWidth > el.clientWidth + 4);
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft < max);
  }

  useEffect(() => {
    const el = caroRef.current;
    if (!el) return;
    updateArrows();
    const onScroll = () => updateArrows();
    const onResize = () => updateArrows();
    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setPreviewUrl(null);
        setLogoOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const openLogo = (l) => {
    setActiveLogo(l);
    const stack = [l.icon, ...(l.images || [])];
    setActiveLogoImg(stack[0]);
    setLogoOpen(true);
  };

  const scrollBy = (dir) => {
    const el = caroRef.current;
    if (!el) return;
    const amount = Math.max(1, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section" id="work" aria-label="Featured work">
      <div id="portfolio">
        <div className="wrap">
          {/* Portfolio header with tag */}
          <div className="section-head">
            <div>
              <span className="tag">Portfolio</span>
            </div>
            <a href="#contact" className="btn btn-ghost">Start your project</a>
          </div>

          {/* Web Design Grid */}
          <h1>Web Design</h1>
          <p className="lead">Click any square to open an interactive preview!</p>

          <div className="grid" aria-live="polite">
            {sites.map((s) => {
              const thumb = s.thumb || `https://image.thum.io/get/width/400/${s.url}`;
              return (
                <button
                  key={s.url}
                  className="card"
                  aria-haspopup="dialog"
                  onClick={() => setPreviewUrl(s.url)}
                  title={`${s.title}\n${s.url}`}
                >
                  <div className="thumb" style={{ backgroundImage: `url(${thumb})` }} />
                  <div className="overlay">
                    <div className="title">{s.title}</div>
                    <div className="url">{s.url}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Website Preview Modal */}
        <div
          className={`preview ${previewUrl ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!previewUrl}
          onClick={(e) => e.currentTarget === e.target && setPreviewUrl(null)}
        >
          <div className="panel" role="document">
            <div className="toolbar">
              <button onClick={() => previewUrl && window.open(previewUrl, "_blank")}>↗ Open</button>
              <button className="close-btn" onClick={() => setPreviewUrl(null)}>✕</button>
            </div>
            <div className="frame-wrap">
              {previewUrl && (
                <iframe
                  className="demo"
                  title="Website preview"
                  src={previewUrl}
                  sandbox="allow-scripts allow-forms allow-pointer-lock allow-same-origin allow-popups"
                />
              )}
            </div>
          </div>
        </div>

        {/* Logo Design Section */}
        <div className="wrap" style={{ marginTop: 18 }}>
          <h1>Logo Design</h1>
          <p className="lead">Click any logo to see its design process!</p>

          <div className="carousel-wrap">
            {hasOverflow && (
              <button
                className="caro-arrow caro-prev"
                aria-label="Scroll left"
                disabled={!canPrev}
                onClick={() => scrollBy(-1)}
              >
                ‹
              </button>
            )}

            <div id="logo-carousel" className="carousel" ref={caroRef} aria-label="Logo carousel">
              {logos.map((logo) => (
                <button key={logo.title} onClick={() => openLogo(logo)}>
                  <img src={logo.icon} alt={logo.title} />
                </button>
              ))}
            </div>

            {hasOverflow && (
              <button
                className="caro-arrow caro-next"
                aria-label="Scroll right"
                disabled={!canNext}
                onClick={() => scrollBy(1)}
              >
                ›
              </button>
            )}
          </div>

          {/* Logo Preview Modal */}
          <div
            className={`logo-preview ${logoOpen ? "open" : ""}`}
            aria-modal="true"
            aria-hidden={!logoOpen}
            onClick={(e) => e.currentTarget === e.target && setLogoOpen(false)}
          >
            <div className="logo-panel" role="document">
              <div className="logo-left">
                {activeLogoImg && <img id="logo-main" src={activeLogoImg} alt="Logo preview" />}
              </div>
              <div className="logo-right">
                <h1 id="logo-title">{activeLogo?.title}</h1>
                <p id="logo-client">{activeLogo?.client}</p>
                <hr />
                <div id="logo-thumbs" className="logo-thumbs">
                  {Array.from(
                    new Set([...(activeLogo?.images || []), activeLogo?.icon].filter(Boolean))
                  ).map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${activeLogo?.title} option`}
                      onClick={() => setActiveLogoImg(src)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button className="close-btn" aria-label="Close logo preview" onClick={() => setLogoOpen(false)}>✕</button>
          </div>
        </div>
      </div>
    </section>
  );
}
