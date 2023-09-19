import { useState } from 'react';
import {v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';




function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //lista de colaboradores,inicializar con arreglo vacio pues se ira llenando en el formulario
  const [colaboradores, actualizarColaboradores] = useState([
{
id: uuid(),
equipo:"Front End",
foto: "https://github.com/Marycruz1819.png",
nombre:"Mary Cruz López",
puesto:"Estudiante",
fav: true,
},
{
  id: uuid(),
  equipo:"Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre:"Harland Lohora",
  puesto:"Instructor",
  fav: false,
  },
{
id: uuid(),
equipo:"Programación",
foto: "https://github.com/genesysaluralatam.png",
nombre:"Genesys Rondón",
puesto:"Desarroladora de software e instructora",
fav: false,
},
{
id: uuid(),
equipo:"UX y Diseño",
foto: "https://github.com/JeanmarieAluraLatam.png",
nombre:"Jeanmarie Quijada",
puesto:"Instructora en Alura Latam",
fav: false,
},
{
  id: uuid(),
  equipo:"Programación",
  foto: "https://github.com/christianpva.png",
  nombre:"Christian Velasco",
  puesto:"Head de Alura e Instructor",
  fav: false,
},
{
  id: uuid(),
  equipo:"Innovación y Gestión",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre:"José González",
  puesto:"Dev FullStack",
  fav: false,
}])
//se cambia la constante equipos aqui con usestate oara q react la escuche al cambiar los colroes, 
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])

const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

//registrar colaborador
const registrarColaborador = (colaborador) => {
  console.log("nuevo colaborador", colaborador)
  //spreadoperator, copia de valores actuales, y agregar colab
  actualizarColaboradores([...colaboradores, colaborador])
}

//eliminar colaborador. recibir el id para saber cual eliminar
const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador")
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  console.log(nuevosColaboradores)
  //actualiza el arreglo luego q eliminamos algun colab.
  actualizarColaboradores(nuevosColaboradores)
}

//Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  //recorrer arreglo de usestate  de cambio de color
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })

  //decirle a react q hay nuevos datos . aqui es donde por fin se vera reflejado el cambio de color
    actualizarEquipos(equiposActualizados)
}
//fn crear equipo para comunicarme con el formulario de nuevos equipos
const crearEquipo = (nuevoEquipo) =>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }]) //para actualizar la lista de equipos en el formulario 1
}

//para actualizar los corazones en true o false
const like  = (id) =>{
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

/*
//lista de equipos
//se cambia la constante equipos arriba de todo esto con usestate para q react la escuche al cambiar los colroes, 

  const equipos = [
    {
      id:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo:"DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ]
   */ 
  //condicion && se muestra
// ternario : { mostrarF...
  return (
    <div>
      <Header />
      
      {/*mostrarFormulario ? <Formulario /> : <div></div>*/} 
      {mostrarFormulario && <Formulario
         equipos={equipos.map((equipo) => equipo.titulo)} 
         registrarColaborador ={registrarColaborador}
         crearEquipo={crearEquipo}
       />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    {
      //como recorrer el arreglo equipos en jsx. con el metodo map-no olvidar la key-
      equipos.map((equipo,index) =>  <Equipo 
      datos={equipo} 
      key={equipo.titulo} 
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />
      )
    }

    <Footer />
      
    </div>
  );
}
//fin
export default App;
