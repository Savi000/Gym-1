import UpperNav from '../../components/UpperNav';
import Nav from '../../components/Nav';
import AllLocations from '../../components/AllLocations';
import Footer from '../../components/Footer';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorPage from '../../components/ErrorPage';


export const getStaticProps = async () => {

    try {
        const res = await fetch('https://gym2-dec90-default-rtdb.europe-west1.firebasedatabase.app/gym/locations.json');
        const data = await res.json();


        return {
            props: {
                locations: data
            }
        }

        /**zbog pre-rendera komponenti( use effect je client side )*/
    } catch (err) {
        return {
            notFound: true
        }
    }
}


const LocationsPage = ({ errorCode, locations }) => {
    // if (errorCode) {
    //     return <ErrorPage statusCode={errorCode} />
    // }

    console.log(locations);

    return (
        <>

            <UpperNav />
            <div style={{ background: 'black' }}>
                <Nav />
                <div style={{ display: 'flex', maxWidth: '80%', justifyContent: 'center', flexFlow: 'row wrap', margin: 'auto' }}>
                    {locations.map(location => <AllLocations key={location.id} location={location} />)}
                </div>

            </div>
            <Footer />
        </>
    )

}

export default LocationsPage
