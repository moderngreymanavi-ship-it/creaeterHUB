import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} CreatorHub. All rights reserved.
    </footer>
  );
}
