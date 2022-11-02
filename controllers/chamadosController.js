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
};
