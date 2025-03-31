"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function LearnMorePage() {
  return (
    <main
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        backgroundColor: "#8DD7EF",
      }}
    >
      <Header />

      {/* Process Section */}
      <section
        style={{
          backgroundColor: "#B8E6F4",
          padding: "1.5rem",
          marginBottom: "2rem",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          border: "1px solid #e5e5e5",
          marginTop: "1rem",
          marginLeft: ".5rem",
          marginRight: ".5rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            color: "#00171F",
          }}
        >
          Our Process
        </h1>
        <p style={{ lineHeight: "1.7", fontSize: "1.05rem", color: "#333" }}>
          Every vehicle receives a tailored approach based on its condition. We
          start with a full walkaround inspection, followed by a careful
          pre-rinse, foam soak, and hand wash to lift dirt safely. The interior
          is vacuumed and detailed, stains are treated, and every surface is
          refreshed. We finish with protective touch-ups, including UV-safe
          products to help preserve your paint and interior. No shortcuts — just
          honest, thorough work, every time.
        </p>
      </section>

      {/* Pricing Packages */}
      <section>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: "#001021",
            textAlign: "center",
          }}
        >
          Detailing Packages
        </h2>

        {/* Basic Package */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            marginBottom: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            border: "1px solid #e5e5e5",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#1481BA",
            }}
          >
            Basic Interior & Exterior — $75–$100
          </h3>
          <ul
            style={{
              paddingLeft: "1rem",
              lineHeight: "1.6",
              color: "#333",
              fontSize: "1rem",
            }}
          >
            <li>Exterior hand wash & dry</li>
            <li>Wheel & tire cleaning</li>
            <li>Interior vacuum (seats, carpets, trunk)</li>
            <li>Wipe down of dash, console & panels</li>
            <li>Glass cleaned inside & out</li>
            <li>Air freshener (optional)</li>
          </ul>
        </div>

        {/* Deep Clean Package */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            marginBottom: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            border: "1px solid #e5e5e5",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#1481BA",
            }}
          >
            Deep Clean & Wax — $125–$175
          </h3>
          <ul
            style={{
              paddingLeft: "1rem",
              lineHeight: "1.6",
              color: "#333",
              fontSize: "1rem",
            }}
          >
            <li>Everything in the Basic Package</li>
            <li>Clay bar treatment (light contamination)</li>
            <li>One-step polish to enhance shine</li>
            <li>Spray wax or sealant for protection</li>
            <li>Carpet & seat shampooing (light)</li>
            <li>Deeper interior detailing</li>
          </ul>
        </div>

        {/* Full Detail */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            marginBottom: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            border: "1px solid #e5e5e5",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#1481BA",
            }}
          >
            Full Detail (Inside & Out) — $200+
          </h3>
          <ul
            style={{
              paddingLeft: "1rem",
              lineHeight: "1.6",
              color: "#333",
              fontSize: "1rem",
            }}
          >
            <li>All services from previous packages</li>
            <li>Deep carpet extraction & stain removal</li>
            <li>Seat shampooing & conditioning (cloth or leather)</li>
            <li>Engine bay cleaning (on request)</li>
            <li>Trim restoration & detail finishing</li>
            <li>Longer-lasting paint sealant upgrade</li>
          </ul>
        </div>

        {/* Add-ons */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            marginBottom: "4rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            border: "1px solid #e5e5e5",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#1481BA",
            }}
          >
            Add-Ons
          </h3>
          <ul
            style={{
              paddingLeft: "1rem",
              lineHeight: "1.6",
              color: "#333",
              fontSize: "1rem",
            }}
          >
            <li>Pet hair removal: +$25–$50</li>
            <li>Heavy stain or mold remediation: Quote-based</li>
            <li>Engine bay cleaning: +$20</li>
            <li>Extra-large vehicles or 3rd-row: +$25+</li>
          </ul>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        >
          Want a personalized quote or need help choosing the right package?{" "}
          <Link href="/">
            <button
              style={{
                padding: ".2rem .2rem .2rem .2rem",
                backgroundColor: "#17B0EA",
                color: "#fff",
                border: "none",
                fontSize: "1rem",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Contact us
            </button>
          </Link>
        </p>
      </section>

      <Footer />
    </main>
  );
}
