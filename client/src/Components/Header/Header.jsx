import style from "./Header.module.css"

import logo from "../../Images/logo.png"

export default function Header(params) {
    return (
        <div id="header" className={style.header}>
            <div className={style.headerData}>
                <div className={style.headerDataImageContainer}>
                    <img src={logo} alt={"logo"} className={style.headerDataImage}></img>
                </div>
                <p className={style.headerDataText}>Muéstranos tu video y dinos cómo te gustaría que suene</p>
                <button className={style.headerDataButton}>Mejorar mi audio!</button>
            </div>
        </div>
    )
}