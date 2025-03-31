"use client";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function IconButton() {
  const [hover, setHover] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Icon Button */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setShowMenu(!showMenu)}
        style={{
          background: hover ? "#f0f0f0" : "none",
          border: "none",
          padding: "0.5rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.375rem",
          transition: "background-color 0.2s ease",
        }}
      >
        <MenuOutlined style={{ fontSize: "1.25rem" }} />
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div
          style={{
            position: "absolute",
            top: "120%",
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            minWidth: "150px",
            zIndex: 1000,
          }}
        >
          <Link href="/" passHref>
            <div style={menuItemStyle}>Home</div>
          </Link>
          <Link href="/learn-more" passHref>
            <div style={menuItemStyle}>Pricing</div>
          </Link>
        </div>
      )}
    </div>
  );
}

const menuItemStyle = {
  padding: "0.75rem 1rem",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
  fontSize: "0.95rem",
  color: "#333",
  transition: "background 0.2s",
};
