import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";

const Index = () => {
  return (
    <>
      <Header estilo="success" titulo="Analistas" qtd={5} url="/canais/adicionar" textoBt="Adicionar" iconeBt="fa-plus" className="no-select" />
      <div className="row mb-2 no-select">
        <div className="col px-0">
          <input type="text" className="form-control" placeholder="Filtrar os dados" name="inputFilter" />
        </div>
      </div>
      <div className="row mb2 no-select">
        <div className="col px-0">
          <table className="table table-sm table-bordered">
            <thead>
              <tr className="bg-success text-white">
                <th className="py-2">Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                <td className="align-middle" title="Gerar Recursos comprados">
                  <div className="d-flex justify-content-between align-items-center bgmoiza">
                    <a className="text-success" href="/chamados/action/36">
                      Wellington
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Index;
