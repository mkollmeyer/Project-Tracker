import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./config/db.js"
import projRouter from "./routes/projRoutes.js"
import errorHandle from "./middlewares/error.js"
import createProjTable from "./data/createProjTable.js"

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api", projRouter);

app.use(errorHandle);

createProjTable();

app.get("/", async(req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`);
})

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});