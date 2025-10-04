import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="tag">Experience</span>
                <h2>Companies we&apos;ve worked for.</h2>
                <p>Our founders have previously been employed by or done work for:</p>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
