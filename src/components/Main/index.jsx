import classes from "src/components/Main/Main.module.scss";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import { useEffect } from "react";

export function Main(props) {

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}