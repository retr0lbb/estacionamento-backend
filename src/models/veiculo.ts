import { sequelize } from "./db";
import { DECIMAL, INTEGER, TEXT } from "sequelize";

const Veiculo = sequelize.define(
    "veiculo",
    { 
        id_veiculo: { 
            type: INTEGER, 
            autoIncrement: true, 
            allowNull: false, 
            primaryKey: true, 
        }, 
        placa: { 
            type: TEXT, 
        }, 
        ano: { 
            type: INTEGER, 
        },
        mensalidade: { 
            type: DECIMAL(10, 2), 
        },
        image: {
            type: TEXT
        },
        fk_proprietario: { 
            type: INTEGER, 
            references: { 
                model: "proprietario", 
                key: "id_proprietario" 
            }, 
            onDelete: "CASCADE", 
            allowNull: false, 
        }, 
    }, 
    { freezeTableName: true },
)

// Veiculo.sync({ force: true });

export { Veiculo }