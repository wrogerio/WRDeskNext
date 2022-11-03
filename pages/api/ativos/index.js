import { GetAtivos, PostChamado } from "../../../controllers/chamadosController";

module.exports = async (req, res) => {
  switch (req.method) {
    case "GET":
      const chamados = await GetAtivos();
      res.status(200).json(chamados);
      break;
    case "POST":
      const chamado = await PostChamado(req.body);
      res.status(200).json(chamado);
      break;
    default:
      res.status(405).end();
      break;
  }
};
