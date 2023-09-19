import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { useState } from "react"

//otra forma de crear componente

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    //para el nuevo formulario de  registrar equipo
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    
    const {registrarColaborador, crearEquipo} = props

    //quitar la recarga del navegador, y q sea responsable este metodo event:
    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envio")
    //recopilar los datos en un estado en el formualrio, para enviar los datos:
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
    //aqui en lugar de q el console registre al nuevo colab, lo hara props llamando la fn desde app.js
        registrarColaborador(datosAEnviar)
    }
    //quitar la recarga del navegador, y q sea responsable este metodo event:
    const manejarNuevoEquipo = (event) => {
        event.preventDefault()
        crearEquipo({titulo, colorPrimario: color})//podemos mandarlo como objeto y no poner color:color, porq se llaman igual
    }


    return <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>
                Rellena el formulario para crear el colaborador.
                </h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    valor={nombre} 
                    actualizarValor= {actualizarNombre}
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required 
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones 
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                /> 
                <Boton>
                    Crear
                </Boton>
            </form>
    
            <form onSubmit={manejarNuevoEquipo}>
                <h2>
                Rellena el formulario para crear el equipo.
                </h2>
                <CampoTexto 
                    titulo="Titulo" 
                    placeholder="Ingresar titulo" 
                    required 
                    valor={titulo} 
                    actualizarValor= {actualizarTitulo}
                />
                <CampoTexto 
                    titulo="Color" 
                    placeholder="Ingresar el color en Hexadecimal" 
                    required 
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                  <Boton>
                    Registrar equipo
                </Boton>
                
                </form>
           </section>
}

export default Formulario