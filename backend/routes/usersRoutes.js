import express from 'express'
const router = express.Router();
//Importar el modelo
import User from '../models/users';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ = require('underscore');
const {userVerification, adminVerification} = require('../authentication/authentication.js')

router.post('/newUser', async (req, res) => {

    const body = {
        userId: req.body.userId,
        userGenre: req.body.userGenre,
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        userMail: req.body.userMail,
        userRole: req.body.userRole,
        userStatus: true,
    }
    //encriptacion contraseña usuarios
    body.userPassword = bcrypt.hashSync(req.body.userPassword, saltRounds);

    try{
        const userDB = await User.create(body);
        res.status(200).json(userDB)
    } catch(e){
        return res.status(500).json({
            message: 'Error al crear Usuario',
            e
        });
    }
});

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