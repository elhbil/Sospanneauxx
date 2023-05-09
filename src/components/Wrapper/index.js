import React from 'react'
import ReactDOM from 'react-dom'
import classes from "./index.module.css";

export default function Wrapper(props) {
  return <div className={classes.Container}>{props.children}</div>;
}
