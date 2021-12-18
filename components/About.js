import classes from "../styles/About.module.scss";
import TeamMembers from "../components/TeamMembers";
import { motion, transform } from "framer-motion";

const About = () => {
  return (
    <>
      <div className={classes.about}>
        <h1>About Us</h1>
        <div className={classes.aboutContent}>
          <motion.div
            initial={{ x: "-400" }}
            whileInView={{ x: "0" }}
            // transition={{ type: "spring", duration: 0.7, bounce: 0.2 }}
            // viewport={{ once: true }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/X4aKpjO2Nk4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
            ></iframe>
          </motion.div>
          <div className={classes.firstText}>
            <h2>Gold&apos;s gym</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              deserunt, laudantium modi molestiae, dolore cupiditate accusamus
              enim officiis aliquam quis voluptatem explicabo minus quia
              corporis quo, libero magni praesentium. earum laboriosam incidunt
              dignissimos impedit unde rem, consectetur tempore corporis!
              Accusantium natus debitis tenetur ab temporibus repellat sunt?
              Lorem ipsum dolor sitamet consectetur adipisicing elit. Rem amet a
              tenetur cum. Unde ut soluta omnis magni dicta est cupiditate
              delectus, rem doloremque minus ducimus aliquam expedita labore
              eos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat ex excepturi ea ad assumenda, saepe molestias nihil
              laudantium, suscipit sapiente atque consequuntur iusto dolores
              quaerat dolore quos nisi deserunt numquam.
            </p>
          </div>
        </div>
      </div>
      {/* <div}> */}
      <TeamMembers />
      {/* </div> */}
      <div className={classes.motivationalMessage}>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio
          voluptatibus odio animi dolorem? Ad debitis voluptatum deleniti, odio
          sunt, cum non eligendi dignissimos neque laudantium doloremque
          voluptatem explicabo exercitationem?
        </h3>
        <h1>OUR STORY IS JUST BEGINNING!</h1>
      </div>
    </>
  );
};

export default About;
