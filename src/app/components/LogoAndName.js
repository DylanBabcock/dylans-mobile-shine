import Image from "next/image";
import styles from "./LogoAndName.module.css";

export default function LogoAndName() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/WhiteLogo.png" // Place your logo file in /public/logo.png
        alt="Dylan's Mobile Shine Logo"
        width={90}
        height={90}
        className={styles.logo}
      />

      <div className={styles.slogan}>
        <span
          style={{
            fontSize: "1.35rem",
            whiteSpace: "nowrap",
            fontFamily: "Trebuchet MS, Helvetica, sans-serif",
          }}
        >
          Dylan's Mobile Shine
        </span>
        <span
          style={{ fontSize: "1rem", fontWeight: 500, whiteSpace: "nowrap" }}
        >
          Premium car detailing
        </span>
      </div>
    </div>
  );
}
