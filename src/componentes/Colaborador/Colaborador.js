import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    //destructuracion para no poner cada nuevo colab
    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="colaborador">
        
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}  />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt= {nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
           {/* ternario para q funcione el corazon en fav o no fav*/}
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> :
             <AiOutlineHeart onClick={() => like(id)} /> } 
            
            
        </div>
    </div>
}


export default Colaborador

//arrow fn onClick={() => eliminarColaborador(id)}  es para q se mande llamar la eliminacion cuando se le de clic 