import "./Form.css"
import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Form() {
    const [env,setEnv] = useState(true)
    const [formEnv,setFormEnv] = useState(true)

    const [form ,setForm] = useState({
        name: "",
        lastName:"",
        email:"",
        num:"",
        url:""
    })

   useEffect(()=>{
    if(!form.name && !form.lastName && !form.email){
        setEnv(true)
        setFormEnv(false)
    }else if(!form.name || !form.lastName || !form.email ){
        setEnv(false) 
        setFormEnv(false)
    }else{ setEnv(true)
        setFormEnv(true)}
   },[form])

    const handlechange = (e) =>{
        e.preventDefault();
       setForm({
        ...form,
        [e.target.id]:e.target.value
       })
         
    }

    const sendEmail = (e) =>{
     e.preventDefault();
     
    emailjs.sendForm('service_fnoauoh','template_2yj0ek9',e.target,'BF5OYqOgU1b3qlpke')
    .then(resp => {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    })
    .catch(error => {Swal.fire({
        icon: 'error',
        title: 'error al enviar el formulario',
        showConfirmButton: false,
        timer: 1500
      })})
    
    }

    return(
        <div className="container">
            <div id="contact"></div>
            <div className="titles">
                <p className="titlesTitle">Formulario</p>
                <p className="titlesSubtitle">Háblanos de tu video</p>
            </div>
            <form className="form" onSubmit={sendEmail} id="formContact" >
                <div className="formZone">
                    <p className="formZoneTitle">Nombre</p>
                    <input id="name" name="user_name" type={"string"} className={"formZoneInput"} onChange={handlechange}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">Apellido</p>
                    <input id="lastName" name="user_lastName" type={"string"} className={"formZoneInput"} onChange={handlechange}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">Email</p>
                    <input id="email" name="user_email" type={"string"} className={"formZoneInput"} onChange={handlechange}></input>
                </div>
                
                <div className="formZone">
                    <p className="formZoneTitle">Teléfono</p>
                    <input id="num"name="user_num"  type={"string"} className={"formZoneInput"} onChange={handlechange}></input>
                </div>
                <div className="formZone">
                    <p className="formZoneTitle">URL del video o del canal</p>
                    <input id="url" name="user_archiveURL" type={"string"} className={"formZoneInput"}onChange={handlechange}></input>
                </div>
                {/* <div className="formZone">
                    <p className="formZoneTitle">Subir un archivo</p>
                    <input name="user_archive" type="file" className={"formZoneFile"}></input>
                </div> */}
                <div className="formZone">
                    <p className="formZoneTitle">¿Qieres sugerir o especificar algún tipo de audio?</p>
                    <textarea name="user_text"className={"formZoneTextarea"}></textarea>
                </div>
                <div className="formPolitics">
                    <input type={"checkbox"} className={"formZoneCheckbox"}></input>
                    <p>Acepto la Politicas de Privacidad</p>
                </div>
                <div className={env? "formNotErr" : "formError"}>
                    <label>Completar correctamente el formulario (campos obligatorios : Nombre,Apellido y Email)</label>
                </div>
                {formEnv ?<button type={"submit"} className={"formSubmit"}>Enviar</button>:
                <label className={"formSubmitErr"}>Enviar</label>}
                
            </form>
            
        </div>
    )
}