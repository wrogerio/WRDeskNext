import { GetAtivos, PostChamado } from "../../../controllers/chamadosController";

module.exports = async (req, res) => {
  switch (req.method) {
    case "GET":
      // disable cors
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader("Content-Type", "application/json");

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
