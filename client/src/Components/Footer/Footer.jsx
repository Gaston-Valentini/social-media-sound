import styles from "./Footer.module.css"
import {AiFillInstagram , AiFillFacebook, AiFillMail} from "react-icons/ai"
import logo from '../../Images/logo.png'
import { Link } from "react-router-dom";

export default function Footer(){

    return(
        <footer className={styles.footer}>
           
            <div className={styles.container}>
                
                <div className={styles.row}>
                    <div className={styles.img}>
                        <img alt="logo"src={logo}></img> 
                    </div>
                    <hr></hr>
                   
                    <div className={styles.footer_col}>
                        <h4>Politicas</h4>
                        <ul>
                            <li><Link to="/PoliticsPriv">Politicas de Privacidad </Link></li>
                            <li><Link to="/PoliticsCookies">Politicas de Cookies </Link></li>
                           
                        </ul>
                    </div>
                    <hr></hr>
                    <div className={styles.footer_col}>
                        <h4>Contacto</h4>
                        <ul>
                            <li><p>socialmediasound.com</p></li>
                            <li><p>633 848 863</p></li>
                            <li><p>info@socialmediasound.es</p></li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div className={styles.footer_col}>
                        <h4>Redes</h4>
                        <div className={styles.social}>
                        <p><AiFillInstagram /></p>
                        <p><AiFillFacebook/></p>
                        <p><AiFillMail/></p>
                        </div>
                    </div>
                
                </div>
            </div>
        
        </footer>
    )
}