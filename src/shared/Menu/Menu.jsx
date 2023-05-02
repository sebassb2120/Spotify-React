import { Link } from "react-router-dom"
import './Menu.css'
export function Menu() {
  return (
    <>
     <section className="barra">
        <nav className="navbar navbar-expand-lg menu navbar-dark ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              AFTER LIFE
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Members">
                    Integrantes
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Shop">
                    Tienda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Registro">
                    Registrate
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="Formulario">
                    Formulario
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link Musica">Music</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </section>  
    </>
  );
}
