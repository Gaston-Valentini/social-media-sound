import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";



export default  function Home (){
    return(
            <div>
            <Navbar/>
            <Header/>
            <About/>
            <Footer/>

            </div>
    )
}