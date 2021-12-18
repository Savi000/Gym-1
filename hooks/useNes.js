
function useNes() {
    const getStaticProps = async () => {
        const req = await fetch('https://gym1-47284-default-rtdb.europe-west1.firebasedatabase.app/gym.json')
        const res = await req.json();


        return {
            props: {
                nes: res.supplements
                // odje kad mapujem i dodam amount i to ne radi a dolje na state radi

            }
        }
    }
    return { nes }
}