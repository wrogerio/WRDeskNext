import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow shadow-md mb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/ativos">
          <i className="far fa-clipboard-list-check me-1"></i>WR Desk
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/ativos">
                <i className="fas fa-cogs me-1"></i>Tarefas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/administrativos">
                <i className="fas fa-user-cog me-1"></i>Administrativos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/encerrados">
                <i className="fas fa-trash me-1"></i>Encerrados
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/empresas">
                <i className="fas fa-building me-1"></i>Empresas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/canais">
                <i className="fas fa-phone me-1"></i>Canais
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/analistas">
                <i className="fas fa-clipboard-user me-1"></i>Analistas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/status">
                <i className="fas fa-user-clock me-1"></i>Status
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
