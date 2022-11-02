import { useEffect, useState } from "react";
import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";
import { NumbersTwoDigits } from "../../utils/Funcoes";

const Index = () => {
  const [empresas, setEmpresas] = useState([]);

  // Load Empresas
  useEffect(() => {
    fetch("/api/empresas").then((res) => {
      res.json().then((data) => {
        setEmpresas(data);
      });
    });
  }, []);

  return (
    <>
      <Header
        estilo="success"
        titulo="Empresas"
        qtd={empresas && NumbersTwoDigits(empresas.length)}
        url="/empresas/adicionar"
        textoBt="Adicionar"
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
              {empresas &&
                empresas.map((empresa) => (
                  <tr className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                    <td className="align-middle" title="Gerar Recursos comprados">
                      <div className="d-flex justify-content-between align-items-center bgmoiza">
                        <a className="text-success" href={"/empresas/" + empresa.id}>
                          {empresa.razaosocial}
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
