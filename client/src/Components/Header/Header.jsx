import style from "./Header.module.css"

import { Link } from "react-scroll"

import logo from "../../Images/logo.png"

export default function Header(params) {
    return (
        <div id="header" className={style.header}>
            <div className={style.headerData}>
                <div className={style.headerDataImageContainer}>
                    <img src={logo} alt={"logo"} className={style.headerDataImage}></img>
                </div>
                <p className={style.headerDataText}>Muéstranos tu video y dinos cómo te gustaría que suene</p>
                <p className={style.headerDataInfo}>Pide presupuesto sin compromiso, no vas a encontrar un precio mejor. Además, si nos gusta tu proyecto lo hacemos gratis, porque nos gusta participar y ayudar a que los buenos proyectos vean la luz.</p>
                <Link to="contact" className={style.headerDataButton} spy={true} smooth={true} offset={50} duration={500}>Mejorar mi audio!</Link>
            </div>
        </div>
    )
}