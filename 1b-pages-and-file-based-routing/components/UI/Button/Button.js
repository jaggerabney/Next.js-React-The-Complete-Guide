import Link from "next/link";

import classes from "./Button.module.css";

function Button(props) {
  return (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  );
}

export default Button;
