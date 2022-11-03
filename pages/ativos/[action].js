import { useEffect, useState } from "react";
import { maskData } from "../../utils/Funcoes";
import Header from "../../components/shared/header";

const Adicionar = () => {
  let modo = "edit";
  const [canais, setCanais] = useState();
  const [statusList, setStatusList] = useState();
  const [analistas, setAnalistas] = useState();
  const [empresas, setEmpresas] = useState();
  const [chamado, setChamado] = useState({
    id: 0,
    assunto: "",
    descricao: "",
    canalid: 0,
    statusid: 0,
    analistaid: 0,
    empresaid: 0,
    solicitante: "",
    dtsolicitacao: "",
    prazo: "",
    dtentrega: "",
  });

  if (typeof window !== "undefined") {
    modo = localStorage.getItem("modo") ?? "edit";
  }

  const getChamado = async () => {
    const id = window.location.pathname.split("/")[2];
    const res = await fetch("/api/ativos/" + id);
    const data = await res.json();
    return data[0];
  };

  const getCanais = async () => {
    const response = await fetch("/api/canais");
    const data = await response.json();
    return data;
  };

  const getStatusList = async () => {
    const response = await fetch("/api/status");
    const data = await response.json();
    return data;
  };

  const getAnalistas = async () => {
    const response = await fetch("/api/analistas");
    const data = await response.json();
    return data;
  };

  const getEmpresas = async () => {
    const response = await fetch("/api/empresas");
    const data = await response.json();
    return data;
  };

  const putChamado = async () => {
    const res = await fetch("/api/ativos/" + chamado.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...chamado, modo: "update" }),
    });
    const data = await res.json();
    if (data == true) window.location.href = "/ativos";
  };

  const postChamado = async () => {
    const res = await fetch("/api/ativos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chamado),
    });
    const data = await res.json();
    if (data == true) window.location.href = "/ativos";
  };

  const setQtdRows = (e) => {
    qtdRows = chamado.descricao.split("\n").length;
  };

  useEffect(() => {
    getCanais().then((data) => setCanais(data));
    getStatusList().then((data) => setStatusList(data));
    getAnalistas().then((data) => setAnalistas(data));
    getEmpresas().then((data) => setEmpresas(data));

    if (modo === "edit") {
      getChamado().then((data) => {
        setChamado({
          id: data.id,
          assunto: data.assunto,
          descricao: data.descricao,
          canalid: data.canalid,
          statusid: data.statusid,
          analistaid: data.analistaid,
          empresaid: data.empresaid,
          solicitante: data.solicitante,
          dtsolicitacao: data.dtsolicitacao,
          prazo: data.prazo,
          dtentrega: data.dtentrega,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (modo === "new") await postChamado();
    await putChamado();
  };

  const handleData = (campo, valor) => {
    valor = maskData(valor);
    setChamado({ ...chamado, [campo]: valor });
  };

  return (
    <div className="px-2">
      <Header estilo="primary" titulo="Adicionar chamado" url="/ativos" textoBt="Voltar" className="no-select" />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <input
                type="text"
                className="form-control"
                name="assunto"
                placeholder="Assunto"
                value={chamado.assunto}
                onChange={(e) => setChamado({ ...chamado, assunto: e.target.value })}
              />
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="solicitante">Solicitante</label>
              <input
                type="text"
                className="form-control"
                name="solicitante"
                placeholder="Solicitante"
                value={chamado.solicitante}
                onChange={(e) => setChamado({ ...chamado, solicitante: e.target.value })}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-lg-2">
            <div className="form-group">
              <label htmlFor="dtsolicitacao">Solicitação</label>
              <input
                type="text"
                className="form-control"
                name="dtsolicitacao"
                placeholder="Solicitacao"
                value={chamado.dtsolicitacao}
                maxLength="10"
                onChange={(e) => handleData("dtsolicitacao", e.target.value)}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-lg-2">
            <div className="form-group">
              <label htmlFor="prazo">Prazo</label>
              <input
                type="text"
                className="form-control"
                name="prazo"
                placeholder="Prazo"
                value={chamado.prazo}
                maxLength="10"
                onChange={(e) => handleData("prazo", e.target.value)}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-lg-2">
            <div className="form-group">
              <label htmlFor="dtentrega">Entrega</label>
              <input
                type="text"
                className="form-control"
                name="dtentrega"
                placeholder="Entrega"
                value={chamado.dtentrega}
                maxLength="10"
                onChange={(e) => handleData("dtentrega", e.target.value)}
              />
            </div>
          </div>
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                rows={chamado && chamado.descricao.split("\n").length * 0.75}
                className="form-control"
                name="descricao"
                value={chamado.descricao}
                onChange={(e) => setChamado({ ...chamado, descricao: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="form-group">
              <label htmlFor="canalid">Canal</label>
              <select
                className="form-control"
                name="canalid"
                value={chamado.canalid}
                onChange={(e) => setChamado({ ...chamado, canalid: e.target.value })}
              >
                <option value="">Selecione</option>
                {Array.isArray(canais) &&
                  canais.map((canal) => (
                    <option key={canal.id} value={canal.id}>
                      {canal.nome}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="form-group">
              <label htmlFor="statusid">Status</label>
              <select
                className="form-control"
                name="statusid"
                value={chamado.statusid}
                onChange={(e) => setChamado({ ...chamado, statusid: e.target.value })}
              >
                <option value="">Selecione</option>
                {
                  // verificando se o statusList é array
                  Array.isArray(statusList) &&
                    statusList.map((obj) => (
                      <option key={obj.id} value={obj.id}>
                        {obj.nome}
                      </option>
                    ))
                }
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="form-group">
              <label htmlFor="analistaid">Analista</label>
              <select
                className="form-control"
                name="analistaid"
                value={chamado.analistaid}
                onChange={(e) => setChamado({ ...chamado, analistaid: e.target.value })}
              >
                <option value="">Selecione</option>
                {Array.isArray(analistas) &&
                  analistas.map((obj) => (
                    <option key={obj.id} value={obj.id}>
                      {obj.nome}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="form-group">
              <label htmlFor="empresaid">Empresa</label>
              <select
                className="form-control"
                name="empresaid"
                value={chamado.empresaid}
                onChange={(e) => setChamado({ ...chamado, empresaid: e.target.value })}
              >
                <option value="">Selecione</option>
                {Array.isArray(empresas) &&
                  empresas.map((obj) => (
                    <option key={obj.id} value={obj.id}>
                      {obj.razaosocial}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adicionar;
