import React from "react";
import styles from "../styles/Home.module.css";

export function Headline(props) {
  console.log(props);
  return ( //react component = <>
    <div> 
      <h1 className={styles.title}>
        {props.page} Page
      </h1>

      <p className={styles.description}>
        Get started by editing { props.children }
      </p>

      <button onClick={props.onClick}>進化する</button>
    </div>
  )
}