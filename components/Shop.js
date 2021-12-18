import React, { useContext, useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import UpperNav from "./UpperNav";
import Products from "./Products";
import Footer from "./Footer";
import Image from "next/image";
import Category from "./Category";
import classes from "../styles/Shop.module.scss";

import MultiRangeSlider from "./MultiRangeSlider";
import ShopContext from "../store/ShopContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// export const getStaticProps = async () => {
//   const req = await fetch(
//     "https://gym1-47284-default-rtdb.europe-west1.firebasedatabase.app/gym.json"
//   );
//   const res = await req.json();

//   return {
//     props: {
//       nes: res.supplements,
//       // odje kad mapujem i dodam amount i to ne radi a dolje na state radi
//     },
//   };
// };

/**renderuj shop komponentu */
const Shop = ({ nes }) => {
  const [amount, setAmount] = useState(1);

  //MISLIM DA JE ODJE  PROBLEM ZATO STO CART AMOUNT JE 0 ZATO SE JAVLJA ONO TEXT DID NOT MATCH SAMO POSLE CU TO jer ne smeta pri renreedu aplikacije
  // const [supplements, setSupplements] = useState(nes.map(r => ({ ...r, amount: 1, cartAmount: 0 })));
  const [supplements, setSupplements] = useState(
    nes.map((r) => ({ ...r, cartAmount: 0 }))
  );
  const [filtered, setFiltered] = useState([]);
  const [noviFilter, setNoviFilter] = useState([]);
  const [newFiltered, setNewFiltered] = useState([]);
  const [filterByInput, setFilterByInput] = useState([]);
  const [priceChanged, setPriceChanged] = useState(false);
  const [category, setCategory] = useState(
    supplements.map((supp) => supp.category)
  );
  /**kako dodati drugacije slike*/
  // const [category, setCategory] = useState(supplements.map(supp => new Set([supp.category]))) ovo ne moze jer pravi new Set za svaku category i samim tim nema skup njih nego pojedinacan set za ssvaku a set treba na skup podataka pa ih onda on filteruje
  const [price, setPrice] = useState(
    supplements.map((supp) => parseInt(supp.price))
  );
  const [highestPrice, setHighestPrice] = useState(Math.max(...price));
  const [checked, setChecked] = useState(false);

  const { inpValue, filterShopItems } = useContext(ShopContext);

  useEffect(() => {
    if (category === undefined) {
      return;
    }

    // let images = new Set(img); onda je length 7
    let categories = new Set(category);
    // categories = Array.from(categories);
    categories = [...categories]; /**moze i ovo i ovo iznad */

    /**pretvara categories u array  */
    // setCheckedState(new Array(categories.length).fill(false))
    setCategory(categories);
    /*odje kad logujes category budu svi jer je ovo initial render i nisu se jos setovali*/
  }, []);

  // const increaseAmount = (item) => {
  // item.amount = item.amount += 1;
  // setAmount(item.amount);

  /**setamo za svaki item amount i iznad povecamo tome posebnom item-u a ovim 
    ostaje 0 jer item.amount se samo povecava tome na kom smo kliknuli ovih ostalih item.amount je 0 osim ako ne povecamo POGLEDAJ PONOVO I POJASNI OVO BOLJE*/
  /**ostavi amount zato sto nam treba re-render */
  // }

  const inpSupplements = (e) => {
    // setChecked(!checked);
    // setChecked(false);

    let clicked;
    // if (filtered.length < supplements.length) bilo { //MSM DA JE PROBLEM ODJE U OVOJ LOGICI
    if (filtered.length < supplements.length) {
      console.log("o da da da da");
      // console.log(newFiltered.length);
      // console.log(filtered.length);

      // setHighestPrice(23);
      clicked = supplements.filter((sup) => sup.category === e.target.name);
    } else {
      // console.log('vodje');

      clicked = filtered.filter((sup) => sup.category === e.target.name);
      /**bilo filtered */
    }
    if (e.target.checked) {
      if (filtered.length <= 0) {
        setFiltered(clicked);
      } else {
        setFiltered((prev) => [...prev, ...clicked]);
        // setNewFiltered([...prev, ...clicked]) ne moze zbog setanja new filtera a mi filtriramo filtered kad bi setali new filtered morali bi njega da filtriramo a ne bi mogli kad bi dosao do [] stalno bi bio []
      }
    } else {
      // setChecked(false);
      let nes = filtered.filter((fi) => fi.category !== e.target.name);
      setFiltered(nes);

      // setNewFiltered(supplements);
    }
    // setChecked(!checked);
  };

  useEffect(() => {
    // if (newFiltered.length > 0) {
    // setFiltered(newFiltered)
    // }/**ne moze set filtered jer u new filtered se od filtered filteruju itemi  */

    // if (filtered.length > 0) {
    if (filtered.length > 0) {
      // setHighestPrice(highestPrice);
      setNewFiltered(filtered);
    }

    // console.log(checked);
    // }

    // else if (newFiltered.length > 0) {
    // console.log('filtrirano by cijene');
    // setNewFiltered(newFiltered)
    // }
    // else {
    // console.log('suplementi');
    // setNewFiltered(supplements)
    // }

    // console.log(filtered.length);
  }, [filtered]);

  useEffect(() => {
    if (inpValue !== undefined) {
      console.log(newFiltered);
    }

    setFilterByInput(
      newFiltered.filter((item) =>
        item.name.toLowerCase().includes(inpValue.toLowerCase())
      )
    );
  }, [inpValue]);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div>
      <UpperNav />
      <div style={{ background: "black" }}>
        <Nav />
      </div>

      <form className={classes.form}>
        <input
          onChange={filterShopItems}
          placeholder="search for products..."
        />
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </form>

      <div className={classes.categoriesAndProducts}>
        <div className={classes.categoriesAndPrice}>
          <div>
            <h3> Price Range</h3>

            <MultiRangeSlider
              min={0}
              max={highestPrice}
              supplements={supplements}
              setFiltered={setFiltered}
              setNoviFilter={setNoviFilter}
              noviFilter={noviFilter}
              setNewFiltered={setNewFiltered}
              filtered={filtered}
              setChecked={setChecked}
            />
          </div>
          <Category inpSupplements={inpSupplements} />
        </div>

        {/* {filtered.length > 0 ? filtered.map(supplement => <Products increaseAmount={increaseAmount} key={supplement.id} product={supplement} />) : supplements.map(supplement => <Products increaseAmount={increaseAmount} key={supplement.id} product={supplement} />)}  */}
        <div className={classes.products}>
          {inpValue !== undefined && inpValue.length > 0
            ? filterByInput.map((supplement) => (
              <Products key={supplement.id} product={supplement} />
            ))
            : newFiltered.map((supplement) => (
              <Products key={supplement.id} product={supplement} />
            ))}
          {/* OVJDE PRODUZI INCREASEAMOUNT SAD NE MOGU POSTO NIJE DEFINED ako budes koristio ovaj nacin normala */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
