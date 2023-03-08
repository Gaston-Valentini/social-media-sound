import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Portafolio from "../Portafolio/Portafolio";
import Form from "../Form/Form";



export default  function Home (){
    return(
            <div>
            <Navbar/>
            <Header/>
            <About/>
            <Portafolio/>
            <Form/>
            <Footer/>
            </div>
    )
}