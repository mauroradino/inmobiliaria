import './Vender.css'
const Vender = () => {

    return (
        <div className="bodyVender">
            <h2 className='venderTitle'>Vender</h2>
            <div className='inputVenderGroup'>
            <label>Titulo</label>
            <input id="titulo" type="text" placeholder='Titulo de la propiedad'/>
            <label>Descripcion</label>
            <input id="descripcion" type="text" placeholder='Descripcion de la propiedad' className='inputDescripcion'/>
            <label>Precio:</label>
            <input className='inputPrecio' id='precio' type='number' placeholder='Precio de la propiedad en USD' />
            <input id="imagen" type="file" style={{border: "none"}}/>
            <div className='divCantidades'><label>Cantidad Habitaciones</label><input className='inputNumber' step={1} min={0} defaultValue={0} type='number' /></div>
            <div className='divCantidades'><label>Cantidad Baños</label><input className='inputNumber' defaultValue={0} type='number' /></div>
            </div>
            <button className='btnVender'>Guardar</button>
        </div>
    )
}

export default Vender;
