import { pool } from "../config/db.js";

const GetAtivos = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM vChamados");
    return rows;
  } catch (error) {
    return error;
  }
};

const GetEncerrados = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM vEncerrados");
    return rows;
  } catch (error) {
    return error;
  }
};

const GetAnalistas = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM analistas");
    return rows;
  } catch (error) {
    return error;
  }
};

const GetEmpresas = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM empresas");
    return rows;
  } catch (error) {
    return error;
  }
};

const GetStatus = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM tbstatus");
    return rows;
  } catch (error) {
    return error;
  }
};

const GetCanais = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM canais");
    return rows;
  } catch (error) {
    return error;
  }
};

const GetChamadoPorId = async (id) => {
  try {
    const [rows] = await pool.query("SELECT * FROM vChamadosAll WHERE id = ?", [id]);
    return rows;
  } catch (error) {
    return error;
  }
};

const PostChamado = async (chamado) => {
  try {
    const [rows] = await pool.query("INSERT INTO chamados SET ?", chamado);
    return true;
  } catch (error) {
    return false;
  }
};

const PutChamado = async (chamado) => {
  try {
    const [rows] = await pool.query("UPDATE chamados SET ? WHERE id = ?", [chamado, chamado.id]);
    return true;
  } catch (error) {
    return false;
  }
};

const ChangeStatusChamado = async (id, status) => {
  let dateNow = "";
  if (status == 4) dateNow = new Date().toLocaleDateString("pt-BR");
  try {
    const [rows] = await pool.query("UPDATE chamados SET statusid = ?, dtentrega = ? WHERE id = ?", [status, dateNow, id]);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  GetAtivos,
  GetEncerrados,
  GetChamadoPorId,
  GetAnalistas,
  GetEmpresas,
  GetStatus,
  GetCanais,
  PostChamado,
  PutChamado,
  ChangeStatusChamado,
};
