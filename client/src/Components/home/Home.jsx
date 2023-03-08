import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";



export default  function Home (){
    return(
            <div>
                <Navbar/>
                <Header/>
                <About/>
                <Form/>
                <Footer/>
            </div>
    )
}