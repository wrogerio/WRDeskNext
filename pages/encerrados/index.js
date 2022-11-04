import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";
import { NumbersTwoDigits } from "../../utils/Funcoes";

const Index = () => {
  const [chamados, setChamados] = useState();
  const [chamadosBkp, setChamadosBkp] = useState();

  const filtrarTable = (valor) => {
    let val = valor.toLowerCase();
    let valList = val.split(" ");
    let chamadosFiltrados = chamadosBkp;

    for (let i = 0; i < valList.length; i++) {
      chamadosFiltrados = chamadosFiltrados.filter((chamado) => {
        return (
          chamado.analista.toLowerCase().includes(valList[i]) ||
          chamado.status.toLowerCase().includes(valList[i]) ||
          chamado.razaosocial.toLowerCase().includes(valList[i]) ||
          chamado.canal.toLowerCase().includes(valList[i]) ||
          chamado.assunto.toLowerCase().includes(valList[i])
        );
      });
    }

    if (valList.length > 0) {
      setChamados(chamadosFiltrados);
    } else {
      setChamados(chamadosBkp);
    }
  };

  const changeStatusChamado = async (id, statusid) => {
    if (confirm("Deseja realmente alterar o status deste chamado?")) {
      const res = await fetch("/api/ativos/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, statusid: statusid, modo: "change" }),
      });
      const data = await res.json();
      if (data == true) window.location.href = "/ativos";
    }
  };

  // Load Chamados
  useEffect(() => {
    localStorage.removeItem("modo");
    fetch("/api/encerrados").then((res) => {
      res.json().then((data) => {
        setChamados(data);
        setChamadosBkp(data);
      });
    });
  }, []);

  return (
    <div className="px-2">
      <Header
        estilo="danger"
        titulo="Encerrados"
        qtd={chamados && NumbersTwoDigits(chamados.length)}
        url="/ativos"
        textoBt="Voltar"
        iconeBt="fa-backward"
        className="no-select"
      />
      <div className="row mb-2 no-select">
        <div className="col px-0">
          <input
            type="text"
            className="form-control"
            onKeyUp={(e) => filtrarTable(e.target.value)}
            placeholder="Filtrar os dados"
            name="inputFilter"
          />
        </div>
      </div>
      <div className="row mb2 no-select">
        <div className="col px-0">
          <table className="table table-sm table-bordered">
            <thead>
              <tr className="bg-danger text-white">
                <th className="py-2">Assunto</th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 95 + "px" }}>
                  Analista
                </th>
                <th className="py-2 d-none d-xl-table-cell" style={{ width: 120 + "px" }}>
                  Empresa
                </th>
                <th className="py-2 text-center" style={{ width: 55 + "px" }}>
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {chamados &&
                chamados.map((chamado) => (
                  <tr className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                    <td className="align-middle" title="Gerar Recursos comprados">
                      <div className="d-flex justify-content-between align-items-center bgmoiza">
                        <Link className="text-danger" href={"/ativos/" + chamado.id}>
                          {chamado.assunto}
                        </Link>
                      </div>
                    </td>
                    <td className="d-none d-lg-table-cell align-middle">{chamado.analista}</td>
                    <td className="d-none d-xl-table-cell align-middle">{chamado.razaosocial}</td>
                    <td className="align-middle text-center">
                      <span onClick={() => changeStatusChamado(chamado.id, 2)}>
                        <i class="fas fa-lg fa-chevron-circle-left text-danger cursor"></i>
                      </span>
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
