import { GetAtivos } from "../../../controllers/chamadosController";

module.exports = async (req, res) => {
  const chamados = await GetAtivos();
  res.status(200).json(chamados);
};
