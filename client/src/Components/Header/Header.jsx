import style from "./Header.module.css"

import logo from "../../Images/logo.png"

export default function Header(params) {
    return (
        <div className={style.header}>
            <div className={style.headerData}>
                <div className={style.headerDataImageContainer}>
                    <img src={logo} alt={"logo"} className={style.headerDataImage}></img>
                </div>
                <p className={style.headerDataText}>Música hecha a tu medida con los mejores profesionales</p>
                <button className={style.headerDataButton}>Comenzemos!</button>
            </div>
        </div>
    )
}