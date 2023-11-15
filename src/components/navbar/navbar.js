import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logoNav from '../../images/LogoNav.png'
import './navbar.css'

const navbar = () =>{
  return(
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={logoNav} width={"200px"} alt='Logo' /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="/">Inicio</a>
            <a class="nav-link" href="/Vender">Vender</a>
            <a class="nav-link" href="/Comprar">Comprar</a>
            <a class="nav-link" href="/Comprar">Alquilar</a>
          </div>
        </div>
      </div>
    </nav>
    </header>
    )
}

export default navbar