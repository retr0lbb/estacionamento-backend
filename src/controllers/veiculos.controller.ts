import express from "express"
import { Veiculo } from "../models/veiculo"

const router = express.Router()

//getall
router.get("/", async (req, res) => { 
    const veiculos = await Veiculo.findAll(); 
    res.status(200).json(veiculos); 
})

//create 
router.post("/", async (req, res) => { 
    const { placa } = req.body; 
    const { ano } = req.body; 
    const { mensalidade } = req.body; 
    const { fk_proprietario } = req.body; 
    const newEdit = await Veiculo.create({ placa, ano, mensalidade, fk_proprietario, }); 
    res.status(200).json({ message: "Cadastrado com sucesso" }); 
});

//getById
router.get("/:id", async (req, res) => { 
    const veiculo = await Veiculo.findByPk(req.params.id); 
    res.status(200).json(veiculo); 
});

//deleteById
router.delete("/:id", async (req, res) => { 
    await Veiculo.destroy({ where: { id_veiculo: req.params.id }, }); 
    res.status(200).json({ message: "Excluído com sucesso" }); 
});


//update unique
router.put("/:id", async (req, res) => { 
    const { placa } = req.body; 
    const { ano } = req.body; 
    const { mensalidade } = req.body; 
    const { fk_proprietario } = req.body; 
    
    await Veiculo.update( 
        { placa, ano, mensalidade, fk_proprietario },
        { 
            where: { id_veiculo: req.params.id }, 
        }, 
    ); 
    
    res.status(200).json({ message: "Atualizado com sucesso" }); 
});

export {router}