import "./Form.css"

export default function Form() {
    return(
        <div className="container">
            <div id="contact"></div>
            <div className="titles">
                <p className="titlesTitle">Formulario</p>
                <p className="titlesSubtitle">Háblanos de tu video</p>
            </div>
            <form className="form">
                <div className="formZone">
                    <p className="formZoneTitle">Nombre</p>
                    <input type={"string"} className={"formZoneInput"}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">Apellido</p>
                    <input type={"string"} className={"formZoneInput"}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">Email</p>
                    <input type={"string"} className={"formZoneInput"}></input>
                </div>
                
                <div className="formZone">
                    <p className="formZoneTitle">Teléfono</p>
                    <input type={"string"} className={"formZoneInput"}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">URL del video o del canal</p>
                    <input type={"string"} className={"formZoneInput"}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">Subir un archivo</p>
                    <input type={"file"} className={"formZoneFile"}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">¿Qieres sugerir o especificar algún tipo de audio?</p>
                    <textarea className={"formZoneTextarea"}></textarea>
                </div>
                <div className="formPolitics">
                    <input type={"checkbox"} className={"formZoneCheckbox"}></input>
                    <p>Acepto la Politicas de Privacidad</p>
                </div>
                <button type={"submit"} className={"formSubmit"}>Enviar</button>
            </form>
            
        </div>
    )
}