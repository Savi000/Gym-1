import React, { useContext, useEffect, useRef, useState, } from 'react'
import Link from 'next/link';
import useFetchUsers from '../hooks/useFetchUsers';
import classes from '../styles/Login.module.scss';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHome } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ShopContext from '../store/ShopContext';



// import { ssrEntries } from 'next/dist/build/webpack/plugins/middleware-plugin'; ovo je problem koji je izazivao vazda gledaj import 
const CreateAccount = () => {

    const router = useRouter();

    const { setLoggedIn } = useContext(ShopContext);


    // const { signIn, user } = useFetchUsers(); zbog ovog ne moze tj zbog useState koji mora da se ceka a nama useri trebaju odma a ne initial state pa useri

    // const [users, setUsers] = useState(user);
    const [loading, setLoading] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isUserNameValid, setIsUserNameValid] = useState(true);
    const [passwordMatches, setPasswordMatches] = useState(true);
    const [isPasswordShowing, setIsPasswordShowing] = useState(true);
    const [isVerifiedPassShowing, setIsVerifiedPassShowing] = useState(true);
    const [userExists, setUserExists] = useState(false);
    const [data, setData] = useState();

    /**ako nije undefined */
    // let smth = new Set(user);
    // const [oneUser, setOneUser] = useState([]);


    const username = useRef();
    const password = useRef();


    // const userUpdate = () => {
    // signIn(e); e is not defined ovo je onClick na btn
    // }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await fetch('https://gym2-dec90-default-rtdb.europe-west1.firebasedatabase.app/gym/users.json');
                const users = await res.json();
                setData(users);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [data])

    const createAccount = async (e) => {
        e.preventDefault();
        // signIn(e);


        // ovo radi zato sto nema initial state nego se dolje postuje a odje se odma fetchuje onako kako je
        // sign in je funkcija koja pokrece da se fetchuju iz firebase postovani user-i

        // setOneUser(user); isto sranje mislim
        /**hmmm zbog ovoga se nisu postovali requestovi u firebase vj kad se klikne bude nista i nista se ne salje jer se refresh stranica */
        /**samo u if posle dodaj i da je password length > 0 */
        // if (user !== undefined) {
        // let smth = new Set(user);
        // setOneUser([...smth])
        // console.log(user);

        let name = Object.values(data).map(obj => obj.name);

        // let sone = new Set(name) problem je sto kasni svakako jer array ne pokazuje odma kad se dodaju nego tek dva klika posle
        // let zdr = [...sone];

        let nameExists = name.some(nam => nam === username.current.value);
        setUserExists(nameExists);


        setTimeout(() => {
            setUserExists();

        }, 2000)


        // console.log(user);
        // console.log(nes) realna pricica mzd i nes ne treba jer nidje necu vise koristit bez odje a odje je dostupan
        // console.log(nameExists)
        // console.log(isPasswordValid);
        // console.log(isUserNameValid);




        if (!nameExists && isPasswordValid && isUserNameValid && passwordMatches) {



            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: username.current.value, password: password.current.value })
            };
            try {
                setLoading(true)
                fetch('https://gym2-dec90-default-rtdb.europe-west1.firebasedatabase.app/gym/users.json', requestOptions)


                router.push('/signIn')
                setLoading(false);
            } catch (error) {
                console.log(error);
            }


        }


    }



    const passwordValidation = (e) => {
        let max = 10;
        if (e.target.value.length > max) {
            e.target.value = e.target.value.substring(0, max);
        }

        if (e.target.value.length > 0) {
            if (e.target.value.length >= 6 && e.target.value.toLowerCase() !== e.target.value) {
                setIsPasswordValid(true);
            } else {

                setIsPasswordValid(false);
            }
        } else {
            setIsPasswordValid();
        }
        // console.log(e.target.value);
    }

    const confirmPasswordValidation = (e) => {
        let max = 10;
        if (e.target.value.length > max) {
            e.target.value = e.target.value.substring(0, max);
        }

        if (e.target.value.length > 0) {
            if (e.target.value !== password.current.value) {
                setPasswordMatches(false);
            } else {
                setPasswordMatches(true);
            }
        } else {
            setPasswordMatches();
        }
    }

    const showPassword = () => {
        setIsPasswordShowing(!isPasswordShowing);
    }
    const showVerifiedPassword = () => {
        setIsVerifiedPassShowing(!isVerifiedPassShowing)
    }

    return (
        /**ZNS KAKO KAD NAPRAVIS ACC TJ KAD SE KLIKNE ONA I SVE BUDE U REDU ODMA GA REDIREKTUJES U SIGN IN I RJESEN JE PROBLEM O USE STATE STO KASNI ZA JEDAN */
        <div className={classes.createAccount}>
            <Link href='/'><a className={classes.homeLink}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a></Link>
            <form onSubmit={createAccount}>
                <div className={classes.links}>
                    <Link href='/createAccount'><a className={router.pathname === '/createAccount' ? classes.active : classes.link}>Sign up</a></Link>
                    <Link href='/signIn'><a className={router.pathname === '/signIn' ? classes.active : classes.link}>Sign in</a></Link>

                </div>
                <label htmlFor="userInp">username</label>

                <input id="userInp" ref={username} required />
                {isUserNameValid !== undefined && !isUserNameValid && <p>username must have length bigger than 0</p>}
                {userExists && <p>user already exists. Type another name and submit.</p>}


                <label htmlFor="passInp">password</label>

                <input type={!isPasswordShowing ? 'password' : ''} required id="passInp" onChange={passwordValidation} ref={password} />
                <a className={classes.eye} onClick={showPassword}><FontAwesomeIcon icon={isPasswordShowing ? faEye : faEyeSlash}></FontAwesomeIcon></a>

                {isPasswordValid !== undefined && !isPasswordValid && <p>password must be 6 charachters or longer and must contain one uppercase letter</p>}




                <label >verify password</label>
                <input type={!isVerifiedPassShowing ? 'password' : ''} required onChange={confirmPasswordValidation} />
                <a className={classes.eye} onClick={showVerifiedPassword}><FontAwesomeIcon icon={isVerifiedPassShowing ? faEye : faEyeSlash}></FontAwesomeIcon></a>

                {passwordMatches !== undefined && !passwordMatches && <p>passwords do not match</p>}



                <button disabled={loading} className={classes.submitBtn} type='submit'>Create Account</button>
                {loading && <p style={{ fontSize: '26px' }}>AJDEEEEEEE</p>}




            </form>
        </div>
    )
}

export default CreateAccount
