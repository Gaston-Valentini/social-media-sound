import "./Portafolio.css"

import imgMic from "../../Images/PortafolioMic.png"
import imgAuris from "../../Images/PortafolioAuris.png"
import Test from "../../Audios/test.mp3"


export default function Portafolio(){
    return(
            <div className="containerPort">
                <div className="div">
                    <div className="countainer1">
                    <img  className="imgA" alt="mic" src={imgAuris}></img>
                        
                    </div>

                    <div className="countainer2">
                         <div className="Title">
  
                                    <div className="NameContainer">
                                    <h2>Nuestras Mejoras</h2>   
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

                    <div className="countainer3">
                    <img alt="mic" src={imgMic}></img>
                    </div>
                </div>

            </div>
    )
}