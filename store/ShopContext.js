import React, { useEffect, useState } from "react";

import classes from '../styles/Shop.module.scss';
// import '../styles/sh.scss'; cannot import global css nzm ni ja sta ali err ugl
const ShopContext = React.createContext();

export const ShopContextProvider = ({ children }) => {


    const [addedToCart, setAddedToCart] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('cartItems')) {
            const saved = localStorage.getItem('cartItems');
            const initialValue = JSON.parse(saved);
            return initialValue
        }
        else {
            return [];
        }
    });
    const [clicked, setClicked] = useState(false);
    const [loggedIn, setLoggedIn] = useState();
    const [inpValue, setInpValue] = useState();
    const [validAccount, setValidAccount] = useState();



    const addToCart = (e, item) => {
        /**onclick */
        // e.target.outerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle  
        // cx="26" cy="26" r="25" fill="none" /><path  fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>`

        console.log(e)
        console.log(typeof item);

        if (typeof item !== 'string') {
            e.target.innerHTML = 'Added to cart';
            setInterval(() => {
                e.target.innerHTML = 'Add to cart'
            }, 1000)




            setAddedToCart(prev => [...prev, { ...item, cartAmount: item.amount }]);




            let exist = addedToCart.find(added => added.id === item.id);

            if (exist) {
                setAddedToCart(addedToCart.map(added => added.id === item.id ? { ...exist, cartAmount: exist.cartAmount += item.amount } : added));
            }
        } else if (item === 'increase') {

            let exist = addedToCart.find(added => added.id === e.id);

            setAddedToCart(addedToCart.map(added => added.id === e.id ? { ...exist, cartAmount: exist.cartAmount += 1 } : added));

        } else {

            let exist = addedToCart.find(added => added.id === e.id);
            console.log(exist.cartAmount);
            if (exist.cartAmount > 1) {
                // zbog state jer kasni za jedan a posle na re-render tj kad odemo u shop  on svakako dobije pravi cartAmount
                setAddedToCart(addedToCart.map(added => added.id === e.id ? { ...exist, cartAmount: exist.cartAmount -= 1 } : added));
            } else {
                setAddedToCart(addedToCart.filter(added => added.id !== exist.id));
            }
        }
        // console.log(addedToCart)

        // setFiltered(addedToCart.filter(added => added.id !== item.id));/**always empty kad si ga logovao u if treba iznad logicno da ne moze u ovaj if statement*/


        // setAddedToCart(addedToCart.map(added => (added.id === item.id ? added.cartAmount += item.amount : item)))


        // addedToCart.map(added => {
        // if (added.id === item.id) {
        // let indx = addedToCart.indexOf(added);
        // let nw = addedToCart[indx] = { ...item, cartAmount: item.cartAmount += item.amount }

        // setAddedToCart([{ ...item, cartAmount: item.cartAmount += item.amount }])


        // }
        // });


        // console.log(addedToCart);

        // localStorage.setItem('cartAmount', JSON.stringify(item.cartAmount)); ovo nije bilo potrebno jer se ionako addedToCart cuva u local storage samim tim se cuvaju i svi njegovi propert-ii samo stavis odje da je cartamount = proslom cartAMount + obicni amount


    }



    const removeItem = (item) => {
        setAddedToCart(addedToCart.filter(added => added.id !== item.id));
    }

    const filterShopItems = (e) => {
        setInpValue(e.target.value);
    }


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(addedToCart));
    }, [addedToCart]);


    return (

        <ShopContext.Provider value={{ validAccount, setValidAccount, filterShopItems, inpValue, loggedIn, setLoggedIn, addedToCart, setAddedToCart, addToCart, removeItem, clicked }}>
            {children}
        </ShopContext.Provider>
    )

}



export default ShopContext;
