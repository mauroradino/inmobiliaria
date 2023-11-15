import soporte from '../../images/soporte.jpg'
import encuesta from '../../images/encuesta.jpg'
import sucursal from '../../images/sucursal.jpg'
import './section3.css'


const section3 = () =>{
    return(
        <div className='sectionCards'>
        <div className='card1'>
            <img className='cardImageSection' src={sucursal} alt='foto Sucursal'/>
            <div className='cardContent'>
            <h2 className='cardTitle'>Sucursales</h2>
            <div className='cardText'><h3>Encontrá la sucursal de Inmobiliaria más cercana a vos!</h3></div>
            <button>Conocer más</button>
            </div>        
        </div>
        <div className='card2'>
        <img className='cardImageSection' src={encuesta} alt='foto encuesta' />
            <div className='cardContent'>
            <h2 className='cardTitle'>Encuesta</h2>
            <div className='cardText'><h3>Completa nuestra encuesta de calidad para poder mejorar nuestros servicios!</h3></div>
            <button>Conocer más</button>
            </div>    
        </div>
        <div className='card3'>
        <img className='cardImageSection' src={soporte} alt='foto soporte'/>
            <div className='cardContent'>
            <h2 className='cardTitle'>Soporte 24hs</h2>
            <div className='cardText'><h3>Contamos con atención al cliente las 24 horas, no dudes en hacer tu consulta!</h3></div>
            <button>Conocer más</button>
            </div>    
        </div>
        </div>
    );
}

export default section3;