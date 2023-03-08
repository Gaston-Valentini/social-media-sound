import styles from "./Footer.module.css"
import {AiFillInstagram , AiFillFacebook, AiFillMail} from "react-icons/ai"
import logo from '../../Images/logo.png'
import { Link } from "react-router-dom";

export default function Footer(){
    function copiarAlPortapapeles(id_elemento) {

        // Crea un campo de texto "oculto"
        var aux = document.createElement("input");
      
        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
      
        // Añade el campo a la página
        document.body.appendChild(aux);
      
        // Selecciona el contenido del campo
        aux.select();
      
        // Copia el texto seleccionado
        document.execCommand("copy");
      
        // Elimina el campo de la página
        document.body.removeChild(aux);
      
      }
    return(
        <footer className={styles.footer}>
           
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