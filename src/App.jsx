import './App.css'
import FooterUp from './FooterUp/FooterUp'
import GetStarted from './Get Started/GetStarted'
import Hero from './Hero/Hero'
import Footer from './Main footer/Footer'
import NavBar from './Nav/NavBar'
import Stats from './Stats/Stats'


function App() {

  return (
    <>
     <NavBar></NavBar>
      <Hero></Hero>
      <Stats></Stats>
      <GetStarted></GetStarted>
      <FooterUp></FooterUp>
      <Footer></Footer>
    </>
  )
}

export default App
