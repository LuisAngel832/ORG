import { useState } from 'react'
import './Campo.css'


const Campo = (props)=>{
    //Destructuracion
    const {type = "text"} = props

    const manejarCambio = (e)=>{
        props.setValor(e.target.value);
    }

    const placeholderModificado = `${props.placeholder}...` 
    return <div className={`Campo Campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        type={type}
        placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={manejarCambio}/>
    </div>
}

export default Campo;