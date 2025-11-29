import pool from "../config/db.js";

const createProjTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS proj (
    id SERIAL PRIMARY KEY,
    pname VARCHAR(100) NOT NULL,
    stages INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`;
    try {
        pool.query(queryText);
        console.log("Created project table");
    } catch (error){
        console.log("Error: ");
    }
};
export default createProjTable;