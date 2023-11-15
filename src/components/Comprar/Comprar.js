import React, { useState } from 'react';
import viviendas from '../../viviendas.json';
import './Comprar.css';

const Comprar = () => {
    
    const [pag, setPag] = useState(1);
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [minimo, setMinimo] = useState(0)
    const [maximo, setMaximo] = useState(1000000000)
    const [orden, setOrden] = useState(true)

    const elementosPorPagina = 9;
    const primero = (pag - 1) * elementosPorPagina;
    const segundo = pag * elementosPorPagina;

   const minimoCambio = () =>{
    const minimoValue = document.getElementById("precioMinimo")
    setMinimo(minimoValue.value)
    console.log("valor minimo: ", minimo)
   }

   const maximoCambio = () =>{
    const maximoValue = document.getElementById("precioMaximo")
    setMaximo(maximoValue.value)
    console.log("valor maximo: ", maximo)
   }
  
    const selectedFilter = () =>{
        setChecked(!checked)
      }
      const selectedFilter2 = () =>{
        setChecked2(!checked2)
      }

    let viviendasFiltradas3;

    if(checked === true && checked2 === false){
        let viviendasFiltradas2 = viviendas.filter((vivienda)=> vivienda.categoria == "Departamento");
        viviendasFiltradas3 = viviendasFiltradas2.slice(primero, segundo);
    }
    if(checked === false && checked2 === false || checked === true && checked2 === true){
        viviendasFiltradas3 = viviendas.slice(primero, segundo);
    }
    if(checked2 === true && checked === false){
        let viviendasFiltradas2 = viviendas.filter((vivienda)=> vivienda.categoria == "Casa");
        viviendasFiltradas3 = viviendasFiltradas2.slice(primero, segundo);
    }
    
    let viviendasFinal = viviendasFiltradas3.filter((vivienda)=>vivienda.precio < maximo)
    let viviendasOrdenadas = viviendasFinal.slice().sort(orden ? (a, b) => a.precio - b.precio : (a, b) => b.precio - a.precio)
    const handlePageChange = (pageNumber) => {
        setPag(pageNumber);
    };



    const menorMayor = () => {
        setOrden(true)
        setPag(1);
    };

    const mayorMenor = () => {
        setOrden(false)
        setPag(1);
    };
    
    
    
    
    return (
        <div className='body'>
            <h1 className="comprar-title">Comprar</h1>

        <div className="main">
        <ul className="ulFiltro">
            <li><h2>Filtros:</h2></li>
            <li className='liFiltro'><p className='pFiltro'>Departamentos</p><div className="form-check form-switch d-flex"><input className="form-check-input" type="checkbox" role="switch" checked={checked} onChange={selectedFilter} id="filtroDepartamento" /></div></li>
            <li className='liFiltro'><p className='pFiltro'>Casas</p><div className="form-check form-switch d-flex"><input className="form-check-input" type="checkbox" role="switch" checked={checked2} onChange={selectedFilter2} id="filtroCasas" /></div></li>
            <li className='rangoPrecios'><div className='d-flex'><p className='pFiltro'>Precio Máximo: </p><input className='inputPrecios' type='number' onChange={maximoCambio} id='precioMaximo'/></div></li>
            <li className='liFiltroPrecios'><div class="btn-group"><button type="button" className="btn btnFiltroPrecios dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Ordenar Por:</button>
            <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#" onClick={menorMayor}>Menor Precio</a></li>
             <li><a className="dropdown-item" href="#" onClick={mayorMenor}>Mayor Precio</a></li>
             </ul>
           </div></li>
        </ul>
        <div className='d-block grupoViviendas'>
            <div className="grid">
                {viviendasOrdenadas.map((vivienda) => {
                    return (
                        <div className="card" key={vivienda.id}>
                            <img src={vivienda.imagen1} className="card-img-top" alt="Imagen de vivienda" />
                            <div className="card-body">
                                <h5 className="card-title">{vivienda.nombre}</h5>
                                <p className="card-text">{vivienda.precio}</p>
                                <a href={`/Detalles?id=${vivienda._id}`} className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    );
                })}
                </div>
                 <nav className="navPaginate">
                <ul className="pagination pagination-sm">
                    <li className="page-item">
                        <a className="page-link" onClick={() => handlePageChange(pag - 1)}>
                            Anterior
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => handlePageChange(1)}>
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => handlePageChange(2)}>
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => handlePageChange(3)}>
                            3
                        </a>
                    </li>
                    <li className={`page-item ${pag === 3 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => handlePageChange(pag + 1)}>
                            Siguiente
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
        </div>
        
    );
};

export default Comprar;
