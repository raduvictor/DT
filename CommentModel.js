import { Sequelize } from "sequelize";
import db from "../nod2/database.js";
 
const { DataTypes } = Sequelize;
 
const Comentariu = db.define('comments',{
    
    description:{
        type: DataTypes.STRING
    },
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},{
    freezeTableName: true
});
 
export default Comentariu;