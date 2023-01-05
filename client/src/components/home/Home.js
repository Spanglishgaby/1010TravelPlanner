import NavBar from "../NavBar/NavBar"
import Header from "./Header"
import Footer from "./Footer"
import Destination from "./Destination"
import Question from "./Question"
import HowitWork from "./HowitWork"


function Home({reviews,setReviews}){
    return (
      <>
      <NavBar/>
      <Header/>
      <HowitWork/>
      <Destination/>
      <Question reviews={reviews} setReviews={setReviews}/>
      <Footer/>
    </>
    )
}

export default Home