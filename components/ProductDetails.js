import React, { useContext } from "react";
import UpperNav from "./UpperNav";
import Nav from "./Nav";
import Image from "next/image";
import { useState } from "react";
import classes from "../styles/Shop.module.scss";
import ShopContext from "../store/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ supplement }) => {
  const { name, price, images, amount } = supplement;

  const { addToCart } = useContext(ShopContext);

  /**nema amount zato sto fecujemo direktno iz baze i uzimamo odatle */

  const [amo, setAmo] = useState(0);
  /**mora ovo zbog re-rendera vljd */

  const [mainImgIndex, setMainImgIndex] = useState(0);

  const increaseAmount = () => {
    supplement.amount += 1; /**NIJE JASNO */
    // amount += 1; mozda zato jer je kasno ova je kao fixed value kad je izvadimo iz supplementa i ne moze se mjenjati a kad mjenjamo supplement.amount onda mozemo da mjenjamo njegov amount koji je fetched
    setAmo((prev) => prev + 1);
  };
  const decreaseAmount = () => {
    if (supplement.amount < 2) {
      return;
    }
    supplement.amount -= 1; /**NIJE JASNO */
    // amount += 1; mozda zato jer je kasno ova je kao fixed value kad je izvadimo iz supplementa i ne moze se mjenjati a kad mjenjamo supplement.amount onda mozemo da mjenjamo njegov amount koji je fetched
    setAmo((prev) => prev - 1);
  };

  const setBigImage = (index) => {
    setMainImgIndex(index);
  };

  const myLoader = ({ src }) => {
    return src;
  };
  return (
    <>
      <div style={{ background: "black" }}>
        <UpperNav />
        <Nav />
      </div>

      <div className={classes.productDiv}>
        <div className={classes.pictureSlider}>
          {/* ovdje sam stavio div da ne bi ova slika isla po pravilima ovog iznad diva nego da mogu da kontrolisem width i height da sam na ovaj stavio samo display flex onda bi ist bilo jer ih display strechuje by defualt i dodam samo align items i dobijem normalnu visinu slika tj onu koju sam ja namjestiok */}
          {images.map((image, index) => (
            <div
              key={index}
              className={
                index === mainImgIndex ? classes.active : classes.smallImg
              }
              onClick={() => setBigImage(index)}
            >
              <Image
                //   placeholder="blur" za ucitvavanje
                // key={index}
                loader={myLoader}
                src={image}
                height={100}
                width={100}
                alt="product"
              />
            </div>
          ))}
        </div>

        <Image
          loader={myLoader}
          unoptimized
          src={images[mainImgIndex]}
          height={400}
          width={400}
          alt="product-big"
        />

        <div className={classes.paragraphDiv}>
          <h2>{name}</h2>
          <p>${price}</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dicta
            ullam, rerum suscipit commodi in odit eveniet voluptatem impedit
            laborum eum accusamus, deleniti nam. Dolor eaque nihil ex
            consequuntur. Delectus! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatibus repellat perspiciatis tempora quam
            labore. Harum corrupti quos, tempore explicabo doloribus saepe,
            doloremque facilis cumque rem nisi repellat nam, inventore eos!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dicta rerum numquam optio dolorum ad est obcaecati! Accusamus
            molestiae placeat fugiat, cumque voluptatem officia. Culpa
            necessitatibus repudiandae eius beatae veritatis!
          </p>
          <div className={classes.addToCart}>
            <button className={classes.addBtn} onClick={increaseAmount}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>

            <p>Amount: {amount}</p>
            <button className={classes.removeBtn} onClick={decreaseAmount}>
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </button>
            <button
              className={classes.cartBtn}
              onClick={(e) => addToCart(e, supplement)}
            >
              {"Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
