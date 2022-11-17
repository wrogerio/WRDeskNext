import { PutChamado, GetChamadoPorId, ChangeStatusChamado } from "../../../controllers/chamadosController";

module.exports = async (req, res) => {
  const { index } = req.query;

  switch (req.method) {
    case "GET":
      const chamados = await GetChamadoPorId(index);
      res.status(200).json(chamados);
      break;
    case "PUT":
      if (req.body.modo == "update") {
        if (req.body.statusid != 4) req.body.dtentrega = "";
        delete req.body.modo;
        const chamado = await PutChamado(req.body);
        res.status(200).json(chamado);
      } else if (req.body.modo == "change") {
        delete req.body.modo;
        const chamado = await ChangeStatusChamado(req.body.id, req.body.statusid);
        res.status(200).json(chamado);
      } else if (req.body.modo == "delete") {
      }
      break;

    default:
      res.status(405).end();
      break;
  }
};
