import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=>{
    const {colorPrimario, colorSecundario,titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props


    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.5)
    }
    const estiloTitulo = {
        borderColor: hexToRgba(colorPrimario, 0.5)
    }

    return <>
    { colaboradores.length >0 &&
        <section className="equipo" style={obj}>
            <input
            type='color'
            className='input-color'
            value={colorPrimario}
            onChange={(e)=>{
                actualizarColor(e.target.value , id)
            }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                
            {colaboradores.map((colaborador,index)=>
                <Colaborador datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                colorSecundario={colorSecundario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />
            )}
                
            </div>

        </section>
    }
    </>
}

export default Equipo;