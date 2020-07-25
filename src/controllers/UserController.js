const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const authConfig = require('../config/authConfig.json');

const Grap = mongoose.model('Usuario');

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    });
}

module.exports = {
    async index(req, res){
        const Gra = await Grap.find();
        return res.json(Gra);
    },
    async login(req, res){
        const {nome, password} = req.body;

    try{
        const user = await Grap.findOne({nome}).select('+password');
        
        if(!user)
            return res.status(400).send({error:'Nome inexistente'});
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error:'Senha invalida'});
        
        user.password = undefined;
    
        res.send({
            user,
            token:generateToken({id: user.id}),
        });
    }catch{
        return res.status(400).send({error:'fail'});
    }

    },

    async store(req, res){
        const {nome} = req.body;
    try{
        if(await Grap.findOne({nome}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Nome já em uso!'});

        const user = await Grap.create(req.body); 

        res.send({
            user,
            token:generateToken({id: user.id}),
        });

        user.password = undefined;

        }catch(err){
            return res.status(400).send({error:'fail........................................'});
        }
    },
};