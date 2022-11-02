const Legenda = () => {
  return (
    <div className="row mb-2">
      <div className="col p-0">
        <div className="card-body py-1 px-1">
          <span className="me-2 small">
            <i className="fas fa-money-bill text-success me-2"></i>
            <span className="text-success no-select">Andamento</span>
          </span>
          <span className="me-2 small">
            <i className="fas fa-check-circle text-danger me-2"></i>
            <span className="text-danger no-select">Finalizado</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Legenda;
