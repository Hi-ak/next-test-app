import classes from "./Footer.module.scss";
export function Footer() {
  return (
    <footer className={classes.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Presented performance by{' '}
        <img src="/vercel.svg" alt="Vercel" className={classes.logo} />
      </a>
    </footer>
  )
}