import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../store/ShopContext";
// import ShopContext from '../store/shopContext'; ne moze u komponeneti samo u page context
import classes from "../styles/Modal.module.scss";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ open, close, closeModal }) => {
  const { addedToCart } = useContext(ShopContext);

  const [proba, setProba] = useState(
    localStorage.getItem("inputValues")
      ? JSON.parse(localStorage.getItem("inputValues"))
      : ""
  );

  const [nameIsValid, setNameIsValid] = useState();
  const [adressIsValid, setAdressIsValid] = useState();
  const [emailIsValid, setEmailIsValid] = useState();

  // const [close, setClose] = useState(false)

  const [price, setPrice] = useState(
    addedToCart.map((added) => parseInt(added.price))
  );
  const [amount, setAmount] = useState(
    addedToCart.map((added) => added.cartAmount)
  );
  // const [close, setClose] = useState(false);

  const [totalTv, setTotalTv] = useState(
    addedToCart.map((added) => {
      return added.price * added.cartAmount;
    })
  );
  // setTotalTv(addedToCart.map(added => {
  // return added.price * added.cartAmount
  // }))

  // useEffect(() => {
  // console.log(totalTv);
  // setPrice(price.reduce((prev, next) => prev + next));
  // setAmount(amount.reduce((prev, next) => prev + next));
  // console.log(totalTv);

  // }, [])

  // useEffect(() => {

  // if (close) {

  // zasto se ovdje ne mjenja state odgovor ispod
  // setOpen(false) /**dzaba ovo jer na klik od order buttona ti ga opet setujes na true a close je vec true zato ovo radi samo na prvi klik. on da radi i dalje ne moze jer evo kliknes na order setujes open true kliknes na iks setujes close na true i odje aj setujes open na false na klik ponovo bude true a i close ponovo bude true jer vise ne koristi onaj falsae initial(prvi) value i cim su jedno i drugo isto onda ne moze jer se poklapaju da li open ili false tako da u funkciji najbolje i najlakse rjesiti odje bez potrebe koristim useEffect */

  //         //     }/**samo if ne radi zato sto se to radi na svaki render i onda izbaca onaj error koji ne utice na ovo nisgta ono sve normala radi samo sto izbaa taj error zato sto se ovo pokrece svaki render i ne mozes da setujes state na svaki render on ulazi svakako iako render nzm pogledaj useEffect gogl */
  //     } zato sto prvi put kad kliknemo na order setujemo open(true) i kad klosujemo setujemo close(true) i ond oba budu true i dzaba mi na useEffect setujemo false kad kad kliknemo ide u funkciju
  // }
  // }, [close])

  const saveInputValue = (e) => {
    if (e.target.value.length > 0) {
      if (e.target.name === "name") {
        if (e.target.value !== e.target.value.toLowerCase()) {
          setNameIsValid(true);
        } else {
          setNameIsValid(false);
        }
      } else if (e.target.name === "email") {
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (e.target.value.match(pattern)) {
          setEmailIsValid(true);
        } else {
          setEmailIsValid(false);
        }
      } else if (e.target.name === "adress") {
        if (e.target.value.includes("/")) {
          setAdressIsValid(true);
        } else {
          setAdressIsValid(false);
        }
      }
    } else {
      setNameIsValid();
      setAdressIsValid();
      setEmailIsValid();
    }

    setProba((prev) =>
      prev
        ? { ...prev, [e.target.name]: e.target.value }
        : { [e.target.name]: e.target.value }
    );

    //ovdje se nije mogao sacuvavati local storage zato sto je useState asyncrhonous i ne update se odma i zato u liniji ispod
    // koja je bila local storage ne mozemo ocekivati da imamo odma gotov value zato sto je async a na useEffect radi jer sam stavio
    // kad se god promjeni i izvan je funkcije tako da vec ima setan value
    // ovo setProba je razlog sto radi local storage tj moze se mjenjati value u input
  };

  useEffect(() => {
    localStorage.setItem("inputValues", JSON.stringify(proba));
  }, [proba]);

  /**framer motion animation */
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 4.5,
      },
    },
  };

  return (
    /**izgleda da nije do backdrop-a */
    // <Backdrop closeModal={closeModal}>
    /* bilo samo sa !open */
    <motion.div
      className={!close && open ? classes.modal : classes.modalClosed}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <form>
        <button className={classes.closeBtn} onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </button>

        <label htmlFor="name">Name</label>
        <input
          className={
            nameIsValid !== undefined
              ? nameIsValid
                ? classes.inpValid
                : classes.inpInvalid
              : ""
          }
          name="name"
          id="name"
          value={proba.name}
          onChange={saveInputValue}
          required
        />
        {nameIsValid === false && <p>name must contain one uppercase letter</p>}

        <label htmlFor="adress">Adress</label>
        <input
          className={
            adressIsValid !== undefined
              ? adressIsValid
                ? classes.inpValid
                : classes.inpInvalid
              : ""
          }
          name="adress"
          id="adress"
          value={proba.adress}
          onChange={saveInputValue}
          required
        />
        {adressIsValid === false && <p>adress must contain /</p>}
        {/* zato sto !adressIsValid moze znaciti i undefined a stavio sam undefined da bude kad je default kad nije kliknuto ili kad je length < 0 */}

        <label htmlFor="email">E-mail</label>
        <input
          className={
            emailIsValid !== undefined
              ? emailIsValid
                ? classes.inpValid
                : classes.inpInvalid
              : ""
          }
          name="email"
          type="email"
          id="email"
          value={proba.email}
          onChange={saveInputValue}
          required
        />
        {emailIsValid === false && <p>email must contain @</p>}

        <p>Total: {totalTv.reduce((prev, next) => prev + next)}</p>
        <button
          disabled={!nameIsValid && !emailIsValid && !adressIsValid}
          className={classes.confirmBtn}
          type="submit"
        >
          Confirm order
        </button>
        {!nameIsValid && !emailIsValid && !adressIsValid && (
          <p>please check if all fields are populated correctly</p>
        )}
        {/* ne zaboravi da prevent default */}
      </form>
    </motion.div>
    /* </Backdrop> */
  );
};

export default Modal;
