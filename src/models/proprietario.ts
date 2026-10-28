import { sequelize } from "./db";
import { INTEGER, TEXT } from "sequelize";

const Proprietario = sequelize.define(
    "proprietario",
    { 
        id_proprietario: { 
            type: INTEGER, 
            autoIncrement: true, 
            allowNull: false, 
            primaryKey: true, 
        }, 
        nome: { 
            type: TEXT, 
        }, 
        cpf: { 
            type: TEXT, 
        }, 
    }, 
    { freezeTableName: true },
)

// Proprietario.sync({ force: true });

export {Proprietario}