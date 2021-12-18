import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import classes from "../styles/Main.module.scss";
import Link from "next/link";
import ShopContext from "../store/ShopContext";

const Main = () => {
  const [goDown, setGoDown] = useState(false);

  const scrolling = () => {
    if (typeof window !== undefined) {
      let height = window.innerHeight;
      window.scrollTo({
        top: height,
      });
    }
  };

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.title}>
          <h3>LET&apos;S GET MOVING</h3>
          <p>Movement changes everything</p>
          <Link href="/pricing">
            <button>JOIN US</button>
          </Link>
        </div>
      </div>
      <div className={classes.linkDiv}>
        <a className={classes.arrowLink} onClick={scrolling}>
          <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </a>
      </div>
    </div >
  );
};

export default Main;
