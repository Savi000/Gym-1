import React from 'react'
import classes from '../styles/Shop.module.scss';
import Category from './Category';
import MultiRangeSlider from './MultiRangeSlider';

const SmallFilter = ({ inpSupplements, supplements, setFiltered, setNoviFilter, noviFilter, setNewFiltered, filtered, setChecked, highestPrice }) => {
    return (
        <div className={classes.smallFilter}>

            <button>Filter</button>
            <div >
                <h2>Pricing</h2>
                <MultiRangeSlider min={0} max={highestPrice} supplements={supplements} setFiltered={setFiltered} setNoviFilter={setNoviFilter} noviFilter={noviFilter} setNewFiltered={setNewFiltered} filtered={filtered} setChecked={setChecked} />

                <Category inpSupplements={inpSupplements} />
            </div>
        </div>
    )
}

export default SmallFilter
