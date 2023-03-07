import "./App.css"

import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import About from "./Components/About/About"

export default function App(params) {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
        </div>
    )
}