import {useState} from "react"
import "./miOrg.css"

const MiOrg = (props)=>{
        //Estado - hooks
        //useState
        //const [nombreVAriable, funcionActualiza] = useState(valorInicial)
        //     const [mostrar,actualizarMostrar] = useState(true)
        //     console.log(prprs)

        // const manejarClick =()=>{
        //     console.log("Mostrar/Ocultar elemento",!mostrar);
        //     actualizarMostrar(!mostrar);
        // }

    return <div className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" onClick={props.cambiarMostrar} />
    </div>
}

export default MiOrg;