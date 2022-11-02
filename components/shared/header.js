const Header = (props) => {
  const modoNew = () => {
    localStorage.removeItem("modo");
    if (props.textoBotao == "Adicionar") localStorage.setItem("modo", "new");
  };

  return (
    <>
      <div className="row">
        <div className="col px-1 py-1 mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <span className="d-flex align-items-center">
              <h3 className="blue d-inline me-2">{props.titulo}</h3>
              <h5 className="blue d-inline">{props.qtd && <strong className="bg-primary text-white px-4 py-1 rounded">{props.qtd}</strong>}</h5>
            </span>
            <a className="btn btn-sm btn-outline btn-outline-secondary" href={props.url} onClick={() => modoNew()}>
              <i className={["fas", props.iconeBt, "me-1"].join(" ")}></i>
              {props.textoBt}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
