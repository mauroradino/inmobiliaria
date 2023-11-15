import homeBanner from '../../images/homeBanner.jpg'
import FirstCard from '../firstCard/firstCard'
import SecondCard from '../secondCard/secondCard'
import Franja from '../franja/franja'
import Section3 from '../section3/section3'
import './home.css'


const Home = () =>{
return(
    <div className='body'>
        <img className='homeBanner' src={homeBanner}/>
        <FirstCard />
        <SecondCard />
        <Franja />
        <Section3 />
    </div>
)
}

export default Home;