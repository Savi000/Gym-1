import Main from "../components/Main";
import Nav from "../components/Nav";
import UpperNav from "../components/UpperNav";
import About from "../components/About";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import ShopContext from "../store/ShopContext";
import { useEffect } from "react/cjs/react.development";

export default function HomePage() {
  // const { validAccount } = useContext(ShopContext);

  return (
    <>
      <UpperNav />
      {/* <video style={{
        position: 'fixed',
        right: '0',
        top: '50px',
        minWidth: '100%', ako bude video background
        minHeight: '100%'
      }} autoplay muted loop id="myVideo">
        <source src="https://youtu.be/zWh3CShX_do" type="video/mp4" />
      </video> */}
      {/* {console.log(loggedIn)} */}

      <div
        style={{
          backgroundImage: `url(/gymImg.jpg)`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Nav />
        <Main />
      </div>
      <About />
      <Footer />
    </>
  );
}
