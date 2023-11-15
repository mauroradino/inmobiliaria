import casas from '../../images/casas.jpg'
import './secondCard.css'


const secondCard = () =>{
    return(
        <>
        <div className='secondCard'>
        <img className='FCimage2' src={casas} width={"40%"} alt='logo'/>
            <div className="cardText2">
                <h2 className='cardTitle2'>Casas</h2>
                <h3 className='cardContent2'>Para las familias que valoran el espacio y la comodidad, nuestros apartamentos familiares son la elección perfecta. Amplios y bien diseñados, estos hogares ofrecen todo lo que necesitas para vivir y crecer en un entorno acogedor.</h3>
            </div>
        </div>
        </>
    );
}

export default secondCard;