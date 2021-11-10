import express from 'express'
const router = express.Router();
//Importar el modelo
import Costumer from '../models/costumer';
const {userVerification, adminVerification} = require('../authentication/authentication.js')

router.post('/newCostumer', async (req, res) => {
    
    const body = {
        costumerId: req.body.costumerId,
        costumerCategory: req.body.costumerCategory,
        costumerConsole: req.body.costumerConsole,
        costumerClassification: req.body.costumerClassification,
    }

    try{
        const costumerDB = await Costumer.create(body);
        res.status(200).json(costumerDB)
    } catch(e){
        return res.status(500).json({
            message: 'Error al crear Usuario',
            e
        });
    }
});

//PARA OBTENER TODAS LOS DATOS
router.get('/costumer',[userVerification, adminVerification], async (req, res) => {
    try {
        const costumerDB = await Costumer.find().populate('costumerClassification');
        res.json(costumerDB);
    } catch (e) {
        return res.status(500).json({
            message: 'Error al obtener',
            e
        });
    }
});

module.exports = router