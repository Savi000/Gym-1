import React from "react";
import classes from "../styles/GroupTraining.module.scss";
import Image from "next/dist/client/image";

const GroupTraining = () => {
  const myLoader = ({ src }) => {
    return src;
  };
  return (
    <>
      <div className={classes.groupTrainingOne}>
        <Image
          loader={myLoader}
          width={270}
          height={250}
          src={
            "https://images.squarespace-cdn.com/content/v1/5cd21754b2cf792418a005a2/1631780866339-U90DHCBNUV5A1BHJX3B5/1K9A0120.jpg?format=2500ws"
          }
          alt="gym"
        />
        <div className={classes.aboutGym}>
          <h1>Gym one </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            beatae neque, eos dicta voluptatibus ipsa, deserunt, quisquam omnis
            distinctio consectetur repudiandae temporibus nam maiores
            voluptatum? Repellat iure error unde labore?
          </p>
        </div>
      </div>
      <div className={classes.groupTrainingTwo}>
        <div className={classes.aboutGymTwo}>
          <h1>Gym two </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            beatae neque, eos dicta voluptatibus ipsa, deserunt, quisquam omnis
            distinctio consectetur repudiandae temporibus nam maiores
            voluptatum? Repellat iure error unde labore?
          </p>
        </div>
        <Image
          loader={myLoader}
          width={270}
          height={250}
          src={
            "https://images.squarespace-cdn.com/content/v1/5cd21754b2cf792418a005a2/1631780866339-U90DHCBNUV5A1BHJX3B5/1K9A0120.jpg?format=2500ws"
          }
          alt="gym-two"
        />
      </div>
    </>
  );
};

export default GroupTraining;
