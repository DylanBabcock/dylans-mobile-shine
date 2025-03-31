import LogoAndName from "./LogoAndName";
import styles from "./Header.module.css";
import { MenuOutlined } from "@ant-design/icons";
import IconButton from "./IconButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <LogoAndName />
      <IconButton />
    </header>
  );
}
