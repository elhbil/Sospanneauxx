import React from 'react'
import ReactDOM from 'react-dom'
import classes from "./index.module.css";

export default function Subtitle(props) {
  return <h2 className={classes.Container}>{props.children}</h2>;
}
