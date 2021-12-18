import React from 'react'
// import classes from '../styles/Category.module.scss';

const Category = ({ name, inpSupplements }) => {

    // if (name === 'this') {
    //     /**onda src da bude  */
    // }

    return (
        <details>
            <summary>Categories</summary>
            {/* {category.map((cat, index) => <Category inpSupplements={inpSupplements} key={index} name={cat} />)} */}

            {/* <div> ZBOG DIVOVA NE RADI ANIMACIJA ???? ipak radi evo ispod div nego sam ih pogresno poredjao */}
            <div >
                <div>
                    <input id='protein' onChange={inpSupplements} name='protein' type='checkbox' />
                    <label htmlFor='protein'>Protein</label>
                </div>
                <div>
                    <input id='vitamins' onChange={(e) => inpSupplements(e)} name='vitamins' type='checkbox' />
                    <label htmlFor='vitamins'>Vitamins</label>

                </div>

                <div>
                    <input id='creatine' onChange={(e) => inpSupplements(e)} name='creatine' type='checkbox' />

                    <label htmlFor='creatine'>Creatine</label>
                </div>
                <div>
                    <input id='equipment' onChange={(e) => inpSupplements(e)} name='equipment' type='checkbox' />

                    <label htmlFor='equipment'>Equipment</label>

                </div>

            </div>

        </details>
    )
}

export default Category
