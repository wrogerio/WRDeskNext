import { useEffect, useState } from "react";
import Header from "../../components/shared/header";

const Adicionar = () => {
  const [canais, setCanais] = useState();
  const [statusList, setStatusList] = useState();
  const [analistas, setAnalistas] = useState();
  const [empresas, setEmpresas] = useState();
  const [chamado, setChamado] = useState({
    id: 0,
    assunto: "",
    descricao: "",
    canalid: "",
    statusid: "",
    analistaid: "",
    empresaid: "",
    solicitante: "",
    dtsolicitacao: "",
    prazo: "",
    dtentrega: "",
  });

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

  useEffect(() => {
    getCanais().then((data) => setCanais(data));
    getStatusList().then((data) => setStatusList(data));
    getAnalistas().then((data) => setAnalistas(data));
    getEmpresas().then((data) => setEmpresas(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "/ativos";
  };

  return (
    <div>
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
                mask="99/99/9999"
                type="text"
                className="form-control"
                name="dtsolicitacao"
                placeholder="Solicitante"
                value={chamado.dtsolicitacao}
                onChange={(e) => setChamado({ ...chamado, dtsolicitacao: e.target.value })}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-lg-2">
            <div className="form-group">
              <label htmlFor="prazo">Prazo</label>
              <input
                mask="99/99/9999"
                type="text"
                className="form-control"
                name="prazo"
                placeholder="Prazo"
                value={chamado.prazo}
                onChange={(e) => setChamado({ ...chamado, prazo: e.target.value })}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-lg-2">
            <div className="form-group">
              <label htmlFor="dtentrega">Entrega</label>
              <input
                mask="99/99/9999"
                type="text"
                className="form-control"
                name="dtentrega"
                placeholder="Prazo"
                value={chamado.dtentrega}
                onChange={(e) => setChamado({ ...chamado, dtentrega: e.target.value })}
              />
            </div>
          </div>
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                rows={5}
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
                {canais != undefined &&
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
                {statusList != undefined &&
                  statusList.map((obj) => (
                    <option key={obj.id} value={obj.id}>
                      {obj.nome}
                    </option>
                  ))}
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
                {analistas != undefined &&
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
                {empresas != undefined &&
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
