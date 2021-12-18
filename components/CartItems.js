import React, { useContext, useState } from "react";
import Image from "next/dist/client/image";
import ShopContext from "../store/ShopContext";
import classes from "../styles/Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItems = ({ cartItem }) => {
  const { removeItem, addToCart } = useContext(ShopContext);

  const { name, images, price, cartAmount } = cartItem;
  /**mora ovo zbog remove from cart btn-a */
  const [amo, setAmo] = useState(0);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes.btnAndImage}>
        <button
          className={classes.removeBtn}
          onClick={() => removeItem(cartItem)}
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </button>
        <Image
          unoptimized
          loader={myLoader}
          src={images[0]}
          width={150}
          height={150}
          alt="product image"
        />
      </div>
      <h2>{name}</h2>

      <div className={classes.amount}>
        <button onClick={() => addToCart(cartItem, "increase")}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
        <p>{cartAmount}</p>
        <button onClick={() => addToCart(cartItem, "decrease")}>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
      </div>
      <p>${price}</p>
    </div>
  );
};

export default CartItems;
