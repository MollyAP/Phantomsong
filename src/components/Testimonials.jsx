export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials" aria-label="Testimonials">
      <div className="container">
        <span className="tag">Nice things people say</span>
        <div className="grid" style={{ marginTop: 18 }}>
          <blockquote className="quote">
            <p>“I sell bead bracelets at kids’ vendor fairs. Phantomsong made me a real website, and now parents and organizers take me seriously. I look more professional than the other kids and I’m selling out faster.”</p>
            <div className="meta">
              <span className="avatar">
                <img src="https://i.imgur.com/hHMhJdt.png" alt="Portrait of Samantha P." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
              <span>Samantha P. — Voidbox</span>
            </div>
          </blockquote>

          <blockquote className="quote">
            <p>“I was stuck on Redbubble where everything felt generic. Phantomsong moved me to my own site and built it around me, my colors, my personality, my style. Customers land on it and say, ‘This is so you,’ and know they’re in my shop, not a dime-a-dozen marketplace.”</p>
            <div className="meta">
              <span className="avatar">
                <img src="https://i.imgur.com/Yng6d3Z.png" alt="Portrait of Priya M." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
              <span>Nicole K. — N.K. Art</span>
            </div>
          </blockquote>

          <blockquote className="quote">
            <p>“Phantomsong turned my CV into a clean resume site: experience, skills, and a gallery in one link. It prints perfectly and looks like me.”</p>
            <div className="meta">
              <span className="avatar">
                <img src="https://picsum.photos/80?random=33" alt="Portrait of Leo V." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
              <span>Amaya C. — Amaya Foods</span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
