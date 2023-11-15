import './Detalles.css'
import vivienda from '../../viviendas.json'
import { useLocation } from 'react-router-dom';

const Detalles = () => {
    
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

        const viviendaFiltradaId  = vivienda.find((vivienda)=>vivienda._id === id)
       
    
     return(
        <div className='bodyDetalles'>
            <div class="cardDetalles">
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={viviendaFiltradaId.imagen1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={viviendaFiltradaId.imagen2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={viviendaFiltradaId.imagen3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div class="card-bodyDetalles">
            <h5 class="card-titleDetalles">{viviendaFiltradaId.nombre}</h5>
            <p class="card-text">{viviendaFiltradaId.descripcion}</p>
            <a href="#" class="btn btn-primary">Contactarse</a>
        </div>
        </div>
        </div>
    )
}

export default Detalles