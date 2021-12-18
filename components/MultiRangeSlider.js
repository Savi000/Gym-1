import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import ShopContext from "../store/ShopContext";
import classes from '../styles/PriceRangeInput.module.scss';

var thumbsize = 10; /**bilo 14 */
// ovaj thumb size ima veze sa medjusobnom daljinom i pomjeranjem pa skontaj
const MultiRangeSlider = ({ min, max, supplements, checked, setChecked, setNewFiltered, noviFilter, filtered, setNoviFilter }) => {

    // const { setFiltered } = useContext(ShopContext);

    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(max); /**fix biggest val 23.99 */
    const [noviFilterPrice, setNoviFilterPrice] = useState(noviFilter.map(novi => novi.price));
    const [minNoviFilterPrice, setMinNoviFilterPrice] = useState(Math.min(...noviFilterPrice))
    const [maxNoviFilterPrice, setMaxNoviFilterPrice] = useState(Math.max(...noviFilterPrice));


    const width = 150;
    const minWidth =
        thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    const minPercent = ((minVal - min) / (avg - min)) * 100;
    const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
    const styles = {
        min: {
            width: minWidth,
            left: 2, /**ovo je value kolio es ulijevo da pomjeris citav input */
            "--minRangePercent": `${minPercent}%`
        },
        max: {
            width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
            left: minWidth,
            "--maxRangePercent": `${maxPercent}%`
        }
    };


    useEffect(() => {
        setAvg((maxVal + minVal) / 2);


        // setFiltered(supplements.filter(supp => supp.price >= minVal && supp.price <= maxVal));
        /**zato sto supplements nije prazan array vazda ima nesto (sve fetchano iz firebase)i ond njega samo filtriras a kad se novi filter isprazni on ostaje [] nema nista da se mapuje i to samo se brisu ovi i nema da mu je obicni use state 6 objekata u array nego mu je default [] i ond se ne moze vratiti jer mi odje setujemo novi filter na prazan array a gore setujemo filtered a ne supplements jer da setujemo supplements ond bi i oni bili prazan array i ne bi moglo sta da se filtrira i vazda bi bilo prazno npr. kad sam stavi new filtered onda moze  */

        // setChecked(true);
        // console.log('ajddeeee')
        console.log(maxVal, max);

        if (filtered.length > 0) {
            // console.log('filter filtered')
            setNewFiltered(filtered.filter(fil => fil.price >= minVal && fil.price <= maxVal));
        } else {
            // console.log('filter supplements')
            setNewFiltered(supplements.filter(fil => fil.price >= minVal && fil.price <= maxVal))
        }
        // if (noviFilter.length >= 0) {
        // if (minVal > maxNoviFilterPrice || maxVal < minNoviFilterPrice) {
        // console.log(noviFilter);
        // setNewFiltered(noviFilter.filter(fill => fill.price >= minVal && fill.price <= maxVal))
        // }
        // }
    }, [minVal, maxVal]);



    // console.log(maxVal, avg, min, max, maxPercent);

    return (


        <div
            className={classes["min-max-slider"]}
            data-legendnum="2"
            data-rangemin={min}
            data-rangemax={max}
            data-thumbsize={thumbsize}
            data-rangewidth={width}
        >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>{Math.round(minVal)}</p>
                <p>{Math.round(maxVal)}</p>

            </div>
            <label htmlFor="min">Minimum value</label>
            <input
                id="min"
                className={classes.min}
                style={styles.min}
                name="min"
                type="range"
                step="1"
                min={min}
                max={avg}
                value={minVal}
                onChange={({ target }) => setMinVal(Number(target.value))}
            />
            <label htmlFor="max">Maximum value</label>
            <input
                id="max"
                className={classes.max}
                style={styles.max}
                name="max"
                type="range"
                step="1"
                min={avg}
                max={max}
                value={maxVal}
                onChange={({ target }) => setMaxVal(Number(target.value))}
            />
        </div>

    );
};

export default MultiRangeSlider;