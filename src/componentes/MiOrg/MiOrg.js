import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    console.log(props)
    //hacer un switch
   // const [mostrar, actualizarMostrar] = useState(true)
   // const manejarClick = () => {
   //     console.log("Mostrar/ocultar elemento", !mostrar)
   //     actualizarMostrar(!mostrar) //negar mostrar, si es true, lo convierte a false, y viceversa
    //}
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        </section>
}

export default MiOrg