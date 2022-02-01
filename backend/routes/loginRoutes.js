import express from 'express';
const router = express.Router();
const jwt = require('jsonwebtoken');
import User from '../models/user.js';
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', async (req, res) => {
    const body = req.body;

    try{
        const userDB = await User.findOne({userMail: body.userMail})

        if(!userDB){
            return res.status(400).json({
                message: 'Email no encontrado'
            });
        }

        if(!bcrypt.compareSync(body.userPassword, userDB.userPassword)){
            return res.status(500).json({
                message:'Password Incorrecto'
            });
        }

        //Aqui se genera el token 
        const token = jwt.sign({
            data: userDB
        }, 'secret' , {expiresIn:60*60*24*30});

        res.json({
            token
        })
    } catch(e){
        return res.status(400).json({
            message:'Error',
            e
        })
    }
});

module.exports= router;