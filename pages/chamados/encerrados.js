import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";

const Encerrados = () => {
  return (
    <>
      <Header estilo="danger" titulo="Encerrados" qtd={5} url="/" textoBt="Adicionar" iconeBt="fa-plus" className="no-select" />
      <Legenda />
      <div className="row mb-2 no-select">
        <div className="col px-0">
          <input type="text" className="form-control" placeholder="Filtrar os dados" name="inputFilter" />
        </div>
      </div>
      <div className="row mb2 no-select">
        <div className="col px-0">
          <table className="table table-sm table-bordered">
            <thead>
              <tr className="bg-danger text-white">
                <th className="py-2">Assunto</th>
                <th className="py-2 d-sm-table-cell text-center" style={{ width: 55 + "px" }}>
                  P/D
                </th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 85 + "px" }}>
                  Solicitação
                </th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 85 + "px" }}>
                  Prazo
                </th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 85 + "px" }}>
                  Entrega
                </th>
                <th className="py-2 d-none d-xl-table-cell" style={{ width: 110 + "px" }}>
                  Canal
                </th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 95 + "px" }}>
                  Analista
                </th>
                <th className="py-2 d-none d-xl-table-cell" style={{ width: 80 + "px" }}>
                  Empresa
                </th>
                <th className="py-2 d-none d-xl-table-cell" style={{ width: 100 + "px" }}>
                  Status
                </th>
                <th className="py-2 text-center" style={{ width: 65 + "px" }}>
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                <td className="align-middle" title="Gerar Recursos comprados">
                  <div className="d-flex justify-content-between align-items-center bgmoiza">
                    <a className="text-danger" href="/chamados/action/36">
                      Gerar Recursos comprados
                    </a>
                  </div>
                </td>
                <td className="d-sm-table-cell align-middle text-center px-1" title="Prazo / Dias em Aberto">
                  <div className="d-flex justify-content-between">
                    <span className="text-danger fw-bold">00</span>
                    <span className="text-primary fw-bold">/</span>
                    <span className="text-danger fw-bold">01</span>
                  </div>
                </td>
                <td className="d-none d-lg-table-cell align-middle">01/11/2022</td>
                <td className="d-none d-lg-table-cell align-middle">01/11/2022</td>
                <td className="d-none d-lg-table-cell align-middle"></td>
                <td className="d-none d-xl-table-cell align-middle">Reunião</td>
                <td className="d-none d-lg-table-cell align-middle">Moisés</td>
                <td className="d-none d-xl-table-cell align-middle">Cetek</td>
                <td className="d-none d-xl-table-cell align-middle">Andamento</td>
                <td className="align-middle text-center">
                  <span className="me-2">
                    <i className="fas fa-lg fa-money-bill text-success cursor"></i>
                  </span>
                  <span>
                    <i className="fas fa-lg fa-check-circle text-danger cursor"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Encerrados;
