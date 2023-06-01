import { Sequelize } from "sequelize";
import db from "./database.js";
 
const { DataTypes } = Sequelize;
 
const Drum = db.define('drumuri',{
    ID:{
        type: DataTypes.INTEGER
    },
    nume:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Drum;