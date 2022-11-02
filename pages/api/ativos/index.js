import { GetAtivos } from "../../../controllers/chamadosController";

module.exports = async (req, res) => {
  switch (req.method) {
    case "GET":
      const chamados = await GetAtivos();
      res.status(200).json(chamados);
      break;
    default:
      res.status(405).end();
      break;
  }
};
