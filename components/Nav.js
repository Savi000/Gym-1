import classes from "../styles/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import ShopContext from "../store/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
import SmallNav from "./SmallNav";

const Nav = () => {
  const router = useRouter();

  const { addedToCart } = useContext(ShopContext);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Image
            loader={myLoader}
            unoptimized
            src="https://www.pngkit.com/png/full/239-2392915_logo-gym-logo-png-white.png"
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <ul>
          <Link href="/">
            <li
              className={
                router.pathname === "/" ? classes.active : classes.link
              }
            >
              Home
            </li>
          </Link>
          <Link href="/locations">
            <li
              className={
                router.pathname === "/locations" ? classes.active : classes.link
              }
            >
              Locations
            </li>
          </Link>

          <Link href="/shop">
            <li
              className={
                router.pathname === "/shop" ? classes.active : classes.link
              }
            >
              Shop
            </li>
          </Link>

          <li
            style={{ color: "white", marginRight: "30px" }}
            className={classes.offer}
          >
            What we have to offer
            <motion.div className={classes.offerList}>
              <Link href="/grouptraining">
                <p>Group training</p>
              </Link>
              <p>More coming soon...</p>
            </motion.div>
          </li>

          <Link href="/pricing">
            <li
              className={
                router.pathname === "/pricing" ? classes.active : classes.link
              }
            >
              Pricing
            </li>
          </Link>

          <Link href="/cart">
            <li
              className={
                router.pathname === "/cart" ? classes.active : classes.link
              }
            >
              <a>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ fontSize: "24px" }}
                >
                  &#xf07a;
                </FontAwesomeIcon>
                <span
                  className={classes["badge badge-warning"]}
                  id={classes["lblCartCount"]}
                >
                  {addedToCart.length > 0
                    ? addedToCart
                      .map((added) => added.cartAmount)
                      .reduce((prev, next) => prev + next)
                    : 0}
                </span>
              </a>
            </li>
          </Link>
          <Link href="/signIn">
            <button className={classes.logInBtn}>Log in</button>
          </Link>
          <Link href="/createAccount">
            <button
              className={classes.signUpBtn}
              style={{ marginLeft: "10px" }}
            >
              Sign up
            </button>
          </Link>
        </ul>
      </nav>
      <SmallNav />
    </>
  );
};

export default Nav;
