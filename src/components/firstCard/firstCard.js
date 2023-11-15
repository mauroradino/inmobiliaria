import depto from '../../images/depto.jpg'
import './firstCard.css'


const firstCard = () =>{
    return(
        <div className='firstCard'>
            <div className="cardText1">
                <h2 className='cardTitle1'>Departamentos</h2>
                <h3 className='cardContent1'>En Inmobiliaria, entendemos que los departamentos son una opción de vida moderna y versátil. Nuestra extensa cartera de propiedades incluye una amplia selección de departamentos cuidadosamente seleccionados para satisfacer tus necesidades.</h3>
            </div>
            <img className='FCimage' src={depto} width={"40%"} />
        </div>
    );
}

export default firstCard;