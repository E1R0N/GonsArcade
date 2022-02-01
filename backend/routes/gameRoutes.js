import express from 'express'
const router = express.Router();
//Importar el modelo
import Game from '../models/game';
const _ = require('underscore');
const {userVerification, adminVerification} = require('../authentication/authentication.js')

router.post('/newGame', async (req, res) => {

    const body = {
        gameName: req.body.gameName,
        gameAbout: req.body.gameAbout,
        gameClass: req.body.gameClass,
        gameConsole: req.body.gameConsole,
        gameClasification: req.body.gameClasification,
        gamePrice: req.body.gamePrice,
        gameSeries: req.body.gameSeries,
    }

    try{
        const gameDB = await Game.create(body);
        res.status(200).json(gameDB)
    } catch(e){
        return res.status(500).json({
            message: 'Error al crear Usuario',
            e
        });
    }
});

//PARA OBTENER UN DATO ESPECIFICO
router.get('/gameSeries/:gameSeries', async (req, res) => {
    const serie = (req.params.gameSeries);
    try {
        
        const gameDB = await Game.find({gameSeries : serie});
        res.json(gameDB);
    } catch (e) {
        return res.status(500).json({
            message: 'Error al obtener',
            e
        });
    }
});

//PARA OBTENER TODAS LOS DATOS
router.get('/game', async (req, res) => {
    try {
        const gameDB = await Game.find().populate('gameClasification');
        res.json(gameDB);
    } catch (e) {
        return res.status(500).json({
            message: 'Error al obtener',
            e
        });
    }
});

router.get('gamePrincipal')

router.delete('/deleteGame/:id', [userVerification, adminVerification],async (req, res) =>{
    const _id = req.params.id;
    try {
        const gameDB = await Game.findByIdAndDelete({_id});
        if(!gameDB){
            return res.status(400).json({message:'El id no existe',error});
        }
        res.json(gameDB);
    } catch (error) {
        return res.status(500);
    }
})

router.put('/updateGame/:id',[userVerification, adminVerification], async (req, res) => {
    const _id = req.params.id;
    const body = _.pick(req.body, ['gameAbout','gameClass', 'gameConsole', 'gameClasification']);
    try{
        const gameDB = await Game.findByIdAndUpdate(
            _id,
            body,
            {
                new: true,
                runValidators:true
            });
        return res.json(gameDB);
    } catch(e){
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            e
        })
    }
});

module.exports = router
