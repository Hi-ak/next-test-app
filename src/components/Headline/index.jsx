import React from "react";
import classes from "src/components/Header/Header.module.scss";

export function Headline(props) {
  return ( //react component = <>
    <div> 
      <h1 className={classes.title}>
        <a href={props.page == "index" ? "/" : "/" + props.page}>{props.page}</a> Page
      </h1>

      <p className={classes.description}>
        Get started by editing {" "}
        { props.children }
      </p>

      <button onClick={props.onClick}>進化する</button>
    </div>
  )
}