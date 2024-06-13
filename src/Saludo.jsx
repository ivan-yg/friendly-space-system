import './App.css';
function Hola(props)
{
    return(
        <div className='caja1'>
            <div className='texto'>
                <h1>CURSO DE {props.danza}</h1>
                <p>Nuestros docentes son de {props.pais} y se titularon en la academia {props.academia}</p>
            </div>
            <div className='fotos'>
                <img className='fotos2'src={props.imagen} />

            </div>
        </div>
    );
}
export default Hola;