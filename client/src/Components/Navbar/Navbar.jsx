import  "./Navbar.css"
import {Link} from 'react-scroll'
import Logo from "../../Images/logoBlack.png"
import { useState } from "react"

export default function Navbar(params) {
    const [scroll,setScroll] = useState(false)

    const changeNavbar = () =>{
        
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
                        <li><Link to="header" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
                        <li><Link to="services" spy={true} smooth={true} offset={50} duration={500} >Servicios</Link></li>
                        <li><Link to="proyects" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contacto</Link></li>
                    </ul>
                </div>
            
                
            </nav>
            
        </header>
    )
}