import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    //creamos un array de las opciones de los equipos:
   /* const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "DevOps",
        "Ux y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ]*/

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
//rl disabled es para ocultar la opcion del menu seleccionar equipo a simple 
//vista pero q se vera cuando se desplegue el menu
    return <div className= "lista-opciones">
        <label> Equipos </label>
        <select value={props.valor} onChange={manejarCambio}>
            
            <option value="" disabled defaultValue="">Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones
