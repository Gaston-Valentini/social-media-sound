import styles from "./Footer.module.css"
import {AiFillInstagram , AiFillFacebook, AiFillMail} from "react-icons/ai"
import logo from '../../Images/logo.png'
import { Link } from "react-router-dom";

export default function Footer(){

    return(
        <footer id="contact"className={styles.footer}>
           
            <div className={styles.container}>
                
                <div className={styles.row}>
                    <div className={styles.img}>
                        <img src={logo}></img> 
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
                            <li><a>socialmediasound.com</a></li>
                            <li><a>633 848 863</a></li>
                            <li><a>info@socialmediasound.es</a></li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div className={styles.footer_col}>
                        <h4>Redes</h4>
                        <div className={styles.social}>
                        <a><AiFillInstagram /></a>
                        <a><AiFillFacebook/></a>
                        <a><AiFillMail/></a>
                        </div>
                    </div>
                
                </div>
            </div>
        
        </footer>
    )
}