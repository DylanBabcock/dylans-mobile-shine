"use client";
import { useState } from "react";
import { load } from "recaptcha-v3"; // Import reCAPTCHA v3
import styles from "./page.module.css"; // Import CSS
import PhotoSlideshow from "./components/PhotoSlideshow";
import Header from "./components/Header";
import Image from "next/image";
import HeroVideo from "./components/HeroVideo";
import BeforeAfterSection from "./components/BeforeAfterSection";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Load and execute reCAPTCHA v3
      const recaptcha = await load(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
      const token = await recaptcha.execute("submit"); // "submit" is an action label

      // Send form data + reCAPTCHA token to backend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: token }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <Header />
      <HeroVideo />

      {/* Services Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#11B5E4",
          flexDirection: "column",
          margin: 0,
          height: "15rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/delivery-car.png" // Place your logo file in /public/logo.png
            alt="Dylan's Mobile Shine Logo"
            width={150}
            height={150}
            className={styles.logo}
          />

          <p
            style={{
              marginLeft: "1rem",
              fontSize: "1.5rem",
              border: "2px solid #00171F",
              padding: "5px",
              borderRadius: "5px",
              height: "fit-content",
            }}
          >
            Mobile Detailing
          </p>
        </div>
        <p style={{ fontSize: "1.25rem", marginBottom: "5px" }}>
          Auto detailing that comes to you.
        </p>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#68CAE9",
          flexDirection: "row",
          margin: 0,
          height: "15rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "1rem",
            padding: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Full Interior & Exterior
          </h2>

          <p style={{ fontSize: "1.2rem", maxWidth: "500px" }}>
            From deep vacuuming and stain removal to hand washing, waxing, and
            rim shine — we cover every inch of your vehicle.
          </p>
        </div>
        <div style={{ paddingRight: "1rem" }}>
          <Image
            src="/car-service.png" // Place your logo file in /public/logo.png
            alt="Dylan's Mobile Shine Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
        </div>
      </section>

      <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <Image
          src="/me.png" // Replace with your actual image path
          alt="Dylan - Owner of Dylan’s Mobile Shine"
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Dylan’s Mobile Shine
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.6", // you can adjust this to 1.8 or 2 if you want more space
          }}
        >
          Locally owned and built from the ground up, Dylan’s Mobile Shine
          offers honest, high-quality detailing that comes to you. Beyond clean
          cars, we’re here to give back — if your vehicle’s been impacted by
          storms or you know someone in need, don’t hesitate to reach out. We’re
          proud to serve and grow with our community.
        </p>
      </section>
      <section
        style={{
          textAlign: "center",
          padding: "2rem 1rem",
          backgroundColor: "#001021",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          A look at the process
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "500px",
            margin: "0 auto 1.5rem",
            lineHeight: "1.6",
          }}
        >
          Want to see what we offer? From full interior and exterior details to
          paint polishing, UV protection and more — we’ve got you covered.
        </p>
        <Link href="/learn-more">
          <button
            style={{
              backgroundColor: "#17B0EA",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </Link>
      </section>
      <BeforeAfterSection />

      {/* Contact Form Section */}
      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>Get a Free Quote</h2>
        <p className={styles.contactText}>
          Fill out the form below, and we’ll get back to you shortly.
        </p>
        <div className={styles.contactForm}>
          {submitted ? (
            <p>Thank you! We'll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.contactInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.contactInput}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.contactInput}
              />

              {error && <p className={styles.errorMessage}>{error}</p>}

              <button type="submit" className={styles.contactButton}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
