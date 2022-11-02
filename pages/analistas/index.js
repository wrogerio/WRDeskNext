import { useEffect, useState } from "react";
import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";
import { NumbersTwoDigits } from "../../utils/Funcoes";

const Index = () => {
  const [analistas, setAnalistas] = useState([]);

  // Load Analistas
  useEffect(() => {
    fetch("/api/analistas").then((res) => {
      res.json().then((data) => {
        setAnalistas(data);
      });
    });
  }, []);

  return (
    <>
      <Header
        estilo="success"
        titulo="Analistas"
        qtd={analistas && NumbersTwoDigits(analistas.length)}
        url="/canais/adicionar"
        textoBt="Adicionar"
        iconeBt="fa-plus"
        className="no-select"
      />
      <div className="row mb2 no-select">
        <div className="col px-0">
          <table className="table table-sm table-bordered">
            <thead>
              <tr className="bg-success text-white">
                <th className="py-2">Nome</th>
              </tr>
            </thead>
            <tbody>
              {analistas &&
                analistas.map((analista) => (
                  <tr className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                    <td className="align-middle" title="Gerar Recursos comprados">
                      <div className="d-flex justify-content-between align-items-center bgmoiza">
                        <a className="text-success" href={"/analistas/" + analista.id}>
                          {analista.nome}
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Index;