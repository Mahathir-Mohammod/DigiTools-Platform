import { Suspense } from "react";
import "./App.css";
import NavBar from "./Nav/NavBar";
import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Products from "./Products/Products";
import Pricing from "./Pricing card/Pricing";
import GetStarted from "./Get Started/GetStarted";
import FooterUp from "./FooterUp/FooterUp";
import Footer from "./Main footer/Footer";


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Stats></Stats>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Products></Products>
      </Suspense>
      <Pricing></Pricing>
      <GetStarted></GetStarted>
      <FooterUp></FooterUp>
      <Footer></Footer>
    </>
  );
}

export default App;