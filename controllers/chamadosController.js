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
    const [rows] = await pool.query("SELECT * FROM vChamados WHERE id = ?", [id]);
    return rows;
  } catch (error) {
    return error;
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
};
