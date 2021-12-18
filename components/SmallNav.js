import classes from "../styles/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import ShopContext from "../store/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faHome,
  faMapMarkedAlt,
  faMoneyBillWave,
  faUser,
  faSignInAlt,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";

const SmallNav = () => {
  const router = useRouter();

  const { addedToCart } = useContext(ShopContext);

  const [showLinks, setShowLinks] = useState(false);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      <Link href="/cart">
        <li
          className={
            router.pathname === "/cart"
              ? classes.activeCartLink
              : classes.cartLink
          }
        >
          <a>
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "30px" }}>
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
      {/* router.pathname === '/cart' ? classes.active : */}
      {/* <Link href="/cart">
                <a style={{ color: 'white' }}> <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px' }}>&#xf07a; </FontAwesomeIcon>
                    <span id={classes['lblcartCout']} style={{
                        fontSize: '12px',
                        background: 'red',
                        borderRadius: '8px',
                        color: '#fff',
                        padding: '0 5px',
                        verticalAlign: 'top',
                        marginLeft: '-10px'
                    }}>{addedToCart.length > 0 ? addedToCart.map(added => added.cartAmount).reduce((prev, next) => prev + next) : 0}</span></a>
            </Link> */}
      <div className={classes.smallNav}>
        <div
          onClick={() => setShowLinks(!showLinks)}
          className={!showLinks ? classes.center : classes.clicked}
        >
          <div></div>
        </div>

        <ul className={showLinks ? classes.navActive : ""}>
          <Link href="/">
            <li
              className={
                router.pathname === "/" ? classes.active : classes.link
              }
            >
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              &nbsp; Home
            </li>
          </Link>
          <Link href="/locations">
            <li
              className={
                router.pathname === "/locations" ? classes.active : classes.link
              }
            >
              <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
              &nbsp; Locations
            </li>
          </Link>

          <Link href="/shop">
            <li
              className={
                router.pathname === "/shop" ? classes.active : classes.link
              }
            >
              <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
              &nbsp; Shop
            </li>
          </Link>
          <li className={classes.smallOffer}>
            <details>
              <summary>What we have to offer</summary>
              <motion.div className={classes.smallOfferList}>
                <Link href="/grouptraining">
                  <p>Group training</p>
                </Link>
                <p>More coming soon...</p>
              </motion.div>
            </details>
          </li>
          <Link href="/pricing">
            <li
              className={
                router.pathname === "/pricing" ? classes.active : classes.link
              }
            >
              <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
              &nbsp;Pricing
            </li>
          </Link>
          {/* <li className={router.pathname === '/cart' ? classes.active : classes.link}> */}
          {/* <Link href="/cart"><a> <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px' }}>&#xf07a; </FontAwesomeIcon> */}
          {/* <span className={classes['badge badge-warning']} id={classes['lblCartCount']}>{addedToCart.length > 0 ? addedToCart.map(added => added.cartAmount).reduce((prev, next) => prev + next) : 0}</span></a></Link> */}

          {/* </li> */}
          <li>
            <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
            <Link href="/signIn"> &nbsp; Sign in</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <Link href="/createAccount"> &nbsp; Sign up</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SmallNav;
