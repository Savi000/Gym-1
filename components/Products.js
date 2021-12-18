import React from "react";
import Image from "next/dist/client/image";
import { useState, useEffect } from "react";
import { useContext } from "react";
import ShopContext from "../store/ShopContext";
import classes from "../styles/Shop.module.scss";
import Link from "next/link";

const Products = ({ product, increaseAmount }) => {
  const { addToCart, clicked } = useContext(ShopContext);
  const { name, price, images, amount, id } = product;
  // const [amountState, setAmountState] = useState(amount);

  const myLoader = ({ src }) => {
    return src;
  };

  // clicked ? <svg className={classes.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className={classes["checkmark__circle"]} cx="26" cy="26" r="25" fill="none" /><path className={classes["checkmark__check"]} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg> :
  return (
    <div>
      <h2>{name}</h2>
      <Link href={`/shop/${id}`}>
        <Image
          className={classes.productImage}
          unoptimized
          loader={myLoader}
          src={images[0]}
          width={210}
          height={210}
          alt="product"
        />
      </Link>
      <p>${price}</p>
      <div className={classes.btn}>
        {/* {console.log(product)} */}
        <button
          className={classes.cartBtn}
          onClick={(e) => addToCart(e, product)}
        >
          {"Add to cart"}
        </button>
      </div>
      {/* <button onClick={() => increaseAmount(product)}>+</button> */}

      {/* <p>Amount: {amount}</p> */}
      {/* <button>-</button> */}
    </div>
  );
};

export default Products;
