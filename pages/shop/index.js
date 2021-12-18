import React from "react";
import Shop from "../../components/Shop";

export const getStaticProps = async () => {
  try {
    const req = await fetch(
      // promjena
      "https://gym2-dec90-default-rtdb.europe-west1.firebasedatabase.app/gym/supplements.json"
    );
    const res = await req.json();


    return {
      props: {
        nes: res,
        // odje kad mapujem i dodam amount i to ne radi a dolje na state radi
      },
    };
  } catch (err) {
    return {
      notFound: true
    }
  }

};

const shopPage = ({ nes }) => {
  return <Shop nes={nes} />;
};

export default shopPage;
