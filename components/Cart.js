import React, { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import Modal from "./Modal";
import Nav from "./Nav";
import UpperNav from "./UpperNav";
import ShopContext from "../store/ShopContext";
import Head from "next/head";
import classes from "../styles/Cart.module.scss";
import Backdrop from "./Backdrop";
import Link from "next/link";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] =
    useState(
      false
    ); /**ovo je svejedno moze i true i false ionako se setuje ispod */

  const { addedToCart, setAddedToCart } = useContext(ShopContext);

  useEffect(() => {
    setAddedToCart(JSON.parse(localStorage.getItem("cartItems")));
  }, []);
  // PROMJENJENO ZBOG BUILD-A ne moram jer je samo warning nije error tako  da msm da moze da se pokrene build

  const openModal = () => {
    setOpen(true);
    setClose(false);
    /**znaci dodje da on sve ponisti kad su funkcije dzaba ja setujem state i saljem ga kao props  jer odje kad setujem on re-renderuje. Jer sam ja prije u open modal stavio setOpen(true) i u closeModal stavio setClose(true) i u modal sam nastavio ako je close true setOpen false ali to ne radi jer kad kliknem idem odje u ove funkcije gdje state radi re-render i oba budu true vljd je to tako. ZNACI NE bi trebao pass setState by props vec sve zavrsiti u funkciji ili pomjeriti ovu postavku useState (moja teorija)   */
  };
  const closeModal = (e) => {
    e.preventDefault();
    setClose(true);
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>pozz</title>
      </Head>
      <UpperNav />
      <div style={{ background: "black" }}>
        <Nav />
      </div>
      <div>
        {/* ovo je razlog sto local storage nije cuvao css to jest OBJASNII (stavio smo div okolo i to je rjesilo problem)  */}
        {addedToCart.map((added) => (
          <CartItems key={added.id} cartItem={added} />
        ))}
      </div>
      <div className={classes.orderDiv}>
        {addedToCart.length > 0 ? (
          <button onClick={openModal}>Order</button>
        ) : (
          <p>No products in cart.</p>
        )}
      </div>
      {/* {open && <Backdrop closeModal={closeModal} />} jer se u isto vrijeme renderuju vljd i onda se zbguje */}
      {open && <Backdrop closeModal={closeModal} />}
      {open && <Modal open={open} close={close} closeModal={closeModal} />}
    </>
  );
};

export default Cart;
