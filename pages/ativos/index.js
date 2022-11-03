import { useEffect, useState } from "react";
import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";
import { NumbersTwoDigits } from "../../utils/Funcoes";

const Index = () => {
  const [chamados, setChamados] = useState([]);
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
      if (data == true) window.location.reload();
    }
  };

  const changeChamadoCor = (status) => {
    let chamadoCor = "";
    if (status == "Novo") {
      chamadoCor = "bg-novo";
    } else if (status == "Andamento") {
      chamadoCor = "bg-andamento";
    } else if (status == "Finalizado") {
      chamadoCor = "bg-finalizado";
    } else if (status == "Cancelado") {
      chamadoCor = "bg-cancelado";
    }

    return chamadoCor;
  };

  // Load Chamados
  useEffect(() => {
    localStorage.removeItem("modo");
    fetch("/api/ativos").then((res) => {
      res.json().then((data) => {
        setChamados(data);
        setChamadosBkp(data);
      });
    });
  }, []);

  return (
    <div className="px-2">
      <Header
        estilo="primary"
        titulo="Ativos"
        qtd={chamados && NumbersTwoDigits(chamados.length)}
        url="/ativos/adicionar"
        textoBt="Adicionar"
        className="no-select"
      />
      <Legenda />
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
              <tr className="bg-primary text-white">
                <th className="py-2">Assunto</th>
                <th className="py-2 d-sm-table-cell text-center" style={{ width: 57 + "px" }}>
                  P/D
                </th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 87 + "px" }}>
                  Solicitação
                </th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 87 + "px" }}>
                  Prazo
                </th>
                <th className="py-2 d-none d-lg-table-cell" style={{ width: 87 + "px" }}>
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
                <th className="py-2 text-center" style={{ width: 70 + "px" }}>
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(chamados) &&
                chamados.map((chamado) => (
                  <tr key={chamado.id} className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                    <td className="align-middle" title="Gerar Recursos comprados">
                      <div
                        className={["d-flex justify-content-between align-items-center ", chamado.analistaid == 1 ? "bgwell" : "bgmoiza"].join("")}
                      >
                        <a className="text-primary" href={"/ativos/" + chamado.id}>
                          {chamado.assunto}
                        </a>
                      </div>
                    </td>
                    <td
                      className={["d-sm-table-cell align-middle text-center px-1 ", changeChamadoCor(chamado.status)].join("")}
                      title="Prazo / Dias em Aberto"
                    >
                      <div className="d-flex justify-content-between">
                        <span className="text-danger fw-bold">{NumbersTwoDigits(chamado.prazo_dias)}</span>
                        <span className="text-primary fw-bold">/</span>
                        <span className="text-danger fw-bold">{NumbersTwoDigits(chamado.dias_aberto)}</span>
                      </div>
                    </td>
                    <td className="d-none d-lg-table-cell align-middle">{chamado.dtsolicitacao}</td>
                    <td className="d-none d-lg-table-cell align-middle">{chamado.prazo}</td>
                    <td className="d-none d-lg-table-cell align-middle">{chamado.dtentrega}</td>
                    <td className="d-none d-xl-table-cell align-middle">{chamado.canal}</td>
                    <td className="d-none d-lg-table-cell align-middle">{chamado.analista}</td>
                    <td className="d-none d-xl-table-cell align-middle">{chamado.razaosocial}</td>
                    <td className={["d-none d-xl-table-cell align-middle ", changeChamadoCor(chamado.status)].join("")}>{chamado.status}</td>
                    <td className={["align-middle text-center ", changeChamadoCor(chamado.status)].join("")}>
                      <span className="me-3" onClick={() => changeStatusChamado(chamado.id, 2)}>
                        <i className="fas fa-lg fa-money-bill text-success cursor"></i>
                      </span>
                      <span onClick={() => changeStatusChamado(chamado.id, 4)}>
                        <i className="fas fa-lg fa-check-circle text-danger cursor"></i>
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
