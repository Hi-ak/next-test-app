import classes from "./Header.module.scss";
import Link from "next/link";
export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.anchor}>Index</Link>
      <Link href="/about" className={classes.anchor}>About</Link>
    </header>
  )
}