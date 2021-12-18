import classNames from "classnames";
import Image from "next/dist/client/image";

import Link from "next/link";
import { useState } from "react";
import classes from "../styles/Location.module.scss";

const AllLocations = ({ location }) => {
  const { city, street, gymImage, id } = location;

  const [readMore, setReadMore] = useState(false);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div className={classes.location}>
      <Image
        layout="responsive"
        loader={myLoader}
        src={gymImage}
        width={450}
        height={300}
        alt="locationImg"
      />
      <h2 className={classes.gymName}>Gold {city}</h2>
      <h4 className={classes.streetName}>{street}</h4>

      <p className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci
        Lorem ipsum dolor isy <span style={{ display: !readMore ? "none" : "inline" }}>
          amet consectetur adipisicing elit. Saepe sunt perferendis autem
          architecto hic earum cumque excepturi sed pariatur quidem accusantium
          totam maiores itaque labore eligendi impedit rem, repellendus quas.
        </span></p>

      <button
        className={classes.readMoreBtn}
        onClick={() => setReadMore(!readMore)}
      >
        {!readMore ? "Read More" : "Read Less"}
      </button>
    </div>
  );
};

export default AllLocations;
