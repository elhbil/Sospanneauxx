import React from 'react'
import ReactDOM from 'react-dom'
import classes from "./index.module.css";

export default function Title(props) {
  return <h1 className={classes.Container}>{props.children}</h1>;
}
