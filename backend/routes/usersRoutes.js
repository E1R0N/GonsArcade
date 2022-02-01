import express from 'express';
const router = express.Router();
//Importar el modelo
import User from '../models/user';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ = require('underscore');
const {userVerification, adminVerification} = require('../authentication/authentication.js')

router.post('/new-user', async (req, res) => {
    const body = {
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        userMail: req.body.userMail,
    }
    body.password = bcrypt.hashSync(req.body.userPassword, saltRounds);
    try {
        let userDB = await User.create(body);
        res.status(200).json(userDB)
    }
    catch{
        return res.status(500)
    }
})

//PARA OBTENER UN DATO CON ID 
router.get('/user/:id', async(req, res)=> {
    const _id = req.params.id;
    try{
        const userDB = await User.findById(_id);
        res.jasonsuccess(userDB)
    } catch (e) {
        return res.status(500);
    }
})

//PARA OBTENER TODAS LOS DATOS
router.get('/users',[userVerification, adminVerification], async (req, res) => {
    try {
        const userDB = await User.find();
        res.json(userDB);
    } catch (e) {
        return res.status(500).json({
            message: 'Error al obtener',
            e
        });
    }
});


module.exports = router