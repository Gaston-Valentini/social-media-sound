import "./Portafolio.css"

import imgMic from "../../Images/PortafolioMic.png"
import imgAuris from "../../Images/PortafolioAuris.png"
import Test from "../../Audios/test.mp3"


export default function Portafolio(){
    return(
            <div className="containerPort">
                            <div className="portTitles">
                                    <p>Trabajos</p>   
                                    <h2>Este es mi Portafolio</h2>
                                    
                            </div>
                <div className="div">
                    <div className="countainer1">
                    <img  className="imgA" alt="mic" src={imgAuris}></img>
                        
                    </div>
                    <div className="AudiosC">
                          
                    <div className="countainer2">
                       <div className="Title">
  
                                    <div>
                                    <h3>¡EL 50% DE TU VIDEO ES EL AUDIO!</h3>
                                    <p>El audio malo genera rechazo: Música inadecuada, volumen demasiado bajo o alto, narración tapada por la música de fondo, sin fade out, cortes de sonido, ruidos, ambiente fuerte, saturaciones... Todo esto hace que tu video no sea agradable al oido, que no se reproduzca por completo y te hace perder audiencia.</p>   
                                    </div>
                                   
                            </div>
                        <div className="slides">
  
                                    <div className="NameContainer">
                                    <h3>Esto es un audio</h3>   
                                    <p>Juan Carlos</p>
                                    </div>
                                    <div className="AudioContainer">
                                        <audio controls>
                                            <source src={Test} type="audio/mp3"/>
                                        </audio>
                                    </div>
                        </div>
                         <div className="slides">
  
                                    <div className="NameContainer">
                                    <h3>Esto es un audio</h3>   
                                    <p>Juan Carlos</p>
                                    </div>
                                    <div className="AudioContainer">
                                        <audio controls>
                                            <source src={Test} type="audio/mp3"/>
                                        </audio>
                                    </div>
                        </div>
                         <div className="slides">
  
                                    <div className="NameContainer">
                                    <h3>Esto es un audio</h3>   
                                    <p>Juan Carlos</p>
                                    </div>
                                    <div className="AudioContainer">
                                        <audio controls>
                                            <source src={Test} type="audio/mp3"/>
                                        </audio>
                                    </div>
                        </div>
                    </div>
                    </div>
                    <div className="countainer3">
                    <img alt="mic" src={imgMic}></img>
                    </div>
                </div>
                
            </div>
    )
}