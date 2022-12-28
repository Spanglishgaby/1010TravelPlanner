import NavBar from "../NavBar/NavBar"
import Header from "./Header"
import Footer from "./Footer"
import Destination from "./Destination"
import Question from "./Question"
import HowitWork from "./HowitWork"


function Home(){
    return (
      <>
      <NavBar/>
      <Header/>
      <HowitWork/>
      <Destination/>
      <Question/>
      <Footer/>
    </>
    )
}

export default Home