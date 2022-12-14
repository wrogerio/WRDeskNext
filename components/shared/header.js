import Link from "next/link";

const Header = (props) => {
  const chooseIcon = () => {
    if (props.textoBt === "Adicionar") {
      return "fa-plus-circle fa-lg";
    } else if (props.textoBt === "Voltar") {
      return "fa-home fa-lg";
    }
  };

  const modoNew = () => {
    localStorage.removeItem("modo");
    if (props.textoBt == "Adicionar") localStorage.setItem("modo", "new");
  };

  return (
    <>
      <div className="row">
        <div className="col px-1 py-1 mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <span className="d-flex align-items-center">
              <h3 className={["d-inline me-2 no-select text-", props.estilo].join("")}>{props.titulo}</h3>
              <h5 className="d-inline no-select">
                {props.qtd && <strong className={["text-white px-4 py-1 rounded bg-", props.estilo].join("")}>{props.qtd}</strong>}
              </h5>
            </span>
            <Link className={["btn btn-sm btn-outline btn-outline-", props.estilo].join("")} href={props.url} onClick={() => modoNew()}>
              <i className={["no-select fas", chooseIcon(), "me-1"].join(" ")}></i>
              <span className="no-select">{props.textoBt}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
