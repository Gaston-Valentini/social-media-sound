import "./App.css"
import { Route, Routes } from "react-router-dom";


import PoliticsPriv from "./Components/Pollitics/PoliticsPriv"
import { PoliticsCookies } from "./Components/Pollitics/PoliticsCookies"
import Home from "./Components/home/Home";

export default function App(params) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/PoliticsPriv" element={<PoliticsPriv/>}/>
                <Route path="/PoliticsCookies" element={<PoliticsCookies/>}/>
                    
            {/* <Navbar/>
            <Header/>
            <About/>
            <Footer/> */}
        
            </Routes>
        </div>
    )
}