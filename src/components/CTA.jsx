"use client";
import { useState } from "react";
import ConsultModal from "./ConsultModal";

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="section cta" id="contact">
        <div className="container wrap">
          <div>
            <h2>Let’s build something people love.</h2>
            <p>Tell us about your idea and we’ll propose a simple plan, timeline, and flat rate.</p>
          </div>
          <div className="actions">
            <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
              Free 15 minute consultation
            </button>
            <a className="btn btn-ghost" href="mailto:contact@phantomsong.net">contact@phantomsong.net</a>
          </div>
        </div>
      </section>
      <ConsultModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
