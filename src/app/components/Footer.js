// components/Footer.js
"use client";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#001021",
        fontSize: "0.9rem",
        color: "white",
      }}
    >
      © {new Date().getFullYear()} Dylan&apos;s Mobile Shine | All Rights
      Reserved
    </footer>
  );
}
