import "./Portafolio.css"

import imgMic from "../../Images/PortafolioMic.png"
import imgAuris from "../../Images/PortafolioAuris.png"
import Test from "../../Audios/test.mp3"


export default function Portafolio(){
    return(
            <div  className="containerPort">
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
                                    <h3>Trabajos Recientes</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellat eum dolore, sint nemo harum fuga autem expedita, ea velit modi voluptas est. Fugit officiis nulla exercitationem eius aliquid labore.</p>   
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