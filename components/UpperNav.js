import classes from "../styles/Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const UpperNav = () => {
  return (
    <div className={classes.navContact}>
      <div className={classes.contactMail}>
        <a target="_blank" rel="noreferrer" href="tel:+38269222111">
          <FontAwesomeIcon
            className={classes.phone}
            icon={faPhone}
          ></FontAwesomeIcon>
          069-222-111
        </a>

        {/* vodi da pozoves */}
        <a target="_blank" rel="noreferrer" href="https://www.gmail.com/">
          <FontAwesomeIcon
            className={classes.mail}
            icon={faEnvelope}
          ></FontAwesomeIcon>
          sawicewic1@gmail.com
        </a>

        {/* vodi na mail */}
      </div>

      <div className={classes.social}>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
          <FontAwesomeIcon
            icon={faInstagram}
            mask="fa-regular fa-circle"
            className={classes.instagram}
          ></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
          <FontAwesomeIcon
            icon={faFacebook}
            className={classes.instagram}
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default UpperNav;
