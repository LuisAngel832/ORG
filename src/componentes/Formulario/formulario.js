import { useState } from 'react';
import './formulario.css';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = (props)=>{
    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {registrarColaborador,crearEquipo} = props

    const manejarEnvio = (e)=>{
        e.preventDefault();
        let datosAEnviar = {
            equipo,
            nombre,
            puesto,
            foto
        }
         registrarColaborador(datosAEnviar); 
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }

    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" 
                placeholder="Ingresar nombre"
                required valor={nombre}
                setValor={setNombre}
            />
            <Campo titulo="Puesto" 
                placeholder="Ingresar Puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <Campo titulo="Foto"
                placeholder="Ingresar enlace de foto "
                required
                valor={foto}
                setValor={setFoto}    
            />
            <ListaOpciones 
                equipo={equipo}
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo titulo="Titulo" 
                placeholder="Ingresar titulo"
                required valor={titulo}
                setValor={setTitulo}
            />
            <Campo titulo="Color" 
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
            <Boton>Rejistrar Equipo</Boton>
        </form>
    </section>
};

export default Formulario;