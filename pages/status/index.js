import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";
import { NumbersTwoDigits } from "../../utils/Funcoes";

const Index = () => {
  const [status, setStatus] = useState([]);

  // Load Status
  useEffect(() => {
    fetch("/api/status").then((res) => {
      res.json().then((data) => {
        setStatus(data);
      });
    });
  }, []);

  return (
    <div className="px-2">
      <Header
        estilo="success"
        titulo="Status"
        qtd={status && NumbersTwoDigits(status.length)}
        url="/status/adicionar"
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
              {status &&
                status.map((status) => (
                  <tr className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                    <td className="align-middle" title="Gerar Recursos comprados">
                      <div className="d-flex justify-content-between align-items-center bgmoiza">
                        <Link className="text-success" href={"/status/" + status.id}>
                          {status.nome}
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
