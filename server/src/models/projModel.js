import pool from "../config/db.js";

export const getAllProjService = async () => {
    const result = await pool.query("SELECT * FROM proj");
    return result.rows;
};
export const getProjByIdSevice = async (id) => {
    const result = await pool.query("SELECT * FROM proj WHERE id=$1", [id]);
    return result.rows[0];
};
export const createProjSevice = async (name, steps) => {
    const result = await pool.query("INSERT INTO proj (pname, steps) VALUES ($1, $2) RETURNING *"
        , [name, steps]);
    return result.rows[0];
};
export const updateProjSevice = async (id, name, steps) => {
    const result = await pool.query("UPDATE proj SET pname=$1, steps=$2 WHERE id=$3 RETURNING *",
        [name, steps, id]);
    return result.rows[0];
};
export const deleteProjSevice = async (id) => {
    const result = await pool.query("DELETE FROM proj WHERE id=$1 REUTRNING *", [id]);
    return result.rows[0];
};
