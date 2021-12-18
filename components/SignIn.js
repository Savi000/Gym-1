import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link';
// import useFetchUsers from '../../hooks/useFetchUsers';
import useFetchUsers from '../hooks/useFetchUsers';
import classes from '../styles/Login.module.scss';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react/cjs/react.development';
import ShopContext from '../store/ShopContext';
const SignIn = () => {
    // const [user, setUser] = useState([]); mora odma ne treba nam hooks jer onda imamo initial state
    //a odje se ne moze tolerisati nego nam treba odma koje acc imamo u firebase


    const router = useRouter();

    const userName = useRef();
    const password = useRef();

    // const { validAccount, setValidAccount } = useContext(ShopContext); kako ovo ne updejtuje se u 
    //home a npr trebalo bi mi samo za alert da stavim succesfully logged in
    const [validAccount, setValidAccount] = useState();
    const [passwordRevealed, setPasswordRevealed] = useState(false);
    const [loading, setLoading] = useState(false);

    // const { user, signIn } = useFetchUsers(); ne moze zbog initla state odje nam trebaju odma podaci o user-ima a ne prov [] pa onda useri pa tek onda dodati dolazi ovako fetchujem i odma mi se pojave svi


    // const accountValidation = () => {
    //     if (userName.current.value.length > 0 && password.current.value.length > 0) {
    //         if (equals && passEquals) {
    //             setValidAccount(true);

    //         } else {
    //             setValidAccount(false);

    //         }
    //     } else {
    //         setValidAccount();
    //     }
    //     console.log(validAccount);
    // }
    /**PROBAJ DA DODAS I ONO KEEP ME SIGNED IN */

    const signIn = async (e) => {
        e.preventDefault();


        try {
            setLoading(true);
            const res = await fetch('https://gym2-dec90-default-rtdb.europe-west1.firebasedatabase.app/gym/users.json');
            const data = await res.json();

            let name = Object.values(data).map(obj => obj.name)
            let pass = Object.values(data).map(obj => obj.password)

            let equals = name.some(nam => nam === userName.current.value);
            let passEquals = pass.some(pas => pas === password.current.value);


            if (equals && passEquals) {
                setValidAccount(true);
                router.push('/')
            } else {
                setTimeout(() => {
                    setValidAccount()
                }, 3000)

                setValidAccount(false);

            }

            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }


    const passwordLength = (e) => {
        let max = 11;
        // setPasswordValue(e.target.value) moze ovako ali kasni state  isetujes ga ispod ponovo
        if (e.target.value.length > max) {
            e.target.value = e.target.value.substring(0, max);
        }
    }



    return (

        <div className={classes.signIn}>
            <Link href='/'><a className={classes.homeLink}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a></Link>
            <form onSubmit={signIn}>
                <div className={classes.links}>
                    <Link href='/createAccount'><a className={router.pathname === '/createAccount' ? classes.active : classes.link}>Sign up</a></Link>
                    <Link href='/signIn'><a className={router.pathname === '/signIn' ? classes.active : classes.link}>Sign in</a></Link>
                </div>
                <label htmlFor="userInp">username</label>
                <input id="userInp" ref={userName} required />

                <label htmlFor="passInp">password</label>

                <input id="passInp" type={!passwordRevealed ? 'password' : ''} ref={password} required onChange={passwordLength} />
                <a className={classes.eye} onClick={() => setPasswordRevealed(!passwordRevealed)}><FontAwesomeIcon icon=
                    {passwordRevealed ? faEye : faEyeSlash}></FontAwesomeIcon></a>

                {validAccount !== undefined && !validAccount && <p>invalid username or password. Try again and click sign in.</p>}
                <button className={classes.submitBtn} type='submit'>Sign In</button>
                {loading && validAccount !== undefined && !validAccount && <p>pricekajbrt</p>}

            </form>
        </div>
    )
}

export default SignIn
