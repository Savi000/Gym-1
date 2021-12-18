import { useState } from "react";


function useFetchUsers() {
    const [user, setUser] = useState([]);
    // const [nameExists, setNameExists] = useState(false);
    // const [userExists, setUserExists] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const res = await fetch('https://gym1-47284-default-rtdb.europe-west1.firebasedatabase.app/gym/users.json');
                const data = await res.json();
                setUser(data);

                // let name = Object.values(user).map(obj => obj.name);
                // setNameExists(name.some(nam => nam === username.current.value));

            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData();
        // let name = Object.values(user).map(obj => obj.name)
        // let pass = Object.values(user).map(obj => obj.password)

        // let equals = name.some(nam => nam === userName.current.value);
        // let passEquals = pass.some(pas => pas === password.current.value);


        // if (equals && passEquals) {
        //     setUserExists(true);
        // } else {
        //     setUserExists(false);
        // }


    }
    return { signIn, user }
}



export default useFetchUsers;