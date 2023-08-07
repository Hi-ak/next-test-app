import styles from "../styles/Home.module.css";

export function Footer() {
  return (
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Presented by{' '}
        <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
      </a>
    </footer>
  )
}