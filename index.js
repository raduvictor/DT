import express from "express";
import db from "./database.js";
import router from "./index_routes.js";
import cors from "cors";
import mysql from "mysql";

 
const app = express();

const dbb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "th",
  });
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/comments', router);

app.post("/comments", (req, res) => {
    console.log("Connected to React");
    const q = "INSERT INTO `th`.`comments` (`description`, `id`, `createdAt`, `updatedAt`) VALUES (?);";
    const value = [req.body.description,null,"",""];
    dbb.query(q, [value], (err, data)=>{
      if (err) throw err;
    });
  });
 
app.listen(6001, () => console.log('Server running at port 6001'));
