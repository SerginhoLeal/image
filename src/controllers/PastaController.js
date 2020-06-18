const mongoose = require('mongoose');
const Product = mongoose.model('Pasta');
const parseStrings = require('../utils/parseString');

module.exports = {
    async index(req, res){
        const {tipo} = req.query;

        const desc = parseStrings(tipo);

        const sens = await Product.find({
            tipo:{
                $in:desc,
            },
        });

        return res.json({sens});
    },

    async store(req, res){
        // const {nome} = req.body;
    try{
        // if(await Product.findOne({nome}))//se encontrar um email o cadastro não será realizado
        //     return res.status(400).send({error:'Nome já em uso!'});

        const user = await Product.create(req.body);

        res.send({
            user,
            // token:generateToken({id: user.id}),
        });

        user.password = undefined;

        }catch(err){
            return res.status(400).send({error:'falha no cadastro'});
        }
    },
};