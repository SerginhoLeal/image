const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken')
// const authConfig = require('../Config/auth.json');

const Product = mongoose.model('Product');

// function generateToken(params = {}){
//     return jwt.sign(params, authConfig.secret,{
//         expiresIn: 86400,
//     });
// }

module.exports = {
    async index(req, res){
        const Gra = await Product.find();
        return res.json(Gra);
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