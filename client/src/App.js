import "./App.css"

import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"

export default function App(params) {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}