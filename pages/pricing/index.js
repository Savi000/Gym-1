import UpperNav from "../../components/UpperNav";
import Nav from "../../components/Nav";
import classes from "../../styles/Pricing.module.scss";

const pricingPage = () => {
  return (
    <>
      <UpperNav />
      <div className={classes.pricing} style={{ background: "black" }}>
        <Nav />
        {/* samo privremeno dok ne skontam oce li biti img ili ne pa onda
            mogu staviti black na nav */}

        {/* stavljam odje da bi svemu bio background black */}

        <h1 className={classes.header}>Pricing</h1>
        <div className={classes.table}>
          <div className={classes.offerAndPrice}>
            <div className={classes.border}>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus voluptatum deserunt omnis assumenda natus facere
                officiis delectus laboriosam ut.
              </h4>
            </div>
            <p>199.99</p>
          </div>
          <div className={classes.offerAndPrice}>
            <div className={classes.border}>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus voluptatum deserunt omnis assumenda natus facere
                officiis delectus laboriosam ut.
              </h4>
            </div>
            <p>199.99</p>
          </div>
          <div className={classes.offerAndPrice}>
            <div className={classes.border}>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus voluptatum deserunt omnis assumenda natus facere
                officiis delectus laboriosam ut.
              </h4>
            </div>
            <p>199.99</p>
          </div>
          <div className={classes.offerAndPrice}>
            <div className={classes.border}>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus voluptatum deserunt omnis assumenda natus facere
                officiis.
              </h4>
            </div>
            <p>199.99</p>
          </div>
          <div className={classes.offerAndPrice}>
            <div className={classes.border}>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus voluptatum deserunt omnis assumenda natus facere
                officiis delectus laboriosam ut.
              </h4>
            </div>
            <p>199.99</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default pricingPage;
