"use client";
import { useEffect, useRef, useState } from "react";

export default function ConsultModal({ open, onClose }) {
  const first = useRef(null);
  const [service, setService] = useState("Website design");
  const [other, setOther] = useState("");

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  useEffect(() => {
    if (open) setTimeout(() => first.current?.focus(), 0);
  }, [open]);

  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (service === "Other" && !other.trim()) {
      alert("Please specify the service.");
      return;
    }

    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const company = (fd.get("company") || "").toString().trim();
    const brief = (fd.get("brief") || "").toString().trim();
    const selectedService = service === "Other" ? other.trim() : service;

    const subject = `Consultation request: ${name}`;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Service: ${selectedService}`,
      brief ? `Brief: ${brief}` : null,
      `Confirmed 15-min policy: Yes`,
    ].filter(Boolean);
    const body = lines.join("\n");

    const mailto = `mailto:contact@phantomsong.net?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    onClose();
  }

  return (
    <div
      className={`consult-modal ${open ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onClick={(e) => e.currentTarget === e.target && onClose()}
    >
      <div className="consult-card" role="document">
        <div className="consult-head">
          <h3 className="consult-title">Request a free 15-minute consultation</h3>
          <button className="consult-close" aria-label="Close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="consult-body" onSubmit={submit} noValidate>
          <div className="consult-grid cols-2">
            <div className="form-field">
              <label htmlFor="name">Your name *</label>
              <input ref={first} id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email address *</label>
              <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required />
            </div>
          </div>

          <div className="consult-grid">
            <div className="form-field">
              <label htmlFor="company">Company (optional)</label>
              <input id="company" name="company" type="text" autoComplete="organization" />
            </div>
          </div>

          <div className="consult-grid cols-2">
            <div className="form-field">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)}>
                <option>Website design</option>
                <option>Brand identity</option>
                <option>Graphic design</option>
                <option>Web administrative services</option>
                <option>Editorial Design</option>
                <option>Other</option>
              </select>
              <small>Need multiple services? List them in the box below.</small>
            </div>
            {service === "Other" && (
              <div className="form-field">
                <label htmlFor="otherService">Other service</label>
                <input
                  id="otherService"
                  name="otherService"
                  type="text"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  placeholder="Describe the service"
                />
              </div>
            )}
          </div>

          <div className="consult-grid">
            <div className="form-field">
              <label htmlFor="brief">Briefly describe what you’re looking for</label>
              <textarea id="brief" name="brief" placeholder="A sentence or two is perfect." />
            </div>
          </div>

          <div className="consult-grid">
            <label className="check">
              <input id="confirm" name="confirm" type="checkbox" required />
              <span>
                I understand the free consultation is <strong>15 minutes</strong>. If I want more time, I can book a
                follow-up for <strong>$60</strong> with an additional <strong>$22/hr</strong>.
              </span>
            </label>
          </div>

          <div className="consult-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
