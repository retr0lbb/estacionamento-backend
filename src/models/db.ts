import {Sequelize} from "sequelize"

export const sequelize = new Sequelize("estacionamento", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})