//import { useState } from "react"
import "./CampoTexto.css"
const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

//destructuracion, quiero a inf de props
    const { type= "text" } = props
   

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value) // todo lo va actualizar al usestate de valor para guardar el nombre y todo los datos
    }

    return <div className={`campo campo-${type}`}> 
        <label> {props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            /*funcion onchange cada q el usuario inserte un valor en el input se manda llamr */
            onChange={manejarCambio}
            type={type}
        />
    </div>
}




export default CampoTexto