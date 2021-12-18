import React from "react";
import classes from "../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const myLoader = ({ src }) => {
    return src;
  };
  // "dev": "next dev",

  return (
    <div className={classes.footer}>
      <div className={classes.contact}>
        <a target="_blank" rel="noreferrer" href="tel:+38269222111">
          <FontAwesomeIcon
            className={classes.phone}
            icon={faPhone}
          ></FontAwesomeIcon>
          069-222-111
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.gmail.com/">
          <FontAwesomeIcon
            className={classes.mail}
            icon={faEnvelope}
          ></FontAwesomeIcon>
          sawicewic1@gmail.com
        </a>
      </div>
      <Link href="/">
        <a>
          <Image
            loader={myLoader}
            className={classes.logoLink}
            unoptimized
            src="https://www.pngkit.com/png/full/239-2392915_logo-gym-logo-png-white.png"
            width={150}
            height={150}
            alt="logo-image"
          />
        </a>
      </Link>
      <div className={classes.social}>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
          <FontAwesomeIcon
            icon={faInstagramSquare}
            className={classes.instagram}
          ></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className={classes.facebook}
          ></FontAwesomeIcon>
        </a>

        {/* <FontAwesomeIcon icon={}></FontAwesomeIcon> */}
      </div>
    </div>
  );
};

export default Footer;
