import  "./NavBar.css"

import Logo from "../../Images/logo.png"
import { useState } from "react"

export default function Navbar(params) {
    const [scroll,setScroll] = useState(false)

    const changeNavbar = () =>{
        console.log("asd")
        if(window.scrollY >= 200){
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
            <nav className={scroll}>
                
                <div className={'listNav'}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre Nosotros</a></li>
                        <li><a href="#proyects">Mis Trabajos</a></li>
                        <li className='Contacto'><a  href="#contact">Contacto</a></li>
                    </ul>
                </div>
            
                
            </nav>
            
        </header>
    )
}