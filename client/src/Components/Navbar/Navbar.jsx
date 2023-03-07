import  "./NavBar.css"

import Logo from "../../Images/logoBlack.png"
import { useState } from "react"

export default function Navbar(params) {
    const [scroll,setScroll] = useState(false)

    const changeNavbar = () =>{
        console.log("asd")
        if(window.scrollY >= 650){
            setScroll(true)
        }else {
            setScroll(false)
        }

    }
    window.addEventListener('scroll',changeNavbar)
    return (
        <header className={scroll ? "ContainerNavA ": "ContainerNavOff" }>
           
            <div className={scroll ?'imgNav': "imgOff"}>
                    <img src={Logo} alt="logo"></img>
            </div>
            <nav >
                
                <div className={scroll? "listNavA" :"listNav"}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servis">Servicios</a></li>
                        <li><a href="#proyects">Mis Trabajos</a></li>
                        <li className='Contacto'><a  href="#contact">Contacto</a></li>
                    </ul>
                </div>
            
                
            </nav>
            
        </header>
    )
}